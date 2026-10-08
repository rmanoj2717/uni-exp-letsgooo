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
      "Turn the findings into clear next steps and a longer-term roadmap.",
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
  "Aptitude",
  "Interests",
  "Personality & Behaviour",
  "Skills",
  "Aspirations & Experiences",
] as const;

export const compass360DevelopmentAreas = [
  "Academics",
  "Research",
  "Leadership",
  "Communication",
  "Career Exposure",
  "University Research",
] as const;

export const compass360IdpChain = [
  "Where you are now",
  "What to develop",
  "What to do next",
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
      "A written record of the findings, recommendations, and roadmap for the student and family.",
  },
] as const;

export const compass360Disclaimer =
  "Compass360 provides professional guidance and informed recommendations. It does not guarantee admission to a particular university, a scholarship, a specific test score, visa approval, employment, or career outcomes. Admissions depend on academic performance, application quality, competition, institutional policies, available places, and other factors beyond the consultancy's control.";
