# Tianyuan Liu — al-folio research portfolio (preview branch)

This branch is an **in-progress** migration to the actual [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme, not a hand-built visual imitation.

The existing website remains on the **main** branch. Do not enable GitHub Pages deployment from this branch before the Jekyll build succeeds.

## Local preview (Ubuntu with Docker Compose)

```bash
git fetch origin redesign/al-folio
git switch redesign/al-folio
docker compose pull
docker compose up
```

Then open **http://localhost:8080**. Python's static HTTP server cannot compile Liquid/Jekyll source files.

## Research assets

The existing repository supplies experiment images for the two ICRA papers and Samsung research. Full MP4 videos are not yet in the repository. The original academic CV PDF is also pending.

## Acknowledgments

Template: al-folio (MIT license). Original copyright and license are preserved in the LICENSE file.
