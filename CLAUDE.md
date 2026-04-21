# Practicum Website

V2 of the SGO wraparound services site. Built with Alex Ahlstrom and Prof. Evie Elson at UVA Darden. This is the **implementation layer** — academic strategy, research, and proposals live at:

```
C:\Users\ahlst\Files\Education\Darden-MEd\Practicum & Independent Study\
```

**V1 (deprecated):** `Files/Dev/Projects/closing-the-cracks/` — do not continue work there.

**Organization name:** TBD. Use `[PLACEHOLDER NAME]` everywhere — find-and-replace when decided. Never use any other stand-in.

---

## Design Reference — `_design/`

All design and planning assets live in [`_design/`](_design/). This folder is read-only reference — never serve these files or import them directly into pages (except `tokens.css`, which is copied into `css/`).

### Quick decision tree — which file to open

| You are about to… | Open this file |
|---|---|
| Write any HTML structure or content | `design-brief.md` |
| Write any CSS | `tokens.css` + `handoff-readme.md` |
| Make any visual decision (color, layout, spacing, linework, component style) | `handoff-readme.md` |
| Build a component for the first time | `component-reference.html` (open in browser) |
| Work on `/solution` page | `sgo-page-notes.md` in addition to brief |
| Decide what to build next or check build status | `roadmap.md` |
| Understand what should be on a specific page or section | `architecture.md` |

**Never start any work without reading the relevant file first.** Reading before building is not optional.

---

## Per-File Instructions

### `_design/design-brief.md`
**What it is:** The canonical source for site content, page structure, and copy. This is the single source of truth for what the site says and how it is organized.

**What it contains:**
- Project overview, audience description, tone/voice rules
- Site map (6 pages, URLs, primary jobs)
- All final page copy, organized by page and section number
- Component specifications (what each interactive component does and what content it holds)
- Visual design direction (confirmed: Blueprint × Field Notes — see §5)
- Open items list (what is decided vs. what is still pending)
- Placeholder policy (`[PLACEHOLDER NAME]` convention)

**How to use it:**
- Read the relevant page section(s) before writing any HTML or content
- Follow the section numbering (§1.1, §4.3, etc.) — architecture.md uses the same numbering
- Content in this file is final unless marked "draft" or "TBD"
- When a blocking item is resolved (org name, headline, etc.), update both this file's §13 open items and the relevant content data file
- Do not invent copy — all site text comes from this brief or is explicitly marked as a placeholder

**Important notes:**
- §5 (Visual Design) is confirmed final — do not reference any prior design brief
- §13 (Open Items) tracks what is blocked vs. decided — check this before assuming anything is ready to build
- The certification model is mentioned in §7 body copy only — it has no nav item, no stub page, no broader site presence

---

### `_design/tokens.css`
**What it is:** Production-ready CSS custom properties for the entire design system. This is the one CSS file that is copied directly from `_design/` into `css/` for use in production.

**What it contains:**
- All color primitives and semantic aliases
- Three font family variables
- Full typography scale: sizes, weights, line-heights, letter-spacing
- Complete spacing scale (sp1=4px through sp10=128px)
- Stroke weights and dash patterns
- Border radius values (only `--radius-none: 0` and `--radius-sm: 2px`)
- Opacity values, grid variables, node sizing, motion easing curves, z-index scale
- Base CSS resets and `body` defaults
- `.with-grid` utility class for the visible grid overlay
- Type scale utility classes (`.text-h1`, `.text-body`, `.text-spec-label`, etc.)
- Component token map comments (token-to-component bindings)

**How to use it:**
- Copy `_design/tokens.css` to `css/tokens.css` and never edit it manually
- Import it as the first stylesheet in every HTML `<head>`
- **Never hardcode any value** that has a token. If you need a color, use `var(--color-paper)`. If you need a spacing value, use `var(--sp5)`. If a value isn't in the token file, it probably shouldn't exist.
- When in doubt about what token to use, search the file — tokens are named semantically

**Rules:**
- `--color-paper` (`#F7F6F2`) is always the background — never pure white
- `--color-ink` (`#1F1F1F`) is always text and linework — never pure black
- `--color-blue` (`#1E3A5F`) is for Blueprint Panels only
- `--color-yellow` (`#E7C857`) is for highlights only — never structural use
- `--radius-sm` (2px) is the maximum border radius anywhere on the site

