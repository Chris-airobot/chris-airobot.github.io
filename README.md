# Tianyuan Liu — Academic Research Website

A responsive academic research portfolio for Tianyuan (Chris) Liu, PhD Candidate in Robotics & AI at Deakin University.

## Pages

- `index.html` — researcher introduction and featured projects
- `projects.html` — project explanations, research demo videos, and Samsung technical media
- `publications.html` — publications and preprints
- `about.html` — education, research interests, and experience
- `cv.html` — original Academic CV when its PDF is available

The sidebar-first layout is inspired by the navigation and research-portfolio approach of https://jasonabichebli.me/. Content and visual design are custom. Main site styles and logic live in `portfolio.css` and `portfolio.js`.

## Preview locally on Ubuntu

```bash
mkdir -p ~/Projects
cd ~/Projects
git clone https://github.com/Chris-airobot/chris-airobot.github.io.git
cd chris-airobot.github.io
python3 -m http.server 8000
```

Open **http://localhost:8000**.

Already cloned?

```bash
cd ~/Projects/chris-airobot.github.io
git pull origin main
python3 -m http.server 8000
```

## Robot demo videos

The two ICRA project images on the home page were extracted from the user's actual demonstration videos; they are checked into the site as `assets/images/bookshelf-poster.jpg` and `assets/images/execution-poster.jpg`. **The original long videos have not yet been added to GitHub.**

Copy the provided originals to these paths:

```
assets/videos/bookshelf.mp4    ← Bookshelf.mp4
assets/videos/execution.mp4    ← Execution.mp4
```

The research page automatically switches from preview images to embedded video players when these files exist.

## Import the Samsung research media archive

A verified, private copy of `Chris-airobot/Videos` exists locally as `~/Documents/Videos` on the original research machine. Its shareable media can be imported without publishing the private source repository itself.

```bash
python3 scripts/import_media.py ~/Documents/Videos
```

Optional ICRA originals, if they are in Downloads:

```bash
python3 scripts/import_media.py ~/Documents/Videos --icra-dir ~/Downloads
```

The importer selects images and videos, reconstructs the split localization MP4, combines and extracts images/videos from `G1_Portfolio_Review.zip.part-*`, and creates `assets/portfolio/g1/manifest.json`. The site automatically renders this media when available.

Check the imported content visually, then publish as desired:

```bash
git add assets
git commit -m "Add research demonstration media"
git push origin main
```

The repository is **public**. Confirm that the contents are intended for public release before pushing additional media or data.

## Academic CV

The verified two-page PDF has not been retrieved. Add it at `assets/Tianyuan_Liu_Academic_CV.pdf` to enable its download button.

## Publishing

In GitHub repository Settings → Pages, choose **Deploy from a branch**, `main`, `/(root)`. The domain should be https://chris-airobot.github.io.

## Layout history

The first design is preserved at branch `backup/initial-layout-20261030`.

## Attribution and accuracy

- Two papers remain ICRA 2027 submissions **under review** as of October 2026.
- The ACRA 2025 paper is **published** and had an oral presentation.
- G1 box-manipulation was deployed on the physical Unitree G1 as a **team project**. The site's individual contribution statements emphasize perception, tracking, calibration, localization, and integration.
- GOPT planning figures illustrate **offline planning**, not an autonomous G1 box-placement execution.
