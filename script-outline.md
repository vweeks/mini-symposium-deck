# Script Outline — Chameleon Mini-Symposium Talk

**Event:** 6th Chameleon Cloud User Meeting — Mini-Symposium: *Applying AI to Accelerate Computational Reproducibility and Replicability*
**Speaker:** Victor Weeks (NCAR/RAL, 2026 BSSw Fellow)
**Date:** April 16, 2026
**Budget:** 7–8 minutes (target ≈ 7:00, buffer ≈ 1:00)

---

## Narrative spine

The symposium asks how AI can help us **reproduce** computational artifacts. I want to flip the coin: what happens when AI **builds** those artifacts in the first place? The fellowship I'm starting — **Scientific Agentic Engineering (SAE)** — is a tool-agnostic methodology for disciplining that build side: validation loops, human oversight, domain-specific safeguards. Build-time discipline is upstream of reproduce-time reliability; the same principles arm both sides.

I'll illustrate one concrete facet — **tech-stack provenance** — using this very deck as a meta-demo (my first reveal.js + multiplex presentation, built with AI help, and the latest in a pile of scrapped drafts). That's one spoke of what SAE addresses, not the headline. The headline is SAE itself.

---

## Time budget at a glance

| # | Beat                                              | Time | Cumulative |
|---|---------------------------------------------------|-----:|-----------:|
| 1 | Cover                                             |  20s |      0:20  |
| 2 | Two sides of the same coin                        |  45s |      1:05  |
| 3 | Rapidly-evolving AI-assisted-dev spectrum         |  60s |      2:05  |
| 4 | Meta-demo: this deck (and its scrap pile)         |  70s |      3:15  |
| 5 | One facet: tech-stack provenance                  |  55s |      4:10  |
| 6 | Scientific Agentic Engineering (the frame)        |  90s |      5:40  |
| 7 | Upstream / downstream                             |  45s |      6:25  |
| 8 | Follow the project                                |  25s |      6:50  |

Total ≈ **6:50**, leaving ≈ **1:00** of buffer/transition.

---

## Beat 1 — Cover (~20s)

**Intent:** Establish who, what, why-I'm-here. No thesis yet.

**Talking points:**
- "Hi, I'm Victor Weeks — software engineer at NSF NCAR's Research Applications Lab, and one of the 2026 BSSw Fellows."
- "My fellowship project is called **Scientific Agentic Engineering**, and today I want to share where it sits relative to this symposium's focus on R&R."

**On screen:**
- Title: *Scientific Agentic Engineering: Disciplining AI on the Build Side of R&R*
- Subtitle: *6th Chameleon User Meeting — Mini-Symposium on AI for R&R*
- Presenter line: Victor Weeks — NSF NCAR / RAL — 2026 BSSw Fellow
- Date chip: April 16, 2026

**Template features:** `.slide-cover`, wave background (e.g., `series-A` at medium intensity), `<ncar-title-bar>` not used on cover.

**→ Transition:** "Let me frame why I'm up here given today's agenda."

---

## Beat 2 — Two sides of the same coin (~45s)

**Intent:** Frame my contribution as complementary to the symposium, not competing.

**Talking points:**
- "This symposium is about AI as an **adaptive infrastructure layer** for reproducing artifacts — rebuilding environments, resolving dependency conflicts, navigating testbed quirks. Downstream work: the artifact already exists."
- "My fellowship sits on the other side of the same coin: AI **building** scientific software in the first place. Upstream work, before the artifact is ever handed to AD/AE."
- "These aren't competing agendas — they're the same coin. And if we get the build side wrong, the reproduce side inherits the mess."

**On screen:**
- Title bar: *Two sides of the same coin*
- Two labels on opposite sides of a centered "coin" graphic — auto-animate them converging / merging in:
  - Left: **AI to reproduce artifacts** (symposium)
  - Right: **AI to build artifacts** (fellowship)
- Small caption after reveal: "Same principles. Different direction."

**Template features:** auto-animate with `data-id` on the two labels; fragment fade-in for the caption.

**→ Transition:** "So — where is 'AI building scientific software' even at, in April 2026?"

---

## Beat 3 — The rapidly-evolving AI-assisted-dev spectrum (~60s)

**Intent:** High-level tour. Make the audience feel the pace; promise depth later.

