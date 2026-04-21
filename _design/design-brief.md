# Website Design Brief
**Project:** SGO Wraparound Services — Practicum Website
**Authors:** Alex Ahlstrom & Evie Elson · UVA Darden School of Business + School of Education
**Date:** 2026-04-20
**Status:** Content developed; visual design confirmed (see Section 5)

---

## 1. Project Overview

Alex and Evie are building an informational website for an advocacy and consultative organization (name TBD — placeholder: "[PLACEHOLDER NAME]") that helps educators and nonprofits launch Scholarship Granting Organizations (SGOs) focused on wraparound services for K-12 students at critical transition points.

The organization has two mandates: (1) help educators stand up SGOs designed to prevent the loss of academic progress, and (2) advocate at the policy level for SGOs to be used in service of measurable outcomes for low-income students. Over time, the organization plans to develop a certification model — a seal of quality for high-impact SGOs. **This certification model should not appear in the site navigation or architecture — it is mentioned only in the About page body copy.**

The website is not an academic paper and not a slide deck. It is a public-facing informational resource. Evie will share the link with potential partners: nonprofits, school districts, funders, and education leaders. It is a real outreach tool, not just an academic exercise.

**Placeholder policy:** Everywhere "[PLACEHOLDER NAME]" appears in content, it will be replaced via find-and-replace when the organization's name is decided. Do not hard-code alternative names — always use this exact string so the swap is clean and complete.

---

## 2. Audience

**Primary:** Educators, school administrators, and nonprofit leaders who are considering launching an SGO or want to understand the federal mechanism well enough to act on it.

**Secondary:** Funders, policy stakeholders, and partners Evie or Alex share the link with directly.

The reader is busy and skeptical. They have seen frameworks come and go. They respond to clarity over jargon, evidence over assertion, and "here is a tool you can actually use" over "here is a theory." They may open the link on their phone from an email.

**Design for both desktop and mobile equally.** Partners open links from email on their phones. The site must be fully functional and visually sound at mobile sizes — this is not a "mobile-friendly fallback" but a primary design context.

---

## 3. Tone & Voice

- Write like a journalist, not an academic. Short sentences. Active voice.
- No jargon without explanation.
- First person plural ("we") when speaking as the organization.
- Second person ("you") when addressing potential partners.
- Specificity over abstraction: "a sixth grader whose tutoring stops when she changes schools" beats "students experiencing discontinuity of services."
- **Citations:** Direct quotes are footnoted. Paraphrased facts are not cited inline. No academic-style parenthetical citations. Footnotes appear at the bottom of the section they belong to, numbered sequentially within each section (not globally). Visual treatment: superscript number in text, full citation below the section rule.
- **Language:** English only.

---

## 4. Site Map

| # | Page | Title | URL | Primary Job |
|---|------|-------|-----|-------------|
| 1 | Landing | Landing / Hero | `/` | Hook and orient |
| 2 | About | About Us | `/about` | Mission, beliefs, model |
| 3 | Problem | The Handoff Problem *(working title — TBD)* | `/problem` | Establish why transition falloff is structural |
| 4 | Solution | Solution | `/solution` | Explain the full SGO mechanism |
| 5 | Resources | Resources | `/resources` | One-pager and reference documents |
| 6 | Contact | Get in Touch | `/contact` | Convert interest into action |

**Navigation order:** Landing → About → Problem → Solution → Resources → Contact.

**Page 3 name note:** "The Handoff Problem" is the working default. Current alternatives: "The Transition Gap." Neither is finalized. Use "The Handoff Problem" in all code and nav until the name is decided.

---

## 5. Visual Design Direction

**The visual design is confirmed and final.** The design system is **Blueprint × Field Notes v1.0**. Do not reference any prior design brief for this project — that version is deprecated.

### 5.1 Design System Files

All design system documentation lives in `_design/`. See `CLAUDE.md` for full per-file instructions. Quick reference:

- `_design/tokens.css` — Production-ready CSS custom properties. Drop into `css/`, import globally. Never hardcode any value that has a token.
- `_design/handoff-readme.md` — Implementation spec. Defines rules, component patterns, annotation kit, diagram patterns, motion, texture. This is the binding document for all visual decisions.
- `_design/component-reference.html` — Visual source of truth. Open in browser. Match precisely.

