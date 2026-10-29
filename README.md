# Tianyuan Liu — Academic Research Website

Professional academic research portfolio for Tianyuan Liu, PhD Candidate at Deakin University.

**Pages:** Home · Projects · Publications · About · CV  
**Website source:** https://github.com/Chris-airobot/chris-airobot.github.io

## Local preview

```bash
git clone https://github.com/Chris-airobot/chris-airobot.github.io.git
cd chris-airobot.github.io
python3 -m http.server 8000
```

Open http://localhost:8000.

This is a static site. Python 3 is sufficient; no Node.js installation is required.

## Import videos and screenshots from the private Videos repository

The source asset library is `Chris-airobot/Videos`, maintained privately as an archive.
Its **user-approved public-facing media** is imported to this repository; the source repository need not be made public.

On a computer with a local checkout at `~/Documents/Videos`:

```bash
cd ~/Projects/chris-airobot.github.io
git pull origin main
python3 scripts/import_media.py ~/Documents/Videos
```

If the ICRA research videos are also available in `~/Downloads`:

```bash
python3 scripts/import_media.py ~/Documents/Videos --icra-dir ~/Downloads
```

The importer will:

1. Copy SAM3/FoundationPose, RGB-D diagnostics, GOPT screenshots and selected visual material.
2. Join the four pieces of `localization/viz_root_alignment.mp4` and check SHA-256.
3. Join the three pieces of `G1_Portfolio_Review.zip`, check SHA-256, extract visual media, and generate an automatically loaded gallery manifest.
4. Copy the top-level `recording.mp4` as an additional (unlabelled) research recording.
5. Optionally copy `Bookshelf.mp4` and `Execution.mp4` as the two ICRA demo videos.

Only images/videos are extracted from the ZIP. Model weights, code, logs and diagnostic files are not copied into the public website. Imported media should not exceed 95 MiB per file; larger files require external hosting.

After inspecting the locally rendered website and imported media, publish the approved visual assets:

```bash
git add assets/
git commit -m "Add approved robotics research demo media"
git push origin main
```

## Site layout

- `index.html`: researcher introduction and featured work.
- `projects.html`: two ICRA projects, ACRA work, Samsung humanoid systems section.
- `samsung-media.js` + `samsung-media.css`: supplemental images, videos and an auto-generated gallery.
- `publications.html`: publication status and arXiv links.
- `about.html`: academic background and experience.
- `cv.html`: downloadable CV once PDF has been added.

**Academic CV:** The two-page verified PDF is not yet in this repository. When available, copy it to `assets/Tianyuan_Liu_Academic_CV.pdf` and it will appear automatically.

## Scientific accuracy

- Two ICRA 2027 manuscripts are **under review** as of October 2026.
- The ACRA 2025 paper is **published** and had an oral presentation.
- The Unitree G1 physical box-manipulation system was a **team-developed, real-deployed system**; the website identifies Tianyuan's perception, calibration, localization and integration contributions.
- The GOPT real-scene example was an **offline planning visualization**, not G1 robot execution.
- Camera observations were made under different capture conditions and are not presented as direct accuracy rankings.

## Publishing with GitHub Pages

After review, go to repository **Settings → Pages → Build and deployment → Deploy from a branch**, select `main` and `/(root)`. The resulting URL is https://chris-airobot.github.io.

The repo and its assets are public. Do not commit any non-public material you do not intend to release.
