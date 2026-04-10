# NSF NCAR / RAL Slide Template — reveal.js

A reveal.js port of `nsf_ncar_ral-slide-template.pptx`, preserving the
original 13 slide layouts and placeholder text so it can serve as a
reusable starting point for future talks. The deck also includes
demonstrations of reveal.js features you'll most likely want: fragments,
code blocks, auto-animate, section/background transitions, iframe
backgrounds, and `r-fit-text`.

## Contents

```
ral-revealjs-slide-template/
├── index.html              # reveal.js deck (horizontal + vertical slides)
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

## Slide structure

The deck uses reveal.js's 2D navigation: the left/right arrow keys move
between topics, up/down moves through variants within a topic. Variants
of the same layout are grouped as vertical stacks.

| Topic | Layout                          | Notes                                                |
|------:|---------------------------------|------------------------------------------------------|
| 1     | Title / cover (4 variants)      | Vertical stack; fade between variants                |
| 2     | Full-bleed section divider      | `r-fit-text`, `data-background-image`, zoom bg       |
| 3     | Content + stat boxes + photo    | `.with-image`, `.stat-boxes`                         |
| 4     | Large-title content             | `.accent` inline highlight                           |
| 5     | Two-column content (2 variants) | Vertical stack                                       |
| 6     | Three-column content            |                                                      |
| 7     | Content intro only              |                                                      |
| 8     | Grid / list                     | `.grid-list`                                         |
| 9     | Bolder statement                | `r-fit-text`                                         |
| 10    | Pretty code block               | highlight.js + `data-line-numbers` stepping          |
| 11    | Fragments                       | fade-in, fade-up, fade-left, grow, highlight, strike |
| 12    | Auto-animate (3 frames)         | Vertical stack; shared `data-id` tweens elements     |
| 13    | Section transitions (6 frames)  | slide / fade / convex / concave / zoom / mixed      |
| 14    | Background transitions          | fade / slide / convex / zoom over colored backgrounds|
| 15    | Iframe background               | `data-background-iframe`, `data-background-interactive` |

### reveal.js features demonstrated

- **Vertical slides** for layout variants (cover & two-column stacks)
- **`r-fit-text`** on the section divider and bolder statement
- **Fragments** — incremental reveals on list items
- **Code blocks** — highlight.js `monokai` theme with `data-line-numbers`
  for stepped line highlighting
- **Auto-animate** — three frames tween a growing chip stack and a
  title that changes size and color, using matching `data-id` attributes
- **Section transitions** via `data-transition` on individual slides
- **Background transitions** via `data-background-transition` combined
  with `data-background-color`
- **Iframe background** pointing at `revealjs.com/backgrounds/` with
  `data-background-interactive` so clicks pass through to the embed

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