### 5.2 Aesthetic Summary

**North Star:** The site should look like something an architecture or policy team would present while actively building a system — drafted, annotated, in-progress — not a finished marketing site or a government publication.

**Two layers, always present:**
- **Structural layer:** Precise, grid-anchored, confident. Handles all type, linework, diagrams.
- **Working layer:** Annotated, slightly human, occasionally imperfect. Margin notes, hand-drawn arrows, highlight marks.

### 5.3 Color System (confirmed final)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-paper` | `#F7F6F2` | Primary background. 85–90% of any surface. Never pure white. |
| `--color-ink` | `#1F1F1F` | All text, linework, diagram strokes. Never pure black. |
| `--color-ink-muted` | `#6B7280` | Secondary text, captions, annotations |
| `--color-yellow` | `#E7C857` | Highlight/emphasis only. Never structural. |
| `--color-green` | `#5FAF8F` | Active/selected state, spec tags |
| `--color-blue` | `#1E3A5F` | Blueprint Panels only. 1–2× per page max. |
| `--color-rule` | `#D9D6CE` | Grid lines, section dividers, card borders |

### 5.4 Typography (confirmed final)

Three typefaces. Never add a fourth.

| Role | Family | Weight | Use |
|------|--------|--------|-----|
| Authoritative | Source Serif 4 | 600 | Headlines, section framings, pull quotes only |
| System | Inter | 500 | Body copy, nav, buttons, labels, all small text |
| Annotation | IBM Plex Mono | 400 | Spec labels, callouts, margin notes, measurement notation |

### 5.5 Blueprint Panel Placement Rules

Blueprint Panels are the system's most emphatic container. Two rules govern placement on this site:

1. **Landing page hero:** The Blueprint Panel is used as the hero background on the landing page (`/`). This is the one place where the panel sets the scene rather than marks an exception.
2. **All other pages:** Blueprint Panels mark emphasis. Use them to call attention to a specific important section — a case study, a key mechanism reveal, a critical callout. Never use a Blueprint Panel as a generic section header or background. Good candidates: the Pennsylvania case study (Page 4), the ECCA opening framing (Page 4), major thesis moments on Page 3.

### 5.6 Hard Rules

- No gradients anywhere.
- No drop shadows anywhere.
- No tinted backgrounds outside Blueprint Panels.
- Accent colors (yellow + green combined) ≤ 15% of any surface.
- Green and yellow never on the same element.
- Corners: 0px or 2px (`--radius-sm`) only.
- Motion responds to user action only — no auto-play. Respect `prefers-reduced-motion`.
- All visual elements buildable in SVG/CSS — no stock photography.

### 5.7 Component Requirements

The following components must be designed and built:

| Component | Location | Notes |
|-----------|----------|-------|
| Hero visual | Landing, Hero | Image assets to be provided by Alex — prompt him before building hero section |
| Transition falloff visual | Landing §1.2, Problem §3.1 | SVG diagram showing student drop at three transitions |
| Logic model diagram | About §2.4 | Impact → Outcomes → Outputs → Activities → Inputs; most attractive SVG treatment |
| Three-panel accordion | Problem §3.3 | All 3 panels visible collapsed; expand inline; independent state |
| Tabbed case study panel | Problem §3.4 | Multiple programs, switch without scroll — **Lorem Ipsum content until Alex provides case studies** |
| U.S. state map | Solution §4.2 | SVG, 3-state color coding; data from `content/state-map-data.js` |
| 5-step flow diagram | Solution §4.3 | SVG, left-to-right; scroll-triggered build animation |
| Expandable 11-requirements list | Solution §4.4 | All 11 visible collapsed without scrolling; expand inline |
| IMPORTANT TO KNOW callouts | Solution §4.5, §4.6, §4.7 | Distinct card treatment, separate from body copy — see §5.8 |
| Person cards | Contact | Alex + Evie; headshots, email, title, affiliation |

### 5.8 IMPORTANT TO KNOW Callouts

These callouts appear 5× on the Solution page and are a distinct pattern. They are not part of the main body but essential supporting detail. Treatment: a bordered card component with a label tag reading "IMPORTANT TO KNOW" in monospace. More emphatic than body text, less emphatic than a Blueprint Panel. Final visual treatment subject to Alex's feedback after first build.

### 5.9 Proposed Hero Headlines

