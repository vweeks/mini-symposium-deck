# Script Outline — Chameleon Mini-Symposium Talk

**Event:** 6th Chameleon Cloud User Meeting — Mini-Symposium: _Applying AI to Accelerate Computational Reproducibility and Replicability_
**Speaker:** Victor Weeks (NCAR/RAL, 2026 BSSw Fellow)
**Date:** April 16, 2026
**Budget:** 7–8 minutes (target ≈ 7:00, buffer ≈ 1:00)

---

## Narrative spine

The symposium asks how AI can help us **reproduce** computational artifacts. I want to flip the coin: what happens when AI **builds** those artifacts in the first place? My BSSw Fellowship — **Maintaining Scientific Rigor in AI-Assisted Development: A Validation-Focused Methodology** — targets that build side. Its deliverable methodology, **Scientific Agentic Engineering (SAE)**, rests on validation loops, human oversight, and domain-specific safeguards. Build-time discipline is upstream of reproduce-time reliability; the same principles arm both sides.

I'll illustrate one concrete facet — **tech-stack provenance** — using this very deck as a meta-demo (my first reveal.js + multiplex presentation, built with AI help, and the latest in a pile of scrapped drafts). That's one spoke of what the methodology addresses, not the headline. The headline is the validation-focused frame itself.

---

## Time budget at a glance

| #   | Beat                                       | Time | Cumulative |
| --- | ------------------------------------------ | ---: | ---------: |
| 1   | Cover                                      |  20s |       0:20 |
| 2   | Two sides of the same coin                 |  45s |       1:05 |
| 3   | Rapidly-evolving AI-assisted-dev spectrum  |  60s |       2:05 |
| 4   | Meta-demo: this deck (and its scrap pile)  |  70s |       3:15 |
| 5   | One facet: tech-stack provenance           |  55s |       4:10 |
| 6   | Scientific Agentic Engineering (the frame) |  90s |       5:40 |
| 7   | Upstream / downstream                      |  45s |       6:25 |
| 8   | Follow the project                         |  25s |       6:50 |

Total ≈ **6:50**, leaving ≈ **1:00** of buffer/transition.

---

## Beat 1 — Cover (~20s)

**Intent:** Establish who, what, why-I'm-here. Land the spin: we've focused on letting _others_ reproduce our artifacts — but what if we use AI to build them and then can't reproduce our _own_ artifacts?

**Talking points:**

- "Hi, I'm Victor Weeks — software engineer at NSF NCAR's Research Applications Lab, and one of the 2026 Better Scientific Software Fellows."
- "Our community has invested a lot of energy into making sure **other people** can reproduce our CS artifacts. I want to surface a complementary question: when we use AI to help **build** those artifacts, how do we ensure that we can reproduce them **ourselves**?"