---

### `_design/handoff-readme.md`
**What it is:** The implementation specification for the Blueprint × Field Notes design system. If `tokens.css` gives you the values, this file gives you the rules for how to use them.

**What it contains:**
- Color system rules (usage constraints, forbidden combinations)
- Typography specs with exact CSS examples for each typeface role
- Grid and spacing system (12-column, 8px baseline, visible grid)
- Line and stroke hierarchy (weights, dash patterns)
- All core component specs: Simple Card, Stacked Cards, Spec Card, Spec Header (3 variants), Blueprint Panel, Diagram Node (4 states)
- Complete Annotation Kit: SVG arrows, hand-drawn filter, highlight mark, margin note, label tag
- Diagram patterns: canonical SGO fund flow, flow diagram rules
- Motion and interaction rules (scroll triggers, easing, `prefers-reduced-motion`)
- Texture and imperfection permitted marks
- Section structure pattern (framing → diagram → annotation → breakdown)
- Asset and dependency list (fonts, Lucide icons CDN)
- Quality checklist (run before shipping any page)
- Failure mode list (too much yellow, Blueprint Panel overuse, etc.)
- **Project-Specific Decisions section** (at end of file): Blueprint Panel placement rules for this site, footnote treatment spec, IMPORTANT TO KNOW callout component spec

**How to use it:**
- Consult before any layout decision, color choice, component usage, or motion implementation
- The Project-Specific Decisions section at the end overrides or supplements the general system for this site — read it every session
- Run the Quality Checklist before marking any page complete
- When a new project-wide design decision is made (not in the general system), add it to the Project-Specific Decisions section

**Key rules to never forget:**
- No gradients, no drop shadows, anywhere
- Accent colors (yellow + green combined) ≤ 15% of any surface
- Blueprint Panel: once or twice per page max — landing page hero only as bg; all other pages for emphasis only
- Motion: scroll-triggered or user-triggered only — no auto-play
- Three typefaces only: Source Serif 4, Inter, IBM Plex Mono

---

### `_design/component-reference.html`
**What it is:** A high-fidelity visual reference showing every component, pattern, and token in the design system. This is the visual source of truth — match it precisely.

**What it contains:**
- Color palette swatches (Section 01)
- Typography scale examples (Section 02)
- Line and stroke system (Section 03)
- Line primitives (Section 04)
- Annotation Kit in action (Section 05)
- Grid system (Section 06)
- Diagram components: nodes, arrows, flow (Section 07)
- Spec Header variants (Section 08)
- Card components: Simple, Spec, Stacked (Section 09)
- Blueprint Panel (Section 10)
- Interactive SGO Fund Flow diagram with scroll animation (Section 11)
- Icon set via Lucide (Section 12)
- Texture and imperfection examples (Section 13)

**How to use it:**
- Open in a browser (not as code) alongside your editor when building a component for the first time
- This is not production code to copy — it is a reference to match visually
- If something looks different from this file, your implementation is wrong
- When unsure how a component should look, this file answers the question

**Important notes:**
- The interactive fund flow in Section 11 shows the exact scroll animation pattern to implement in `flow-diagram.js`
- Section 13 shows the exact level of texture/imperfection that is acceptable — do not exceed it

---

### `_design/sgo-page-notes.md`
**What it is:** Editorial priority and tone notes specifically for the Solution page (`/solution`). These notes clarify decisions that supplement the design brief where tone, emphasis, or de-emphasis needs to be spelled out.

