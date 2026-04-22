# Site Audit & Refactor Plan
**Practicum Website — Blueprint × Field Notes**
**Prepared:** 2026-04-21 (overnight execution)
**Scope:** All built pages — `problem.html`, `solution.html`, plus shared CSS/JS/HTML shells for `index.html`, `about.html`, `contact.html`, `resources.html`

---

## Overview

The site was built section by section over multiple sessions. While each component works in isolation, the codebase has accumulated:
- **Duplicated CSS rules** across page stylesheets that should live in shared files
- **Spacing inconsistencies** between pages (the hero section on Problem loads at `128px` top padding; Solution loads at `96px` — visually jarring on direct comparison)
- **Zero mobile responsiveness** on the two built pages — every multi-column grid collapses without any breakpoints
- **Hardcoded values** (raw `rgba()`, raw pixel sizes) that bypass the token system
- **Architectural drift** — scroll reveal only defined on Problem, not Solution; `.page-section` defined twice; `.student-avatars` defined twice
- **Functional bugs** — D3/TopoJSON loaded unnecessarily on Problem, inline JS duplication, silent failure paths

This document is the execution checklist. Every item is specific enough to act on without judgment calls.

---

## Priority Tiers

- **P0 — Regressions / Bugs**: Broken behavior. Fix these first, unconditionally.
- **P1 — Visual Consistency**: Things that look wrong or different between pages. Fix before mobile.
- **P2 — Mobile Responsive**: Everything that breaks below 900px. Fix after P1.
- **P3 — Architecture / Cleanup**: Duplication, token violations, dead code. Fix last.

---

## Scope Exclusions

Pages not yet built (`index.html`, `about.html`, `contact.html`, `resources.html`) are shell files. For those:
- Audit and fix the **shared HTML structure** (nav, footer, SVG defs, script order) for consistency
- Do **not** build content — that's Phase 4–6 work
- The page-specific CSS files for unbuilt pages are likely empty or stubs — leave them alone

---

## BLOCK 1 — CSS Architecture: Eliminate Duplication

### 1A — Move `.page-section` to `base.css`

**Problem:** `.page-section { padding: var(--sp9) 0; }` is declared in **both** `css/pages/solution.css` (line 8) and `css/pages/problem.css` (line 9). If these ever diverge, pages will have different section rhythm with no obvious cause.

**Fix:**
1. Add `.page-section { padding: var(--sp9) 0; }` to `css/base.css`, in the Section Spacing block (after `.section-sm`)
2. Remove the `.page-section` rule from `css/pages/solution.css`
3. Remove the `.page-section` rule from `css/pages/problem.css`
4. Verify: both pages still render identical section spacing

**Also fix:** `.section-ecca { padding: var(--sp9) 0; }` in `solution.css` is completely redundant — `.section-ecca` is also a `.page-section` element, so it inherits it. Delete the `.section-ecca` rule entirely.

---

### 1B — Move `.student-avatars` and `.student-avatar` to `components.css`

**Problem:** `.student-avatars` and `.student-avatar` are defined in **both** `solution.css` (lines 87–101) and `problem.css` (lines 63–78). The rules are nearly identical but `solution.css` is missing the `:hover` rule that `problem.css` has. This will cause avatar hover behavior to differ between pages.

**Fix:**
1. In `components.css`, add the canonical version at the end of the file:
   ```css
   /* ── STUDENT AVATAR CLUSTER ──────────────────────────────────── */
   .student-avatars {
     display: flex;
     gap: calc(var(--sp3) * -1);
     margin-top: var(--sp2);
   }
   
   .student-avatar {
     width: 52px;
     height: 52px;
     border-radius: 50%;
     mix-blend-mode: multiply;
     margin-right: calc(var(--sp3) * -1);
     position: relative;
     transition: transform 0.15s ease;
   }
   .student-avatar:hover { transform: translateY(-3px); z-index: 1; }
   ```
2. Delete the `.student-avatars` and `.student-avatar` rules from `solution.css`
3. Delete the `.student-avatars` and `.student-avatar` rules from `problem.css`
4. Verify: avatars render and hover correctly on both pages

---

### 1C — Move `.reveal-on-scroll` to `components.css` or `base.css`

