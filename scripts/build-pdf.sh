#!/usr/bin/env bash
# Build slides.pdf from index.html via decktape.
#
# Runs a throw-away local HTTP server, points decktape (headless
# Chromium) at it, and captures each slide as a page in the output PDF.
# This sidesteps reveal.js's ?print-pdf mode (which renders duplicate
# logos + other quirks) by capturing the deck's real on-screen canvas.
#
# Usage:
#   ./scripts/build-pdf.sh                  # outputs slides.pdf
#   OUT=handout.pdf ./scripts/build-pdf.sh  # custom filename
#   PORT=8123 ./scripts/build-pdf.sh        # custom server port
#   THEME=dark ./scripts/build-pdf.sh       # default is light
#
# Requires: node/npx (decktape pulled via `npx`), python3 (server).

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

OUT="${OUT:-slides.pdf}"
PORT="${PORT:-8765}"
THEME="${THEME:-light}"
URL="http://localhost:${PORT}/index.html?theme=${THEME}"

echo "→ starting HTTP server on :${PORT}"
python3 -m http.server "$PORT" >/dev/null 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT

# Wait for the server to answer (simple loop, no sleep-polling in shell CI).
for _ in 1 2 3 4 5 6 7 8 9 10; do
  if curl -sSf "http://localhost:${PORT}/" -o /dev/null; then break; fi
  sleep 0.3
done

echo "→ rendering ${URL} → ${OUT}"
npx --yes decktape@3.12.0 reveal \
  --size 2560x1440 \
  --load-pause 800 \
  --slides 1-100 \
  "$URL" \
  "$OUT"

echo "✓ wrote $OUT"
