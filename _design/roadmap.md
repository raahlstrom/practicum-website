# Build Roadmap
**Practicum Website — Blueprint × Field Notes**
**Last updated:** 2026-04-22

This is the living build plan. Update status, notes, and blocking items as work progresses. Phases are ordered by dependency — each phase should be complete before the next begins.

---

## Status Key

| Symbol | Meaning |
|--------|---------|
| ⬜ | Not started |
| 🔄 | In progress |
| ✅ | Complete |
| 🚫 | Blocked |
| ⚠️ | Needs decision |

---

## Phase 0 — Foundation
*Everything else depends on this. Complete before writing any page code.*

| # | Task | Status | Notes |
|---|------|--------|-------|
| 0.1 | Create GitHub repository | ✅ | `raahlstrom/practicum-website` on GitHub |
| 0.2 | Initialize git, create `.gitignore` | ✅ | `.gitattributes` with LF normalization also added |
| 0.3 | Create `netlify.toml` | ✅ | Clean URL redirects for all 6 pages |
| 0.4 | Copy `_design/tokens.css` → `css/tokens.css` | ✅ | |
| 0.5 | Write `css/base.css` | ✅ | |
| 0.6 | Write `css/components.css` | ✅ | All design system components. QA'd in Phase 1.9. |
| 0.7 | Write `css/nav.css` + `js/nav.js` | ✅ | |
| 0.8 | Create all 6 HTML shells | ✅ | `index.html` through `contact.html` |
| 0.9 | Write `js/render.js` | ✅ | All render utilities including accordion, tabs, expandable list, person card, preview card, doc card, callout |
| 0.10 | Define content data schemas | ✅ | All 6 `content/*.js` files with real copy |
| 0.11 | Browser verify | ✅ | All pages load |
| 0.12 | Push to GitHub | ✅ | Live at https://practicum-website.netlify.app |

**Phase 0 deliverable:** A working empty site on Netlify — correct design system base, all pages accessible, no content.

---

## Phase 1 — Interactive Component Library
*Build and test every interactive component before wiring to any page. Complete before Phases 2–4.*

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1.1 | Three-panel accordion (`accordion.js`) | ✅ | Implemented in `render.js` → `renderAccordion()`. All 3 panels collapsed, independent state, keyboard accessible. |
| 1.2 | Tabbed panel (`tabs.js`) | ✅ | Implemented in `render.js` → `renderTabs()`. Arrow-key nav, full ARIA roles. |
| 1.3 | Expandable list (`requirements-list.js`) | ✅ | Implemented in `render.js` → `renderExpandableList()`. 11 SGO requirements, inline callout on Req 06. |
| 1.4 | 5-step flow diagram (`flow-diagram.js`) | ✅ | HTML nodes + SVG arrows. IntersectionObserver scroll build. Nodes stagger 150ms. Arrows draw via stroke-dashoffset. `prefers-reduced-motion` instant. |
| 1.5 | Logic model diagram (`logic-model.js`) | ✅ | 5-column CSS layout. Column stagger reveal on scroll. Horizontal scroll on mobile. |
| 1.6 | State map (`state-map.js`) | ✅ | D3 v7 + TopoJSON v3 + us-atlas. Green/gray/light color coding. Tooltip on hover/tap. Count totals in legend. Note: requires D3 + TopoJSON script tags on page. |
| 1.7 | Transition falloff visual | ✅ | `transition-falloff.js`. Full version (problem page) + simplified (landing). Yellow shading at transitions, annotated drop points. |
| 1.8 | Build `component-test.html` | ✅ | All 7 interactive components + static component reference. Real content data wired in. |
| 1.9 | Design system QA pass | ✅ | QA checklist passed. paper bg, three typefaces, accent ≤15%, motion scroll-triggered, Blueprint Panel once in reference, no gradients/shadows. |

**Phase 1 deliverable:** `component-test.html` — every interactive component working and QA'd.

---

## Phase 2 — Solution Page (`solution.html`)
*Most complex page. Build first as the design proving ground.*

**Note:** Section structure was redesigned during build. See `architecture.md` for actual section map.

