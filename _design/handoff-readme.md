# Blueprint × Field Notes — Design System Handoff
**Practicum Project · v1.0**

---

## Overview

This handoff package contains everything needed to implement the **Blueprint × Field Notes** design system for the SGO website. The system communicates SGO mechanics to donors, administrators, legislators, school leaders, and families through a visual language that feels like an architectural working document — drafted, annotated, and in-progress — not a finished marketing site.

**North Star:** This should look like something an architecture or policy team would present while actively building a system, not marketing a finished one.

---

## About the Design Files

`component-reference.html` is a **high-fidelity design reference** built in HTML — a living spec showing every component, pattern, and token in the system. It is **not production code to copy directly**. Your job is to recreate these designs using pure HTML/CSS/JS per the project's technical spec.

`tokens.css` **is** production-ready. Drop it into `css/` and import it globally — all custom properties are documented and ready to use.

---

## Fidelity

**High-fidelity.** All colors, typography, spacing, stroke weights, and interactions in the reference are final and should be matched precisely. The component reference is the source of truth for visual decisions.

---

## Design System Architecture

The entire system is built on two layers working against each other:

| Layer | Character | Role |
|-------|-----------|------|
| **Structural** | Drafted, precise, confident | Grid, linework, diagrams, base typography |
| **Working** | Annotated, human, slightly imperfect | Margin notes, hand-drawn arrows, highlight marks |

Both layers must be present. Without the structural layer, it reads as a sketch. Without the working layer, it reads as corporate SaaS.

---

## Color System

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-paper` | `#F7F6F2` | Primary background. 85–90% of any surface. **Never use pure white.** |
| `--color-ink` | `#1F1F1F` | All structural text, linework, diagram strokes. **Not pure black.** |
| `--color-ink-muted` | `#6B7280` | Secondary text, captions, supporting linework, annotations |
| `--color-yellow` | `#E7C857` | Highlight/emphasis only. Marker-style bands, tape elements, annotation circles. **Never structural.** |
| `--color-green` | `#5FAF8F` | Active/selected state. Current node in diagrams. Spec tags. |
| `--color-blue` | `#1E3A5F` | Blueprint Panels only. Use once or twice per artifact max. |
| `--color-rule` | `#D9D6CE` | Grid lines, section dividers, subtle card borders |

**Rules:**
- Accent color (yellow + green combined) must never exceed ~15% of any surface
- Green and yellow never appear on the same element
- No gradients anywhere
- No drop shadows anywhere
- No tinted backgrounds outside Blueprint Panels

---

## Typography

Three typefaces. Never add a fourth.

### SPEC 01 — Serif (Source Serif 4, Semibold)
The **authoritative voice**. Headlines, section framings, pull quotes only. Never body copy or UI labels.

```css
font-family: var(--font-serif);
font-weight: 600;
/* Display: */ font-size: 72px; line-height: 1.05; letter-spacing: -0.01em;
/* H1:      */ font-size: 56px; line-height: 1.05; letter-spacing: -0.01em;
/* H2:      */ font-size: 44px; line-height: 1.15; letter-spacing: 0;
```

### SPEC 02 — Sans (Inter, Medium)
The **system voice**. Body copy, navigation, buttons, labels, any text that must be legible at small sizes.

```css
font-family: var(--font-sans);
font-weight: 500;
/* H3:       */ font-size: 22px; line-height: 1.3;
/* Body LG:  */ font-size: 18px; line-height: 1.55;
/* Body:     */ font-size: 16px; line-height: 1.55; max-width: 65ch;
/* Caption:  */ font-size: 13–14px; line-height: 1.5; color: var(--color-ink-muted);
```

### SPEC 03 — Mono (IBM Plex Mono, Regular)
The **annotation voice**. Spec labels, technical callouts, margin notes, measurement notation. Seasoning — not a main dish.

```css
font-family: var(--font-mono);
font-weight: 400;
font-size: 11–12px;
letter-spacing: 0.08–0.10em;
text-transform: uppercase;
/* Often italic for margin notes and annotations */
```