The landing page hero headline is TBD. Three options for consideration:

**Option A:** "Academic progress shouldn't stop where school does." *(8 words — clean, problem-framing)*
**Option B:** "Every transition costs students something. We're changing that." *(8 words — action-oriented)*
**Option C:** "The gaps between schools are losing our kids." *(8 words — visceral, specific)*

Alex to select or revise. Default to Option A until decided.

---

## 6. Page 1: Landing / Hero

### Job
Hook the reader and orient them to the site. The reader should understand the problem, the solution, and what this organization does — in a single scroll. Problem-first. Do not lead with the organization.

### Section 1.1 — Hero

**Purpose:** Capture attention immediately. Headline leads with the problem, not the org.

**Components:**
- Blueprint Panel as background (dark blue field, grid overlay)
- Large serif headline — see §5.9 for options
- One-sentence thesis
- Hero visual — **image assets to be provided by Alex. Prompt him before building this section.**
- No subnavigation or secondary elements in the hero — one thing, clearly

**Copy:** Hero headline TBD (see §5.9). Thesis TBD — must be punchy, specific, under 10 words.

### Section 1.2 — The Problem (Landing Version)

**Purpose:** Short, punchy articulation of the problem. Teaser — not the full Problem page.

**Copy (draft):**
Students lose academic ground at every major transition of their K-12 education. The losses are predictable, well-documented, and steepest for low-income students and students of color. They persist not because of anything students do, but because the institutions responsible for their education were never designed to hand them off.

**Visual:** Transition falloff SVG diagram — simplified version of the same visual used on `/problem`. Should communicate the drop at each stage without requiring explanation.

**Link:** Leads to `/problem`.

### Section 1.3 — The Solution (Landing Version)

**Purpose:** Introduce SGOs as the mechanism and the organization as the guide.

**Copy (draft):**
Scholarship Granting Organizations — SGOs — are a federal funding vehicle capable of directing tens of billions of dollars directly to students. Most educators have never heard of them. Most that have don't know how to use them well. We're here to change that.

**Links:** Three preview cards linking to `/about`, `/problem`, and `/solution`. Each card: page title, one-line description, link.

---

## 7. Page 2: About Us (`/about`)

### Job
Tell the organization's story: what we believe, who we are, and how we work. Must feel like a mission statement worth reading. Layout approach TBD — think carefully about information hierarchy and visual engagement given the content volume. All content is final.

### Section 2.1 — Mission & Vision

**Mission:**
We help schools prevent the loss of academic progress that occurs as students move through the K-12 system, by launching Scholarship Granting Organizations that support students across every transition.

**Vision:**
Every student's progress endures across every transition of their education, from kindergarten through graduation.

### Section 2.2 — We Believe

**Copy (final):**

In 2025, Congress created a new federal tax-credit scholarship program: a mechanism capable of directing tens of billions of dollars in federal funding toward individual students. It is the most substantial change to federal education funding policy in decades, and most schools are not yet prepared to use it.

We believe K-12 education in America has undergone a foundational change over the last fifty years. The primary model of education delivery has fractured. What was once a system of local public schools feeding into state departments of education is now a patchwork: public, private, charter, homeschool, and micro-schools. In this landscape, no single institution is responsible for a student's full journey, which means no single institution is accountable for the handoffs between stages.

We believe students are best served when they have consistent, ongoing resources that follow them across this expanding landscape. Direct funding to institutions must be paired with funding that supports individual students, ensuring their progress endures from one classroom, school, and year to the next.

We believe the loss of academic progress at transition points is not an inevitable developmental fact, but a structural one. Pre-K gains fade within a year of kindergarten. Math and reading scores drop when students enter middle school. Grades, attendance, and wellbeing decline at the move to high school. At each of these junctures, the losses are steepest for low-income students and students of color. These patterns persist because the gap between institutions is treated as an informal handoff rather than a structural design unit that can be governed, resourced, and measured.

Scholarship Granting Organizations are uniquely suited to change this. They are portable, student-bound, and flexible enough to fund the services that carry learning across transitions: tutoring, literacy coaching, transportation, extended day, vocational programming, and more. The law authorizes far more than most SGOs deliver.

### Section 2.3 — Who We Are

**Copy (final):**

[PLACEHOLDER NAME] is an advocacy and consultative organization built for this moment. We have two mandates:

