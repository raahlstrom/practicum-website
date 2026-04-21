/* content/solution.js — Solution page copy and data
   Edit strings here. Never edit solution.html for copy.
   NOTE: Treasury guidance sections (openQuestions, requirements 6 & 7)
   need updates when regulations release (expected early summer 2026).
*/

export const content = {
  opening: {
    specLabel: "The ECCA",
    paragraphs: [
      "The Educational Choice for Children Act (ECCA), enacted as part of the One Big Beautiful Bill Act in July 2025, establishes the first national education voucher program in U.S. history. Beginning January 1, 2027, taxpayers may claim a dollar-for-dollar federal tax credit of up to $1,700 for contributions to Scholarship Granting Organizations (SGOs) — 501(c)(3) nonprofits that use those funds to award scholarships to income-eligible K-12 students for qualified educational expenses.",
      "This program represents one of the largest educational funding vehicles in American history, with estimates ranging from $20–40 billion annually — surpassing Title I at $18 billion. The opportunity is historic. But it will only reach the students who need it most if the organizations serving them know how to access it.",
    ],
  },

  stateMap: {
    specLabel: "State Opt-In Status",
    intro: "States opt into the program annually. The governor of each state decides each year whether to participate. As of March 2026, 28 states had opted in or signaled intent. Four had publicly opted out. Approximately 18 were still undecided, waiting for Treasury regulations expected in early summer 2026.",
    note: "If a state does not opt in, its taxpayers' contributions still flow to the program — they just support SGOs in other states.",
    dataDate: "March 2026",
    callout: {
      body: "The opt-in decision is annual. States that sit out 2027 can join in future years. The legislation has no end date.",
    },
  },

  fundingStream: {
    specLabel: "How It Works",
    steps: [
      {
        num: "01",
        title: "The Taxpayer",
        body: "A taxpayer decides to contribute up to $1,700 to an SGO. Rather than that money going to the U.S. Treasury, it goes to a qualifying nonprofit. The taxpayer claims a dollar-for-dollar federal tax credit — not a deduction, but a full credit equal to the contribution amount.",
        footnote: '"The only federal tax credit that\'s 100% credit for contributions." — CGLR/Alliance for Youth Thriving Webinar Series, Feb. 3, 2026.',
      },
      {
        num: "02",
        title: "The SGO Receives",
        body: "The SGO receives the contribution and holds it in a dedicated account, separate from all other organizational funds. Contributions cannot be co-mingled with the SGO's general operating funds.",
      },
      {
        num: "03",
        title: "Students Are Identified",
        body: "The SGO verifies that applicants are income-eligible: household income must not exceed 300% of the area median gross income. More than 90% of American students qualify. The SGO follows a statutory priority sequence: returning scholarship recipients first, then their siblings, then the general applicant pool.",
        footnote: "CGLR/Alliance for Youth Thriving Webinar Series, Dec. 2, 2025.",
      },
      {
        num: "04",
        title: "Scholarships Are Awarded",
        body: "The SGO awards scholarships to eligible students for qualified educational expenses. There is no cap on individual scholarship amounts — only on the donor's $1,700 annual credit. A single student can receive a scholarship of any size, funded by contributions from multiple donors.",
      },
      {
        num: "05",
        title: "Services Are Delivered",
        body: "Scholarship funds are paid to the provider — a school, tutoring program, afterschool organization, transportation provider, or other qualifying vendor. The student receives the service.",
      },
    ],
  },

  requirements: [
    {
      num: "Req 01",
      title: "Tax-exempt 501(c)(3)",
      summary: "The organization must be a recognized tax-exempt nonprofit.",
      detail: "The organization must already hold 501(c)(3) status under the Internal Revenue Code. Organizations not yet recognized must complete the IRS approval process before functioning as an SGO. This takes time — plan ahead.",
    },
    {
      num: "Req 02",
      title: "Not a private foundation",
      summary: "Private foundations, including family foundations, do not qualify.",
      detail: "The organization must be a public charity, not a private foundation. This distinction is determined by IRS classification and is not something organizations can change quickly.",
    },
    {
      num: "Req 03",
      title: "Separate accounts",
      summary: "SGO funds must be held in dedicated accounts, completely separate from general operations.",
      detail: "All qualified contributions must be held in accounts exclusively dedicated to SGO activity. Co-mingling with general organizational funds is prohibited. This is a structural and legal requirement — it may require opening new accounts and establishing new internal controls before receiving any contributions.",
    },
    {
      num: "Req 04",
      title: "Listed on the state registry",
      summary: "The organization must appear on its state's official SGO list.",
      detail: "Each opted-in state submits a list of qualifying SGOs to the Treasury Department. If an organization is not on that list, it cannot participate — even if it meets every other requirement. Organizations must identify which state agency manages the registry and ensure they are included before contributions arrive.",
    },
    {
      num: "Req 05",
      title: "Serves 10+ students at 2+ schools",
      summary: "Scholarships must reach at least 10 students across at least 2 different schools.",
      detail: "This requirement prevents any single school from creating an SGO to funnel funds exclusively to its own students. It also means small, hyper-local organizations must think carefully about their service geography before standing up an SGO.",
    },
    {
      num: "Req 06",
      title: "90% of income goes to scholarships",
      summary: "At least 90% of the SGO's income must be distributed as scholarships.",
      detail: "The organization may retain no more than 10% for operations. How \"income\" is calculated is one of the most significant unresolved questions in the program — Treasury guidance expected early summer 2026 will clarify this.",
      callout: "If the 90% requirement applies to total organizational revenues (not just scholarship-designated funds), many multi-mission nonprofits — afterschool networks, education foundations, community foundations with large budgets — may be unable to qualify. Treasury guidance expected in early summer 2026 will clarify this. Organizations with large overall budgets should not assume they qualify until the definition is settled.",
    },
    {
      num: "Req 07",
      title: "Funds only qualifying expenses",
      summary: "Scholarships may only pay for legally defined qualified educational expenses.",
      detail: "The law defines qualifying expenses broadly — tuition, fees, tutoring, transportation, extended-day programs, technology, and more. The full scope is subject to Treasury rulemaking. What clearly qualifies: tutoring, tuition, fees, transportation, books, equipment, and technology connected to enrollment. What is still being determined: summer learning, apprenticeships, and some wraparound services.",
    },
    {
      num: "Req 08",
      title: "Priority system for scholarships",
      summary: "Returning recipients get first priority; their siblings second; new applicants third.",
      detail: "The SGO must follow a three-tier allocation sequence: (1) students who received a scholarship from the organization the prior school year, (2) siblings of prior scholarship recipients, and (3) the general applicant pool. This continuity requirement aligns directly with a transition-focused SGO model — it rewards sustained relationships over one-time support.",
    },
    {
      num: "Req 09",
      title: "No earmarking for individuals",
      summary: "Donors cannot direct contributions to a specific named student.",
      detail: "Contributions may not be set aside for a particular child. Donors may direct funds toward a mission, a population, a geography, or a program type — but not to an individual. This is a hard prohibition in the statute.",
    },
    {
      num: "Req 10",
      title: "Annual income verification",
      summary: "The SGO must verify every applicant's household income every year.",
      detail: "Income eligibility — household income at or below 300% of the area median gross income — must be verified annually for every scholarship recipient. The SGO bears responsibility for this verification. Eligibility is not a one-time determination.",
    },
    {
      num: "Req 11",
      title: "No self-dealing",
      summary: "Scholarships cannot go to people with a financial relationship to the SGO.",
      detail: "\"Disqualified persons\" — board members, major donors, officers, and their family members — may not receive scholarships. This is a standard nonprofit governance protection applied specifically to the SGO context.",
    },
  ],

  whoCanParticipate: {
    specLabel: "Who Can Participate",
    intro: "The statutory requirements are broad. A wide range of organizational types can qualify — and organizations that are not well-suited to direct operation have a partnership path.",
    orgTypes: [
      {
        title: "Existing state scholarship organizations",
        body: "Organizations already operating under state tax credit scholarship programs are best positioned to move quickly. They have donor networks, eligibility verification systems, and scholarship distribution infrastructure. As of early 2026, SGOs were operating in approximately 17 states with existing programs.",
      },
      {
        title: "Community foundations",
        body: "Community foundations can serve as SGOs while maintaining local democratic control over how funds are directed. A city-based 501(c)(3) oriented around its local public schools is a natural fit.",
      },
      {
        title: "Education foundations affiliated with school districts",
        body: "Foundations affiliated with school districts can qualify. The National Association of Education Foundations (NAEF), representing foundations serving more than 20 million students nationally, confirmed this and is developing toolkits for organizations building SGO capacity.",
      },
      {
        title: "Community-based organizations",
        body: "Boys and Girls Clubs, YMCAs, afterschool providers, and similar organizations already serve more than 10 students across multiple schools. Their 10% administrative portion can supplement existing capacity without requiring a standalone operation.",
      },
      {
        title: "Public schools (through affiliated foundations)",
        body: "School districts cannot self-deal — they cannot direct all scholarship funds to their own students. But through affiliated foundations, districts can establish SGOs that distribute scholarships across a collaborative of schools.",
      },
    ],
    callouts: [
      {
        body: "Organizations do not have to build SGO infrastructure from scratch. Some established SGOs offer co-branded, white-label infrastructure — handling donation receipt, eligibility verification, and scholarship distribution — at no cost to partnering organizations. This path reduces governance burden while providing full access to program resources.",
        label: "Direct Operation vs. Partnership",
      },
      {
        body: "Existing scholarship organizations that operate under state programs typically use a relational model: high-touch donor cultivation, medium-to-large individual gifts, mission-motivated donors. The federal program requires something fundamentally different — a transactional model: digital, low-touch, high-volume, with donors contributing $1,700 at a time and potentially numbering in the hundreds of thousands. Organizations accustomed to raising money through personal relationships should plan for this shift before they stand up an SGO.",
        label: "Relational vs. Transactional",
      },
    ],
  },

  definingScope: {
    specLabel: "Defining a Scope",
    paragraphs: [
      "The law specifies what SGOs must do. It does not specify what they should focus on. This is both the program's greatest opportunity and its most common failure.",
      "Most SGOs operate without a defined theory of change. They receive funds and distribute scholarships, but cannot demonstrate that their scholarships produce specific outcomes for specific students. Treasury has signaled that SGOs may voluntarily restrict their own scope — focusing on particular populations, geographies, or types of services — as long as those restrictions do not prevent them from satisfying the law's basic requirements.",
      "This means an organization can design its SGO around a clear mission: serving students at transition points, or students in a specific neighborhood, or students who need continuity of support across school changes. That self-restriction is not a limitation — it is the mechanism by which an SGO becomes accountable, measurable, and fundable by donors who care about outcomes.",
      "Our model requires a theory of change. The activities an SGO funds must connect, through a credible logic, to outcomes that can be measured. Whether an organization focuses on early literacy, vocational readiness, or continuity of support across transitions, the activities must be grounded in evidence and the results must be visible.",
    ],
    footnotes: [
      "CGLR/Alliance for Youth Thriving Webinar Series, Dec. 2, 2025.",
    ],
  },

  pennsylvania: {
    specLabel: "Pennsylvania: What We Can Learn",
    intro: "Pennsylvania's Educational Improvement Tax Credit (EITC), operational since 2014, is the closest existing model to ECCA. It allows funds to reach income-qualified students for both private school scholarships and public school improvement programs. What the Pennsylvania experience shows:",
    facts: [
      "The program began at $25 million in 2022 and grew to over $600 million in foregone state revenue",
      "The majority of growth went toward private and parochial school enrollment",
      "Set-asides included $30 million for PreK scholarships and $70 million for education improvement organizations",
      "Administrative retention was originally capped at 20% — recently reduced to 10%",
      "Pennsylvania has no tracking mechanisms for impact beyond income verification",
    ],
    lessons: [
      "The Pennsylvania case shows how quickly these programs scale when private school infrastructure is ready and public school infrastructure is not.",
      "It shows what happens when accountability is absent: money flows, but outcomes are not measured.",
    ],
    callout: {
      body: "At 20% administrative retention, Pennsylvania SGOs used a portion of program funds to influence state lawmakers. Organizations developing SGO governance frameworks should include explicit prohibitions on political contributions by SGO staff and board members.",
      label: "Important to Know",
    },
    footnotes: [
      "CGLR/Alliance for Youth Thriving Webinar Series, Mar. 24, 2026.",
    ],
  },

  stateLevelDecisions: {
    specLabel: "State-Level Decisions",
    paragraphs: [
      "State opt-in is the program's primary control mechanism. If a governor opts in, the state submits a list of qualifying SGOs to Treasury. States will likely be required to include all organizations meeting the law's minimum requirements — they cannot hand-pick preferred SGOs or exclude disfavored ones.",
      "What states can do: use the bully pulpit to promote equity-focused SGOs, define \"school\" broadly to enable the widest range of program types, and convene stakeholders to build infrastructure.",
    ],
  },

  // UPDATE THIS SECTION when Treasury guidance releases (early summer 2026)
  openQuestions: {
    specLabel: "Open Questions",
    intro: "Treasury regulations, expected in early summer 2026, will resolve several critical questions:",
    questions: [
      { label: "The 90/10 rule", body: "Does the 90% apply to scholarship revenue only, or total organizational revenues?" },
      { label: "Qualified expenses", body: "Does summer learning qualify? Do apprenticeships?" },
      { label: "State authority", body: "Can states require demographic reporting, non-discrimination conditions, or outcome data?" },
      { label: "Multi-state SGOs", body: "Likely permitted; specifics TBD." },
      { label: "SGO liability", body: "What documentation burden do SGOs carry for verifying how scholarship funds are used?" },
    ],
    note: "Organizations building toward 2027 should plan for multiple scenarios and revisit their structure once guidance is released.",
    updateFlag: "This section will be updated when Treasury guidance releases (expected early summer 2026).",
  },
};
