export const testPrepOverviewLine =
  "Test planning for SAT, ACT, IELTS, and TOEFL, aligned with each student's target universities and application timeline.";

export const testPrepPackageNote =
  "Standard includes test planning as part of admissions counselling. Premium includes everything in Standard plus 20 hours of personalized 1:1 preparation support for IELTS/TOEFL and SAT/ACT, so testing and applications stay coordinated under one plan.";

export const testPrepItems = [
  {
    id: "sat",
    name: "SAT",
    whatFor:
      "US undergraduate admissions test covering reading, writing, and math.",
    bestFor:
      "Useful for students targeting US universities, merit scholarships, or programs where standardized scores can strengthen the application.",
    uniexpSupport:
      "UniExp helps students decide whether the SAT fits their university list, set a realistic target score, and plan testing around application deadlines.",
  },
  {
    id: "act",
    name: "ACT",
    whatFor:
      "Alternative US undergraduate admissions test with English, math, reading, science, and optional writing.",
    bestFor:
      "Best for students who prefer a faster-paced exam format or want another route to strengthen US applications.",
    uniexpSupport:
      "We help families compare SAT vs ACT fit and choose the test path that supports the student's strengths.",
  },
  {
    id: "ielts-toefl",
    name: "IELTS / TOEFL",
    whatFor:
      "IELTS and TOEFL are English proficiency exams commonly required for universities in the UK, Canada, Australia, the US, and other destinations.",
    bestFor:
      "These tests are especially important for international applicants and visa-related requirements.",
    uniexpSupport:
      "UniExp helps students understand score requirements, timing, retake strategy, and how English scores fit into the broader admissions plan.",
  },
  {
    id: "gre-gmat",
    name: "GRE / GMAT",
    whatFor:
      "GRE and GMAT are graduate and business school tests used for selected master's, MBA, and specialized programs.",
    bestFor:
      "Requirements vary by university and program, so students should not prepare blindly.",
    uniexpSupport:
      "We help students identify whether the test is required, optional, or beneficial, then plan prep around deadlines and application strategy.",
  },
] as const;

export const testingPlanPoints = [
  {
    title: "Choose the right test",
    description: "Match exams to your university list, profile, and destination requirements.",
  },
  {
    title: "Set realistic target scores",
    description: "Build goals that strengthen applications without unnecessary pressure.",
  },
  {
    title: "Align prep with application deadlines",
    description: "Schedule testing so scores arrive when admissions teams need them.",
  },
] as const;