| # | Task | Status | Notes |
|---|------|--------|-------|
| 2.1 | Populate `content/solution.js` | ✅ | All copy: SGO intro, 5-step flow, ECCA, orbit items, 11 requirements, state map, PA case study, defining scope |
| 2.2 | Build page layout + section structure | ✅ | 8 sections built; section numbers reorganized from original plan |
| 2.3 | §4.0 SGO Intro | ✅ | Two-column split: large serif framing + student avatars + pipe image |
| 2.4 | §4.1 How It Works — 5-step illustrated flow | ✅ | CSS-native steps, icon PNGs, green arrow between steps, scroll stagger animation |
| 2.5 | §4.2 The ECCA | ✅ | Split-layout: key stats (3 numbers) right, prose + sidenote left |
| 2.6 | §4.3 What Can They Fund | ✅ | Student orbit visual: 6 expense categories radiating from student icon; IMPORTANT TO KNOW callout |
| 2.7 | §4.4 Eleven Requirements | ✅ | Expandable list; inline callout on Req 06; shield icon plaque |
| 2.8 | §4.5 State Map | ✅ | D3 map wired; IMPORTANT TO KNOW callout; margin note; legend |
| 2.9 | §4.6 Pennsylvania — Blueprint Panel | ✅ | Contained panel; outcome + implications paper cards; circled takeaway; callout |
| 2.10 | §4.7 Defining a Scope | ✅ | Three-beat: framing statement → prose + pull quote + icon → Blueprint Panel position statement |
| 2.11 | §4.5 Who Can Participate | 🚫 | **Removed by user decision** — "doesn't feel relevant to our audience" (data retained in `content/solution.js`) |
| 2.12 | §4.8 + §4.9 State-Level Decisions + Open Questions | 🚫 | **Removed by user decision** — "doesn't feel relevant to our audience" (data retained in `content/solution.js`) |
| 2.13 | Mobile responsive pass | ✅ | All breakpoints fixed: two-column grids collapse, cs-stats-grid stacks at 600px, zero page overflow at 375/768/1280px |
| 2.14 | Quality checklist | ✅ | Passed: no drop shadows, no forbidden gradients, only 3 typefaces (Source Serif 4 / Inter / IBM Plex Mono), all tokens resolve, button font reset added to base.css |

**Phase 2 deliverable:** `/solution` fully complete and mobile-ready.

---

## Phase 3 — Problem Page (`problem.html`)

| # | Task | Status | Notes |
|---|------|--------|-------|
| 3.1 | Populate `content/problem.js` | ✅ | Complete: opening thesis, why-gains-lost, 3 breakpoints with citations, bridge, fundingGap. |
| 3.2 | Build page layout + section structure | ✅ | 5 sections built; light green hero, clean paper body background |
| 3.3 | §3.0 Opening thesis | ✅ | Light green tinted hero; 4 student avatars |
| 3.4 | §3.1 Why Gains Are Lost | ✅ | Leaky pipe image left; "Structural." serif accent + yellow underline right; 3 paragraphs |
| 3.5 | §3.2 Three Breakpoints — accordion | ✅ | Custom CSS/JS accordion; stat callout + footnotes per panel |
| 3.6 | §3.3 Oregon Case Study — full-bleed Blueprint Panel | ✅ | Full-bleed Blueprint Panel; header zone with state SVG; stats; 3 design principles; pull quote; footnotes |
| 3.7 | §3.4 The Funding Gap — two-panel comparison diagram | ✅ | Blueprint × Field Notes horizontal timeline; 2 stacked panels (Institutional vs Student-centered); avatar falloff; continuous funding/accountability lines; pivot pull quote |
| 3.8 | §3.5 Bridge to Solution | ✅ | Journey-to-goal icon; two bridge paragraphs; CTA button |
| 3.9 | Transition falloff visual | 🚫 | **Not used** — replaced by leaky pipe image per user decision |
| 3.10 | Mobile responsive pass | ✅ | fg-panels horizontally scrollable at 375px; zero page overflow |
| 3.11 | Quality checklist | ✅ | Passed as part of site-wide audit (2026-04-22) |

**Phase 3 deliverable:** `/problem` ✅ complete.

---

## Phase 4 — About Page (`about.html`)
*Content complete and final. Single-scroll layout.*