**First**, we help educators and institutions stand up SGOs designed to prevent the loss of academic progress. We do not prescribe specific interventions; we require a theory of change. Whether an organization focuses on early literacy, vocational readiness, or continuity of support across moves, the activities must be grounded in evidence and the outcomes must be measurable.

**Second**, we advocate at the policy level for SGOs to be used in service of measurable outcomes for low-income students. The federal mechanism will be shaped by early implementation. We intend to shape it toward impact.

Over time, we will develop a certification model: a seal that signals to donors, families, and policymakers that an SGO operates with a credible theory of change and rigorous accountability. The mechanism is powerful. The theory is what makes it work.

### Section 2.4 — Our Model

**Intro copy:**

SGOs are a powerful funding mechanism without a default theory of use. The law permits much more than most SGOs deliver, which creates three problems:

- It is hard to design SGOs that actually deliver impact.
- It is difficult for beneficiaries to navigate available funding options.
- It is difficult for donors to identify the impact of an SGO.

Our model is opinionated. We believe SGOs are uniquely suited to prevent the loss of academic progress at K-12 transition points: they are flexible enough to follow a student across schools, years, and circumstances, and authorized to fund the services that carry learning across those transitions. Most SGOs do not use this authority. We help educators build ones that do.

Our approach combines flexibility with accountability. We do not tell institutions which interventions to deliver. We require that they articulate a theory of change linking their activities to outcomes that reduce pipeline attrition, and we help them build the measurement systems to prove it.

**Logic model** *(visual component — most attractive SVG treatment possible given available tools)*:

We start from the impact we are trying to produce and work backward:

- **Impact:** Students retain and compound their academic progress across every transition of their K-12 education, graduating ready to participate civically, economically, and socially in their communities.
- **Outcomes:** Students retain the gains they make across moves, school changes, and grade transitions. Losses at the points where they are most predictable, and most damaging, are reduced.
- **Outputs:** We help educators determine what to measure, including grade-level reading proficiency, vocational completion, continuity of services, and student-level progress across transitions.
- **Activities:** We help educators define the specific activities their SGO will undertake, grounded in evidence about what helps students retain and build on their learning. Activities are context-specific; the theory linking them to outcomes is not optional.
- **Inputs:** We help educators identify the resources their SGO needs, including the federal tax-credit funding mechanism, institutional partnerships, and the operational capacity to sustain the work.

---

## 8. Page 3: The Handoff Problem (`/problem`)

*(Page name working title — TBD. "The Transition Gap" is an alternative. Use "The Handoff Problem" until decided.)*

### Job
Make the pipeline problem visceral, evidence-based, and structural. The reader should leave thinking: the loss of academic progress at transition points is not random or inevitable — it is designed, and it can be redesigned. Set up SGOs as the funding mechanism that makes the redesign possible.

### Section 3.1 — Opening Thesis

**Copy (draft):**
Students don't fall behind because they stop trying. They fall behind because the system that was supposed to support them wasn't designed to follow them. Academic falloff at transition points is not a developmental fact — it is a structural one. It is predictable, measurable, and concentrated at three specific moments in a student's K-12 journey. And it is steepest for the students who can least afford it.

### Section 3.2 — Why Gains Are Lost

**Copy (draft):**
When a student moves between schools or stages of education, the funding stays behind. The relationships stay behind. The institutional knowledge of what that student needs stays behind. What was working — a reading intervention, a trusted adult, a tutoring relationship — ends when the institution ends, regardless of where the student is in their learning.

Most education funding is tied to institutions: per-pupil allocations, categorical grants, district appropriations. These mechanisms are designed to fund buildings and systems, not individual trajectories. A student who changes schools between third and fourth grade does not carry her resources with her. The new school starts from scratch.

This is not a failure of individual teachers or administrators. It is the predictable output of a system that was designed to fund institutions, not students. The consequence — repeated academic loss at every major transition — is equally predictable.

### Section 3.3 — The Three Breakpoints

**Visual component:** Three-panel accordion. All three panels visible simultaneously in collapsed state. Click any panel to expand inline. Panels can be expanded independently.

---

**Panel A: Pre-K to Kindergarten**

*Collapsed label:* Pre-K to Kindergarten

*Expanded content:*

