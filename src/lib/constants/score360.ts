export const score360Name = "Score360";

export const score360Tagline = "Master the Test, Maximize the Score";

export const score360PageDescription =
  "Score360 provides focused preparation for SAT, ACT, GRE, GMAT, IELTS, and TOEFL, with preparation shaped around the student's starting point, target exam, and application timeline.";

export const score360Highlights = [
  "Diagnostic-led",
  "Personalised preparation",
  "Practice & mock testing",
  "Performance review",
] as const;

export const score360Method = [
  {
    title: "Understand",
    description: "Identify the student's starting point and test requirements.",
  },
  {
    title: "Build",
    description: "Strengthen concepts and test-taking strategy.",
  },
  {
    title: "Practise",
    description: "Use targeted practice and mock testing.",
  },
  {
    title: "Review",
    description: "Analyse performance and adjust preparation.",
  },
] as const;

export const score360TestNames = ["SAT", "ACT", "GRE", "GMAT", "IELTS", "TOEFL"] as const;

export const score360SupportThemes = [
  { title: "Learn", description: "Concept development and targeted preparation" },
  { title: "Practise", description: "Practice questions and mock-test experience" },
  { title: "Improve", description: "Performance review and preparation adjustments" },
] as const;

/**
 * INTERNAL REFERENCE ONLY. Commercial Score360 data from the plans workbook.
 * Not rendered on the public website.
 */
export const score360SmallGroupLimit = 5;

export const score360Tests = [
  {
    id: "sat",
    name: "SAT",
    duration: "12–16 weeks",
    liveInteractions: "40–50",
    oneToOne: 62500,
    smallGroup: 32500,
  },
  {
    id: "act",
    name: "ACT",
    duration: "14–18 weeks",
    liveInteractions: "50–60",
    oneToOne: 67500,
    smallGroup: 35000,
  },
  {
    id: "gre",
    name: "GRE",
    duration: "14–18 weeks",
    liveInteractions: "50–65",
    oneToOne: 72500,
    smallGroup: 37500,
  },
  {
    id: "gmat",
    name: "GMAT",
    duration: "16–20 weeks",
    liveInteractions: "55–70",
    oneToOne: 82500,
    smallGroup: 42500,
  },
  {
    id: "toefl-ielts",
    name: "TOEFL / IELTS",
    duration: "8–12 weeks",
    liveInteractions: "25–35",
    oneToOne: 32500,
    smallGroup: 17500,
  },
] as const;
