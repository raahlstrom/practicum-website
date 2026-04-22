# Site Architecture
**Practicum Website — Blueprint × Field Notes Design System**
**Last updated:** 2026-04-21

This document describes, in plain language, exactly what will be built for every page, section, and component on the site. It is the implementation contract — if the design brief says *what* the content is, this doc says *what is actually built*. Update this document as decisions are made and as build progresses.

---

## File Structure

```
practicum-website/
├── _design/                    (read-only design reference — do not serve)
├── content/                    (all copy and data — editors touch only this folder)
│   ├── landing.js              (all copy for index.html)
│   ├── about.js                (all copy for about.html)
│   ├── problem.js              (all copy for problem.html)
│   ├── solution.js             (all copy for solution.html)
│   ├── resources.js            (all copy for resources.html)
│   ├── contact.js              (all copy for contact.html)
│   └── state-map-data.js       (state opt-in status — update when states decide)
├── css/
│   ├── tokens.css              (copied from _design/tokens.css — never edit manually)
│   ├── base.css                (global resets, body, grid utilities, container widths)
│   ├── components.css          (all design system components — no page-specific styles here)
│   ├── nav.css                 (navigation bar styles)
│   └── pages/
│       ├── landing.css
│       ├── about.css
│       ├── problem.css
│       ├── solution.css
│       ├── resources.css
│       └── contact.css
├── js/
│   ├── render.js               (shared template utilities — renders content data into HTML)
│   ├── nav.js                  (navigation behavior — active state, mobile nav)
│   └── components/
│       ├── accordion.js        (three-panel accordion)
│       ├── tabs.js             (tabbed case study panel)
│       ├── flow-diagram.js     (5-step SVG flow with scroll animation)
│       ├── state-map.js        (SVG U.S. state map with tooltip)
│       ├── requirements-list.js (expandable 11-requirements list)
│       └── logic-model.js      (logic model diagram — About page)
├── assets/
│   ├── hero-visual.*           (image assets — provided by Alex)
│   ├── alex-headshot.*         (provided by Alex)
│   └── evie-headshot.*         (provided by Alex)
├── index.html
├── about.html
├── problem.html
├── solution.html
├── resources.html
├── contact.html
├── netlify.toml                (Netlify deployment config)
└── .gitignore
```

### Content Data Layer

Every piece of copy on the site lives in a `content/*.js` file as a structured JavaScript object. HTML pages reference these files and call functions from `render.js` to produce the final markup. **This means**:
- Changing a headline = editing a string in `content/landing.js`
- Changing a body paragraph = editing a string in the relevant content file
- Changing the state map data = editing `content/state-map-data.js`
- HTML files are never edited for copy changes — only for structural changes

Content files export a plain object. Example structure:

```js
// content/landing.js
export const landingContent = {
  hero: {
    headline: "Academic progress shouldn't stop where school does.",
    thesis: "...",
  },
  problemTeaser: {
    body: "...",
    linkLabel: "Read more",
    linkHref: "/problem"
  },
  // etc.
};
```

---

## Shared Elements

### Navigation Bar
- Fixed top, full width
- Left: org name / logo mark (text-based, `[PLACEHOLDER NAME]`)
- Right: page links — About · Problem · Solution · Resources · Contact
- Active page link uses a distinct visual treatment (green spec tag or underline)
- Mobile: hamburger menu that reveals a full-screen or drawer nav
- Background: `--color-paper` with a 1px bottom border in `--color-rule`
- Font: mono uppercase, caption size — nav labels are spec-label style

### Footer
- Minimal, full width
- Left: org name + tagline or mission one-liner
- Right: page links (same as nav)
- Divider line above footer: 1px `--color-rule`
- Background: `--color-paper`
- Font: caption size, ink-muted

### Page Shell (all pages)
- Background: `--color-paper` with subtle 12px grid overlay (`.with-grid`)
- Max content width: 1240px, centered
- Section padding: 96–128px between major sections (`--sp9` to `--sp10`)
- All HTML pages include: Google Fonts, Lucide icons CDN, tokens.css, base.css, components.css, nav.css, nav.js, render.js, and the page-specific CSS and content JS

---

## Page 1: Landing (`index.html`)

### Purpose
Hook and orient. The reader should understand the problem, the solution, and the org — in one scroll. Problem-first, never org-first.

### Section 1 — Hero
**Visual treatment:** Full-width Blueprint Panel (dark blue field, 12px grid overlay in white at 18% opacity). This is the one page where Blueprint Panel is used as the page background.