Pre-K programs produce real academic gains. Randomized control trials, meta-analyses, and longitudinal studies consistently document meaningful improvements in cognitive skills, language, and school readiness among attendees.

Those gains do not last.

A randomized control trial of over a thousand students in Tennessee's state-funded pre-K program found that, while attendees showed initial academic gains entering kindergarten, those gains had faded by the end of the year — and turned negative by third grade.¹ A meta-analysis of 67 high-quality early childhood education interventions found that the average end-of-program effect on cognitive skills dropped by more than half within a year of program completion and halved again one to two years later.²

The explanation is not that pre-K programs fail. It is that the institutions receiving students after those programs are not designed to build on what students gained. The transition itself carries independent weight: children who struggle in the first ten to fourteen weeks of kindergarten — with peer relationships, new routines, or academic demands — score significantly lower on academic and social-behavioral assessments a year later. This pattern holds regardless of students' initial readiness.³

*Callout stat:*
Students who do not read proficiently by third grade are **4× more likely to drop out of high school.** For low-income students, the risk is **6×**.⁴

*Footnotes:*
1. Durkin et al., 2022
2. Bailey et al., 2017
3. Sun et al., 2024
4. Hernandez, 2011

---

**Panel B: Elementary to Middle School**

*Collapsed label:* Elementary to Middle School

*Expanded content:*

The elementary-to-middle school transition is less studied than the one before it — but equally consequential. A longitudinal study of sixth graders in Florida found that students transitioning to middle school experienced a sharp drop in both math and reading performance that persisted through tenth grade.¹ Separate research suggests that students benefit from remaining in elementary school through at least seventh grade, implying that the transition itself — independent of student characteristics — is a source of academic decline.²

The transition hits students of color with particular force. Research documents that relationships with teachers matter more for minority students' academic confidence.³ The move from a single classroom teacher in elementary school to subject-specific teachers in middle school disrupts precisely those bonds. In the face of the GPA declines that typically accompany this transition, higher levels of teacher support and parental involvement are associated with stronger academic outcomes — but middle school's organizational structure makes that support harder to deliver.⁴

*Callout stat:*
The elementary-to-middle transition is associated with a drop in math and reading scores that **persists through tenth grade** — four years after the transition occurs.¹

*Footnotes:*
1. Schwerdt, 2012
2. Malone et al., 2020
3. Vanlaar et al., 2014
4. Gutman & Midgley, 2000

---

**Panel C: Middle to High School**

*Collapsed label:* Middle to High School

*Expanded content:*

Ninth grade is the most acute crisis point in American schooling. It is not a crisis of student preparation — it is a crisis of institutional design.

Research identifies four drivers of ninth-grade failure: pre-high school academic and behavioral challenges; life course changes like reduced parental supervision; the social disruption of losing established relationships; and the organizational structure of high schools themselves — large, impersonal, highly departmentalized environments where struggling students can go unnoticed and unsupported.¹

Failure in ninth grade dramatically reduces the likelihood of graduation. And the strongest predictor of whether a student stays on track is not their individual background or academic history — it is the school they attend.² The transition from eighth to ninth grade is accompanied by GPA drops across subjects, and those drops are not limited to students who were already struggling. A longitudinal study of Latino youth in Los Angeles County found that higher-achieving eighth graders actually experienced steeper declines than lower-achieving peers during this transition — suggesting the disruption is structural, not a sorting of students by ability.³

*Callout stat:*
The strongest predictor of whether a student stays on track in high school is **not their academic history — it is the school they attend.**²

*Footnotes:*
1. Neild, 2009
2. Allensworth & Easton, 2005
3. Vasquez-Salgado & Chavira, 2014

---

### Section 3.4 — Case Studies

**Purpose:** Demonstrate that support at transition points works when deliberately designed and resourced.

**Visual component:** Tabbed panel. Multiple programs switchable without scrolling. Each tab: program name, what they did, what happened, why it's relevant.

**Content status:** Lorem Ipsum placeholder — Alex will provide specific programs and organizations before this section is finalized.

**Frame for each case study (when content arrives):**
- What problem were they solving?
- What did they do?
- What were the outcomes?
- What made it work?

### Section 3.5 — Bridge to SGOs

**Copy (draft):**
The evidence is clear. Support at transition points — sustained, individualized, and designed to follow the student rather than the institution — reduces the losses. The barrier is not knowledge of what works. The barrier is a funding system that was built to support institutions, not students.

