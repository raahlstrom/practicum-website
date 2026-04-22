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
| 3.1 | Populate `content/problem.js` | ✅ | Complete: opening thesis, why-gains-lost, 3 breakpoints with citations, bridge. |
| 3.2 | Build page layout + section structure | ✅ | 5 sections built; light green hero, clean paper body background |
| 3.3 | §3.0 Opening thesis | ✅ | Light green tinted hero (rgba(95,175,143,0.06)) matching solution page §4.0 treatment; students-group icon; 3 student avatars |
| 3.4 | §3.1 Why Gains Are Lost | ✅ | Leaky pipe image left (ChatGPT Image…09_18_50 PM.png); "Structural." serif accent + yellow underline right; 3 paragraphs |
| 3.5 | §3.2 Three Breakpoints — carousel | ✅ | Custom CSS/JS carousel (replaced accordion per user decision); slide per breakpoint; counter, dot nav, prev/next, swipe support; stat callout + footnotes per slide |
| 3.6 | §3.3 Oregon Case Study — full-bleed Blueprint Panel | 🔄 | **Redesigning**: replacing Lorem Ipsum tab panel with standalone full-bleed Blueprint Panel (same visual treatment as §4.6 on solution.html). Oregon/Measure 98 content from Alex. See architecture.md for section spec. |
| 3.7 | §3.4 Bridge to Solution | ✅ | Journey-to-goal icon; two bridge paragraphs; CTA button |
| 3.8 | Transition falloff visual | 🚫 | **Not used** — replaced by leaky pipe image per user decision |
| 3.9 | Mobile responsive pass | ✅ | fg-panels horizontally scrollable at 375px; zero page overflow; pivot section clean |
| 3.10 | Quality checklist | ✅ | Passed as part of site-wide audit (2026-04-22) |

**Phase 3 deliverable:** `/problem` complete.

**Oregon case study:** Real content provided by Alex (Measure 98, Oregon 2016). Replaces Lorem Ipsum tab panel with full-bleed Blueprint Panel treatment. Content in `content/problem.js → oregonCaseStudy`.

---

## Phase 4 — About Page (`about.html`)
*Content complete and final. Layout approach decided during build.*

| # | Task | Status | Notes |
|---|------|--------|-------|
| 4.1 | Populate `content/about.js` | ⬜ | All final copy: §2.1–2.4 |
| 4.2 | Decide layout approach | ⬜ | Single scroll vs. internal anchor-nav; decide based on what best serves the content volume and visual engagement |
| 4.3 | §2.1 Mission & Vision | ⬜ | Large serif opener; vision as pull quote or highlight |
| 4.4 | §2.2 We Believe | ⬜ | Five paragraphs — design carefully to prevent word wall. Consider: large first paragraph, yellow highlights, margin annotations, mid-section visual break |
| 4.5 | §2.3 Who We Are | ⬜ | Two mandate blocks as visual elements (Spec Cards or similar); closing paragraph |
| 4.6 | §2.4 Our Model | ⬜ | Intro + three-problem list + logic model diagram; wire `logic-model.js` |
| 4.7 | Mobile responsive pass | ⬜ | |
| 4.8 | Quality checklist | ⬜ | |

**Phase 4 deliverable:** `/about` complete.

---

## Phase 5 — Landing Page (`index.html`)
*Most consequential design. Hero section blocked on image assets — build rest first, hero last.*

| # | Task | Status | Notes |
|---|------|--------|-------|
| 5.1 | Populate `content/landing.js` | ⬜ | All landing copy; hero headline (default: Option A from `design-brief.md` §5.9) |
| 5.2 | §1.2 Problem teaser | ⬜ | Spec header; transition falloff visual (simplified); copy; link → `/problem` |
| 5.3 | §1.3 Solution teaser | ⬜ | Spec header; intro copy; three preview cards |
| 5.4 | **PROMPT ALEX** for hero image assets | 🚫 | **Do not build §1.1 until image assets arrive** |
| 5.5 | §1.1 Hero — Blueprint Panel | 🚫 | **Blocked on image assets.** When assets arrive: Blueprint Panel bg, headline, thesis, hero visual. |
| 5.6 | Mobile responsive pass | ⬜ | Especially critical — partners open links from email on phones |
| 5.7 | Quality checklist | ⬜ | |

**Phase 5 deliverable:** `/` complete. **Hero section may remain a placeholder if image assets haven't arrived.**

---

## Phase 6 — Resources + Contact (`resources.html`, `contact.html`)

| # | Task | Status | Notes |
|---|------|--------|-------|
| 6.1 | Populate `content/resources.js` | ⬜ | Placeholder card data; structure for future documents |
| 6.2 | Build `/resources` | ⬜ | Card grid with one-pager placeholder card ("Coming Soon") |
| 6.3 | **PROMPT ALEX** for contact info | 🚫 | Need: Alex + Evie headshot images, Evie's title and email |
| 6.4 | Populate `content/contact.js` | 🚫 | **Blocked on Evie's info and headshots** |
| 6.5 | Build `/contact` | 🚫 | Two person cards; engagement statement |
| 6.6 | Mobile responsive pass (both pages) | ⬜ | |

**Phase 6 deliverable:** `/resources` complete (placeholder); `/contact` complete once assets arrive.

---

## Phase 7 — Cross-Site Polish + QA

| # | Task | Status | Notes |
|---|------|--------|-------|
| 7.1 | Global nav audit | ✅ | Active state verified; mobile hamburger open/close working; defer added to nav.js across all shells |
| 7.2 | Footer audit | ⬜ | Consistent across all pages; links work |
| 7.3 | Full responsive audit | ⬜ | All 6 pages at mobile (375px), tablet (768px), desktop (1240px) |
| 7.4 | Accessibility audit | ⬜ | Keyboard nav; ARIA on all interactive components; focus rings visible; color contrast check |
| 7.5 | Performance check | 🔄 | `defer` added to all CDN + local scripts across all 6 HTML files. Images not yet optimized. |
| 7.6 | SEO basics | ⬜ | `<title>`, `<meta description>`, Open Graph tags per page |
| 7.7 | Cross-browser check | ⬜ | Chrome, Firefox, Safari (desktop + mobile) |
| 7.8 | Final quality checklist | ⬜ | Run `handoff-readme.md` checklist on every page |
| 7.9 | Replace Lorem Ipsum check | ⬜ | Audit every page for placeholder content that should be real by now |
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
