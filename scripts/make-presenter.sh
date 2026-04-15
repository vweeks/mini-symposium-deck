#!/bin/sh
# Generate presenter.html from index.html, injecting the multiplex master
# secret from multiplex-secret.txt. Both outputs are gitignored.
#
# Usage: ./scripts/make-presenter.sh

set -eu

cd "$(dirname "$0")/.."

if [ ! -f multiplex-secret.txt ]; then
  echo "error: multiplex-secret.txt not found." >&2
  echo "Generate one via: npx reveal-multiplex" >&2
  echo "Then write the 'secret' value into multiplex-secret.txt (one line)." >&2
  exit 1
fi

SECRET="$(tr -d '[:space:]' < multiplex-secret.txt)"
if [ -z "$SECRET" ]; then
  echo "error: multiplex-secret.txt is empty." >&2
  exit 1
fi

# Escape any / & \ in the secret so sed doesn't choke.
ESCAPED_SECRET=$(printf '%s\n' "$SECRET" | sed -e 's/[\/&]/\\&/g')

sed \
  -e 's#/client\.js#/master.js#' \
  -e "s#secret: null /\\* MULTIPLEX_SECRET \\*/#secret: \"${ESCAPED_SECRET}\" /* MULTIPLEX_SECRET */#" \
  index.html > presenter.html

echo "wrote presenter.html (master mode)."
