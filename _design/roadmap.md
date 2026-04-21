# Build Roadmap
**Practicum Website — Blueprint × Field Notes**
**Last updated:** 2026-04-20

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
| 0.1 | Create GitHub repository | ⬜ | Public repo under Alex's account |
| 0.2 | Initialize git, create `.gitignore` | ⬜ | Ignore: `node_modules/`, `.DS_Store`, `*.log` |
| 0.3 | Create `netlify.toml` | ⬜ | Redirect rules for clean URLs (no `.html`); build settings |
| 0.4 | Copy `_design/tokens.css` → `css/tokens.css` | ⬜ | Never edit this file manually — it is the design system |
| 0.5 | Write `css/base.css` | ⬜ | Global resets, body, `.with-grid`, container widths, 12-col grid utility, prose width |
| 0.6 | Write `css/components.css` | ⬜ | All design system components per `handoff-readme.md` — Simple Card, Stacked Cards, Spec Card, Spec Header (3 variants), Blueprint Panel, Diagram Node (4 states), all annotation kit pieces, callout-important, footnotes. Verify against `component-reference.html`. |
| 0.7 | Write `css/nav.css` + `js/nav.js` | ⬜ | Nav bar, active state, mobile nav pattern |
| 0.8 | Create all 6 HTML shells | ⬜ | `index.html` through `contact.html` — correct `<head>` (fonts, Lucide, CSS imports), nav inclusion, footer stub |
| 0.9 | Write `js/render.js` | ⬜ | Shared template utilities: `renderAccordion(data)`, `renderTabs(data)`, `renderExpandableList(data)`, `renderPersonCard(data)`, etc. |
| 0.10 | Define content data schemas | ⬜ | Stub all 6 `content/*.js` files with correct structure but placeholder strings |
| 0.11 | Browser verify | ⬜ | All 6 pages load with correct fonts, paper background, nav. No content yet — just structure. |
| 0.12 | Push to GitHub | ⬜ | Connect to Netlify, verify deploy works |

**Phase 0 deliverable:** A working empty site on Netlify — correct design system base, all pages accessible, no content.

---

## Phase 1 — Interactive Component Library
*Build and test every interactive component before wiring to any page. Complete before Phases 2–4.*

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1.1 | Three-panel accordion (`accordion.js`) | ⬜ | All 3 panels visible collapsed; expand inline; independent state; keyboard accessible (Enter/Space) |
| 1.2 | Tabbed panel (`tabs.js`) | ⬜ | Switchable without scroll; keyboard accessible; ARIA roles |
| 1.3 | Expandable list (`requirements-list.js`) | ⬜ | 11 items; all visible collapsed without scrolling; expand inline; keyboard accessible |
| 1.4 | 5-step flow diagram (`flow-diagram.js`) | ⬜ | SVG, left-to-right; IntersectionObserver scroll build; nodes stagger 150ms; arrows draw via stroke-dashoffset; `prefers-reduced-motion` collapse to instant |
| 1.5 | Logic model diagram (`logic-model.js`) | ⬜ | 5 levels: Impact → Outcomes → Outputs → Activities → Inputs; most attractive SVG treatment; scroll-triggered |
| 1.6 | SVG state map (`state-map.js`) | ⬜ | State outlines, 3-state color coding (opted-in green, opted-out muted, undecided neutral), tooltip on hover/tap, data from `content/state-map-data.js` |
| 1.7 | Transition falloff visual | ⬜ | SVG showing academic performance drop at 3 transitions; designed as standalone diagram. Used on landing (simplified) and problem (full). |
| 1.8 | Build `component-test.html` | ⬜ | Standalone test page where every interactive component can be exercised in isolation |
| 1.9 | Design system QA pass | ⬜ | Run every component through `handoff-readme.md` quality checklist. Verify strokes, colors, corner radii, motion rules. |

**Phase 1 deliverable:** `component-test.html` — every interactive component working and QA'd.

---

## Phase 2 — Solution Page (`solution.html`)
*Most complex page. Build first as the design proving ground.*

