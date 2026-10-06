export const compass360Stages = [
  {
    title: "Know",
    description:
      "Build a clear picture of strengths, interests, aptitude, values, motivations, achievements, and aspirations.",
  },
  {
    title: "Explore",
    description:
      "Look at subjects, courses, career paths, emerging fields, and how different areas of study connect to work.",
  },
  {
    title: "Match",
    description:
      "Compare courses, universities, countries, costs, scholarships, career outcomes, and personal preferences.",
  },
  {
    title: "Develop",
    description:
      "Identify the academic, skill, leadership, research, extracurricular, and profile-building priorities that matter most.",
  },
  {
    title: "Navigate",
    description:
      "Turn the findings into next steps, a 30-60-90 day action plan, and a longer-term roadmap.",
  },
] as const;

export const compass360Promise =
  "Our objective is not to prescribe a single career or university. We help students understand their strengths, interests, aspirations, and potential pathways more clearly, using assessments, academic context, and counselling. We then turn that understanding into practical next steps.";

export const compass360Audiences = [
  "Uncertain about their academic or career direction",
  "Exploring undergraduate or postgraduate options",
  "Considering studying abroad",
  "Looking for course and university guidance",
  "Wanting an objective view of their current profile",
  "Wanting a practical roadmap before committing to longer-term counselling",
] as const;

export const compass360Pillars = [
  {
    title: "Self-Discovery",
    description:
      "Strengths, interests, aptitude, personality, values, motivations, achievements, and aspirations.",
  },
  {
    title: "Career & Course Exploration",
    description:
      "Subjects, courses, career paths, emerging fields, and how different areas of study connect to work.",
  },
  {
    title: "University & Global Fit",
    description:
      "Countries, university environments, affordability, scholarships, career outcomes, and personal preferences.",
  },
  {
    title: "Individual Development Plan",
    description:
      "Priorities across academics, skills, leadership, research, extracurriculars, and profile development.",
  },
] as const;

export const compass360Sessions = [
  {
    title: "Discover",
    focus: "Self-Discovery & Aspirational Mapping",
    stages: ["Know", "Explore"],
  },
  {
    title: "Match",
    focus: "Career, Course & University Fit",
    stages: ["Match"],
  },
  {
    title: "Plan",
    focus: "Individual Development & Future Roadmap",
    stages: ["Develop", "Navigate"],
  },
] as const;

export const compass360AssessmentAreas = [
  {
    title: "Aptitude",
    detail: "Numerical, verbal, logical, and abstract reasoning",
  },
  {
    title: "Interests",
    detail: "Subjects, activities, and career interests",
  },
  {
    title: "Personality & Behaviour",
    detail: "Working style, preferences, and behavioural patterns",
  },
  {
    title: "Skills",
    detail:
      "Communication, critical thinking, problem-solving, creativity, leadership, and digital readiness",
  },
  {
    title: "Aspirations & Experiences",
    detail: "Goals, achievements, motivations, and relevant experiences",
  },
] as const;

/** The nine fit dimensions, clustered into the themes a family tends to weigh together. */
export const compass360FitGroups = [
  { group: "Academic", dimensions: ["Academic Fit", "Course Fit"] },
  { group: "Career", dimensions: ["Career Alignment", "Career Outcomes"] },
  { group: "Environment", dimensions: ["University Environment", "Location Fit"] },
  { group: "Cost & Funding", dimensions: ["Financial Fit", "Scholarship Potential"] },
  { group: "Personal", dimensions: ["Student Preferences"] },
] as const;

export const compass360DevelopmentAreas = [
  { area: "Academics", timeline: "Priorities based on the student’s current position" },
  { area: "Research", timeline: "Around 6 months" },
  { area: "Leadership", timeline: "Around 6–12 months" },
  { area: "Communication", timeline: "Around 3–6 months" },
  { area: "Career Exposure", timeline: "Around 3–6 months" },
  { area: "University Research", timeline: "Around 3 months" },
] as const;

export const compass360Deliverables = [
  "Student intake and profile analysis",
  "Structured assessments",
  "Professional counselling",
  "Three live interactive sessions",
  "Career and academic exploration",
  "Course matching and university fit analysis",
  "Preliminary university recommendations",
  "Profile gap analysis",
  "Individual Development Plan",
  "Personalised action roadmap",
  "Comprehensive Compass360 Report",
  "Defined post-program support",
] as const;

export const compass360ReportContents = [
  "Assessment and strengths summary",
  "Career and academic directions",
  "Course and university fit",
  "Preliminary university recommendations",
  "Profile gaps and development priorities",
  "Individual Development Plan",
  "30-60-90 day action plan",
  "Longer-term development roadmap",
] as const;

export const compass360IdpChain = [
  "Where you are now",
  "What to develop",
  "What to do next",
  "Suggested timeframe",
] as const;

export const compass360Outputs = [
  {
    title: "Guidance you can act on",
    summary:
      "Assessments, counselling, and exploration that help make the available options clearer.",
  },
  {
    title: "Individual Development Plan",
    summary:
      "Practical priorities and next steps across academics, skills, leadership, research, and profile development.",
  },
  {
    title: "Compass360 Report",
    summary:
      "An approximately 15–25 page record of the findings, recommendations, and roadmap for the student and family.",
  },
] as const;

/** The fourteen-day programme grouped into the five phases a family experiences. */
export const compass360JourneyPhases = [
  {
    phase: "Understand",
    days: "Days 1–4",
    steps: ["Enrolment & onboarding", "Student intake", "Assessments"],
  },
  {
    phase: "Discover",
    days: "Days 4–6",
    steps: ["Counsellor analysis", "Discover session"],
  },
  {
    phase: "Match",
    days: "Days 6–9",
    steps: ["Course & university matching", "Match session"],
  },
  {
    phase: "Plan",
    days: "Days 9–12",
    steps: ["IDP preparation", "Plan session"],
  },
  {
    phase: "Deliver",
    days: "Days 13–14",
    steps: ["Final Compass360 Report"],
  },
] as const;

export const compass360Disclaimer =
  "Compass360 provides professional guidance and informed recommendations. It does not guarantee admission to a particular university, a scholarship, a specific test score, visa approval, employment, or career outcomes. Admissions depend on academic performance, application quality, competition, institutional policies, available places, and other factors beyond the consultancy's control.";
