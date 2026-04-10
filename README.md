# NSF NCAR / RAL Slide Template — reveal.js

A reveal.js port of `nsf_ncar_ral-slide-template.pptx`, preserving the
original 13 slide layouts and placeholder text so it can serve as a
reusable starting point for future talks.

## Contents

```
ral-revealjs-slide-template/
├── index.html              # 13 <section> slides
├── css/ncar-theme.css      # NCAR brand palette + layout classes
└── assets/images/          # Images copied from the source .pptx
```

## Viewing the deck

The deck loads reveal.js 5.x and Poppins from public CDNs, so there is
nothing to install — you just need a local HTTP server so relative asset
paths resolve.

```sh
cd ral-revealjs-slide-template
python3 -m http.server 8000
```

Then open <http://localhost:8000/> in a browser. The first load requires
network access (jsDelivr for reveal.js, Google Fonts for Poppins);
subsequent loads are cached.

### Navigation

| Action                  | Key                 |
|-------------------------|---------------------|
| Next / previous slide   | `→` / `←` (or space) |
| Slide overview          | `Esc` / `o`         |
| Fullscreen              | `f`                 |
| Speaker notes view      | `s`                 |
| Jump to slide *n*       | type number + `Enter` |

The URL updates with a `#/<n>` hash as you navigate, so you can
deep-link directly to a slide.

## Slide inventory

| # | Layout                         | Class(es) on `<section>`           |
|---|--------------------------------|------------------------------------|
| 1 | Cover, full content            | `slide-cover`                      |
| 2 | Cover, alternate with notes    | `slide-cover`                      |
| 3 | Cover, short title             | `slide-cover`                      |
| 4 | Cover, reversed layout         | `slide-cover reversed`             |
| 5 | Content + stat boxes + photo   | `slide-content` (with `.with-image`, `.stat-boxes`) |
| 6 | Large-title content            | `slide-content`                    |
| 7 | Content, two columns           | `slide-content two-col`            |
| 8 | Content intro only             | `slide-content`                    |
| 9 | Full-bleed section divider     | `slide-section-divider`            |
| 10| Content, two columns (deep)    | `slide-content two-col`            |
| 11| Content, three columns         | `slide-content three-col`          |
| 12| Grid / list                    | `slide-content` (with `.grid-list`) |
| 13| Bolder statement               | `slide-bolder-statement`           |

## Editing

- **Text:** edit `index.html` directly. The placeholder lorem-ipsum is
  preserved from the source template so you can replace it with your
  own content section by section.
- **Brand styling:** tweak CSS variables at the top of
  `css/ncar-theme.css` to adjust the palette; adjust layout classes
  below the `/* -------- Layout -------- */` markers.
- **Images:** drop replacements into `assets/images/` and point the
  `<img src>` / `background` rules at the new files. The source
  template's full set of media is already extracted there.

## Using this as a GitHub template

This repo is configured as a template repository on GitHub. To start a
new deck:

1. Click **Use this template → Create a new repository** on GitHub, or
   `gh repo create <org>/<new-deck> --template NCAR/ral-revealjs-slide-template --private`.
2. Clone the new repo, edit `index.html` to replace placeholder text,
   and commit.
3. Optional: publish via GitHub Pages (Settings → Pages → Deploy from
   branch `main`, `/` root) to get a shareable URL.

## Source

Converted from the NSF NCAR / RAL PowerPoint slide template (13 slides,
16:9, 1920×1080 canvas). Brand palette and imagery extracted from the
source `.pptx`.
