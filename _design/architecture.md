# Site Architecture
**Practicum Website — Blueprint × Field Notes Design System**
**Last updated:** 2026-04-20

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

### Section 4 — Case Studies
**What's built:**
- Blueprint Panel candidate — case studies are a high-value use of the panel
- Spec header: "What Works" or similar
- Tabbed panel (`js/components/tabs.js`):
  - Multiple programs switchable without scrolling
  - Tab labels: program names
  - Tab content: what problem, what they did, what happened, what made it work
  - Keyboard accessible
- **Content status: Lorem Ipsum until Alex provides case study content**
- Tab panel framing copy: brief intro explaining what the reader is looking at

**Content source:** `content/problem.js → caseStudies` (array of case study objects)

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

### Section 1 — Opening: ECCA
**What's built:**
- Blueprint Panel (confirmed — see `handoff-readme.md` §Project-Specific Decisions)
- Inside panel: spec header + two paragraphs from `design-brief.md` §4.1
- Key numbers (20–40B, Title I at 18B, $1,700) should stand out — potentially as annotated callouts or set in larger type within the panel

**Content source:** `content/solution.js → opening`

---

### Section 2 — State Map
**What's built:**
- Spec header: "State Opt-In Status" in mono
- Intro copy + IMPORTANT TO KNOW callout (annual opt-in)
- SVG U.S. state map (`js/components/state-map.js`):
  - Color-coded by status: opted-in (green), opted-out (ink/muted), undecided (paper/neutral)
  - Hover or tap: tooltip showing state name + status
  - "As of March 2026" label; note that map will be updated
  - Data from `content/state-map-data.js`
- Brief legend below map

**Content source:** `content/solution.js → stateMap`, `content/state-map-data.js`

---

### Section 3 — How It Works: The Funding Stream
**What's built:**
- Spec header: "How It Works" in mono
- 5-step flow diagram (`js/components/flow-diagram.js`):
  - SVG, left-to-right: TAXPAYER → SGO RECEIVES → STUDENTS IDENTIFIED → SCHOLARSHIPS AWARDED → SERVICES DELIVERED
  - Matches canonical fund flow pattern from `handoff-readme.md` (Diagram Node components, flow arrows)
  - Scroll-triggered build animation via IntersectionObserver: nodes fade/slide in, arrows draw via stroke-dashoffset, stagger 150ms per element
  - `prefers-reduced-motion`: instant appearance, no animation
  - 2 margin annotations above/below the diagram
- Below diagram: five step-description blocks (one per step), each with the step number in mono, a title, and the full explanation paragraph
- Footnote citations at section bottom

**Content source:** `content/solution.js → fundingStream`

---

### Section 4 — The Eleven Requirements
**What's built:**
- Spec header: "The Eleven Requirements" in mono
- Intro copy: one paragraph
- Expandable list (`js/components/requirements-list.js`):
  - All 11 requirements visible in collapsed state without scrolling (tight collapsed height per item — title + one-sentence summary)
  - Click/Enter to expand inline; reveals full explanation
  - Items expand independently
  - Item numbering in green mono (Req 01, Req 02, etc.)
  - IMPORTANT TO KNOW callout for Requirement 6 (90/10 rule) appears inline after that item expands

**Content source:** `content/solution.js → requirements` (array of 11 requirement objects)

---

### Section 5 — Who Can Become an SGO
**What's built:**
- Spec header: "Who Can Participate" in mono
- Intro copy: one paragraph
- Five organizational type blocks — displayed as a structured visual (Spec Cards or annotated list), not a plain `<ul>`:
  - Existing state scholarship organizations
  - Community foundations
  - District-affiliated education foundations
  - Community-based organizations (Boys & Girls Clubs, YMCAs, etc.)
  - Public schools (through affiliated foundations)
- Two IMPORTANT TO KNOW callouts: Direct Operation vs. Partnership, and Relational vs. Transactional

**Content source:** `content/solution.js → whoCanParticipate`

---

### Section 6 — Defining a Scope
**What's built:**
- Spec header: "Defining a Scope" in mono
- Three paragraphs of copy
- Footnote at section bottom
- This section should feel analytical and slightly prescriptive — it's the org's model coming through

**Content source:** `content/solution.js → definingScope`

---

### Section 7 — Pennsylvania Case Study
**What's built:**
- Blueprint Panel (confirmed — see `handoff-readme.md` §Project-Specific Decisions)
- Inside panel: spec header + Pennsylvania program data as a structured visual (bullet points displayed as spec items, not a plain list)
- Two "lessons" pulled out visually
- IMPORTANT TO KNOW callout (political contributions) inside or immediately after the panel
- Footnote at section bottom

**Content source:** `content/solution.js → pennsylvania`

---

### Section 8 — State-Level Decisions (Brief)
**What's built:**
- Small section — a quick blurb, not a deep dive
- Spec header: "State-Level Decisions" in mono
- Two short paragraphs
- No diagram or visual component needed

**Content source:** `content/solution.js → stateLevelDecisions`

---

### Section 9 — What's Still Being Decided (Brief)
**What's built:**
- Spec header: "Open Questions" in mono
- Five-item structured list of pending regulatory questions
- A note: "This section will be updated when Treasury guidance releases (expected early summer 2026)"
- Visually modest — not a call-to-action, just information

**Content source:** `content/solution.js → openQuestions`

**Update flag:** Multiple items in this section depend on Treasury regulations expected early summer 2026. When guidance releases, update: `content/solution.js` §openQuestions, §requirements (Requirement 6 and 7), and `design-brief.md` §13 open items.

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