That is where SGOs come in.

**Link:** To `/solution`.

---

## 9. Page 4: Solution (`/solution`)

### Job
Get someone fully up to speed on the SGO system — what it is, where it came from, and how it works — in a way that feels accessible and unintimidating. A reader who arrives skeptical or unfamiliar should leave with a complete working understanding and a clear sense of whether and how their organization can participate.

### Section 4.1 — Opening

**Blueprint Panel candidate.** This is one of the highest-impact moments on the page — the ECCA reveal.

**Copy (final):**

The Educational Choice for Children Act (ECCA), enacted as part of the One Big Beautiful Bill Act in July 2025, establishes the first national education voucher program in U.S. history. Beginning January 1, 2027, taxpayers may claim a dollar-for-dollar federal tax credit of up to $1,700 for contributions to Scholarship Granting Organizations (SGOs) — 501(c)(3) nonprofits that use those funds to award scholarships to income-eligible K-12 students for qualified educational expenses.

This program represents one of the largest educational funding vehicles in American history, with estimates ranging from $20–40 billion annually — surpassing Title I at $18 billion. The opportunity is historic. But it will only reach the students who need it most if the organizations serving them know how to access it.

### Section 4.2 — State Map

**Visual component:** SVG U.S. map, color-coded by opt-in status. Three states:
- Opted in / signaled intent: 28 states (green)
- Opted out: 4 states — Hawaii, New Mexico, Oregon, Wisconsin (muted / ink-muted)
- Undecided: ~18 states (paper / neutral)

**Data lives in:** `content/state-map-data.js` — update this file when states decide. Date of data: March 2026. Include "as of March 2026" label and note that the map will be updated as states decide.

**Copy (final):**

States opt into the program annually. The governor of each state decides each year whether to participate. As of March 2026, 28 states had opted in or signaled intent. Four had publicly opted out. Approximately 18 were still undecided, waiting for Treasury regulations expected in early summer 2026.

If a state does not opt in, its taxpayers' contributions still flow to the program — they just support SGOs in other states.

> **IMPORTANT TO KNOW:** The opt-in decision is annual. States that sit out 2027 can join in future years. The legislation has no end date.

### Section 4.3 — How It Works: The Funding Stream

**Visual component:** 5-step flow diagram. SVG, left-to-right. IntersectionObserver scroll-triggered build animation. Stagger 150ms per node/arrow. Matches canonical SGO fund flow pattern from `handoff-readme.md`.

**Step 1 — The Taxpayer**
A taxpayer decides to contribute up to $1,700 to an SGO. Rather than that money going to the U.S. Treasury, it goes to a qualifying nonprofit. The taxpayer claims a dollar-for-dollar federal tax credit — not a deduction, but a full credit equal to the contribution amount.

*Footnote 1: "The only federal tax credit that's 100% credit for contributions." — CGLR/Alliance for Youth Thriving Webinar Series, Feb. 3, 2026.*

**Step 2 — The SGO Receives**
The SGO receives the contribution and holds it in a dedicated account, separate from all other organizational funds. Contributions cannot be co-mingled with the SGO's general operating funds.

**Step 3 — Students Are Identified**
The SGO verifies that applicants are income-eligible: household income must not exceed 300% of the area median gross income. More than 90% of American students qualify. The SGO follows a statutory priority sequence: returning scholarship recipients first, then their siblings, then the general applicant pool.

*Footnote 2: CGLR/Alliance for Youth Thriving Webinar Series, Dec. 2, 2025.*

**Step 4 — Scholarships Are Awarded**
The SGO awards scholarships to eligible students for qualified educational expenses. There is no cap on individual scholarship amounts — only on the donor's $1,700 annual credit. A single student can receive a scholarship of any size, funded by contributions from multiple donors.

**Step 5 — Services Are Delivered**
Scholarship funds are paid to the provider — a school, tutoring program, afterschool organization, transportation provider, or other qualifying vendor. The student receives the service.

### Section 4.4 — What Is an SGO? The Eleven Requirements

**Intro copy:**

To qualify as an SGO under Section 25F of ECCA, an organization must meet eleven statutory requirements. These are the floor — the legal minimum. SGOs may choose to hold themselves to higher standards.