_(Don't read the title aloud — the audience can see it. The fellowship name is spoken here but intentionally kept off the slide.)_

**On screen (keep the existing cover structure — only title/subhead/notes change):**

- Eyebrow: _April 16, 2026 | 6th Chameleon User Meeting_ (unchanged)
- **Title (h1):** _Maintaining Reproducibility in AI-Assisted Scientific Software Development_
- **Subtitle (h2):** _A build-side view of R&R_
- h-separator (unchanged)
- Presenter block (unchanged): Victor Weeks · Software Engineer, NSF NCAR · 2026 BSSw Fellow
- Mini-symposium credit line (unchanged): _Applying AI to Accelerate Computational Reproducibility and Replicability_
- Pinned footnote with NCAR / NSF / BSSw acknowledgments (unchanged)
- Brand bar with NCAR RAL logo (unchanged)

**Template features:** existing `.slide-cover` markup preserved — photo-cover background, brand-bar, h-separator, presenter-block, pinned footnote. Only text content on h1 and h2 (and the speaker notes) changes.

**→ Transition:** "Let me frame why I'm up here given today's agenda."

---

## Beat 2 — Two sides of the same coin (~45s)

**Intent:** Frame my contribution as complementary to the symposium, not competing.

**Talking points:**

- "This symposium is about AI as an **adaptive infrastructure layer** for reproducing artifacts — rebuilding environments, resolving dependency conflicts, navigating testbed quirks. The goal: help the community reproduce a given artifact."
- "I want to ask the **mirror question**. When AI helps **build** that artifact in the first place — can the author still reproduce the author? That's the build side of R&R, and that's what my fellowship targets."
- "Same coin, either way. If we get the build side wrong, the reproduce side inherits whatever we couldn't retrace ourselves."

**On screen:**

- Title bar: _Two sides of the same coin_
- Two labels on opposite sides of a centered "coin" graphic — auto-animate them converging / merging in:
  - Left: **AI to reproduce artifacts** (symposium)
  - Right: **AI to build artifacts** (fellowship)
- Small caption after reveal: "Same principles. Different direction."

**Template features:** auto-animate with `data-id` on the two labels; fragment fade-in for the caption.

**→ Transition:** "So — where is 'AI building scientific software' even at, in April 2026?"

---

## Beat 3 — How AI-assisted development has been evolving (~60s)

**Intent:** A high-level look back at the development patterns that have emerged over the last couple of years. Not exhaustive. Not a ladder everyone has to climb. Make the audience feel the pace.

**Talking points:**

- "Zoom out for a minute. Here's a high-level look at what AI-assisted development has _looked like_ over roughly the last couple of years. Not an exhaustive map — and not strictly a ladder. Plenty of people haven't explored the later stages, and that's fine."
  - **Tab-complete** — Copilot-style, in-editor
  - **Console copy/paste** — chat with an LLM, shuttle code back and forth
  - **MCP and tool use** — agents calling APIs, filesystems, services
  - **Planning / plan-mode workflows** — agent drafts the change before editing
  - **Autonomous agent teams** — multi-agent delegation, long-horizon tasks
- "Two things worth noticing. First: **these stages complement each other more than they replace each other.** You can ask one AI pass to polish the prompt you're about to feed into a plan-mode workflow. You can have one LLM validate another's output — a nice manual way to get cross-agent checking without a full multi-agent framework."
- "Second: **every step toward more autonomy risks trading transparency for throughput.**"
- "And one timing note: **this is month-to-month, not year-to-year.** A single feature release can reshape the workflow. Anything I list today will need an asterisk six months from now — which is part of why the fellowship is principle-first, not tool-first."

**On screen:**

- Title bar: _How AI-assisted dev has been evolving_
- Five chips arriving via **auto-animate** (e.g., a single card splits/tweens into five stacked chips in order):
  1. Tab-complete
  2. Console copy/paste
  3. MCP & tool use
  4. Planning mode
  5. Autonomous agent teams
- Final auto-animate beat: chips reflow to show two faint connecting lines between non-adjacent stages (e.g., "Tab-complete" ↔ "Planning mode"; "Console copy/paste" ↔ "Autonomous teams") — carrying _"these complement each other"_ visually
- Footnote (last fragment): _"Not a ladder. Month-to-month, not year-to-year."_

**Template features:** `.auto-animate-stack` with `data-id` chips — lean on reveal.js auto-animate across 2–3 vertical sub-slides for the staged entrance and the "complement" reflow; subtle accent on the last chip to hint at the autonomy/oversight tradeoff.

**→ Transition:** "Let me bring that down to one developer and one example — this very deck."

---

## Beat 4 — Meta-demo: this deck (and its scrap pile) (~70s)

**Intent:** Self-referential concrete example. Also the credibility beat.

**Talking points:**

- "Quick meta moment: these slides are my **first reveal.js presentation**, and they're running over **multiplex** — a protocol I'd never used before. Two weeks ago I didn't know either tool."
- "AI-assisted development is how I got here fast. It didn't just find these tools — it **built** the template, wired the multiplex broker, suggested the layouts. Genuinely useful — and a great example of how AI lets you wield tech you don't yet fully understand."
- _[Credibility beat — slow down here]:_ "But I'll be honest: what you're looking at is the **latest iteration**. Earlier drafts of this deck, and plenty of other artifacts in my fellowship warm-up, have been scrapped entirely. The expertise I'm bringing to this fellowship comes as much from what I've learned **not** to do as from what I've kept. The scrap pile is the classroom."
- "And — this is low-stakes. A wrong layout choice is aesthetic debt. Even so: next time I touch this deck, _the author will have to re-understand the author._ Now imagine the stakes are scientific, not cosmetic."

**On screen:**

- Title bar: _Case in point: this deck_
- Left side: a playful **"you are here" arrow** pointing at a miniature rendering of the current slide (or the preceding slide thumbnail) — self-referential in the template's own visual language
- Right side (revealed as fragments):
  - _First reveal.js deck. First time with multiplex._
  - _AI accelerated the tech-stack discovery._
  - _And there's a scrap pile behind it._ (slightly offset / dimmed typographic treatment)
- Optional small stat-box trio: "1st reveal.js deck" • "1st multiplex run" • "N drafts scrapped"

**Template features:** `.slide-with-image` or custom two-column; fragment fade-in for each line; stat-boxes optional.

**→ Transition:** "So — what happens when we move this same workflow into science?"

---

## Beat 5 — One facet: tech-stack provenance (~55s)

**Intent:** Introduce the novel illustration as an **example**, not the thesis. Pivot into SAE.

**Talking points:**

- "When I made this deck, if the AI picked a dubious library or a quirky layout, the cost is cosmetic."
- "Not every AI-assisted workflow involves the AI choosing your tech stack — sometimes you specify it yourself. But when you **don't** — and the AI picks a numerical library, a quadrature method, a convergence tolerance, a random-seed scheme — those decisions can **pass CI** and still corrupt the science."
- "For R&R, the gap isn't 'explain the AI model' — that's a hard, maybe unsolvable problem. The tractable gap is: **when the AI did make choices on your behalf, can you trace them?** Which library. Which method. Which tolerance. Captured, reviewable, reproducible — first by us, then by everyone else."
- "That's one concrete thing I want the validation-focused methodology to make routine — but it's just one spoke. Let me show the broader frame."

**On screen:**

- Title bar: _One facet: tech-stack provenance_
- Centered contrast: two framed boxes side-by-side
  - Left: _Slides_ → "wrong choice = aesthetic debt"
  - Right: _Science_ → "wrong choice = corrupted result that passes CI"
- Fragment under the pair: _The gap isn't 'explain the AI' — it's trace what the AI chose for you._
- Final fragment: _One spoke. Now the hub._

**Template features:** `.two-col` content split; `.h-separator` under the pair; fragment reveals with `highlight-current-blue` on the final line.

**→ Transition:** "Here's the frame that spoke lives in."

---

## Beat 6 — The methodology (the frame) (~90s)

**Intent:** Central slide. Name the fellowship's full title, name the methodology (SAE), name the three pillars with validation in lead position. Promise depth.

**Talking points:**

- "The reproduce side relies on transparency. Here's how my fellowship aims to preserve it on the build side."
- "The fellowship title is _Maintaining Scientific Rigor in AI-Assisted Development: A Validation-Focused Methodology_."
- "Andrej Karpathy — who gave us 'vibe coding' — coined **agentic engineering** as its successor: orchestrated agents writing code, a human overseeing and validating, with enough engineering expertise that quality doesn't slip. Oversight and validation are already in _his_ definition."
- "My fellowship asks what it takes to meet that bar for _scientific_ software — where 'quality' includes physics, precision, and provenance. That's **Scientific Agentic Engineering**. Tool-agnostic. Principle-first. Three pillars — validation leads."
- _[reveal pillar 1 — lead with this]_ "**Validation loops** — domain-specific checks at _each decision point_, not just end-of-pipeline. Unit checks, conservation checks, precision checks, provenance checks. This is the pillar the fellowship title is pointing at."
- _[reveal pillar 2]_ "**Human-in-the-loop oversight** — defined review gates where a human must say yes before the agent keeps going. Not everywhere. At the decisions that matter."
- _[reveal pillar 3]_ "**Domain-specific safeguards** — the guardrails that encode what 'wrong' means for a given scientific domain. Tech-stack provenance from the previous slide lives here; so do physics-violation detectors, precision tests, scope-drift containment."
- "Tool-agnostic because the tools will change — MCP, agent frameworks, even models are shifting monthly. The **principles** are the durable part."
- "Over the next 12 months: a framework draft, a reference workflow exercise, a community repo of MCP templates and scientific skills, an interactive tutorial series, and live workshops. Today this is the map."

**On screen:**

- Title bar (h1): _Maintaining Scientific Rigor in AI-Assisted Development_ (SOW title, verbatim)
- Subtitle (h2): _A **Validation**-Focused Methodology_ (`.accent` on **Validation**)
- Byline strip under the subtitle: \*Applying **Agentic Engineering**¹ to scientific software → **Scientific Agentic Engineering\***
- Three-column pillar layout, validation visually weighted (larger column or accent color), each with 1-line description:
  1. **Validation loops** _(lead pillar)_ — domain checks at each decision point
  2. **Human-in-the-loop oversight** — review gates at decisions that matter
  3. **Domain-specific safeguards** — guardrails incl. tech-stack provenance
- Fragment beneath: _Tool-agnostic. Principles over products._
- Small footer line (final fragment): _Deliverables: framework · reference workflow · community repo · tutorials · workshops · 12 months._
- Citation footnote (fine print, pinned bottom): ¹ _"Agentic engineering" — Andrej Karpathy, 2026 — successor to "vibe coding" (Karpathy, 2025)._

**Template features:** `.three-col` with validation column given `.accent` styling or slightly wider; fragment fade-in per column in order 1→2→3; `.accent` on the word **Validation** in the subtitle and **Scientific Agentic Engineering** in the byline; pinned `.slide-footnote` for the Karpathy citation.

**→ Transition:** "And here's how the build side and reproduce side connect."

---

## Beat 7 — Upstream / downstream (~45s)

**Intent:** Close the loop with the symposium. A single memorable line.

**Talking points:**

- "If we take one idea from this talk, take this: **build-time discipline is upstream of reproduce-time reliability.**"
- "The same three pillars — validation loops, oversight, domain safeguards — also apply to the **reproduce-side** agents the rest of this symposium is about. Same pillars serve both sides of the coin."

**On screen:**

- Bolder-statement slide (large centered text over a wave background):
  > **Build-time discipline is upstream of reproduce-time reliability.**
- Small subline: _Same pillars serve both sides of the coin._

**Template features:** `.slide-bolder-statement` with `data-background-image` (high-intensity wave); `data-transition="convex"`.

**→ Transition:** "Where to follow along."

---

## Beat 8 — Follow the project (~25s)

**Intent:** Clean close. Give the audience a place to go.

**Talking points:**

- "I'll be building this all in public over the fellowship. Site is up — first-milestone framework draft lands this summer."
- "If AI-assisted scientific software is something you're wrestling with, I'd love to hear from you."
- "I want the author to still be able to reproduce the author. Follow along. Thanks."

**On screen:**

- Title bar: _Follow the project_
- Three-column list:
  - **Site** — vweeks.github.io/scientific-agentic-engineering
  - **GitHub** — github.com/vweeks
  - **Email** — vweeks@ucar.edu
- Optional small line beneath: \_BSSw Fellowship: https://bssw.io/fellows/victor-weeks
- **Personalized QR code** to the project site (see styling notes below)

**Template features:** simple `.slide-content` or `.three-col`; QR-code image styled per below.

**QR styling:**

- Foreground (data modules): NCAR blue `#0057c2`
- Background: white
- Center inset: small NCAR or fellowship logo (leave ~20% clear radius)
- Error-correction level: **H** (30%) — required for the logo inset to scan reliably
- Generation: `qr-code-styling` JS, `qrcode-monkey.com`, or Python `qrcode` + `Pillow` overlay

---

## Speaker-note porting plan (for Phase B)

Each `<aside class="notes">` block will contain, in order:

1. **Beat's intent** (1 line)
2. **Talking points** — the near-verbatim script above, tightened to bullets
3. **Timing target** (e.g., `~70s`) and accumulated timing target
4. **Fragment cues** (e.g., "click 1 = Tab-complete; click 5 = footnote")
5. **Transition line** into the next slide

Keep notes short enough to scan in presenter view under stage lights.

---

## Placeholders to fill before the talk

- Final project site URL (currently `vweeks.github.io/scientific-agentic-engineering`)
- GitHub handle (currently `github.com/vweeks`)
- Institutional email address
- Generated, personalized QR code image for the project site (NCAR-blue modules, white background, center logo, error-correction level H)
- "You are here" arrow asset for Beat 4 (arrow pointing at a miniature current-slide render)