**What's built:**
- A full-viewport or near-full-viewport section with Blueprint Panel styling
- Large serif headline (H1 scale): chosen from three options in `design-brief.md` §5.9 — default: "Academic progress shouldn't stop where school does."
- One-sentence thesis below the headline (body-lg, paper color text)
- Hero visual: image asset provided by Alex, placed prominently within the panel — **build this section only after image assets arrive**
- No secondary nav, no competing elements

**Content source:** `content/landing.js → hero`

**Blocked on:** Hero image assets (prompt Alex)

---

### Section 2 — The Problem (Teaser)
**Visual treatment:** Standard paper background. The transition falloff SVG visual is the anchor of this section.

**What's built:**
- Spec header: "01 / The Problem" in mono uppercase
- Transition falloff SVG diagram: a simplified visual showing academic performance across the three K-12 transitions. The diagram should communicate the drop without requiring explanation — designed to work as a standalone image. Same diagram (possibly simplified) also appears on `/problem`.
- 3–4 sentence copy paragraph from `design-brief.md` §1.2
- Link/CTA → `/problem`

**Content source:** `content/landing.js → problemTeaser`

---

### Section 3 — The Solution (Teaser)
**Visual treatment:** Standard paper background. Three preview cards in a horizontal row (or 2+1 on mobile).

**What's built:**
- Spec header: "02 / The Solution" in mono uppercase
- 3–4 sentence intro copy from `design-brief.md` §1.3
- Three Simple Cards in a row, each previewing one interior page:
  - Card 1 → About Us: title, one-line description, link
  - Card 2 → The Problem: title, one-line description, link
  - Card 3 → Solution: title, one-line description, link
- Cards use the standard Simple Card component (corner crosshairs, 1.5px ink border)

**Content source:** `content/landing.js → solutionTeaser`

---

## Page 2: About Us (`about.html`)

### Purpose
Tell the organization's story. Mission, beliefs, who we are, how we work. Must feel like a mission statement worth reading — not a word wall. Layout approach to be decided during build based on what best serves the content volume and engagement.

### Section 1 — Mission & Vision
**What's built:**
- Large serif headline framing the section
- Mission statement: one paragraph, body-lg size
- Vision statement: set slightly differently — potentially as a pull quote or highlighted element using the yellow highlight mark treatment
- Clean, readable; this sets the tone for the page

**Content source:** `content/about.js → mission`, `content/about.js → vision`

---

### Section 2 — We Believe
**What's built:**
- Spec header: "We Believe" in mono
- Five paragraphs of copy — this is substantial. The layout must prevent this from reading as a wall. Options during build:
  - First paragraph set large (body-lg) to open the section; remaining paragraphs at standard body
  - Key phrases highlighted with yellow tape marks (sparingly — 1–2 total)
  - Margin annotations pulling out key arguments
  - A visual element (diagram or annotation) breaking up the text mid-way
- Decision deferred to build — think carefully about information hierarchy

**Content source:** `content/about.js → weBelieve`

---

### Section 3 — Who We Are
**What's built:**
- Spec header: "Who We Are" in mono
- Intro paragraph (org description with `[PLACEHOLDER NAME]`)
- Two mandate blocks — "First" and "Second" — potentially as Spec Cards or visually offset blocks rather than plain paragraphs
- Closing paragraph about the certification model (mention only — no separate nav item)

**Content source:** `content/about.js → whoWeAre`

---

### Section 4 — Our Model
**What's built:**
- Spec header: "Our Model" in mono
- Intro copy: three-problem framing (3 bullet points — displayed as a structured list, not a plain `<ul>`)
- Two paragraphs of model description
- Logic model diagram: `js/components/logic-model.js`
  - 5 levels: Impact → Outcomes → Outputs → Activities → Inputs
  - SVG-based, most attractive treatment possible given available tools
  - Options explored during build: horizontal stepped, vertical cascade, reverse waterfall
  - Scroll-triggered reveal animation (IntersectionObserver)

**Content source:** `content/about.js → ourModel`

---

## Page 3: The Handoff Problem (`problem.html`)

*(Working title — "The Handoff Problem." Alternative: "The Transition Gap." Finalize before launch.)*

### Purpose
Make the pipeline problem visceral and structural. Reader leaves thinking: this is not random, it is designed, and it can be redesigned.