**Problem:** `.reveal-on-scroll` / `.revealed` is defined only in `problem.css`. The `solution.html` page doesn't use it today, but if any section is ever added there with `reveal-on-scroll`, it will silently not work. This is a shared utility.

**Fix:**
1. Move the `.reveal-on-scroll` rules from `problem.css` into `base.css` (after the accessibility block):
   ```css
   /* —— SCROLL REVEAL ——————————————————————————————————————————————— */
   .reveal-on-scroll {
     opacity: 0;
     transform: translateY(20px);
     transition: opacity 0.55s var(--ease-out), transform 0.55s var(--ease-out);
   }
   .reveal-on-scroll.revealed {
     opacity: 1;
     transform: translateY(0);
   }
   ```
2. Delete from `problem.css`
3. Verify: scroll reveal still works on the Problem page

---

### 1D — Consolidate `.section-framing` and `.section-body`

**Problem:** `.section-framing` and `.section-body` are defined in `solution.css` but used on the Solution page only. They are not shared. If the Problem page ever needs the same framing style, it would re-invent them. These are generic enough to belong in `components.css`.

**Fix:**
1. Move `.section-framing`, `.section-body`, `.section-prose p`, and `.section-note` from `solution.css` to `components.css` (near the end, after card components)
2. Remove them from `solution.css`
3. Verify: all Solution page typography still renders correctly

---

## BLOCK 2 — Visual Consistency: Spacing Normalization

### 2A — Hero Section Padding (the specific issue Alex flagged)

**Problem:**
- `problem.html` §3.0 hero: `.section-prob-hero { padding-top: var(--sp10); padding-bottom: var(--sp10); }` = **128px top + bottom**
- `solution.html` §4.0 intro: `.page-section { padding: var(--sp9) 0; }` = **96px top + bottom** (inherits only, no override)

This is the inconsistency Alex noticed — loading `/problem` vs `/solution` the top content starts at a visually different vertical position.

**Fix:**
- Change `.section-prob-hero` in `problem.css` to use `var(--sp9)` consistent with all other hero sections:
  ```css
  .section-prob-hero {
    /* padding-top and padding-bottom intentionally match .page-section */
    background: rgba(95, 175, 143, 0.06);
  }
  ```
  This removes the explicit padding override entirely — `.page-section` takes over.
- **Alternative:** if the extra breathing room looks correct for Problem's larger H1, keep `var(--sp10)` but also add the same override to Solution's intro section. Decide visually. Default recommendation: normalize to `var(--sp9)` across both.

---

### 2B — Spec-Header to First Content Element Gap

**Problem:** The vertical gap between the spec-header (`§3.x —`) and the first content element below it varies:
- `.sgo-split` (Solution §4.0): `margin-top: var(--sp2)` = 8px
- `.ecca-split` (Solution §4.2): `margin-top: var(--sp2)` = 8px
- `.split-layout` (Solution §4.5): `margin-top: var(--sp2)` = 8px
- `.prob-hero-layout` (Problem §3.0): `margin-top: var(--sp7)` = **48px** ← inconsistent
- `.why-lost-layout` (Problem §3.1): no margin-top = **0px** ← inconsistent

The spec header itself has `margin-bottom: var(--sp6)` (32px) in `components.css`. So the visible gap is `margin-bottom` + `margin-top` of the element below. Canonical total gap should be `var(--sp6)` (32px) — meaning the element below should have `margin-top: 0`.

