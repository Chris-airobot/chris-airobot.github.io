# Tianyuan Liu — Academic Research Portfolio

Personal research website for Tianyuan Liu (Deakin University).

This public repository contains the static site source only. **Samsung Research internal media, code, and reports must not be added without disclosure permission.**

## Local preview

```bash
git clone https://github.com/Chris-airobot/chris-airobot.github.io.git
cd chris-airobot.github.io
python3 -m http.server 8000
```

Visit http://localhost:8000.

## Research demonstration videos

Two user-provided ICRA demo videos are intentionally **not yet in the public repository**, because the current GitHub integration can write text but cannot transfer the original binary uploads.

Copy the original files locally, if you wish to make them public:

```bash
mkdir -p assets/videos
cp /path/to/Bookshelf.mp4 assets/videos/bookshelf.mp4
cp /path/to/Execution.mp4 assets/videos/execution.mp4
git add assets/videos
git commit -m "Add public ICRA research demos"
git push origin main
```

Both video sizes are below GitHub's 100 MiB per-file hard limit, but they will make the repository clone larger. If these videos should remain private, do not push them and the site will show explanatory media placeholders.

## Academic CV

The original two-page Academic CV PDF has not yet been attached to this repository. Once verified, place it at `assets/Tianyuan_Liu_Academic_CV.pdf`; the website's CV page links to that filename.

## Deployment

GitHub Pages can serve this static site from the root of the `main` branch once Pages is enabled in **Settings → Pages → Deploy from a branch**.

## Papers

- Execution-aware placement: https://arxiv.org/abs/2609.19946
- Bookshelf insertion with residual RL: https://arxiv.org/abs/2609.19962
- Grasp-dependent feasibility prediction (ACRA 2025): https://arxiv.org/abs/2512.18922