### Section 1 — Opening Thesis
**What's built:**
- Blueprint Panel candidate — assess during build. Strong case for emphasis here.
- Large serif framing statement (the opening thesis copy)
- Possibly: transition falloff visual as the diagram for this section (full version, more detailed than the landing teaser)

**Content source:** `content/problem.js → openingThesis`

---

### Section 2 — Why Gains Are Lost
**What's built:**
- Spec header: "Why Gains Are Lost" in mono
- Three paragraphs of structural explanation
- Possibly a simple SVG diagram showing funding flowing to institutions (not students)
- This section should feel like an analytical argument — structured, not emotional

**Content source:** `content/problem.js → whyGainsAreLost`

---

### Section 3 — The Three Breakpoints
**What's built:**
- Spec header: "03 / The Three Breakpoints" in mono
- Three-panel accordion (`js/components/accordion.js`):
  - All three panels visible simultaneously in collapsed state — no scrolling required to see all three
  - Each panel: collapsed label (transition name), full expanded content with citations
  - Panels expand inline; independent state (multiple can be open simultaneously)
  - Collapsed state shows panel title + a one-sentence preview or callout stat
  - Expanded state: full body text + callout stat block + footnotes at panel bottom
  - Keyboard accessible (Enter/Space to toggle)
- Footnotes per panel, at bottom of each expanded panel

**Content source:** `content/problem.js → breakpoints` (array of three panel objects)

---

### Section 4 — Case Study: Oregon Measure 98
**Visual treatment:** Full-bleed Blueprint Panel (no container wrapper), matching the PA case study treatment in `solution.html §4.6`. Paper content box inside panel. Parallax grid via `background-attachment: fixed`.

**What's built:**
- `<section class="page-section section-oregon">` — `padding: 0` so panel is full-bleed
- `<div class="blueprint-panel oregon-panel">` full width, then `<div class="container">` inside, then `<div class="or-content-box">` (paper bg)
- **Zone 1 — Header (2/3 / 1/3 grid):**
  - Left 2/3: spec header (§3.3 — Case Study), program name "Oregon Measure 98", program subtitle, framing sentence
  - Right 1/3: Oregon state SVG shape via D3+TopoJSON (FIPS `'41'`), green fill + stroke, opaque on blue
- **Context paragraph:** Brief plain-language framing of the problem Oregon faced
- **Zone 2 — By the Numbers (3 stat blocks):**
  - `68% → 87%` — graduation rate growth (2015–2024), icon: `row01_col07.png` (graduation-cap-circle)
  - `~6 pts` — low-income gap narrowing, icon: `row04_col06.png` (group-circle)
  - `Nov. 2016` — Measure 98 passed, icon: `row06_col09.png` (shield-verified)
- **Zone 3 — Three Design Principles (numbered list):**
  - Large green serif numeral (01/02/03) + mono uppercase title + body paragraph
  - 01 Governance, 02 Accountability, 03 Capacity Building
- **Zone 4 — Pull quote / Key Takeaway:**
  - Grey-tinted box (rgba(31,31,31,0.04)), 1px ink border
  - Left: `row04_col10.png` (student-thriving) at 180px, mix-blend-mode: multiply
  - Right: mono "KEY TAKEAWAY" label + blockquote serif text
- Footnotes at bottom of content box

**Rejected tab structure:** The original Lorem Ipsum tabbed panel (`renderTabs`) is removed. If additional case studies are added in a future update, a tab layer can be wrapped around the panel.

**Content source:** `content/problem.js → oregonCaseStudy` (structured object; `caseStudies` array deprecated)

**Dependencies:** D3 v7 + TopoJSON v3 + us-atlas (same scripts as solution.html §4.5)

---

### Section 5 — Bridge to SGOs
**What's built:**
- Two-paragraph closing section
- Ends with a clear CTA → `/solution` (could be a Spec Card or styled link)
- This should feel like a handoff — not an abrupt end

**Content source:** `content/problem.js → bridgeToSolution`

---

## Page 4: Solution (`solution.html`)

### Purpose
Get someone fully up to speed on the SGO mechanism. A skeptic arrives; a capable practitioner leaves.

**Build status:** Sections §4.0–4.7 complete. Mobile responsive pass and quality checklist still needed.

**Section structure (as built — differs from original plan):**

---

### §4.0 — What's the Solution? (SGO Intro)
**What's built:**
- Spec header: §4.0 — What's the solution?
- Two-column split: large serif H2 framing statement left; SGO definition label + sentence + 4 student avatar PNGs + pipe image right
- Framing: "An SGO keeps students in the pipe."

