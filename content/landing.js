/* content/landing.js — Landing page copy and data
   Edit strings here to update page content. Never edit index.html for copy.
   [PLACEHOLDER NAME] will be replaced site-wide when org name is decided.
*/

export const content = {
  hero: {
    // Option A (default) | Option B: "Every transition costs students something. We're changing that."
    // Option C: "The gaps between schools are losing our kids."
    // Alex to select final headline.
    headline: "Academic progress shouldn't stop where school does.",
    thesis: "[PLACEHOLDER — One-sentence thesis. Must be punchy, specific, under 10 words.]",
  },

  problemTeaser: {
    specLabel: "The Problem",
    body: "Students lose academic ground at every major transition of their K-12 education. The losses are predictable, well-documented, and steepest for low-income students and students of color. They persist not because of anything students do, but because the institutions responsible for their education were never designed to hand them off.",
    linkLabel: "Read more",
    linkHref: "/problem",
  },

  solutionTeaser: {
    specLabel: "The Solution",
    body: "Scholarship Granting Organizations — SGOs — are a federal funding vehicle capable of directing tens of billions of dollars directly to students. Most educators have never heard of them. Most that have don't know how to use them well. We're here to change that.",
    cards: [
      {
        label: "About Us",
        title: "Our Mission",
        description: "Who we are, what we believe, and how we work.",
        href: "/about",
      },
      {
        label: "The Problem",
        title: "The Handoff Problem",
        description: "Why students lose ground at every transition — and why it's structural, not inevitable.",
        href: "/problem",
      },
      {
        label: "Solution",
        title: "How SGOs Work",
        description: "The ECCA mechanism, eligibility requirements, and how your organization can participate.",
        href: "/solution",
      },
    ],
  },
};
