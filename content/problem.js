/* content/problem.js — The Handoff Problem page copy and data
   Edit strings here. Never edit problem.html for copy.
*/

export const content = {
  openingThesis: {
    body: "Students don't fall behind because they stop trying. They fall behind because the system that was supposed to support them wasn't designed to follow them. Academic falloff at transition points is not a developmental fact — it is a structural one. It is predictable, measurable, and concentrated at three specific moments in a student's K-12 journey. And it is steepest for the students who can least afford it.",
  },

  whyGainsAreLost: {
    specLabel: "Why Gains Are Lost",
    paragraphs: [
      "When a student moves between schools or stages of education, the funding stays behind. <span class=\"highlight\">The relationships stay behind.</span> The institutional knowledge of what that student needs stays behind. What was working — a reading intervention, a trusted adult, a tutoring relationship — ends when the institution ends, regardless of where the student is in their learning.",
      "Most education funding is tied to institutions: per-pupil allocations, categorical grants, district appropriations. These mechanisms are designed to fund buildings and systems, not individual trajectories. A student who changes schools between third and fourth grade <span class=\"highlight\">does not carry her resources with her.</span> The new school starts from scratch.",
      "This is not a failure of individual teachers or administrators. It is the predictable output of a system that was designed to <span class=\"highlight\">fund institutions, not students</span>. The consequence — <span class=\"highlight\">repeated academic loss at every major transition</span> — is equally predictable.",
    ],
  },

  breakpoints: [
    {
      label: "Pre-K to Kindergarten",
      content: `<p>Pre-K programs produce real academic gains. Randomized control trials, meta-analyses, and longitudinal studies consistently document meaningful improvements in cognitive skills, language, and school readiness among attendees.</p>
<p>Those gains do not last.</p>
<p>A randomized control trial of over a thousand students in Tennessee's state-funded pre-K program found that, while attendees showed initial academic gains entering kindergarten, those gains had faded by the end of the year — and turned negative by third grade.<sup>1</sup> A meta-analysis of 67 high-quality early childhood education interventions found that the average end-of-program effect on cognitive skills dropped by more than half within a year of program completion and halved again one to two years later.<sup>2</sup></p>
<p>The explanation is not that pre-K programs fail. It is that the institutions receiving students after those programs are not designed to build on what students gained. The transition itself carries independent weight: children who struggle in the first ten to fourteen weeks of kindergarten — with peer relationships, new routines, or academic demands — score significantly lower on academic and social-behavioral assessments a year later. This pattern holds regardless of students' initial readiness.<sup>3</sup></p>`,
      stat: `Students who do not read proficiently by third grade are <strong>4× more likely to drop out of high school.</strong> For low-income students, the risk is <strong>6×</strong>.<sup>4</sup>`,
      footnotes: [
        "Durkin et al., 2022",
        "Bailey et al., 2017",
        "Sun et al., 2024",
        "Hernandez, 2011",
      ],
    },
    {
      label: "Elementary to Middle School",
      content: `<p>The elementary-to-middle school transition is less studied than the one before it — but equally consequential. A longitudinal study of sixth graders in Florida found that students transitioning to middle school experienced a sharp drop in both math and reading performance that persisted through tenth grade.<sup>1</sup> Separate research suggests that students benefit from remaining in elementary school through at least seventh grade, implying that the transition itself — independent of student characteristics — is a source of academic decline.<sup>2</sup></p>
<p>The transition hits students of color with particular force. Research documents that relationships with teachers matter more for minority students' academic confidence.<sup>3</sup> The move from a single classroom teacher in elementary school to subject-specific teachers in middle school disrupts precisely those bonds. In the face of the GPA declines that typically accompany this transition, higher levels of teacher support and parental involvement are associated with stronger academic outcomes — but middle school's organizational structure makes that support harder to deliver.<sup>4</sup></p>`,
      stat: `The elementary-to-middle transition is associated with a drop in math and reading scores that <strong>persists through tenth grade</strong> — four years after the transition occurs.<sup>1</sup>`,
      footnotes: [
        "Schwerdt, 2012",
        "Malone et al., 2020",
        "Vanlaar et al., 2014",
        "Gutman & Midgley, 2000",
      ],
    },
    {
      label: "Middle to High School",
      content: `<p>Ninth grade is the most acute crisis point in American schooling. It is not a crisis of student preparation — it is a crisis of institutional design.</p>
<p>Research identifies four drivers of ninth-grade failure: pre-high school academic and behavioral challenges; life course changes like reduced parental supervision; the social disruption of losing established relationships; and the organizational structure of high schools themselves — large, impersonal, highly departmentalized environments where struggling students can go unnoticed and unsupported.<sup>1</sup></p>
<p>Failure in ninth grade dramatically reduces the likelihood of graduation. And the strongest predictor of whether a student stays on track is not their individual background or academic history — it is the school they attend.<sup>2</sup> The transition from eighth to ninth grade is accompanied by GPA drops across subjects, and those drops are not limited to students who were already struggling. A longitudinal study of Latino youth in Los Angeles County found that higher-achieving eighth graders actually experienced steeper declines than lower-achieving peers during this transition — suggesting the disruption is structural, not a sorting of students by ability.<sup>3</sup></p>`,
      stat: `The strongest predictor of whether a student stays on track in high school is <strong>not their academic history — it is the school they attend.</strong><sup>2</sup>`,
      footnotes: [
        "Neild, 2009",
        "Allensworth & Easton, 2005",
        "Vasquez-Salgado & Chavira, 2014",
      ],
    },
  ],

  oregonCaseStudy: {
    specLabel: "§3.3 — Case Study",
    programName: "Oregon Measure 98",
    programSubtitle: "High School Graduation & College Readiness Fund",
    framing: "Oregon had a graduation crisis hiding behind strong test scores — and showed what governing a transition point looks like in practice.",
    context: "In 2015, Oregon students graduated at 68% — well below the 81.4% national average. For low-income students, the rate fell to 60.4%. But Oregon's eighth-grade reading and math scores surpassed national averages, suggesting the problem was not preparation: students were arriving to high school academically ready and falling off track between eighth grade and graduation. Stand for Children responded by passing Measure 98, creating the High School Graduation and College Readiness Fund — a statute that operationalized three governance design principles this thesis argues are essential to managing K-12 transition points.",
    stats: {
      label: "By the Numbers",
      facts: [
        { stat: "68% → 87%", label: "Graduation rate growth, 2015–2024" },
        { stat: "~6 pts",    label: "Low-income achievement gap narrowed" },
        { stat: "Nov. 2016", label: "Measure 98 passed by Oregon voters" },
      ],
    },
    principles: {
      label: "Three Design Principles in Action",
      items: [
        {
          num: "01",
          title: "Governance",
          body: "Measure 98 assigned explicit ownership of the eighth-to-ninth grade transition. The statute defined the what (statewide graduation goals), the who (Oregon Legislature, Department of Education, State Board, districts, and the Center for High School Success), and the how (three protected funding pillars: Career and Technical Education, early college credit, and ninth-grade dropout prevention). This is governance as structure — not aspiration.",
        },
        {
          num: "02",
          title: "Accountability",
          body: "Districts must demonstrate how funds advance the three pillars before receiving money. Ninth-grade on-track rates are the primary leading indicator; chronic absenteeism, course grades, and credits earned are tracked from eighth grade to identify at-risk students before a crisis. The Secretary of State audits outcomes — and districts that fail lose funding to qualifying peers.",
        },
        {
          num: "03",
          title: "Capacity Building",
          body: "The Center for High School Success provided coaching, technical assistance, and a shared on-track data infrastructure. The statute required data management systems, dedicated collaboration time, and biennial planning processes designed to outlast any single funding cycle. Supports begin the summer after eighth grade — embedding a formal cross-institutional handoff between middle and high school.",
        },
      ],
    },
    pullquote: {
      label: "Key Takeaway",
      body: "When a transition point is treated as a governance problem — with clear ownership, layered accountability, and sustained capacity-building — it is possible to produce significant, durable change.",
    },
    footnotes: [
      "Wheelock, 2026",
      "High School Graduation and College Readiness Act (Measure 98), 2016",
    ],
  },

  fundingGap: {
    headline: "Three requirements. One broken link.",
    framing: "Oregon proved governance works — but the funding mechanism is still broken. Student success requires all three elements to connect: funding must follow the student, which makes accountability possible, which makes student success achievable.",
    diagramCaption: "Same three requirements. Two very different chains.",
    statBar: "Academic falloff is a documented and consistent finding across K–12 transitions. Its effects fall disproportionately on low-income students and students of color.",
    pivot: "What if a dollar could follow a student across every transition?",
    pivotHighlight: "follow a student",
  },

  bridge: {
    paragraphs: [
      "The evidence is clear. Support at transition points — sustained, individualized, and designed to follow the student rather than the institution — reduces the losses. The barrier is not knowledge of what works. The barrier is a funding system that was built to support institutions, not students.",
      "That is where SGOs come in.",
    ],
    linkLabel: "Learn how SGOs work →",
    linkHref: "/solution",
  },
};