**Content source:** `content/solution.js → fundingStream.bigStatement`, `fundingStream.definition`

---

### §4.1 — How Does It Work? (5-Step Flow)
**What's built:**
- Spec header: §4.1 — How does it work?
- Two-column definition block: large "big statement" serif left, "What is an SGO" label + definition text right
- CSS-native 5-step illustrated flow (not SVG): each step has an icon PNG (mix-blend-mode: multiply), step number in mono, title, one-sentence body
- Green arrow PNG (`row05_col02.png`) between each step
- Scroll-triggered stagger animation (IntersectionObserver, 120ms stagger)
- Footnote citations below

**Content source:** `content/solution.js → fundingStream`

---

### §4.2 — What Created This Program? (The ECCA)
**What's built:**
- Spec header: §4.2 — What created this program?
- Eyebrow: "One Big Beautiful Bill Act · July 2025" in mono
- Split-layout: serif framing H2 + two body paragraphs + sidenote left; three stat blocks ($1,700 / $20–40B / Jan 2027) right
- Stats rendered as large mono numbers with descriptive labels

**Content source:** `content/solution.js → opening`

---

### §4.3 — What Can They Fund? (Orbit Visual)
**What's built:**
- Spec header: §4.3 — What can they fund?
- Two-column: prose + IMPORTANT TO KNOW callout left; student orbit visual right
- Orbit: student icon PNG at center, 6 expense-category icon PNGs radiating on a circle with dashed green connector lines (SVG)
- Items animate in on scroll (IntersectionObserver, staggered)

**Content source:** `content/solution.js → whatCanFund`

---

### §4.4 — What Does an SGO Require? (Eleven Requirements)
**What's built:**
- Spec header: §4.4 — What does an SGO require?
- One-third / two-thirds layout: framing H3 + intro copy + shield icon plaque left; expandable list right
- Expandable list: all 11 requirements visible collapsed; click/Enter expands; IMPORTANT TO KNOW inline after Req 06

**Content source:** `content/solution.js → requirements` (array of 11)

---

### §4.5 — Which States Are In? (State Map)
**What's built:**
- Spec header: §4.5 — Which states are in?
- Split-layout: framing + intro + IMPORTANT TO KNOW callout + margin note + date label left; D3 state map right
- D3 v7 + TopoJSON v3 map, color-coded by status; tooltip on hover/tap
- Legend at map bottom

**Content source:** `content/solution.js → stateMap`, `content/state-map-data.js`

---

### §4.6 — Case Study: Pennsylvania (Blueprint Panel)
**What's built:**
- Contained Blueprint Panel inside `.case-study-frame` with floating corner marks and label tag
- Two-line header: mono spec row + serif program title
- Framing statement + narrative paragraph (paper-colored on blue)
- Two paper cards side-by-side: Outcomes (stat blocks) + Implications (margin-note points); each with a decorative swash icon
- IMPORTANT TO KNOW callout (political contributions) inside panel
- Circled takeaway: circle PNG (`row07_col21.png`) with overlaid text
- Footnote inside panel

**Content source:** `content/solution.js → pennsylvania`

---

### §4.7 — How Should We Define Our Scope? (Three-Beat Argument)
**What's built:**
- Spec header: §4.7 — How should we define our scope?
- **Beat 1:** Full-width serif framing H2 with ink bottom border ("The law defines what an SGO must do...")
- **Beat 2:** Two-column layout — three prose paragraphs left; journey-to-goal icon (`row04_col11.png`) + italic pull quote right
- **Beat 3:** Contained Blueprint Panel: flag icon (`row06_col07.png`) in paper-bg wrapper + serif position statement + three `→`-prefixed detail lines
- Footnote below panel

**Content source:** `content/solution.js → definingScope`

---

### Removed Sections (data preserved in content/solution.js)
- **Who Can Participate** (`whoCanParticipate`) — removed per user decision
- **State-Level Decisions** (`stateLevelDecisions`) — removed per user decision
- **Open Questions** (`openQuestions`) — removed per user decision; note that this section will need updating when Treasury guidance releases (early summer 2026)

**Update flag:** When Treasury guidance releases, update `content/solution.js` requirements items 6 and 7, and the openQuestions object (even if openQuestions section is not currently displayed — it may be re-added later).

---

## Page 5: Resources (`resources.html`)

### Purpose
Provide downloadable materials. In v1, this is a placeholder page with infrastructure for future documents.