**Talking points:**
- "The landscape is moving fast — month to month, not year to year. Here's a rough spectrum of what 'AI-assisted development' means today:"
  - **Tab-complete** (Copilot-style, in-editor)
  - **Console copy/paste** (chat with an LLM, paste code back and forth)
  - **MCP and tool use** (agents calling APIs, filesystems, services)
  - **Planning / plan-mode workflows** (agent designs the change before editing)
  - **Autonomous agent teams** (multi-agent with delegation, long-horizon tasks)
- "Three things to notice. One: **these are not mutually exclusive** — most of us use several in a day. Two: **each step up trades developer oversight for throughput**. Three: **this list will be out of date by the time I finish the fellowship** — and that's actually part of the point."

**On screen:**
- Title bar: *The AI-assisted-dev spectrum*
- Five stacked chips, revealed as fragments (or auto-animate from a single card):
  1. Tab-complete
  2. Console copy/paste
  3. MCP & tool use
  4. Planning mode
  5. Autonomous agent teams
- Footnote (final fragment): *"Not mutually exclusive. Landscape shifts monthly."*

**Template features:** `.auto-animate-stack` with `data-id` chips OR `.slide-fragments` with fragment fade-in; subtle accent color on "Autonomous agent teams" to hint at risk gradient.

**→ Transition:** "I want to make that pace concrete, because I'm standing on top of it right now."

---

## Beat 4 — Meta-demo: this deck (and its scrap pile) (~70s)

**Intent:** Self-referential concrete example. Also the credibility beat.

**Talking points:**
- "Quick meta moment: these slides are my **first reveal.js presentation**, and they're running over **multiplex** — a protocol I'd never used before. Two weeks ago I didn't know either tool."
- "AI-assisted development is how I got here fast. It found the template, it wired the multiplex broker, it suggested the layouts. Genuinely useful — and a great example of how AI lets you wield tech you don't yet fully understand."
- *[Credibility beat — slow down here]:* "But I'll be honest: what you're looking at is the **latest iteration**. Earlier drafts of this deck, and plenty of other artifacts in my fellowship warm-up, have been scrapped entirely. The expertise I'm bringing to this fellowship comes as much from what I've learned **not** to do as from what I've kept. The scrap pile is the classroom."
- "And — this is low-stakes. A wrong layout choice is aesthetic debt. Now imagine the stakes are different."

**On screen:**
- Title bar: *This deck is an artifact*
- Left side: screenshot or inline thumbnail of the deck (or a playful "you are here" arrow)
- Right side (revealed as fragments):
  - *First reveal.js deck. First time with multiplex.*
  - *AI accelerated the tech-stack discovery.*
  - *And there's a scrap pile behind it.* (slightly offset / dimmed typographic treatment)
- Optional small stat-box trio: "1st reveal.js deck" • "1st multiplex run" • "N drafts scrapped"

**Template features:** `.slide-with-image` or custom two-column; fragment fade-in for each line; stat-boxes optional.

**→ Transition:** "So — what happens when we move this same workflow into science?"

---

## Beat 5 — One facet: tech-stack provenance (~55s)

**Intent:** Introduce the novel illustration as an **example**, not the thesis. Pivot into SAE.

**Talking points:**
- "When I made this deck, if the AI picked a dubious library or a quirky layout, the cost is cosmetic."
- "When an AI helps build scientific software, the AI might pick a numerical library, a quadrature method, a convergence tolerance, a random-seed scheme. Those decisions often **pass CI**. They can still corrupt the science."
- "For R&R, the gap isn't 'explain the AI model' — that's a hard, maybe unsolvable problem. The tractable gap is: **explain the tech-stack decisions the AI made on your behalf.** Which library. Which method. Which tolerance. Captured, reviewable, reproducible."
- "That's one concrete thing I want the fellowship's methodology to make routine — but it's just one spoke. Let me show the broader frame."

**On screen:**
- Title bar: *One facet: tech-stack provenance*
- Centered contrast: two framed boxes side-by-side
  - Left: *Slides* → "wrong choice = aesthetic debt"
  - Right: *Science* → "wrong choice = corrupted result that passes CI"
- Fragment under the pair: *The gap isn't 'explain the AI' — it's trace what the AI chose for you.*
- Final fragment: *One spoke. Now the hub.*

**Template features:** `.two-col` content split; `.h-separator` under the pair; fragment reveals with `highlight-current-blue` on the final line.

**→ Transition:** "Here's the frame that spoke lives in."

---

## Beat 6 — Scientific Agentic Engineering (the frame) (~90s)

**Intent:** Central slide. Name SAE. Name the three pillars. Name the deliverables. Promise depth.

