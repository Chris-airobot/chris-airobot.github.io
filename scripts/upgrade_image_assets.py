#!/usr/bin/env python3
"""Upgrade the three portfolio images using ORIGINAL files on this computer.

No ChatGPT file download is needed.

Usage:
    python3 scripts/upgrade_image_assets.py --push
    python3 scripts/upgrade_image_assets.py --photo ~/Pictures/myphoto.png --bookshelf ~/Videos/Bookshelf.mp4 --execution ~/Videos/Execution.mp4 --push

The original sample frames in the site previews come from around 90s of
Bookshelf.mp4 and 152.6s of Execution.mp4.
"""
from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = {
    "photo": ROOT / "assets/img/prof_pic.webp",
    "bookshelf": ROOT / "assets/images/bookshelf-poster.jpg",
    "execution": ROOT / "assets/images/execution-poster.jpg",
}
LOOK_FOR = {
    "photo": ("个人图片.png", "tianyuan.png", "tianyuan.jpg", "portrait.png", "portrait.jpg", "headshot.png", "headshot.jpg", "profile_photo.png"),
    "bookshelf": ("Bookshelf.mp4",),
    "execution": ("Execution.mp4",),
}
IGNORE = {".git", ".cache", ".conda", "node_modules", "venv", ".venv", "anaconda3",
          "miniconda3", ".local", ".npm", ".rustup", "build", "dist", "site-packages",
          ".gradle", "snap", ".vscode", ".cargo"}


def run(args: list[str]) -> None:
    print("+", " ".join(map(str, args)), flush=True)
    subprocess.run(args, cwd=ROOT, check=True)


def locate(label: str) -> Path | None:
    home = Path.home()
    roots = [home / name for name in ("Downloads", "Pictures", "Desktop", "Documents", "Videos", "Projects")]
    roots.append(home)
    candidates = set(n.casefold() for n in LOOK_FOR[label])
    seen: set[str] = set()
    for base in roots:
        if not base.exists():
            continue
        for dirname, dirs, files in os.walk(base, topdown=True):
            depth = len(Path(dirname).relative_to(base).parts)
            dirs[:] = [d for d in dirs if d not in IGNORE and not d.startswith(".")]
            if depth > 5:
                dirs.clear()
                continue
            for filename in files:
                if filename.casefold() in candidates:
                    found = Path(dirname) / filename
                    identity = str(found.resolve())
                    if identity not in seen:
                        print(f"Found {label}: {found}")
                        return found
                    seen.add(identity)
    return None


def portrait(source: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        from PIL import Image, ImageOps
        with Image.open(source) as im:
            im = ImageOps.exif_transpose(im).convert("RGB")
            # At this width, detail remains clear on typical laptop/desktop displays.
            if im.width > 1060:
                h = round(im.height * (1060 / im.width))
                im = im.resize((1060, h), Image.Resampling.LANCZOS)
            im.save(dest, "WEBP", quality=88, method=6)
    except ImportError:
        if not shutil.which("ffmpeg"):
            raise RuntimeError("Install Pillow (python3 -m pip install Pillow) or ffmpeg.")
        run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
             "-i", str(source), "-frames:v", "1", "-c:v", "libwebp",
             "-quality", "88", str(dest)])


def frame(source: Path, dest: Path, time_seconds: float) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if shutil.which("ffmpeg"):
        run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-ss",
             str(time_seconds), "-i", str(source), "-frames:v", "1", "-q:v",
             "2", str(dest)])
        return
    try:
        import cv2
        cap = cv2.VideoCapture(str(source))
        cap.set(cv2.CAP_PROP_POS_MSEC, time_seconds * 1000)
        success, image = cap.read()
        cap.release()
        if not success or not cv2.imwrite(str(dest), image, [cv2.IMWRITE_JPEG_QUALITY, 93]):
            raise RuntimeError(f"Cannot extract video frame from {source}")
    except ImportError:
        raise RuntimeError("Install ffmpeg or opencv-python to extract video frames.")


def archive_if_available() -> bool:
    for candidate in (Path.home() / "Downloads/site_clear_images.zip", ROOT / "site_clear_images.zip"):
        if not candidate.is_file():
            continue
        with zipfile.ZipFile(candidate) as z:
            paths = {"photo": "assets/img/prof_pic.webp",
                     "bookshelf": "assets/images/bookshelf-poster.jpg",
                     "execution": "assets/images/execution-poster.jpg"}
            if not all(p in z.namelist() for p in paths.values()):
                continue
            for name, inner in paths.items():
                dest = OUT[name]
                dest.parent.mkdir(parents=True, exist_ok=True)
                dest.write_bytes(z.read(inner))
            print("Used existing original high-resolution images from:", candidate)
            return True
    return False


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--photo", type=Path)
    parser.add_argument("--bookshelf", type=Path)
    parser.add_argument("--execution", type=Path)
    parser.add_argument("--push", action="store_true")
    a = parser.parse_args()
    if subprocess.run(["git", "branch", "--show-current"], cwd=ROOT, capture_output=True, text=True).stdout.strip() != "redesign/al-folio":
        raise SystemExit("Switch to the redesign/al-folio branch first.")

    if not archive_if_available():
        found = {name: (getattr(a, name) or locate(name)) for name in OUT}
        missing = [name for name, item in found.items() if not item or not item.is_file()]
        if missing:
            print("\nOriginal media missing on this computer:", ", ".join(missing))
            print("Give the file locations explicitly, for example:")
            print("  python3 scripts/upgrade_image_assets.py --photo ~/Pictures/个人图片.png \\")
            print("    --bookshelf ~/Videos/Bookshelf.mp4 --execution ~/Videos/Execution.mp4 --push")
            raise SystemExit(2)
        portrait(found["photo"], OUT["photo"])
        frame(found["bookshelf"], OUT["bookshelf"], 90.0)
        frame(found["execution"], OUT["execution"], 152.6)

    print("\nNew image files:")
    for label, path in OUT.items():
        print(f"  {label:10s} {path.relative_to(ROOT)} {path.stat().st_size:,} bytes")
        if path.stat().st_size < 20_000:
            raise SystemExit(f"Generated image seems too small: {path}")

    if a.push:
        run(["git", "add", *[str(p.relative_to(ROOT)) for p in OUT.values()]])
        status = subprocess.run(["git", "diff", "--cached", "--quiet"], cwd=ROOT)
        if status.returncode != 0:
            run(["git", "commit", "-m", "Replace compressed site images with original-quality media"])
        run(["git", "-c", "http.version=HTTP/1.1",
             "-c", "http.proxy=http://127.0.0.1:7897",
             "push", "origin", "redesign/al-folio"])
        print("\nImages pushed. GitHub Actions will rebuild the preview.")
    else:
        print("\nPrepared images locally. Run again with --push to commit and upload.")


if __name__ == "__main__":
    main()