### What's built (v1)
- Spec header: "Resources" in mono
- Brief intro copy: "Materials for educators, nonprofits, and partners."
- A card grid designed to hold downloadable document cards
- One placeholder card: "One-Pager — Coming Soon" (no link, visually distinct as unavailable — muted styling)
- The card grid must accommodate real PDFs in a future update without restructuring the page

### What's NOT built in v1
- No actual downloadable files
- No one-pager PDF (added in Phase 8)

**Content source:** `content/resources.js → documents` (array of document objects, including placeholders)

---

## Page 6: Contact (`contact.html`)

### Purpose
Convert interest into action. Low friction. Two people, two emails.

### What's built
- Spec header: "Get in Touch" in mono
- Brief statement: what the org is looking for (nonprofit partners, school districts, funders, educators)
- Brief description of what engagement looks like (do not over-specify)
- Two person cards side-by-side (stack on mobile):
  - **Alex Ahlstrom card:** headshot image, name, title, "UVA Darden School of Business + School of Education", email as a `mailto:` link
  - **Evie Elson card:** headshot image, name, title, "UVA Darden School of Business + School of Education", email as a `mailto:` link
  - Card style: Spec Card (with green spec tag or simple bordered card with corner crosshairs)
  - **Blocked on:** headshot images + Evie's title and email (prompt Alex before building)

**Content source:** `content/contact.js → statement`, `content/contact.js → people` (array of two person objects)

**Blocked on:** headshot images and Evie's contact info — prompt Alex.

---

## Component Library

Every component below is built once in `css/components.css` and `js/components/`, then reused across pages. No page should contain duplicate component CSS.

### From Design System (implemented in components.css)
| Component | CSS Class | Notes |
|-----------|-----------|-------|
| Simple Card | `.card` | Paper bg, 1.5px ink border, 2px radius, crosshairs at two corners |
| Stacked Cards | `.card-stack` | Two cards offset 8px — use only when content is genuinely layered |
| Spec Card | `.card-spec` | Simple Card + green spec tag top-left |
| Spec Header | `.spec-header` | Mono label + rule below; three variants: minimal, bracketed, underscored |
| Blueprint Panel | `.blueprint-panel` | Blue bg, grid overlay; use per placement rules |
| Diagram Node | `.dnode` | Standard, active (green), outcome (yellow), optional (dashed) |
| Label Tag | `.label-tag` | Mono uppercase, bordered |
| Margin Note | `.margin-note` | Mono italic, ink-muted, left arrow |
| Highlight Mark | (inline style) | Yellow band behind text |
| IMPORTANT TO KNOW callout | `.callout-important` | Bordered, yellow left accent, mono label |
| Footnotes | `.footnotes` | Mono, small, ink-muted, rule above |

### Interactive Components (implemented in js/components/)
| Component | File | Pages Used |
|-----------|------|------------|
| Three-panel accordion | `accordion.js` | `/problem` §3 |
| Tabbed panel | `tabs.js` | `/problem` §4 |
| 5-step flow diagram | `flow-diagram.js` | `/solution` §3 |
| SVG state map | `state-map.js` | `/solution` §2 |
| Expandable list | `requirements-list.js` | `/solution` §4 |
| Logic model diagram | `logic-model.js` | `/about` §4 |

### Transition Falloff Visual
Appears in two places: landing page (simplified) and problem page (full). Built as a single SVG with a complexity parameter — or two SVG files if simplification is too lossy. Shows academic performance on Y-axis, three K-12 transition points marked with drops on X-axis. No stock imagery.

---

## Deployment

- **Platform:** Netlify, deployed from GitHub
- **Repository:** Create before Phase 0 begins
- **Branch strategy:** `main` = production; feature branches for major sections
- **netlify.toml:** Configure redirect rules so `/about`, `/problem`, etc. serve the correct HTML files without `.html` extension in the URL
- **No custom domain yet** — Netlify auto-generated URL for now
- **No analytics** — omit entirely

---

## Placeholder Policy

| Placeholder | Location | Replace with |
|-------------|----------|-------------|
| `[PLACEHOLDER NAME]` | All content files, nav | Org name — find-and-replace when decided |
| Hero headline option A | `content/landing.js` | Alex's final choice |
| Hero visual | `assets/` | Image assets from Alex |
| Case study content | `content/problem.js → caseStudies` | Real programs from Alex |
| Contact headshots | `assets/` | Photos from Alex |
| Evie's email + title | `content/contact.js` | From Alex |
| One-pager PDF | `assets/` | Added in Phase 8 (later) |
