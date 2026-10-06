export const score360Name = "Score360";

export const score360Tagline = "Master the Test, Maximize the Score";

export const score360ShortDescription =
  "Dedicated preparation built around diagnostic assessment, concept mastery, test strategy, practice, mock tests, and individual performance analysis.";

export const score360PageDescription =
  "Score360 combines diagnostic testing, targeted concept work, test-taking strategy, practice, mock exams, and individual performance analysis.";

export const score360SmallGroupNote = "Small groups do not exceed 5 students.";

export const score360SmallGroupLimitNote =
  "Small groups are limited to a maximum of 5 students.";

export const score360Method = [
  {
    title: "Diagnostic Assessment",
    description:
      "The program begins with a full diagnostic test under realistic timed conditions. This establishes a Score360 baseline, including current score or band, section-wise performance, accuracy, speed, time management, and error patterns.",
  },
  {
    title: "Concept Mastery",
    description:
      "Teaching focuses on the concepts that influence performance for the chosen test, covering the relevant SAT, ACT, GRE, GMAT, TOEFL, or IELTS skill areas.",
  },
  {
    title: "Test-taking Strategy",
    description:
      "Students learn how to take the test, including time allocation, question prioritisation, elimination techniques, handling difficult questions, section strategy, and computer-based test strategy.",
  },
  {
    title: "Concept Testing",
    description:
      "After each major learning module, short tests check whether the concept has been mastered. Progress is tracked across accuracy, time per question, concept mastery, and recurring errors.",
  },
  {
    title: "Mock Test Program",
    description:
      "Regular full-length mock tests increase in frequency and replicate the examination environment as closely as practical. Results are measured across overall score, section scores, accuracy, time management, and consistency.",
  },
  {
    title: "Individual Performance Analysis",
    description:
      "Each student's score, accuracy, speed, strong areas, weak areas, and error categories are tracked throughout the program.",
  },
] as const;

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

export const score360SupportGroups = [
  {
    title: "Learn",
    items: [
      "Study material and learning resources",
      "Concept tests",
      "Sectional tests",
    ],
  },
  {
    title: "Practise",
    items: ["Full-length mock tests", "Weekly practice plan", "Doubt resolution"],
  },
  {
    title: "Perform",
    items: [
      "Individual performance analysis",
      "Time management training",
      "Test-day strategy",
      "Exam registration guidance",
      "Progress updates",
    ],
  },
] as const;

/** Summary of the ranges already published in score360Tests, for the at-a-glance strip. */
export const score360Glance = [
  {
    id: "tests",
    headline: "6 tests",
    detail: "SAT, ACT, GRE, GMAT, TOEFL, IELTS",
  },
  {
    id: "format",
    headline: "1:1 or small group",
    detail: "Groups limited to 5 students",
  },
  {
    id: "duration",
    headline: "8–20 weeks",
    detail: "Depending on test",
  },
  {
    id: "interactions",
    headline: "25–70 live interactions",
    detail: "Depending on test",
  },
] as const;