**Fix (audit each layout class, normalize):**
- `.prob-hero-layout`: change `margin-top: var(--sp7)` → `margin-top: 0`
  (The spec header's own `margin-bottom: var(--sp6)` provides the gap)
- `.why-lost-layout`: already `margin-top: 0` — correct, no change needed
- `.sgo-split`: `margin-top: var(--sp2)` — this adds 8px on top of the 32px from the header. Small but inconsistent. Change to `0` or document as intentional.
- All others: verify they match

---

### 2C — Blueprint Panel Case Study Consistency (Oregon vs. Pennsylvania)

**Problem:** The Oregon case study (Problem §3.3) was modeled after the Pennsylvania case study (Solution §4.6), but there are styling divergences. Audit both side-by-side:

| Element | Pennsylvania (`cs-*`) | Oregon (`or-*`) | Match? |
|---|---|---|---|
| Program title font size | `clamp(32px, 4vw, 52px)` | `clamp(28px, 3.6vw, 50px)` | **No** |
| Title rule width | 48px green bar | 48px green bar | Yes |
| Stats card heading font | Check `.cs-stats-heading` | Check `.or-stats-heading` | TBD |
| Principle/outcome row layout | numbered rows | numbered rows | Check |
| Pullquote zone layout | text 3fr + visual 1fr | text 3fr + visual 1fr | Check |

**Fix:** After measuring visually (open both pages, scroll to case study panels), identify every divergence and normalize. The PA case study on Solution is the canonical reference since it was built first.

---

### 2D — Highlight Markup Consistency

**Problem:** The `.highlight` class (yellow underline behind key phrases) appears in Solution page but may not be consistently applied in Problem page content. Also, `.thesis-framing .highlight::after` is a one-off override in `solution.css` — check if this exists in `problem.css` too.

**Fix:**
1. Grep for `.highlight` across all CSS files — verify it is defined only once (in `components.css`) and that any overrides are intentional
2. Grep for `.highlight` usage in all HTML files — ensure markup is consistent (no raw `<em>` or `<strong>` where `.highlight` should be used)

---

### 2E — Footnote Rendering Consistency

**Problem:** Footnotes are rendered via `_renderFootnotesList()` functions that appear duplicated inside both `solution.html` and `problem.html` inline scripts. The rendering pattern (ordered list) should be identical, but the CSS styling may differ.

**Fix:**
1. Compare the footnote markup output on both pages
2. Verify `.footnotes ol li` CSS is defined only in `components.css` (not re-defined per page)
3. Check that footnote spacing (gap from content above) is consistent — both should have the same `margin-top`

---

## BLOCK 3 — Mobile Responsive Pass

This is the largest block. Both built pages have almost no mobile breakpoints.

### 3A — Problem Page Mobile

**Target breakpoints:** 768px (tablet collapse), 640px (small mobile)

**Layouts that need breakpoints:**

| Layout class | Desktop | Mobile fix |
|---|---|---|
| `.prob-hero-layout` | `1fr 2fr` grid | Stack: image second (text first on mobile) |
| `.why-lost-layout` | `2fr 3fr` grid | Stack: sticky col becomes normal flow |
| `.breakpoints-frame` | existing | Check carousel touch behavior |
| `.or-header-zone` | `2fr 1fr` grid | Stack: text first, state SVG below |
| `.or-stats-grid` | likely 3-col | 1-col stacked |
| `.or-principles-list` | numbered rows | Already flex — check wrapping |
| `.fg-panels-container` | 2 panels side by side | Stack vertically |
| `.fg-flow-grid--inst` | 9-column CSS grid | Horizontal scroll or simplified view |
| `.fg-flow-grid--student` | 9-column CSS grid | Horizontal scroll or simplified view |
| `.bridge-layout` | 2-column | Stack |

**Specific CSS to write for `problem.css`:**
```css
@media (max-width: 900px) {
  /* Funding gap: stack panels */
  .fg-panels-container { flex-direction: column; }
  .fg-vs-float { display: none; }

  /* Oregon header: stack */
  .or-header-zone { grid-template-columns: 1fr; }
  .or-stats-grid  { grid-template-columns: 1fr; gap: var(--sp4); }
}

@media (max-width: 768px) {
  /* Hero: stack, pipe below text */
  .prob-hero-layout {
    grid-template-columns: 1fr;
  }
  .prob-hero-pipe { order: 2; margin-top: var(--sp6); }

  /* Why lost: unstack sticky col */
  .why-lost-layout {
    grid-template-columns: 1fr;
  }
  .why-lost-anchor-col { position: static; }

  /* Bridge layout */
  .bridge-layout { flex-direction: column; }
  .bridge-icon-col { margin-bottom: var(--sp4); }

  /* Funding gap diagram: horizontal scroll on mobile */
  .fg-panels-container { gap: var(--sp6); }
  .fg-flow-grid--inst,
  .fg-flow-grid--student {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  /* Or-principles */
  .or-principles-list { gap: var(--sp4); }
}
```

---

### 3B — Solution Page Mobile

**Target breakpoints:** 900px (tablet), 768px (mobile)

**Layouts that need breakpoints:**

| Layout class | Desktop | Mobile fix |
|---|---|---|
| `.sgo-split` | `1fr 2fr` | Stack: text first, image second |
| `.sgo-definition` | `1fr 1fr` | Stack |
| `.sgo-flow` | horizontal flex 5 steps | Vertical stack |
| `.ecca-split` | `3fr 2fr` | Stack: stats move below text |
| `.wcf-layout` | assumed 2-col | Check — stack |
| `.req-layout` | assumed 2-col | Stack |
| `.split-layout` (state map) | `2fr 3fr` | Stack: map below text |
| `.cs-header-zone` | `2fr 1fr` | Stack |
| `.cs-stats-grid` | 3-col | 1-col |
| `.cs-outcomes-zone` | 2-col | Stack |
| `.scope-layout` | prose + sidebar | Stack, sidebar below |

**Key fix for the SGO flow diagram:**
```css
@media (max-width: 768px) {
  .sgo-flow {
    flex-direction: column;
    align-items: stretch;
  }
  .sgo-flow-arrow {
    transform: rotate(90deg);
    margin: 0 auto;
  }
}
```

---

### 3C — Navigation Mobile Verification

The `nav.css` has a mobile breakpoint at 768px with a hamburger toggle. Verify:
1. Toggle button appears at 768px
2. Menu opens and closes correctly
3. Active page link styling still works in mobile menu
4. Menu closes when a link is clicked (check `nav.js` — if not implemented, add it)
5. Menu doesn't overlap content when open (z-index + position:absolute should handle it, but verify)

---

### 3D — Typography Scaling on Mobile

The Problem page uses `clamp()` on `.prob-hero-h1` — that's correct. But several headings on Solution use raw `clamp()` values defined outside the token system. Audit and verify:
- All h1/h2 headings use `clamp()` or a mobile-adjusted size
- Line lengths (max-width: 65ch, 52ch) behave correctly on narrow viewports

---

## BLOCK 4 — Token Violations and Hardcoded Values

### 4A — Hardcoded rgba() for Green Tint Background

**Problem:** `rgba(95, 175, 143, 0.06)` appears in both `solution.css` and `problem.css` for the green hero tint. This is the `--color-green` value at 6% opacity. There's no token for this.

**Fix (two options):**
- **Option A (preferred):** Add a semantic token in `tokens.css`:
  ```css
  --color-green-tint: rgba(95, 175, 143, 0.06);
  ```
  Then update all usages to `var(--color-green-tint)`.
- **Option B:** Leave as is, but consolidate to a single `.hero-section-tint` class in `base.css`.

---

### 4B — Hardcoded Pixel Values

**Audit the following and replace with token equivalents:**

| Location | Value | Should be |
|---|---|---|
| `solution.css` `.ecca-stats` | `border: 1.5px solid` | `var(--stroke-secondary)` |
| `solution.css` `.sgo-flow` | `border-top: 1.5px solid` | `var(--stroke-secondary)` |
| `components.css` `.spec-header` | raw `11px` font-size | `var(--font-size-spec-label)` should be 11px — check token, use it |
| `nav.css` `.nav-logo-text` | raw `11px` | `var(--font-size-spec-label)` |
| `nav.css` `.nav-link` | raw `11px` | `var(--font-size-spec-label)` |
| `problem.css` `.fg-silo-top-label` | `6.5px` | document as intentional (no token this small) |
| `problem.css` `.fg-rl` | check for raw px | use tokens |

---

### 4C — Hardcoded Color Values in JavaScript

**Problem:** Both `problem.html` and `solution.html` inline scripts contain:
```js
pathEl.setAttribute('fill', 'rgba(95,175,143,0.45)');
pathEl.setAttribute('stroke', 'rgba(95,175,143,0.8)');
```
CSS custom properties can't be read from JS without `getComputedStyle`, so this is acceptable — but the values must match the token. Verify `rgba(95,175,143,...)` matches `--color-green: #5FAF8F`. (5F=95, AF=175, 8F=143 — confirmed correct.)

**No fix needed** — just document this is an acceptable exception and the values are verified to match the token.

---

### 4D — Stroke Weight Tokens

**Problem:** `1.5px` appears hardcoded many times. The token `--stroke-secondary: 1.5px` exists. Do a find-and-replace audit:

1. Grep for `1.5px` across all CSS files
2. Replace every instance with `var(--stroke-secondary)` where it refers to a border/stroke weight
3. Exception: `problem.css` fg-diagram-specific values (1.5px for dashed silo boxes) — leave as is if they're part of the diagram geometry system

---

## BLOCK 5 — JavaScript and Functional Bugs

### 5A — Unnecessary D3/TopoJSON on Problem Page

**Problem:** `problem.html` loads D3 and TopoJSON at the bottom of the page:
```html
<script src="https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js"></script>
```
These are used only for the Oregon state SVG rendering — a small decorative element. But D3 is a large library (~500KB minified). The `_renderOregonStateSvg()` function already has a `typeof d3 === 'undefined'` guard and fails silently, which means we *could* remove the D3 script and the SVG just wouldn't render.

**Fix options:**
- **Option A (preferred):** Keep D3 for the Oregon SVG — it renders a meaningful state shape context for the case study. But move the script tags to load `async` or `defer` to not block rendering.
- **Option B:** Remove D3 from problem.html and use a static SVG path for Oregon instead. This eliminates the CDN dependency.

Recommendation: Option A (add `defer` attribute).

---

### 5B — Duplicated `_renderFootnotesList` Function

**Problem:** The function `_renderFootnotesList(el, notes)` is copy-pasted verbatim inside both `solution.html` and `problem.html` inline scripts. If the rendering format ever changes (e.g., add a "Sources" label), it must be updated in two places.

**Fix:** Move to `js/render.js` as an exported function:
```js
export function renderFootnotesList(el, notes) {
  if (!el || !notes || !notes.length) return;
  el.innerHTML = '<ol>' + notes.map(n => `<li>${n}</li>`).join('') + '</ol>';
}
```
Import it in both HTML pages.

---

### 5C — Duplicated `_renderCsStats` / `_renderCsOutcomeList` Pattern

**Problem:** `solution.html` defines `_renderCsStats`, `_renderCsOutcomeList`, and `_renderCsClosureList`. `problem.html` defines its own `_renderOrStats` and `_renderOrPrinciples`. These render structurally similar things (numbered cards, stat columns) with slightly different markup.

**Assessment:** The markup does differ enough that merging is not straightforward. For now, leave them separate but document that they should converge when the component library matures.

---

### 5D — Mobile Nav Close-on-Click

**Problem:** The mobile nav currently shows the hamburger at 768px. When a user taps a nav link, the menu may not close. Check `js/nav.js`.

**Fix (if missing):**
```js
// Add inside nav.js, after toggle setup:
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open');
  });
});
```

---

### 5E — Scroll Reveal Not Applied on Solution Page

**Problem:** The Solution page sections don't have `reveal-on-scroll` class. The scroll reveal CSS is currently defined only in `problem.css` (though this will be fixed in Block 1C). But even after moving to `base.css`, the Solution page HTML doesn't use the class.

**Decision:** After Block 1C moves scroll reveal to `base.css`, apply `reveal-on-scroll` to the appropriate Solution page sections (all except `section-sgo-intro` which should appear immediately). This is a visual enhancement that makes both pages feel consistent.

Add `class="... reveal-on-scroll"` to:
- `section-how-it-works`
- `section-ecca`
- `section-what-can-fund`
- `section-requirements`
- `section-state-map`
- `section-scope`

(Section pennsylvania is a Blueprint Panel that shouldn't fade in — leave as is.)

---

## BLOCK 6 — HTML Shell Consistency

### 6A — SVG Defs Duplication

**Problem:** All four built pages (`problem.html`, `solution.html`, `index.html`, `about.html`) each embed the same SVG defs block (hand-drawn filter + arrow markers). If the filter parameters ever change, all files must be updated.

**Acceptable for now** — the `<svg>` block is small and this is a static site with no build step. Document as known duplication. No fix needed.

---

### 6B — Script Order Consistency

**Problem:** The script loading order differs slightly across pages:
- Some pages: `d3`, `topojson`, `lucide`, `nav.js`, `parallax.js`
- Others: `lucide`, `nav.js`, `parallax.js` (no d3/topojson)

**Fix:** Standardize all pages to the same script order:
```html
<!-- External CDN libraries (only what each page needs) -->
<script src="https://cdn.jsdelivr.net/npm/d3@7/..." defer></script>     <!-- only if needed -->
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3/..." defer></script> <!-- only if needed -->
<script src="https://unpkg.com/lucide@0.474.0/..." defer></script>

<!-- Site scripts -->
<script src="/js/nav.js" defer></script>
<script src="/js/parallax.js" defer></script>

<!-- Page module (last) -->
<script type="module">...</script>
```

Adding `defer` to non-module scripts ensures they don't block HTML parsing.

---

### 6C — Missing `lang` attribute Consistency

All pages have `<html lang="en">` — no action needed.

---

### 6D — Meta Description Audit

Every page should have a unique, accurate `<meta name="description">`. Audit all 6 pages:

| Page | Current description | Status |
|---|---|---|
| `/` (index) | "helps educators and nonprofits launch SGOs..." | ✅ Good |
| `/problem` | "Academic loss at K-12 transition points is not inevitable..." | ✅ Good |
| `/solution` | "How SGOs work — ECCA mechanism, eligibility requirements..." | ✅ Good |
| `/about` | "Our mission, beliefs, and model..." | ⚠️ Generic |
| `/contact` | Check | TBD |
| `/resources` | Check | TBD |

---

## BLOCK 7 — Accessibility Pass

### 7A — Accordion Keyboard Navigation (Problem §3.2)

The breakpoints carousel/accordion was built custom. Verify:
1. Tab key moves focus to prev/next controls
2. Enter/Space activates controls
3. Slide transitions don't trap focus
4. `aria-live` region announces slide changes to screen readers

---

### 7B — Funding Gap Diagram Accessibility

The funding gap diagram is a visual-first component. It must have:
1. Accessible names for both panels (they have `<h3>` elements — good)
2. Row labels (`FUNDING`, `INSTITUTIONS`, etc.) don't need ARIA — they're visible text
3. Avatar images have `alt=""` (they're decorative) — verify
4. The diagram as a whole should have a surrounding `<figure>` or `aria-label` explaining its purpose

---

### 7C — Color Contrast Check

The token system uses `--color-ink-muted: #6B7280` on `--color-paper: #F7F6F2`. Run this combination through a contrast checker:
- `#6B7280` on `#F7F6F2` = approximately 4.1:1 — passes AA for normal text (4.5:1 required)

**This is borderline.** Check all uses of `color: var(--color-ink-muted)` where the text size is below 18px (non-bold) or 14px (bold). Small mono labels at 10px on muted color may fail contrast.

---

### 7D — Focus Ring Visibility

`:focus-visible` in `base.css` is set to `outline: 2px solid var(--color-green)`. This is a good color choice. Verify it's visible on both light paper backgrounds and blue Blueprint Panel backgrounds.

---

## BLOCK 8 — Quality Checklist (from `handoff-readme.md`)

Run this checklist on every built page after all blocks above are complete:

**Design system:**
- [ ] Background is `var(--color-paper)` everywhere (no pure white)
- [ ] Only three typefaces: Source Serif 4, Inter, IBM Plex Mono
- [ ] Yellow + green accent ≤ 15% of any visible surface area
- [ ] No gradients, no drop shadows
- [ ] Blueprint Panel appears max twice per page (once on Problem: Oregon; once on Solution: Pennsylvania + scope)
- [ ] `--radius-sm` (2px) is the maximum border radius anywhere

**Typography:**
- [ ] All headers use Source Serif 4
- [ ] All labels/tags/mono text use IBM Plex Mono
- [ ] All body/UI text uses Inter
- [ ] No mixed typeface usage within a single element

**Spacing:**
- [ ] Section padding is consistent between Problem and Solution (after Block 2A fix)
- [ ] Spec-header → first content gap is consistent across all sections (after Block 2B fix)
- [ ] No bare `px` values in CSS that should be `var(--sp*)` tokens

**Motion:**
- [ ] No auto-playing animations
- [ ] All animations are scroll-triggered or user-triggered
- [ ] `prefers-reduced-motion` respected (check both pages)

**Mobile:**
- [ ] All layouts collapse gracefully at 768px
- [ ] No horizontal overflow at any viewport width
- [ ] Touch targets ≥ 44px

**Content:**
- [ ] No Lorem Ipsum anywhere in rendered HTML
- [ ] `[PLACEHOLDER NAME]` present only in nav/footer/title (not in body copy)
- [ ] All footnote citations render correctly

---

## BLOCK 9 — Visual Regression Checklist

After all changes, do a visual pass at three viewport widths. For each, check the list of things that must look identical between the two built pages:

**Desktop (1280px+):**
- [ ] Hero section vertical position: same distance from nav to first text on both pages
- [ ] Spec header styling: same on all sections across both pages
- [ ] Blueprint Panel: same navy background, same content-box treatment
- [ ] Student avatar clusters: same size, hover behavior
- [ ] Footnotes: same mono small text styling

**Tablet (768px–1024px):**
- [ ] Two-column layouts beginning to collapse
- [ ] No content overlap
- [ ] Nav still readable

**Mobile (375px):**
- [ ] All sections single-column
- [ ] Nav hamburger works
- [ ] Diagrams either scroll horizontally or display a simplified view
- [ ] Text is readable (no tiny type, no overflow)

---

## Execution Order

Complete blocks in this order:

1. **Block 1** (CSS architecture) — do all of 1A, 1B, 1C, 1D before touching anything else. These are the lowest-risk changes and unblock everything else.
2. **Block 4D** (stroke token audit) — while you're in the CSS anyway
3. **Block 2** (spacing normalization) — visual consistency fixes
4. **Block 5A** (add `defer` to scripts) — quick, low-risk
5. **Block 5B** (`renderFootnotesList` extract) — moderate refactor
6. **Block 5D** (mobile nav close-on-click) — quick JS fix
7. **Block 5E** (scroll reveal on Solution) — add CSS classes to HTML
8. **Block 3** (mobile responsive) — the big block, do all of 3A–3D
9. **Block 6B** (script order) — standardize across all shells
10. **Block 7** (accessibility pass) — requires a browser
11. **Blocks 8 + 9** (quality checklist + visual regression) — requires a browser

---

## Files Modified

| File | Changes |
|---|---|
| `css/base.css` | Add: `.page-section`, `.reveal-on-scroll`, `.section-framing`, `.section-body`, `.student-avatars`, `.student-avatar` |
| `css/components.css` | Add: student avatar cluster |
| `css/nav.css` | Minor: replace raw `11px` with token |
| `css/pages/solution.css` | Remove: `.page-section`, `.student-avatars`, `.student-avatar`, `.section-ecca` padding, `.section-framing`, `.section-body`. Add: mobile breakpoints |
| `css/pages/problem.css` | Remove: `.page-section`, `.student-avatars`, `.student-avatar`, `.reveal-on-scroll`. Fix: `.section-prob-hero` padding, `.prob-hero-layout` margin-top. Add: mobile breakpoints |
| `js/render.js` | Add: exported `renderFootnotesList` |
| `js/nav.js` | Add: close-on-click for mobile links |
| `problem.html` | Add: `defer` to CDN scripts |
| `solution.html` | Add: `defer` to CDN scripts. Add: `reveal-on-scroll` classes to sections |
| `index.html` | Standardize: script order |
| `about.html` | Standardize: script order |
| `contact.html` | Standardize: script order |
| `resources.html` | Standardize: script order |

---

## What This Does NOT Change

- Visual appearance of any existing component (except fixing spacing inconsistencies)
- Any content in `content/*.js` files
- The design system itself (`_design/tokens.css` is read-only)
- The Oregon or Pennsylvania case study content
- The funding gap diagram geometry
- The accordion/carousel behavior

The goal is that when you compare the site before and after, the **only** visible differences are:
1. Problem and Solution hero sections have the same top padding
2. Everything looks correct on a phone
3. Student avatars hover consistently on both pages

Everything else should look exactly the same.
