#!/usr/bin/env python3
"""Import user-approved robotics media from the local Videos repository.

This is a local-only tool: it does not require GitHub API credentials.
Only research images and movies are imported; model weights, source code,
logs, diagnostic reports and raw archives are not published as website assets.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import sys
import tempfile
import zipfile
from pathlib import Path, PurePosixPath

SITE = Path(__file__).resolve().parent.parent
IMAGE_EXT = {".png", ".jpg", ".jpeg", ".webp", ".gif"}
VIDEO_EXT = {".mp4", ".webm", ".mov", ".m4v"}
MEDIA_EXT = IMAGE_EXT | VIDEO_EXT
MAX_GIT_BLOB = 95 * 1024 * 1024

COPY_ASSETS = {
    "localization/sam_FP.png": "assets/images/samsung/foundationpose-tracking.png",
    "camera_comparison/Gemini_plane_diagnostic.png": "assets/images/samsung/gemini-plane.png",
    "camera_comparison/D435i_FFS_plane_diagnostic.png": "assets/images/samsung/d435i-plane.png",
    "camera_comparison/335L_close_depth.png": "assets/images/samsung/gemini-close-depth.png",
    "camera_comparison/d435i_close_depth.png": "assets/images/samsung/d435i-close-depth.png",
    "screenshots/gopt.png": "assets/images/samsung/gopt-real-scene.png",
    "yoloe26_test/yoloe26_result.png": "assets/images/samsung/object-detection.png",
    "recording.mp4": "assets/videos/g1-research-recording.mp4",
}


def copy_file(src: Path, target: Path) -> bool:
    if not src.is_file():
        print(f"  SKIP missing: {src}")
        return False
    if src.stat().st_size > MAX_GIT_BLOB:
        print(f"  SKIP >95 MB (use external hosting): {src}")
        return False
    target.parent.mkdir(parents=True, exist_ok=True)
    if target.exists() and target.stat().st_size == src.stat().st_size:
        print(f"  EXISTS: {target.relative_to(SITE)}")
        return True
    shutil.copy2(src, target)
    print(f"  COPIED: {target.relative_to(SITE)}")
    return True


def join_parts(source: Path, base: str, target: Path) -> bool:
    parts = sorted(source.glob(base + ".part-*"))
    if not parts:
        print(f"  SKIP: no parts for {base}")
        return False
    target.parent.mkdir(parents=True, exist_ok=True)
    with target.open("wb") as fout:
        for part in parts:
            print(f"  JOIN: {part.name}")
            with part.open("rb") as fin:
                shutil.copyfileobj(fin, fout, 1024 * 1024)
    checksum_path = source / (base + ".sha256")
    if checksum_path.exists():
        expected = checksum_path.read_text().strip().split()[0]
        digest = hashlib.sha256()
        with target.open("rb") as inp:
            for chunk in iter(lambda: inp.read(1024 * 1024), b""):
                digest.update(chunk)
        if digest.hexdigest().lower() != expected.lower():
            target.unlink(missing_ok=True)
            raise ValueError(f"SHA-256 verification failed for {base}")
        print(f"  VERIFIED SHA-256: {base}")
    if target.stat().st_size > MAX_GIT_BLOB:
        target.unlink(missing_ok=True)
        print(f"  SKIP >95 MB: {base}")
        return False
    return True


def import_portfolio(zip_path: Path, outdir: Path) -> int:
    if not zip_path.is_file():
        return 0
    outdir.mkdir(parents=True, exist_ok=True)
    records = []
    with zipfile.ZipFile(zip_path) as archive:
        for info in archive.infolist():
            if info.is_dir():
                continue
            name = PurePosixPath(info.filename.replace("\\", "/"))
            parts = name.parts
            if name.is_absolute() or not parts or ":" in parts[0] or any(p in {"..", "."} for p in parts):
                continue
            if parts[0].startswith("__MACOSX") or any(p.startswith(".") for p in parts):
                continue
            extension = name.suffix.lower()
            if extension not in MEDIA_EXT:
                continue
            if info.file_size > MAX_GIT_BLOB:
                print(f"  SKIP >95 MB from ZIP: {info.filename}")
                continue
            # Keep archive subfolders; never extract outside the portfolio directory.
            dest = outdir.joinpath(*parts)
            dest.parent.mkdir(parents=True, exist_ok=True)
            with archive.open(info) as src, dest.open("wb") as sink:
                shutil.copyfileobj(src, sink, 1024 * 1024)
            relative = dest.relative_to(SITE).as_posix()
            records.append({
                "path": relative,
                "title": name.stem.replace("_", " ").replace("-", " "),
                "kind": "video" if extension in VIDEO_EXT else "image",
            })
            print(f"  PORTFOLIO: {relative}")
    records.sort(key=lambda x: (x["kind"] != "video", x["title"].lower()))
    manifest = outdir / "manifest.json"
    manifest.write_text(json.dumps(records, indent=2, ensure_ascii=False) + "\n")
    print(f"  MANIFEST: {manifest.relative_to(SITE)} ({len(records)} items)")
    return len(records)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path, help="Path to local private Videos clone")
    parser.add_argument("--icra-dir", type=Path, help="Optional folder containing Bookshelf.mp4 and Execution.mp4")
    args = parser.parse_args()
    source = args.source.expanduser().resolve()
    if not (source / ".git").exists() and not (source / "localization").is_dir():
        parser.error(f"Not a Videos checkout: {source}")
    print(f"Importing approved research media from: {source}")

    for origin, destination in COPY_ASSETS.items():
        copy_file(source / origin, SITE / destination)

    out_video = SITE / "assets/videos/viz-root-alignment.mp4"
    join_parts(source / "localization", "viz_root_alignment.mp4", out_video)

    archive_parts = sorted(source.glob("G1_Portfolio_Review.zip.part-*"))
    if archive_parts:
        with tempfile.TemporaryDirectory(prefix="g1_portfolio_") as scratch:
            assembled = Path(scratch) / "G1_Portfolio_Review.zip"
            if join_parts(source, "G1_Portfolio_Review.zip", assembled):
                import_portfolio(assembled, SITE / "assets/portfolio/g1")
    else:
        print("  SKIP: no G1 portfolio ZIP parts found")

    if args.icra_dir:
        folder = args.icra_dir.expanduser().resolve()
        for src_name, target in [
            ("Bookshelf.mp4", "bookshelf.mp4"),
            ("Execution.mp4", "execution.mp4"),
        ]:
            copy_file(folder / src_name, SITE / "assets/videos" / target)

    print("\nMedia import complete. Preview locally using:")
    print("  python3 -m http.server 8000")
    print("Then commit only the media intended for public release:")
    print("  git add assets/ && git commit -m 'Add approved robotics portfolio media' && git push origin main")
    return 0


if __name__ == "__main__":
    sys.exit(main())