| # | Task | Status | Notes |
|---|------|--------|-------|
| 2.1 | Populate `content/solution.js` | ⬜ | All final copy: §4.1–4.9, all 11 requirements, IMPORTANT TO KNOW callouts |
| 2.2 | Build page layout + section structure | ⬜ | Spec headers, section rhythm, correct spacing |
| 2.3 | §4.1 Opening — Blueprint Panel | ⬜ | ECCA reveal; key numbers set prominently |
| 2.4 | §4.2 State Map | ⬜ | Wire `state-map.js`; intro copy; IMPORTANT TO KNOW callout; legend |
| 2.5 | §4.3 Funding Stream | ⬜ | Wire `flow-diagram.js`; five step descriptions below; footnotes |
| 2.6 | §4.4 Eleven Requirements | ⬜ | Wire `requirements-list.js`; inline IMPORTANT TO KNOW for Req 6 |
| 2.7 | §4.5 Who Can Participate | ⬜ | Five org types as structured visual; two IMPORTANT TO KNOW callouts |
| 2.8 | §4.6 Defining a Scope | ⬜ | Three paragraphs; footnote |
| 2.9 | §4.7 Pennsylvania — Blueprint Panel | ⬜ | Case study data as structured spec items; IMPORTANT TO KNOW callout |
| 2.10 | §4.8 + §4.9 Brief sections | ⬜ | State-level decisions + open questions; modest visual treatment |
| 2.11 | Mobile responsive pass | ⬜ | Full responsive audit for this page |
| 2.12 | Quality checklist | ⬜ | Run `handoff-readme.md` checklist on this page |

**Phase 2 deliverable:** `/solution` fully complete and mobile-ready.

---

## Phase 3 — Problem Page (`problem.html`)
*Blocked on case study content — build with Lorem Ipsum placeholder.*

| # | Task | Status | Notes |
|---|------|--------|-------|
| 3.1 | Populate `content/problem.js` | ⬜ | All copy for §3.1–3.5; case studies as Lorem Ipsum |
| 3.2 | Build page layout + section structure | ⬜ | |
| 3.3 | §3.1 Opening thesis | ⬜ | Consider Blueprint Panel here — assess during build |
| 3.4 | §3.2 Why Gains Are Lost | ⬜ | Three paragraphs; possibly a simple SVG |
| 3.5 | §3.3 Three Breakpoints — accordion | ⬜ | Wire `accordion.js`; footnotes per expanded panel |
| 3.6 | §3.4 Case Studies — tabbed panel | ⬜ | Wire `tabs.js`; **Lorem Ipsum content** until Alex provides case studies |
| 3.7 | §3.5 Bridge to Solution | ⬜ | Two paragraphs; CTA → `/solution` |
| 3.8 | Transition falloff visual (full version) | ⬜ | Wire SVG visual from Phase 1 |
| 3.9 | Mobile responsive pass | ⬜ | |
| 3.10 | Quality checklist | ⬜ | |

**Phase 3 deliverable:** `/problem` complete (case studies Lorem Ipsum — to be updated when Alex provides content).

**Pending update:** When Alex provides case study content, update `content/problem.js → caseStudies` and verify tab panel.

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
| 7.1 | Global nav audit | ⬜ | Active state per page; mobile nav; consistent across all pages |
| 7.2 | Footer audit | ⬜ | Consistent across all pages; links work |
| 7.3 | Full responsive audit | ⬜ | All 6 pages at mobile (375px), tablet (768px), desktop (1240px) |
| 7.4 | Accessibility audit | ⬜ | Keyboard nav; ARIA on all interactive components; focus rings visible; color contrast check |
| 7.5 | Performance check | ⬜ | No unnecessary JS; images optimized; no render-blocking resources |
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
| Case study content | Problem §3.4 | ⚠️ Lorem Ipsum in place |
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
| Case study content from Alex | Tabbed panel | `content/problem.js → caseStudies` |
| Org name decision | All content | Find-and-replace `[PLACEHOLDER NAME]` in all `content/*.js` files |
| Hero headline decision | Landing hero | `content/landing.js → hero.headline` |
| Partner logos added | Landing (future) | No infrastructure yet — add when ready |