**Visual component:** Expandable list. All eleven visible in collapsed state without scrolling. Click to expand inline. Each requirement: title, one-sentence summary (collapsed), full detail and context (expanded).

*(Full requirement content unchanged — see below)*

**Requirement 1 — Tax-exempt 501(c)(3):** The organization must already hold 501(c)(3) status. Organizations not yet recognized must complete the IRS approval process before functioning as an SGO. This takes time — plan ahead.

**Requirement 2 — Not a private foundation:** Must be a public charity. This distinction is determined by IRS classification and is not something organizations can change quickly.

**Requirement 3 — Separate accounts:** All qualified contributions must be held in accounts exclusively dedicated to SGO activity. Co-mingling with general funds is prohibited. May require opening new accounts before receiving contributions.

**Requirement 4 — Listed on the state registry:** Each opted-in state submits a list of qualifying SGOs to Treasury. If an organization is not on that list, it cannot participate. Identify which state agency manages the registry and ensure inclusion before contributions arrive.

**Requirement 5 — Serves 10+ students at 2+ schools:** Prevents any single school from creating an SGO to funnel funds exclusively to its own students. Small organizations must think carefully about service geography.

**Requirement 6 — 90% of income goes to scholarships:** The organization may retain no more than 10% for operations. How "income" is calculated is a significant unresolved question — see IMPORTANT TO KNOW callout.

> **IMPORTANT TO KNOW — The 90/10 Rule:** If the 90% requirement applies to total organizational revenues (not just scholarship-designated funds), many multi-mission nonprofits may be unable to qualify. Treasury guidance expected early summer 2026 will clarify this.

**Requirement 7 — Funds only qualifying expenses:** The law defines qualifying expenses broadly — tuition, fees, tutoring, transportation, extended-day programs, technology, and more. What clearly qualifies: tutoring, tuition, fees, transportation, books, equipment, technology. What is still being determined: summer learning, apprenticeships, some wraparound services.

**Requirement 8 — Priority system for scholarships:** Three-tier sequence: (1) prior-year recipients, (2) siblings of prior recipients, (3) general applicant pool. This continuity requirement aligns directly with a transition-focused SGO model.

**Requirement 9 — No earmarking for individuals:** Donors may not set aside contributions for a specific named child. May direct toward mission, population, geography, or program type — not to an individual.

**Requirement 10 — Annual income verification:** Household income ≤ 300% of area median gross income must be verified annually for every scholarship recipient. Not a one-time determination.

**Requirement 11 — No self-dealing:** "Disqualified persons" — board members, major donors, officers, and their family members — may not receive scholarships.

### Section 4.5 — Who Can Become an SGO

**Intro copy:**

The statutory requirements are broad. A wide range of organizational types can qualify — and organizations that are not well-suited to direct operation have a partnership path.

*(Full organizational type descriptions — existing state scholarship orgs, community foundations, district-affiliated education foundations, community-based orgs, public schools through affiliated foundations — see design-brief draft above. All content is final.)*

> **IMPORTANT TO KNOW — Direct Operation vs. Partnership:** Organizations do not have to build SGO infrastructure from scratch. Some established SGOs offer co-branded, white-label infrastructure — handling donation receipt, eligibility verification, and scholarship distribution — at no cost to partnering organizations.

> **IMPORTANT TO KNOW — Relational vs. Transactional:** Existing scholarship organizations typically use a relational model: high-touch donor cultivation, medium-to-large individual gifts. The federal program requires something fundamentally different — a transactional model: digital, low-touch, high-volume, with donors contributing $1,700 at a time and potentially numbering in the hundreds of thousands.

### Section 4.6 — Defining a Scope

*(All content final. See original draft — full copy in section above.)*

Treasury allows SGOs to voluntarily restrict their scope. This self-restriction is the mechanism by which an SGO becomes accountable, measurable, and fundable by mission-aligned donors.

*Footnote 1: CGLR/Alliance for Youth Thriving Webinar Series, Dec. 2, 2025.*

### Section 4.7 — Pennsylvania: What We Can Learn

**Blueprint Panel candidate.** Case study sections are a high-value use of the Blueprint Panel — emphasis, not decoration.

*(All content final — Pennsylvania EITC program data, two instructional lessons, IMPORTANT TO KNOW callout on political contributions.)*

