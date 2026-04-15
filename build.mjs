/**
 * Build script for the mini-symposium reveal.js deck.
 *
 * Copies local assets, vendors reveal.js from node_modules,
 * downloads Google Fonts (Poppins) for self-hosting, and rewrites
 * HTML files to reference local paths instead of CDNs.
 */

import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const DIST = path.join(ROOT, 'dist');
const NODE_MODULES = path.join(ROOT, 'node_modules');

// ── helpers ──────────────────────────────────────────────────────────

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

function copyDir(src, dest) {
  cpSync(src, dest, { recursive: true });
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  cpSync(src, dest);
}

// ── 1. Clean & create dist ──────────────────────────────────────────

if (existsSync(DIST)) {
  rmSync(DIST, { recursive: true, force: true });
}
ensureDir(DIST);

// ── 2. Copy local assets ────────────────────────────────────────────

copyDir(path.join(ROOT, 'assets'), path.join(DIST, 'assets'));
copyDir(path.join(ROOT, 'css'), path.join(DIST, 'css'));

console.log('Copied local assets and CSS.');

// ── 3. Vendor reveal.js from node_modules ───────────────────────────

const REVEAL_SRC = path.join(NODE_MODULES, 'reveal.js');
const REVEAL_DEST = path.join(DIST, 'vendor', 'reveal.js');

// dist/ files (CSS + main JS)
for (const rel of ['dist/reveal.css', 'dist/reveal.js', 'dist/theme/black.css']) {
  copyFile(path.join(REVEAL_SRC, rel), path.join(REVEAL_DEST, rel));
}

// plugin/ files (reveal.js 6 flattened most plugin JS into dist/plugin/)
for (const rel of [
  'dist/plugin/highlight.js',
  'dist/plugin/highlight/monokai.css',
  'dist/plugin/notes.js',
  'dist/plugin/zoom.js',
]) {
  copyFile(path.join(REVEAL_SRC, rel), path.join(REVEAL_DEST, rel));
}

console.log('Vendored reveal.js.');

// ── 4. Download Google Fonts (Poppins) ──────────────────────────────

const FONTS_DIR = path.join(DIST, 'vendor', 'fonts');
ensureDir(FONTS_DIR);

const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap';

// Use a modern browser UA so Google returns woff2 format
const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function downloadFonts() {
  console.log('Fetching Google Fonts CSS...');
  const res = await fetch(GOOGLE_FONTS_URL, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`Failed to fetch Google Fonts CSS: ${res.status}`);

  let css = await res.text();

  // Extract all font file URLs
  const urlPattern = /url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g;
  const urls = [...css.matchAll(urlPattern)].map((m) => m[1]);

  console.log(`Downloading ${urls.length} font files...`);

  for (const url of urls) {
    // Derive a local filename from the URL path
    const urlPath = new URL(url).pathname; // e.g. /s/poppins/v22/abc.woff2
    const filename = urlPath.split('/').pop(); // abc.woff2

    const fontRes = await fetch(url);
    if (!fontRes.ok) throw new Error(`Failed to download font: ${url}`);

    const buffer = Buffer.from(await fontRes.arrayBuffer());
    writeFileSync(path.join(FONTS_DIR, filename), buffer);

    // Replace the remote URL with the local filename in the CSS
    css = css.replace(url, filename);
  }

  writeFileSync(path.join(FONTS_DIR, 'poppins.css'), css);
  console.log('Downloaded and localized Google Fonts.');
}

await downloadFonts();

// ── 5. Rewrite HTML files ───────────────────────────────────────────

const CDN_BASE = 'https://cdn.jsdelivr.net/npm/reveal.js@6.0.1/';
const LOCAL_BASE = 'vendor/reveal.js/';

const HTML_FILES = ['index.html'];

for (const file of HTML_FILES) {
  const srcPath = path.join(ROOT, file);
  if (!existsSync(srcPath)) continue;

  let html = readFileSync(srcPath, 'utf-8');

  // Replace all CDN reveal.js references with local vendor paths
  html = html.replaceAll(CDN_BASE, LOCAL_BASE);

  // Remove Google Fonts preconnect lines
  html = html.replace(
    /\s*<link\s+rel="preconnect"\s+href="https:\/\/fonts\.googleapis\.com"\s*\/>\s*/g,
    '\n',
  );
  html = html.replace(
    /\s*<link\s+rel="preconnect"\s+href="https:\/\/fonts\.gstatic\.com"\s+crossorigin\s*\/>\s*/g,
    '\n',
  );

  // Replace Google Fonts stylesheet link with local poppins.css
  html = html.replace(
    /\s*<link\s*\n?\s*rel="stylesheet"\s*\n?\s*href="https:\/\/fonts\.googleapis\.com\/css2\?family=Poppins[^"]*"\s*\n?\s*\/>/g,
    '\n    <link rel="stylesheet" href="vendor/fonts/poppins.css" />',
  );

  writeFileSync(path.join(DIST, file), html);
  console.log(`Rewrote ${file}.`);
}

// ── 6. Verify ───────────────────────────────────────────────────────

let ok = true;
for (const file of HTML_FILES) {
  const distPath = path.join(DIST, file);
  if (!existsSync(distPath)) continue;

  const html = readFileSync(distPath, 'utf-8');

  if (html.includes('cdn.jsdelivr.net')) {
    console.error(`ERROR: ${file} still references cdn.jsdelivr.net`);
    ok = false;
  }
  if (html.includes('fonts.googleapis.com')) {
    console.error(`ERROR: ${file} still references fonts.googleapis.com`);
    ok = false;
  }
}

if (!ok) {
  process.exit(1);
}

console.log('Build complete. Output in dist/');
