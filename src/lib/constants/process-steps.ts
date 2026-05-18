import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    step: 1,
    title: "Discover & Evaluate",
    summary:
      "We map your academic profile, goals, and family priorities into a clear starting point.",
    description:
      "We begin with a focused discovery session to understand the student's academic background, interests, goals, family priorities, budget, and preferred destinations. This gives us the foundation to create a plan that is realistic, personalized, and aligned with long-term outcomes.",
    bullets: [
      "Academic and profile review",
      "Goals, interests, and country preferences",
      "Family priorities, budget, and timeline",
    ],
  },
  {
    id: "strategy",
    step: 2,
    title: "Build Your Strategy",
    summary:
      "Profile-led planning with data-driven shortlisting and a personalized roadmap.",
    description:
      "Based on the student's profile, we create a clear admissions strategy with best-fit universities, reach/match/safety options, testing needs, scholarship possibilities, and application milestones. The goal is to turn a confusing process into a structured roadmap.",
    bullets: [
      "Personalized university shortlist",
      "Reach, match, and safety planning",
      "Testing, scholarship, and timeline strategy",
    ],
  },
  {
    id: "apply",
    step: 3,
    title: "Apply with Confidence",
    summary:
      "Essays, documents, tests, and submissions — structured support at every step.",
    description:
      "We support the student through essays, SOPs, resumes, recommendation planning, application forms, interview preparation, and final submission checks. Every part of the application is reviewed for clarity, accuracy, and alignment with the student's story.",
    bullets: [
      "Essays, SOPs, resumes, and LOR support",
      "Application review and submission tracking",
      "Interview preparation and final checks",
    ],
  },
  {
    id: "decide",
    step: 4,
    title: "Decide & Depart",
    summary:
      "Offers, scholarships, visas, and pre-departure — we stay with you through takeoff.",
    description:
      "After decisions arrive, we help families compare offers, understand scholarships, prepare for visa steps, and plan the transition to campus. Our support continues through pre-departure so students and parents feel confident about the next stage.",
    bullets: [
      "Offer and scholarship comparison",
      "Visa and document guidance",
      "Pre-departure support and parent updates",
    ],
  },
];

export const universityPlanning = [
  {
    label: "Reach",
    description: "Ambitious targets where your profile can compete with strong preparation.",
  },
  {
    label: "Match",
    description: "Universities where your profile aligns well with typical admits.",
  },
  {
    label: "Safety",
    description: "Solid options that protect your timeline and peace of mind.",
  },
] as const;