*Footnote 1: CGLR/Alliance for Youth Thriving Webinar Series, Mar. 24, 2026.*

### Section 4.8 — State-Level Decisions (Brief)

Brief section. A quick blurb — do not go deep. All content final.

### Section 4.9 — What's Still Being Decided (Brief)

**Treasury guidance watch list.** When Treasury regulations release (expected early summer 2026), the following sections will need updates:
- The 90/10 rule definition (Requirement 6)
- Qualified expenses scope (Requirement 7)
- State authority over demographic reporting and conditions
- Multi-state SGO rules
- SGO liability for documentation

These will be updated by the development team when guidance releases.

---

## 10. Page 5: Resources (`/resources`)

### Job
Provide downloadable and reference materials for readers who want to go deeper.

### Content (v1)

**One-pager:** Not included in v1. A "coming soon" placeholder card should appear on this page. The one-pager will be added in a later phase.

**Structure:** Build the resources page with the infrastructure to support multiple downloadable documents. Even in v1 with only a placeholder, the card grid should be designed to accommodate real documents later without a redesign.

---

## 11. Page 6: Get in Touch (`/contact`)

### Job
Convert interest into action.

### Content

- Brief statement of what the organization is looking for: nonprofit partners, school districts, funders, and educators interested in launching or supporting wraparound service SGOs.
- Two person cards side-by-side: one for Alex Ahlstrom, one for Evie Elson.
  - Each card includes: headshot (image asset — prompt Alex), name, title, institutional affiliation (UVA Darden School of Business + School of Education), email address
  - Email: clickable `mailto:` link
  - **Alex to provide headshot images and Evie's contact information before building this page.**

---

## 12. Visual Components Inventory

| Component | Location | Status | Notes |
|-----------|----------|--------|-------|
| Hero visual | Landing §1.1 | **Blocked — awaiting image assets from Alex** | Prompt Alex before building hero |
| Transition falloff SVG | Landing §1.2, Problem §3.1 | To build | SVG only |
| Logic model diagram | About §2.4 | To build | Most attractive SVG treatment |
| Three-panel accordion | Problem §3.3 | To build | Content complete |
| Tabbed case study panel | Problem §3.4 | **Placeholder** | Lorem Ipsum until Alex provides case studies |
| U.S. state map | Solution §4.2 | To build | Data complete; lives in `content/state-map-data.js` |
| 5-step flow diagram | Solution §4.3 | To build | Content complete |
| Expandable 11-requirements | Solution §4.4 | To build | Content complete |
| IMPORTANT TO KNOW callouts | Solution §4.5–4.7 | To build | 5 instances total |
| Logic model | About §2.4 | To build | 5-level: Impact → Inputs |
| Person cards | Contact | **Blocked — awaiting headshots + Evie's info** | Prompt Alex before building contact |

---

## 13. Open Items

**Blocking (must decide before the relevant section is built):**
- [ ] Organization name — "[PLACEHOLDER NAME]" throughout all content; find-and-replace when decided
- [ ] Hero headline — three options in §5.9; Alex to select
- [ ] Hero visual — image assets to be provided by Alex; prompt him before building §1.1
- [ ] Page 3 name — "The Handoff Problem" (working default) vs. "The Transition Gap"
- [ ] Case study content (§3.4) — Alex to provide; Lorem Ipsum in place until then
- [ ] Contact page headshots + Evie's contact info — Alex to provide; prompt before building `/contact`

**Confirmed and closed:**
- [x] Visual/aesthetic direction — Blueprint × Field Notes v1.0, confirmed final
- [x] Page 4 name — "Solution" / `/solution`
- [x] Hosting — Netlify via GitHub
- [x] Analytics — none
- [x] State map update mechanism — `content/state-map-data.js`
- [x] Contact method — person cards with email links (no form)
- [x] One-pager — not in v1; placeholder only; added in later phase
- [x] Footnote treatment — superscript numbers, citations at section bottom
- [x] Language — English only
- [x] Certification model — mentioned in About body copy only; no nav item or stub page
- [x] Partner logos — not in v1; no social proof zone

**Non-blocking (can resolve during build):**
- [ ] About page layout — single scroll vs. internal anchor-nav (decide when building; prioritize visual engagement over convention)
- [ ] Treasury guidance updates — multiple §4 sections need revision when regulations release early summer 2026