| # | Task | Status | Notes |
|---|------|--------|-------|
| 4.1 | Populate `content/about.js` | ✅ | All final copy: mission, vision, weBelieve (5 paras), whoWeAre (2 mandates + closing), ourModel (problems + body + logic model levels) |
| 4.2 | Decide layout approach | ✅ | Single scroll, varied section rhythms: Blueprint Panel hero, two-col beliefs, spec cards for mandates, logic model diagram |
| 4.3 | §2.1 Mission & Vision | ✅ | Blueprint Panel opener; large serif mission (hydrated via data-content); vision as yellow-accent pull quote block inside panel |
| 4.4 | §2.2 We Believe | ✅ | Two-col layout (5fr/4fr); first para body-lg; yellow `.believe-hl` on "most schools are not yet prepared to use it"; margin-note annotation on para 3; right col has annotated para 3 + para 4 |
| 4.5 | §2.3 Who We Are | ✅ | Intro prose; two mandate Spec Cards (label-tag--green "First"/"Second", icon PNG, body); italic closing para with left-border rule |
| 4.6 | §2.4 Our Model | ✅ | Intro + three-problem list (mono numeral + body, ruled); two body paras; logicModelIntro label; logic model diagram wired (levels adapted from body string → items array) |
| 4.7 | Mobile responsive pass | ✅ | believe-layout collapses to 1-col at 900px; wwa-mandates collapses to 1-col at 900px; mission text smaller at 600px |
| 4.8 | Quality checklist | ⬜ | Run before marking complete |

**Phase 4 deliverable:** `/about` ✅ complete (quality checklist pending).

---

## Phase 5 — Landing Page (`index.html`)

| # | Task | Status | Notes |
|---|------|--------|-------|
| 5.1 | Populate `content/landing.js` | ✅ | Headline Option A; thesis default set; problemTeaser + solutionTeaser copy ready |
| 5.2 | §1.2 Problem teaser | ✅ | Two-column; body paragraph; 3 stacked transition callout blocks with arrow icon + stat |
| 5.3 | §1.3 Solution teaser | ✅ | Spec header; intro paragraph; 3 preview cards rendered from content |
| 5.4 | §1.1 Hero — Blueprint Panel | ✅ | Built from existing assets: student avatar composition in paper frame on blue panel; green continuity thread + stage labels; no external image needed |
| 5.5 | Mobile responsive pass | ✅ | Hero collapses to 1-col at 860px; solution cards 2-col at 860px, 1-col at 600px |
| 5.6 | Quality checklist | ⬜ | Pending |

**Phase 5 deliverable:** `/` ✅ complete (quality checklist pending).

---

## Phase 6 — Resources + Contact (`resources.html`, `contact.html`)

| # | Task | Status | Notes |
|---|------|--------|-------|
| 6.1 | Populate `content/resources.js` | ✅ | One placeholder doc card (SGO Quick Reference, Coming Soon) |
| 6.2 | Build `/resources` | ✅ | Intro section; doc grid using `renderDocCard`; placeholder card styled muted |
| 6.3 | **PROMPT ALEX** for headshots | 🚫 | Need: Alex + Evie headshot images — `person-card-photo-placeholder` shown until then |
| 6.4 | Populate `content/contact.js` | ✅ | Statement + engagementNote populated; people array ready; photos set to null (placeholder) |
| 6.5 | Build `/contact` | ✅ | Statement section (two-column with space for visual); people grid with `renderPersonCard` (Lucide user placeholder until headshots arrive) |
| 6.6 | Mobile responsive pass (both pages) | ✅ | contact-layout collapses at 860px; people-grid + doc-grid at 600px |

**Phase 6 deliverable:** `/resources` ✅ complete; `/contact` ✅ complete (headshot placeholders shown until Alex provides images).

---

## Phase 7 — Cross-Site Polish + QA