**What it contains:**
- Opening framing priority (ECCA / One Big Beautiful Bill Act — lead with scale and opportunity)
- State map: confirmed required element
- How It Works: keep flow simple and accessible, not bureaucratic
- The 11 Requirements: confirmed as priority visualization — all visible collapsed, expandable
- IMPORTANT TO KNOW callouts: confirmed pattern, listed use cases
- Who Can Become an SGO: confirmed, per design-brief §4.5
- Defining a Scope: confirmed, per design-brief §4.6
- Pennsylvania Case Study: confirmed, per design-brief §4.7
- What to de-emphasize: state-level decisions (quick blurb only), unresolved regulatory items (flag but don't expand), broad SGO content (skip)
- Tone reminder: this page must feel like a tool, not a theory — every section should answer "what does this mean for me?"

**How to use it:**
- Read this before building any section of `/solution`
- Where this file conflicts with `design-brief.md`, the notes file's editorial judgment takes precedence for the Solution page
- The "What to De-emphasize" section is as important as what to include — do not skip it

---

### `_design/architecture.md`
**What it is:** The plain-language implementation contract for the site. Describes exactly what is built for every page, section, and component — the translation layer between design brief content and actual code.

**What it contains:**
- Full annotated file structure for the project
- Content data layer design (how `content/*.js` files work, example schema)
- Shared elements: nav, footer, page shell
- Per-page specifications for all 6 pages — every section, what's built, what component is wired in, what content source is used, what is blocked
- Component library inventory (CSS classes + JS files + pages used)
- Transition falloff visual notes
- Deployment spec
- Placeholder policy table

**How to use it:**
- Read the relevant page section before starting work on any page
- This file answers "what exactly goes on this page" — the brief answers "what does the content say"
- Update the "Blocked on" notes when blockers are resolved
- Update status notes as sections are completed
- If a new component is added or a section's treatment changes, update this file to match

---

### `_design/roadmap.md`
**What it is:** The living build plan. Phases, tasks, status, and blocking items — organized so any session can pick up where the last left off.

**What it contains:**
- Status key (⬜ not started, 🔄 in progress, ✅ complete, 🚫 blocked, ⚠️ needs decision)
- 8 phases + Phase 8.5 (one-pager, later): Foundation → Component Library → Solution → Problem → About → Landing → Resources/Contact → Polish → Deploy → One-Pager
- Per-task status and notes for every build step
- Standing blocked items (things awaiting Alex's input)
- Pending content updates post-launch (Treasury guidance, state map, org name, etc.)

**How to use it:**
- Check this at the start of every session before writing any code
- Update task status in real-time as work progresses — mark ✅ immediately when done
- When a blocked item is resolved, update both the "Standing Blocked Items" table and the relevant phase task
- When making a new decision that affects the build plan, add it here
- This is the single source of truth for what phase we're in and what to work on next

---

## Workflow

**Always invoke `/frontend-design` before writing any HTML/CSS/JS.** This applies to every new page, section, or component — not just initial builds. Invoke it before writing any frontend code.

**Session start checklist:**
1. Read `_design/roadmap.md` — what phase are we in, what's next, what's blocked?
2. Read `_design/architecture.md` for the specific page/section being built
3. Read the relevant section of `_design/design-brief.md` for content
4. Open `_design/component-reference.html` in a browser if building any new component
5. Invoke `/frontend-design`

**Before marking any page complete:**
- Run the Quality Checklist from `_design/handoff-readme.md`
- Check the relevant phase tasks in `_design/roadmap.md` and mark ✅

**Content edit rule:** Never edit copy directly in HTML. All copy changes go in `content/*.js`. If you're touching HTML for a copy change, you're doing it wrong.

**Placeholder rule:** `[PLACEHOLDER NAME]` is the only acceptable org name placeholder. Find-and-replace across all `content/*.js` files when the name is decided.

---

## Stack

- Pure HTML/CSS/JS — no frameworks, no build tools
- `tokens.css` is the only shared CSS file (imported globally)
- Netlify deployment via GitHub
- No analytics, no CMS, no contact form (email links only)

<!-- HQ-INTEGRATION: managed by HQ, do not edit manually -->
## HQ Integration

This project is registered with HQ at `C:\Users\ahlst\Files\HQ\`.

**Session close:** When wrapping up a session, run `/session-close`. This writes a completion note to `Files/HQ/_incoming/` so HQ stays current on this project's status. No manual steps required.

**Dispatch briefs:** HQ may provide a handoff brief at session start. Read it before beginning work.

**Common formats:** See `Files/HQ/ARCHITECTURE.md` for completion note and dispatch brief formats.
<!-- END HQ-INTEGRATION -->