**Google Fonts import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
```

---

## Grid & Spacing

- **12-column grid** · 24px gutter desktop · 16px gutter mobile · max content width 1240px
- **8px baseline** · all spacing resolves to multiples of `--sp2` (8px)
- **12px visible grid module** · light gray (`--color-rule`) at 30% opacity
- Section padding: 96–128px between major sections · 48–64px within sections

The grid should often be **visible** — not hidden. Readers should feel the layout was constructed.

---

## Line & Stroke System

Lines carry as much hierarchy as type. Keep them consistent.

| Weight | Token | Use |
|--------|-------|-----|
| 2px | `--stroke-primary` | Main diagram structure, outer component borders |
| 1.5px | `--stroke-secondary` | Internal divisions, card borders |
| 1px | `--stroke-annotation` | Callout arrows, pointer lines |
| 1px dashed (4 4) | `--stroke-dashed` | Optional/implied relationships, state transitions |
| 1px @ 30% opacity | `--stroke-grid` | Background grid underlay |

**Corners:** square (`--radius-none`) or 2px rounded (`--radius-sm`). Never more. No blobs, lozenges, or pill shapes.

---

## Core Components

### Simple Card
```css
background: var(--color-paper);
border: 1.5px solid var(--color-ink);
border-radius: var(--radius-sm);  /* 2px */
padding: var(--space-card-padding);  /* 24px */
```
Add small SVG crosshair marks (`+`) at two opposite corners (top-left and bottom-right). These are 8–10px, ink-muted at 50% opacity.

### Stacked Cards
Two or three Simple Cards offset by 6–8px (`--space-card-offset`), suggesting layered documents. Use only when content genuinely represents multiple items. **Never decorative.**

### Spec Card
Simple Card with a green spec tag in the top-left corner:
```css
.spec-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: var(--color-green);
  color: var(--color-paper);
  padding: 2px 8px;
  display: inline-block;
}
```

### Spec Header
Section opener. Three variants — Minimal (rule below only), Bracketed (`[ SPEC ]`), Underscored.

```css
.spec-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-rule);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.spec-num   { color: var(--color-green); }
.sep        { color: var(--color-ink-muted); }
.spec-title { color: var(--color-ink); }
```

### Blueprint Panel
The system's most emphatic container. **Use once or twice per major artifact.**
```css
.blueprint-panel {
  background: var(--color-blue);
  color: var(--color-paper);
  padding: 64px 48px;
  position: relative;
  overflow: hidden;
}
.blueprint-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(247,246,242,0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(247,246,242,0.18) 1px, transparent 1px);
  background-size: 12px 12px;
  pointer-events: none;
}
```
Inside Blueprint Panels: all text is `--color-paper`, linework is white/off-white, arrow markers use white fill.

### Diagram Node

Three states:
```css
.dnode {
  width: 112px;
  height: 96px;
  border: 2px solid var(--color-ink);
  border-radius: 2px;
  background: var(--color-paper);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.dnode.active  { background: var(--color-green); }
.dnode.outcome { background: var(--color-yellow); }
.dnode.optional { border-style: dashed; }

.dnode-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
}
```

Icons inside nodes: **Lucide icons** at 28–32px, `stroke-width: 1.5`.

Icon assignments:
- Donor → `user`
- Tax Credit → `file-text`
- SGO → `landmark`
- Service Providers → `shield`
- Students → `graduation-cap`
- Institution → `landmark`
- People/Group → `users`
- Shield/Compliance → `shield-check`
- Search → `search`
- Operations → `settings-2`
- Outcomes → `bar-chart-2`

---

## Annotation Kit

### Arrows (SVG)
```svg
<!-- Straight -->
<line x1="0" y1="0" x2="80" y2="0" stroke="#6B7280" stroke-width="1" marker-end="url(#arr-muted)"/>

<!-- Curved -->
<path d="M0 30 C20 0 60 0 80 20" stroke="#6B7280" stroke-width="1" fill="none" marker-end="url(#arr-muted)"/>

<!-- Hand-drawn: apply filter="url(#hand-drawn)" to SVG element -->
```

### Hand-drawn SVG filter
```svg
<filter id="hand-drawn">
  <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="n"/>
  <feDisplacementMap in="SourceGraphic" in2="n" scale="0.9" xChannelSelector="R" yChannelSelector="G"/>
