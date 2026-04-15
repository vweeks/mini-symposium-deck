# NSF NCAR / RAL Slide Template — reveal.js

A reveal.js port of `nsf_ncar_ral-slide-template.pptx`, preserving the
original slide layouts and placeholder text so it can serve as a
reusable starting point for future talks. The deck also includes
demonstrations of reveal.js features you'll most likely want: fragments,
code blocks, auto-animate, section/background transitions, iframe
backgrounds, KaTeX math, and `r-fit-text`.

## Contents

```
ral-revealjs-slide-template/
├── index.html                        # reveal.js deck (horizontal + vertical slides)
├── css/ncar-theme.css                # NCAR brand tokens + layout classes (light/dark themes)
├── assets/js/ncar-components.js      # <ncar-title-bar> custom element
└── assets/images/                    # Images copied from the source .pptx
    └── wave-graphics-ncar-colors/
        └── vert/                     # Vertical (-90°) variants of every wave PNG
```

## Viewing the deck

The deck loads reveal.js 6.x, Poppins, and JetBrains Mono from public
CDNs, so there is nothing to install — you just need a local HTTP server
so relative asset paths resolve.

```sh
cd ral-revealjs-slide-template
python3 -m http.server 8000
```

Then open <http://localhost:8000/> in a browser. The first load requires
network access (jsDelivr for reveal.js, Google Fonts for Poppins and
JetBrains Mono); subsequent loads are cached.

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

## Slide structure

The deck uses reveal.js's 2D navigation: the left/right arrow keys move
between topics, up/down moves through variants within a topic. Variants
of the same layout are grouped as vertical stacks.

| Topic | Layout                                     | Notes                                                |
|------:|--------------------------------------------|------------------------------------------------------|
| 1     | Title / cover (2 variants)                 | Vertical stack; fade between variants                |
| 2     | Full-bleed section slide                   | `r-fit-text`, `data-background-image`, zoom bg       |
| 3     | Content + stat boxes + photo               | `.with-image`, `.stat-boxes`                         |
| 4     | Large-title content                        | `.accent` inline highlight                           |
| 5     | Multi-column content (2 / 3 / 4 variants)  | Vertical stack of `.two-col`, `.three-col`, `.four-col` |
| 6     | Content intro only                         | Milky Way background                                 |
| 7     | Table                                      | `.slide-table` with themed header / striped rows     |
| 8     | Bolder statement                           | `r-fit-text`, `.statement-lead`                      |
| 9     | Pretty code block                          | highlight.js + `data-line-numbers` stepping          |
| 12    | Fragments                                  | fade-in, fade-up, fade-left, grow, highlight, strike |
| 13    | Auto-animate (3 frames)                    | Vertical stack; shared `data-id` tweens elements     |
| 14    | Section transitions (6 frames)             | slide / fade / convex / concave / zoom / mixed       |
| 15    | Background transitions                     | fade / slide / convex / zoom over colored backgrounds|
| 16    | Math                                       | KaTeX rendering                                      |
| 17    | Iframe background                          | `data-background-iframe`, `data-background-interactive` |

### reveal.js features demonstrated

- **Vertical slides** for layout variants (cover & multi-column stacks)
- **`r-fit-text`** on the section slide and bolder statement
- **Fragments** — incremental reveals on list items
- **Code blocks** — highlight.js `monokai` theme with `data-line-numbers`
  for stepped line highlighting (JetBrains Mono as the code font)
- **Auto-animate** — three frames tween a growing chip stack and a
  title that changes size and color, using matching `data-id` attributes
- **Section transitions** via `data-transition` on individual slides
- **Background transitions** via `data-background-transition` combined
  with `data-background-color`
- **KaTeX math** via the reveal.js math plugin
- **Iframe background** pointing at `revealjs.com/backgrounds/` with
  `data-background-interactive` so clicks pass through to the embed

## Theming

`css/ncar-theme.css` is a single file that defines both a dark
(`.theme-dark`) and a light (`.theme-light`) theme as sets of CSS custom
properties (`--text-primary`, `--cover-eyebrow`, `--wave-bg`, etc.).
Switch themes by toggling the class on `<body>`. Most sizing, color, and
background choices cascade from these tokens, so adjusting the palette
at the top of the file propagates through the deck without touching
layout rules.

The `<ncar-title-bar>` custom element (in `assets/js/ncar-components.js`)
renders the unified title bar used on every non-cover slide; it supports
`variant="default"` and `variant="statement"` and picks the correct logo
(color vs. white) via CSS-controlled display tokens.

## Editing

- **Text:** edit `index.html` directly. The placeholder lorem-ipsum is
  preserved from the source template so you can replace it with your
  own content section by section.
- **Brand styling:** tweak CSS variables at the top of
  `css/ncar-theme.css` to adjust the palette; layout rules follow in
  numbered sections (reveal base → brand furniture → cover → content →
  bolder statement → demo slides).
- **Wave backgrounds:** set `--wave-bg` per theme (or per slide). Use
  the horizontal PNGs in `assets/images/wave-graphics-ncar-colors/` or
  the rotated vertical versions in `.../vert/` — filenames match, so
  swapping orientations is just a path-prefix change.
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

Converted from the NSF NCAR / RAL PowerPoint slide template (16:9,
1920×1080 canvas). Brand palette and imagery extracted from the source
`.pptx`.
