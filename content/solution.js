/* content/solution.js — Solution page copy and data
   Edit strings here. Never edit solution.html for copy.
   NOTE: Treasury guidance sections (openQuestions, requirements 6 & 7)
   need updates when regulations release (expected early summer 2026).
*/

export const content = {
  opening: {
    specLabel: "The ECCA",
    framing: "The first national education voucher program in American history.",
    stats: [
      { number: '$1,700', label: 'Dollar-for-dollar\nfederal tax credit' },
      { number: '$20–40B', label: 'Estimated annual\nprogram scale' },
      { number: 'Jan 2027', label: 'Program\nstart date' },
    ],
    sidenote: "This program's funding is uncapped — Congress set no ceiling on how much can flow through SGOs. Most projections place annual volume between $20 and $40 billion. If those estimates hold, the ECCA would generate more federal K–12 education funding than any existing program, including Title I at $18 billion.",
    paragraphs: [
      "The <span class=\"highlight\">Educational Choice for Children Act (ECCA)</span>, enacted in July 2025, establishes the <span class=\"highlight\">first national education voucher program</span> in U.S. history. Beginning January 1, 2027, taxpayers may claim a dollar-for-dollar federal tax credit of up to $1,700 for contributions to SGOs — 501(c)(3) nonprofits that award scholarships to income-eligible K-12 students for qualified educational expenses.",
      "The opportunity is historic. But it will only reach the students who need it most if the organizations serving them know how to access it.",
    ],
  },

  stateMap: {
    specLabel: "State Opt-In Status",
    framing: "28 states have already committed.",
    intro: "States opt into the program annually. The governor of each state decides each year whether to participate. As of March 2026, 28 states had opted in or signaled intent. Four had publicly opted out. Approximately 18 were still undecided, waiting for Treasury regulations expected in early summer 2026.",
    note: "If a state does not opt in, its taxpayers' contributions still flow to the program — they just support SGOs in other states.",
    dataDate: "March 2026",
    callout: {
      body: "The opt-in decision is annual. States that sit out 2027 can join in future years. The legislation has no end date.",
    },
  },

  fundingStream: {
    specLabel: "How It Works",
    definition: "A Scholarship Granting Organization is a 501(c)(3) nonprofit that receives tax-credited contributions and converts them into scholarships for income-eligible K–12 students.",
    bigStatement: "SGO scholarships fund students directly — in the classroom, on the bus, after school, and beyond.",
    framing: "Five steps. Dollar-for-dollar, from taxpayer to student.",
    steps: [
      {
        num: "01",
        title: "The Taxpayer",
        iconPath: "/assets/icons/icons/row03_col06.png",
        iconAlt: "Money",
        shortBody: "Contributes up to $1,700. Claims it back as a dollar-for-dollar federal tax credit — not a deduction.",
        body: "A taxpayer decides to contribute up to $1,700 to an SGO. Rather than that money going to the U.S. Treasury, it goes to a qualifying nonprofit. The taxpayer claims a dollar-for-dollar federal tax credit — not a deduction, but a full credit equal to the contribution amount.",
        footnote: '"The only federal tax credit that\'s 100% credit for contributions." — CGLR/Alliance for Youth Thriving Webinar Series, Feb. 3, 2026.',
      },
      {
        num: "02",
        title: "SGO Receives",
        iconPath: "/assets/icons/icons/row01_col01.png",
        iconAlt: "Organization",
        shortBody: "The contribution is held in a dedicated account, completely separate from all other organizational funds.",
        body: "The SGO receives the contribution and holds it in a dedicated account, separate from all other organizational funds. Contributions cannot be co-mingled with the SGO's general operating funds.",
      },
      {
        num: "03",
        title: "Student Verified",
        iconPath: "/assets/icons/icons/row02_col07.png",
        iconAlt: "Checklist",
        shortBody: "The SGO confirms income eligibility — household income at or below 300% of area median. Over 90% of students qualify.",
        body: "The SGO verifies that applicants are income-eligible: household income must not exceed 300% of the area median gross income. More than 90% of American students qualify. The SGO follows a statutory priority sequence: returning scholarship recipients first, then their siblings, then the general applicant pool.",
        footnote: "CGLR/Alliance for Youth Thriving Webinar Series, Dec. 2, 2025.",
      },
      {
        num: "04",
        title: "Scholarship Issued",
        iconPath: "/assets/icons/icons/row03_col07.png",
        iconAlt: "Giving",
        shortBody: "The SGO awards a scholarship — no cap on amount. Multiple donors can fund a single student.",
        body: "The SGO awards scholarships to eligible students for qualified educational expenses. There is no cap on individual scholarship amounts — only on the donor's $1,700 annual credit. A single student can receive a scholarship of any size, funded by contributions from multiple donors.",
      },
      {
        num: "05",
        title: "Service Delivered",
        iconPath: "/assets/icons/icons/row02_col04.png",
        iconAlt: "Education",
        shortBody: "Funds go directly to the provider — school, tutor, transportation, or afterschool program. Not to the student.",
        body: "Scholarship funds are paid to the provider — a school, tutoring program, afterschool organization, transportation provider, or other qualifying vendor. The student receives the service.",
      },
    ],
  },

  whatCanFund: {
    specLabel: "What Can They Fund",
    framing: "Scholarships can reach students in many forms.",
    studentIcon: "/assets/icons/icons/row04_col10.png",
    studentAlt: "Student thriving",
    items: [
      { iconPath: "/assets/icons/icons/row01_col02.png", iconAlt: "School building", label: "Tuition\n& Fees" },
      { iconPath: "/assets/icons/icons/row02_col06.png", iconAlt: "Lightbulb", label: "Tutoring" },
      { iconPath: "/assets/icons/icons/row02_col08.png", iconAlt: "School bus", label: "Transportation" },
      { iconPath: "/assets/icons/icons/row02_col04.png", iconAlt: "Books", label: "Books &\nMaterials" },
      { iconPath: "/assets/icons/icons/row02_col05.png", iconAlt: "Laptop", label: "Technology" },
      { iconPath: "/assets/icons/icons/row01_col07.png", iconAlt: "Extended programs", label: "Extended-day\nPrograms" },
    ],
    unclearNote: "Summer learning, apprenticeships, and other wraparound services are still being defined by Treasury regulation — expected early summer 2026.",
    body: "Under the ECCA, qualifying expenses are defined broadly. Scholarship funds can cover tuition and school fees, tutoring and academic support, transportation to and from school, books, supplies, and equipment, technology connected to a student's education, extended-day and afterschool programs, and more. The statute intentionally reaches beyond private school tuition — SGO funds follow the student, not the institution.",
    callout: "Previously, many state voucher programs could only fund private school tuition. SGO scholarships created under the OBBBA are different: funds can provide tuition, tutoring, transportation, technology, and a variety of other wraparound services.",
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
      detail: "The law defines qualifying expenses broadly — tuition, fees, tutoring, transportation, extended-day programs, technology, and more. The full scope is subject to Treasury rulemaking. What clearly qualifies: tutoring, tuition, fees, transportation, books, equipment, and technology connected to enrollment. What is still being determined: summer learning, apprenticeships, and other wraparound services.",
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
    framing: "A wide range of organizations qualify. Many already do the work.",
    intro: "The statutory requirements are broad. A wide range of organizational types can qualify — and organizations that are not well-suited to direct operation have a partnership path.",
    orgTypes: [
      {
        iconPath: "/assets/icons/icons/row01_col01.png",
        iconAlt: "Civic institution building",
        title: "Existing state scholarship organizations",
        body: "Organizations already operating under state tax credit scholarship programs are best positioned to move quickly. They have donor networks, eligibility verification systems, and scholarship distribution infrastructure. As of early 2026, SGOs were operating in approximately 17 states with existing programs.",
      },
      {
        iconPath: "/assets/icons/icons/row01_col06.png",
        iconAlt: "Community group",
        title: "Community foundations",
        body: "Community foundations can serve as SGOs while maintaining local democratic control over how funds are directed. A city-based 501(c)(3) oriented around its local public schools is a natural fit.",
      },
      {
        iconPath: "/assets/icons/icons/row01_col07.png",
        iconAlt: "Graduation cap",
        title: "Education foundations affiliated with school districts",
        body: "Foundations affiliated with school districts can qualify. The National Association of Education Foundations (NAEF), representing foundations serving more than 20 million students nationally, confirmed this and is developing toolkits for organizations building SGO capacity.",
      },
      {
        iconPath: "/assets/icons/icons/row03_col02.png",
        iconAlt: "Heart held in hands",
        title: "Community-based organizations",
        body: "Boys and Girls Clubs, YMCAs, afterschool providers, and similar organizations already serve more than 10 students across multiple schools. Their 10% administrative portion can supplement existing capacity without requiring a standalone operation.",
      },
      {
        iconPath: "/assets/icons/icons/row01_col02.png",
        iconAlt: "School building",
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
    framing: "The law defines what an SGO must do. It says nothing about whether it works.",
    paragraphs: [
      "The ECCA sets a floor, not a design. An organization can satisfy every statutory requirement — maintain separate accounts, verify income, distribute scholarships — and still have no answer to the question that matters: what changed for students because of this? The law requires no outcome tracking, no theory of change, no test of whether the money produced anything beyond a tax credit.",
      "Pennsylvania confirmed the cost of this gap. Hundreds of millions of dollars moved through SGOs with minimal outcome documentation. Organizations tracked dollars distributed and students served. Few tracked whether students stayed enrolled, improved academically, or completed their transitions. Growth became the metric because growth was the only thing being measured.",
      "An SGO that voluntarily restricts its scope — that defines a population, a set of transition points, a specific type of support — can answer a different question. Not 'how many scholarships did we issue' but 'what changed for the students we served.' That is the difference between a compliant organization and an accountable one.",
    ],
    pullQuote: "That self-restriction is not a limitation — it is the mechanism by which an SGO becomes accountable, measurable, and fundable.",
    position: {
      statement: "We built [PLACEHOLDER NAME] around one question: which students fall out between schools, and can we fund their continuity?",
      details: [
        "Every scholarship ties to a student, a transition point, and a tracked outcome — not just a qualified expense.",
        "Our administrative capacity exists to measure what changes, so we can demonstrate impact to the donors who fund it.",
        "We are not a general-purpose SGO. We are a scoped, accountable one — and that distinction is the whole point.",
      ],
    },
    footnotes: [
      "CGLR/Alliance for Youth Thriving Webinar Series, Dec. 2, 2025.",
    ],
  },

  pennsylvania: {
    framing: "Pennsylvania's model is the closest existing analog to the ECCA — and its decade of results tells us exactly what to expect.",
    narrative: "Pennsylvania's Educational Improvement Tax Credit (EITC), operational since 2014, is the largest and longest-running state scholarship tax credit program in the country. Over a decade it grew from a $25 million pilot to more than $600 million in annual tax credits — and its trajectory closely mirrors what analysts project for the ECCA at national scale.",
    outcomes: {
      title: "The program scaled fast and served many students.",
      facts: [
        { stat: "24x", label: "Growth in annual tax credits over 10 years ($25M → $600M+)" },
        { stat: "140,000+", label: "Students receiving scholarships annually at peak" },
        { stat: "$600M+", label: "Total annual tax credits at program peak" },
      ],
    },
    implications: {
      title: "What that scale reveals about the ECCA design.",
      points: [
        "Organizations with existing infrastructure captured the majority of early scholarship volume — late entrants found donor relationships and school partnerships already claimed.",
        "Without outcome tracking requirements, dollars flowed but student results went unmeasured for years.",
        "The 10% administrative cap was introduced only after political pressure. Organizations that built operations at 20% had to restructure.",
      ],
    },
    takeaway: "Pennsylvania's program grew 340% in its first decade. The organizations that entered early built the infrastructure, the donor relationships, and the track record that newer entrants couldn't replicate. The window matters.",
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