</filter>
```
Apply to annotation-layer SVG elements only. Never to structural linework.

### Highlight Mark (yellow tape)
```html
<span style="position:relative; display:inline;">
  highlighted text
  <span style="position:absolute; bottom:2px; left:-3px; right:-3px; height:7px;
               background:#E7C857; z-index:-1; transform:rotate(-0.4deg); border-radius:1px;"></span>
</span>
```

### Margin Note
```css
.margin-note {
  font-family: var(--font-mono);
  font-size: 12px;
  font-style: italic;
  color: var(--color-ink-muted);
  padding-left: 16px;
  position: relative;
}
.margin-note::before {
  content: '↳';
  position: absolute;
  left: 0;
  font-style: normal;
}
```

### Label Tag
```css
.label-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid var(--color-ink);
  padding: 2px 6px;
  display: inline-block;
}
```

---

## Diagram Patterns

### Canonical SGO Fund Flow
Five nodes left-to-right:
```
DONOR → TAX CREDIT → SGO (active/green) → SERVICE PROVIDERS → STUDENTS (outcome/yellow)
```
Arrow: `stroke: #1F1F1F`, `stroke-width: 2px`, arrowhead filled `#1F1F1F`.

Two margin annotations:
- Above, between DONOR and TAX CREDIT: *"Donor receives state tax credit"*
- Below, under SGO: *"SGO conducts due diligence + oversight"*

### Flow Diagram Rules
- Left-to-right for sequence; top-to-bottom for hierarchy
- Radial only for genuinely non-sequential relationships
- No 3D, no isometric, no perspective — always flat and orthogonal
- Max 2–3 annotations per diagram

---

## Motion & Interaction

### On Scroll (diagram build)
```css
.flow-line {
  stroke-dasharray: <total-length>;
  stroke-dashoffset: <total-length>;
  transition: stroke-dashoffset 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.flow-line.visible { stroke-dashoffset: 0; }

.flow-node {
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 300ms cubic-bezier(0.2, 0.8, 0.2, 1),
              transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
}
.flow-node.visible { opacity: 1; transform: translateY(0); }
```
Stagger each node/arrow by ~150–180ms. Trigger via `IntersectionObserver`.

### Rules
- No auto-playing animations — motion responds to user arriving, hovering, or clicking
- `prefers-reduced-motion`: collapse build animations to instant appearance
- Never animate color — state transitions are instantaneous
- No bounce, no elastic overshoot, no pulse

---

## Texture & Imperfection

| Mark | Spec |
|------|------|
| Slight line wobble | Apply `filter="url(#hand-drawn)"` to annotation SVGs. <0.5px variation. |
| Hand-drawn dash | `stroke-dasharray: 6 5`, `stroke-linecap: round`. Annotations only. |
| Offset alignment | One element intentionally 2–4px off grid. Once per artifact max. |
| Overlap layers | Two Simple Cards stacked with 6–8px offset. Only when content is genuinely layered. |
| Highlight/tape | Yellow band behind text. 4–6px thick, slight rotation (-0.4deg). |
| Folded corner | CSS triangle in card corner. Once per artifact maximum. |
| Margin note | Mono italic text in margin with light arrow. |

**Forbidden:** grunge overlays, noise gradients, drop shadows of any kind, skeuomorphic paper effects, heavy distressing.

---

## Section Structure (Constructed Flow)

Every major page section should follow this sequence:

1. **Framing statement** — large serif, establishes the question or claim
2. **Visual diagram** — line-based, shows the system being discussed
3. **Annotated explanation** — callouts, arrows, and margin notes walk through the diagram
4. **Modular breakdown** — cards or spec components detail the parts

---

## Assets & Dependencies