| # | Task | Status | Notes |
|---|------|--------|-------|
| 7.1 | Global nav audit | ✅ | Active state verified; mobile hamburger open/close working; defer added to nav.js across all shells |
| 7.2 | Footer audit | ✅ | Footer consistent via `buildFooter()` in nav.js; tagline added per architecture spec; `.footer-brand` + `.footer-tagline` CSS added |
| 7.3 | Full responsive audit | ✅ | Hero `min-height: 100svh` progressive enhancement added (fixes mobile browser chrome overflow); all page layouts verified at 375/768/1280px |
| 7.4 | Accessibility audit | ✅ | `focus-visible` global ring (green); skip links on all 6 pages; ARIA landmarks + labels; accordion/tabs/expandable-list ARIA correct; avatar alt fixed to `""` inside labeled containers; solution.html h1 added |
| 7.5 | Performance check | ✅ | `defer` on all CDN + local scripts; images not yet optimized (acceptable for v1) |
| 7.6 | SEO basics | ✅ | `<title>`, `<meta description>`, `og:type/title/description`, `theme-color` added to all 6 HTML pages |
| 7.7 | Cross-browser check | ⬜ | Chrome, Firefox, Safari (desktop + mobile) |
| 7.8 | Final quality checklist | ✅ | Passed: paper bg, 3 typefaces, token-only colors/fonts, no decorative gradients/shadows, Blueprint Panel scarcity maintained, accent ≤15%, motion scroll-triggered; solution.html `<title>` aligned to OG title |
| 7.9 | Replace Lorem Ipsum check | ✅ | Stale "Lorem Ipsum" comment removed from `content/problem.js`; transition callout stats moved from hardcoded HTML to `content/landing.js`; contact spec header fixed (§6.1 — The Team) |
| 7.10 | `[PLACEHOLDER NAME]` audit | ⬜ | If org name decided, find-and-replace across all content files |

**Phase 7 deliverable:** Site is production-ready.

---

## Phase 8 — Deploy

| # | Task | Status | Notes |
|---|------|--------|-------|
| 8.1 | Final push to `main` | ⬜ | Trigger Netlify deploy |
| 8.2 | Verify all pages live | ⬜ | Click through every page on Netlify URL |
| 8.3 | Test all interactive components on live | ⬜ | Accordion, tabs, flow diagram, state map, expandable list |
| 8.4 | Share URL with Alex + Evie | ⬜ | |
| 8.5 | Custom domain (when decided) | ⬜ | Not blocking launch |

---

## Phase 8.5 — One-Pager (Later)

*Not included in v1. Added after site is live and one-pager design is complete.*

| # | Task | Status | Notes |
|---|------|--------|-------|
| 8.5.1 | Design one-pager (print-ready, 8.5×11") | ⬜ | Must match site visual language |
| 8.5.2 | Add PDF to `assets/` | ⬜ | |
| 8.5.3 | Update `content/resources.js` | ⬜ | Replace placeholder card with real download card |
| 8.5.4 | Update Resources page | ⬜ | Link to PDF |

---

## Standing Blocked Items

These items cannot proceed until Alex provides assets or decisions. Track here so nothing falls through.

| Item | Needed for | Status |
|------|-----------|--------|
| Hero image assets | Landing §1.1 (Phase 5.5) | 🚫 Awaiting |
| Hero headline decision | Landing §1.1 | ⚠️ Default Option A until decided |
| Page 3 final name | Nav, `/problem` | ⚠️ "The Handoff Problem" working default |
| Case study content | Problem §3.3 | ✅ Oregon/Measure 98 content provided by Alex |
| Alex headshot | Contact page | 🚫 Awaiting |
| Evie headshot | Contact page | 🚫 Awaiting |
| Evie's title + email | Contact page | 🚫 Awaiting |
| Organization name | All content | ⚠️ `[PLACEHOLDER NAME]` throughout |
| One-pager content + design | Resources page | ⚠️ Phase 8.5 |

---

## Pending Content Updates (Post-Launch)

| Trigger | What to update | Where |
|---------|---------------|-------|
| Treasury guidance releases (early summer 2026) | 90/10 rule definition, qualified expenses scope, state authority, multi-state SGOs, SGO liability | `content/solution.js` §openQuestions + §requirements items 6 and 7 |
| State opt-in decisions (rolling) | State map data | `content/state-map-data.js` |
| ~~Case study content from Alex~~ | ~~Tabbed panel~~ | ✅ Oregon/Measure 98 content integrated — tab panel replaced with full-bleed Blueprint Panel |
| Org name decision | All content | Find-and-replace `[PLACEHOLDER NAME]` in all `content/*.js` files |
| Hero headline decision | Landing hero | `content/landing.js → hero.headline` |
| Partner logos added | Landing (future) | No infrastructure yet — add when ready |
