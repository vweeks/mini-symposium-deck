#!/bin/sh
# Manually publish the deck to the `gh-pages` branch.
#
# Use this when GitHub Actions isn't available on your account/org and
# GH Pages is configured to "Deploy from a branch → gh-pages → / (root)".
#
# Requires: a clean working tree (commit or stash first) and push access
# to the remote (default: origin).
#
# Usage: ./scripts/deploy-gh-pages.sh

set -eu

cd "$(dirname "$0")/.."

REMOTE="${REMOTE:-origin}"
BRANCH="gh-pages"

# Require a clean tree so we know exactly what's being published.
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "error: working tree has uncommitted changes." >&2
  echo "Commit or stash them before deploying." >&2
  exit 1
fi

SRC_SHA=$(git rev-parse --short HEAD)
WORKDIR=$(mktemp -d)
trap 'git worktree remove --force "$WORKDIR" 2>/dev/null || true; rm -rf "$WORKDIR"' EXIT

# Fetch existing gh-pages (if any) so we can build on top of it.
git fetch "$REMOTE" "$BRANCH" 2>/dev/null || true

if git rev-parse --verify "refs/remotes/$REMOTE/$BRANCH" >/dev/null 2>&1; then
  git worktree add -B "$BRANCH" "$WORKDIR" "$REMOTE/$BRANCH"
elif git rev-parse --verify "refs/heads/$BRANCH" >/dev/null 2>&1; then
  git worktree add "$WORKDIR" "$BRANCH"
else
  # First-time deploy: create an orphan branch.
  git worktree add --detach "$WORKDIR"
  (cd "$WORKDIR" && git checkout --orphan "$BRANCH" && git rm -rf . >/dev/null 2>&1 || true)
fi

# Sync the deck into the worktree. Exclude:
#   .git*       — worktree manages its own git state
#   .github/    — CI config, not site content
#   scripts/    — dev tooling, not site content
#   presenter.*, multiplex-secret.txt — presenter-only / secret (gitignored anyway)
rsync -a --delete \
  --exclude='.git' \
  --exclude='.gitignore' \
  --exclude='.github' \
  --exclude='scripts' \
  --exclude='presenter.html' \
  --exclude='multiplex-secret.txt' \
  --exclude='.DS_Store' \
  ./ "$WORKDIR/"

# .nojekyll tells GH Pages to serve files verbatim (don't run Jekyll).
touch "$WORKDIR/.nojekyll"

cd "$WORKDIR"
git add -A

if git diff --cached --quiet; then
  echo "no changes to deploy."
  exit 0
fi

git commit -m "Deploy site from ${SRC_SHA}"
git push "$REMOTE" "$BRANCH"
echo "deployed ${SRC_SHA} to ${REMOTE}/${BRANCH}."
