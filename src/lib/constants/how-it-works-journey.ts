import type { AdmissionsJourneyPhase } from "@/types";

export const admissionsJourneyPhases: AdmissionsJourneyPhase[] = [
  {
    id: "discover-align",
    phase: 1,
    title: "Discover & Align",
    description:
      "We begin by understanding the student's goals, academic profile, family priorities, timeline, and preferred destinations.",
    familySummary: {
      headline: "Clarity before decisions",
      points: ["Understand goals", "Identify priorities", "Start with direction"],
    },
    steps: [
      {
        step: 1,
        title: "Free Consultation",
        tag: "Initial discovery",
        description:
          "We begin with an introductory conversation to understand the student's goals, academic background, preferred countries, timeline, and family priorities.",
      },
      {
        step: 2,
        title: "Personalized Counselling",
        tag: "Pathway guidance",
        description:
          "Our counsellors help the student and family understand suitable academic pathways, admissions expectations, timelines, and next steps.",
      },
      {
        step: 3,
        title: "University Shortlisting",
        tag: "Balanced options",
        description:
          "We create a balanced university list based on profile, goals, budget, country preferences, program fit, and long-term outcomes.",
      },
    ],
  },
  {
    id: "plan-prepare",
    phase: 2,
    title: "Plan & Prepare",
    description:
      "We turn the admissions journey into a clear roadmap with deadlines, preparation steps, test planning, and application priorities.",
    familySummary: {
      headline: "Structure before deadlines",
      points: ["Plan key milestones", "Prepare materials", "Reduce last-minute stress"],
    },
    steps: [
      {
        step: 4,
        title: "Action Plan",
        tag: "Clear priorities",
        description:
          "The student receives a clear roadmap outlining priorities, required materials, key milestones, and next steps.",
      },
      {
        step: 5,
        title: "Timeline Planning",
        tag: "Deadline structure",
        description:
          "We organize deadlines for tests, essays, documents, applications, scholarships, and visa-related requirements.",
      },
      {
        step: 6,
        title: "Application Preparation",
        tag: "Materials ready",
        description:
          "Students begin preparing the materials, scores, activities, and documents needed to build stronger applications.",
      },
    ],
  },
  {
    id: "craft-submit",
    phase: 3,
    title: "Craft & Submit",
    description:
      "We help shape strong applications through essays, resumes, documents, submissions, and tracking.",
    familySummary: {
      headline: "Stronger applications",
      points: ["Shape the story", "Review documents", "Submit with confidence"],
    },
    steps: [
      {
        step: 7,
        title: "Essay & Application Crafting",
        tag: "Strong narrative",
        description:
          "We support the student's application narrative, essays, SOPs, and positioning so the application feels clear, authentic, and competitive.",
      },
      {
        step: 8,
        title: "Resume / CV Preparation",
        tag: "Profile presentation",
        description:
          "We help structure academic achievements, activities, projects, and leadership experience into a university-ready resume or CV.",
      },
      {
        step: 9,
        title: "Application Submission",
        tag: "Accurate filing",
        description:
          "We review key details and guide students through submitting applications accurately and on time.",
      },
      {
        step: 10,
        title: "Application Tracking",
        tag: "Status monitoring",
        description:
          "We help families monitor application status, missing items, university communication, and upcoming deadlines.",
      },
    ],
  },
  {
    id: "decide-transition",
    phase: 4,
    title: "Decide & Transition",
    description:
      "We support families through decisions, scholarships, visa steps, and the transition after enrollment.",
    familySummary: {
      headline: "Support after admits",
      points: ["Compare decisions", "Plan scholarships & visa", "Prepare for transition"],
    },
    steps: [
      {
        step: 11,
        title: "Decision Support",
        tag: "Offer comparison",
        description:
          "Once decisions arrive, we help students and families compare offers, conditions, timelines, and next steps.",
      },
      {
        step: 12,
        title: "Scholarship Guidance",
        tag: "Funding strategy",
        description:
          "We guide families through scholarship opportunities, financial aid considerations, and value-based decision-making.",
      },
      {
        step: 13,
        title: "Visa Application Support",
        tag: "Document readiness",
        description:
          "We support students with visa-related documents, timelines, and preparation for the next stage.",
      },
      {
        step: 14,
        title: "Post-Enrollment Support",
        tag: "Transition planning",
        description:
          "After enrollment, we help with pre-departure planning, transition preparation, and important next steps before campus arrival.",
      },
    ],
  },
];

export const journeyStepCount = admissionsJourneyPhases.reduce(
  (total, phase) => total + phase.steps.length,
  0,
);
