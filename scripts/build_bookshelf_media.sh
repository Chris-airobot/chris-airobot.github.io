#!/usr/bin/env bash
set -euo pipefail
SRC="${1:-$HOME/Videos/interview/Bookshelf.mp4}"
OUT="${2:-$HOME/Projects/chris-airobot.github.io}"
[ -f "$SRC" ] || { echo "Source video missing: $SRC"; exit 1; }
mkdir -p "$OUT/assets/videos" "$OUT/assets/images"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
parts=("10.3 3.5" "17.8 3" "23.0 5" "34.8 5.5" "68.8 9" "91.8 10" "132.8 2.5" "139.0 4")
: > "$TMP/list.txt"
i=0
for segment in "${parts[@]}"; do
  read -r t len <<< "$segment"
  name=$(printf 'part_%02d.mp4' "$i")
  echo "Encoding segment $((i+1))/8"
  ffmpeg -hide_banner -loglevel error -y -ss "$t" -i "$SRC" -t "$len" \
    -vf 'scale=960:540,fps=24' -an -c:v libx264 -preset veryfast -crf 25 \
    -pix_fmt yuv420p "$TMP/$name"
  printf "file '%s'\n" "$TMP/$name" >> "$TMP/list.txt"
  i=$((i+1))
done
ffmpeg -hide_banner -loglevel error -y -f concat -safe 0 -i "$TMP/list.txt" \
   -c copy -movflags +faststart "$OUT/assets/videos/bookshelf.mp4"
ffmpeg -hide_banner -loglevel error -y -ss 68.8 -i "$SRC" -t 7 \
   -vf 'scale=960:540,fps=24' -an -c:v libx264 -preset veryfast -crf 25 \
   -pix_fmt yuv420p -movflags +faststart "$OUT/assets/videos/bookshelf-preview.mp4"
ffmpeg -hide_banner -loglevel error -y -ss 3 -i "$OUT/assets/videos/bookshelf-preview.mp4" \
   -frames:v 1 -q:v 3 "$OUT/assets/images/bookshelf-poster.jpg"
echo "Files generated:"
ls -lh "$OUT/assets/videos/bookshelf.mp4" "$OUT/assets/videos/bookshelf-preview.mp4" "$OUT/assets/images/bookshelf-poster.jpg"
