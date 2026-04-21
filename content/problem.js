/* content/problem.js — The Handoff Problem page copy and data
   Edit strings here. Never edit problem.html for copy.
   NOTE: caseStudies is Lorem Ipsum until Alex provides real content.
*/

export const content = {
  openingThesis: {
    body: "Students don't fall behind because they stop trying. They fall behind because the system that was supposed to support them wasn't designed to follow them. Academic falloff at transition points is not a developmental fact — it is a structural one. It is predictable, measurable, and concentrated at three specific moments in a student's K-12 journey. And it is steepest for the students who can least afford it.",
  },

  whyGainsAreLost: {
    specLabel: "Why Gains Are Lost",
    paragraphs: [
      "When a student moves between schools or stages of education, the funding stays behind. The relationships stay behind. The institutional knowledge of what that student needs stays behind. What was working — a reading intervention, a trusted adult, a tutoring relationship — ends when the institution ends, regardless of where the student is in their learning.",
      "Most education funding is tied to institutions: per-pupil allocations, categorical grants, district appropriations. These mechanisms are designed to fund buildings and systems, not individual trajectories. A student who changes schools between third and fourth grade does not carry her resources with her. The new school starts from scratch.",
      "This is not a failure of individual teachers or administrators. It is the predictable output of a system that was designed to fund institutions, not students. The consequence — repeated academic loss at every major transition — is equally predictable.",
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

  // PLACEHOLDER: Replace with real case study content from Alex
  caseStudies: [
    {
      label: "Program A",
      content: `<p><strong>What problem were they solving?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p><strong>What did they do?</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p><strong>What were the outcomes?</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<p><strong>What made it work?</strong> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
    },
    {
      label: "Program B",
      content: `<p><strong>What problem were they solving?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
<p><strong>What did they do?</strong> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel ante a orci tempus eleifend.</p>
<p><strong>What were the outcomes?</strong> Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
<p><strong>What made it work?</strong> Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>`,
    },
    {
      label: "Program C",
      content: `<p><strong>What problem were they solving?</strong> Lorem ipsum dolor sit amet. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p>
<p><strong>What did they do?</strong> Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.</p>
<p><strong>What were the outcomes?</strong> Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
<p><strong>What made it work?</strong> Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>`,
    },
  ],

  bridge: {
    paragraphs: [
      "The evidence is clear. Support at transition points — sustained, individualized, and designed to follow the student rather than the institution — reduces the losses. The barrier is not knowledge of what works. The barrier is a funding system that was built to support institutions, not students.",
      "That is where SGOs come in.",
    ],
    linkLabel: "Learn how SGOs work →",
    linkHref: "/solution",
  },
};