| Asset | Source | Notes |
|-------|--------|-------|
| Source Serif 4 | Google Fonts | Weights: 400, 600. Include italic variant. |
| Inter | Google Fonts | Weights: 400, 500, 600 |
| IBM Plex Mono | Google Fonts | Weights: 400, 700. Include italic. |
| Lucide Icons | `https://unpkg.com/lucide@0.474.0/dist/umd/lucide.min.js` | Call `lucide.createIcons()` after DOM ready |
| tokens.css | `_design/tokens.css` | Drop into `css/`, import globally |

---

## Quality Checklist

Before shipping any screen, verify:

- [ ] Does it feel like a working schematic, not a finished infographic?
- [ ] Is the background `--color-paper` (#F7F6F2), not pure white?
- [ ] Is the 12px grid visible or clearly implied?
- [ ] Are all three typefaces (serif, sans, mono) present and used correctly?
- [ ] Is accent color below ~15% of the surface?
- [ ] Do annotations add information — not just decoration?
- [ ] Are there max 2–3 annotations per diagram?
- [ ] Is the Blueprint Panel used sparingly (1–2x per artifact)?
- [ ] Are hand-drawn marks only in the annotation layer?
- [ ] Does motion respond to user action — not auto-play?

---

## Common Failure Modes to Avoid

- **Too much yellow** — one or two highlights max per screen
- **Too many annotations** — redesign the diagram instead
- **Blueprint Panel everywhere** — its power comes from scarcity
- **Hand-drawn elements in structural linework** — working layer stays in the margins
- **Too clean** — if it looks polished and corporate, the system has been misread

---

## Project-Specific Decisions (Practicum Website)

The following decisions were made for this project and supplement or override the general system rules above.

### Blueprint Panel Placement

Two rules govern Blueprint Panel usage on this site:

1. **Landing page (`/`):** The Blueprint Panel is used as the full hero background. This is the one page where the panel sets the scene rather than marks a specific exception. Dark blue field, grid overlay, all hero content inside.
2. **All other pages:** Blueprint Panels mark emphasis only — reserved for a specific high-value section per page. Never use as a generic background or section wrapper. Strong candidates:
   - `/solution` §4.1 — ECCA opening (the historic funding mechanism reveal)
   - `/solution` §4.7 — Pennsylvania case study
   - `/problem` — a key thesis moment if warranted
   - Avoid on `/about`, `/resources`, `/contact` unless there is a specific compelling need.

### Footnote Treatment

The site uses editorial-style footnotes. Rules:
- Superscript number in body text (e.g. `...by third grade.¹`)
- Full citation text appears at the bottom of the section it belongs to, below a thin rule
- Citations use mono typeface, small size, ink-muted color
- Numbered sequentially within each section — restart at 1 per section, not global
- No inline parenthetical citations anywhere on the site

```css
.footnotes {
  margin-top: var(--sp5);
  padding-top: var(--sp3);
  border-top: 1px solid var(--color-rule);
  font-family: var(--font-mono);
  font-size: var(--font-size-small);
  color: var(--color-ink-muted);
  line-height: var(--line-height-caption);
}
```

### IMPORTANT TO KNOW Callout Component

A distinct callout pattern used 5× on the Solution page (`/solution`). Essential supporting detail outside the main body flow — more emphatic than body text, less emphatic than a Blueprint Panel.

Spec:
- Bordered card: `border: 1.5px solid var(--color-ink)`, `border-radius: var(--radius-sm)`, `padding: var(--sp5)`
- Left accent: 3px left border in `--color-yellow` to distinguish from standard Simple Cards
- Label tag at top reading "IMPORTANT TO KNOW" in mono uppercase (`.label-tag` pattern)
- Background: `var(--color-paper)` — same as page, no tint
- Body copy: standard body size, sans font
- Vertical margin: `var(--sp6)` top and bottom

```html
<div class="callout-important">
  <span class="label-tag">Important to Know</span>
  <p>Callout content here.</p>
</div>
```

```css
.callout-important {
  border: 1.5px solid var(--color-ink);
  border-left: 3px solid var(--color-yellow);
  border-radius: var(--radius-sm);
  padding: var(--sp5);
  margin: var(--sp6) 0;
}
.callout-important .label-tag {
  display: inline-block;
  margin-bottom: var(--sp3);
}
```

Final visual treatment subject to Alex's feedback after first build.