**Talking points:**
- "Scientific Agentic Engineering is a **tool-agnostic** methodology for integrating AI agents into high-stakes scientific software workflows. It rests on three pillars."
- *[reveal pillar 1]* "**Validation loops** — domain-specific checks at each decision point, not just end-of-pipeline. Unit checks, conservation checks, precision checks — where the science lives."
- *[reveal pillar 2]* "**Human-in-the-loop oversight** — defined review gates where a human must say yes before the agent keeps going. Not everywhere. At the decisions that matter."
- *[reveal pillar 3]* "**Domain-specific safeguards** — the guardrails that encode what 'wrong' means for a given scientific domain. Includes tech-stack provenance, but also things like numerical-precision tests, physics-violation detectors, and scope-drift containment."
- "Tool-agnostic because the tools will change — MCP, agent frameworks, even models are shifting monthly. The **principles** are the durable part."
- "Over the next 12 months the fellowship delivers: a framework draft, a reference workflow exercise, a community repo of MCP templates and scientific skills, an interactive tutorial series, and live workshops. I'll dig into each of those elsewhere — today this is the map."

**On screen:**
- Title bar: *Scientific Agentic Engineering*
- Three-column layout, each column a pillar with icon + 1-line description:
  1. **Validation loops** — domain checks at each decision point
  2. **Human-in-the-loop oversight** — review gates at decisions that matter
  3. **Domain-specific safeguards** — the guardrails, incl. tech-stack provenance
- Fragment beneath: *Tool-agnostic. Principles over products.*
- Small footer line (final fragment): *Deliverables: framework · reference workflow · community repo · tutorials · workshops · 12 months.*

**Template features:** `.three-col`; fragment fade-in per column; `.accent` on "Scientific Agentic Engineering" in the title.

**→ Transition:** "And here's how the build side and reproduce side connect."

---

## Beat 7 — Upstream / downstream (~45s)

**Intent:** Close the loop with the symposium. A single memorable line.

**Talking points:**
- "If we take one idea from this talk, take this: **build-time discipline is upstream of reproduce-time reliability.**"
- "The same three pillars — validation loops, oversight, domain safeguards — also apply to the **reproduce-side** agents the rest of this symposium is about. Same principles. Different direction. Same coin."

**On screen:**
- Bolder-statement slide (large centered text over a wave background):
  > **Build-time discipline is upstream of reproduce-time reliability.**
- Small subline: *Same pillars arm both sides of the coin.*

**Template features:** `.slide-bolder-statement` with `data-background-image` (high-intensity wave); `data-transition="convex"`.

**→ Transition:** "Where to follow along."

---

## Beat 8 — Follow the project (~25s)

**Intent:** Clean close. Give the audience a place to go.

**Talking points:**
- "I'll be building this all in public over the fellowship. Site is up — first-milestone framework draft lands this summer."
- "If AI-assisted scientific software is something you're wrestling with, I'd love to hear from you. Thanks."

**On screen:**
- Title bar: *Follow the project*
- Three-column or simple list:
  - **Site** — vweeks.github.io/scientific-agentic-engineering *(placeholder — confirm final URL)*
  - **Fellowship** — bssw.io/fellowship
  - **Contact** — email / GitHub / institutional handle *(fill in)*
- QR code (optional) to the site

**Template features:** simple `.slide-content` or `.three-col`; QR-code image optional.

---

## Speaker-note porting plan (for Phase B)

Each `<aside class="notes">` block will contain, in order:
1. **Beat's intent** (1 line)
2. **Talking points** — the near-verbatim script above, tightened to bullets
3. **Timing target** (e.g., `~70s`)
4. **Fragment cues** (e.g., "click 1 = Tab-complete; click 5 = footnote")
5. **Transition line** into the next slide

Keep notes short enough to scan in presenter view under stage lights.

---

## Open questions for review

1. **Title wording** on the cover slide — is *"Scientific Agentic Engineering: Disciplining AI on the Build Side of R&R"* right, or do you prefer something shorter / less academic?
2. **Project URL and contact handles** on the closing slide — what's final?
3. **Beat 4 visuals** — screenshot of the deck vs. a "you are here" arrow on a miniature of the current slide? The arrow is cuter; the screenshot is clearer.
4. **Beat 6 pillar wording** — SOW uses "human oversight" and "domain-specific safeguards"; I tightened to "human-in-the-loop oversight" and kept "domain-specific safeguards." Any preferred phrasing?
5. **Is there a physical/hybrid component** — do I need a URL on every slide for multiplexed remote viewers, or is a single closing QR enough?
