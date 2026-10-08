import type { PricingFaq } from "@/types";

/**
 * Public-facing program information. Internal commercial data (prices, durations,
 * interaction counts, inclusions) lives in `pricing.ts` and must not be rendered.
 */

export type PublicProgram = {
  id: string;
  name: string;
  tagline: string;
  whoFor: string;
  description: string;
  focus: readonly string[];
};

export const selfPacedStages = [
  { id: "explorer", name: "Explorer", stageLabel: "Foundations" },
  { id: "builder", name: "Builder", stageLabel: "Profile Development" },
  { id: "achiever", name: "Achiever", stageLabel: "Applications" },
] as const;

export const selfPacedPublic: readonly PublicProgram[] = [
  {
    id: "explorer",
    name: "Explorer",
    tagline: "Discover Potential and Build Foundations",
    whoFor:
      "Students in the earlier stages of academic and career exploration who want a clearer understanding of their strengths, interests, and future direction.",
    description:
      "Explorer helps students build stronger foundations before major academic, extracurricular, and university decisions need to be made.",
    focus: [
      "Academic and career discovery",
      "Early profile development",
      "Projects, activities, and next-step planning",
    ],
  },
  {
    id: "builder",
    name: "Builder",
    tagline: "Build a Globally Competitive Profile",
    whoFor:
      "Students ready to develop their academic and extracurricular profile more intentionally before applications begin.",
    description:
      "Builder focuses on turning interests and strengths into meaningful academic, research, leadership, and profile-building experiences.",
    focus: [
      "Advanced profile development",
      "Research, projects, and meaningful extracurriculars",
      "Early test and university preparation",
    ],
  },
  {
    id: "achiever",
    name: "Achiever",
    tagline: "Convert Profile into Admission Offers",
    whoFor:
      "Students approaching the university application stage who need focused admissions preparation and execution support.",
    description:
      "Achiever brings profile development and application planning together as students move closer to submitting university applications.",
    focus: [
      "University and application strategy",
      "Essays, recommendations, and application preparation",
      "Scholarships, interviews, and final decision support",
    ],
  },
];

export const bundledPublic: readonly PublicProgram[] = [
  {
    id: "scholar",
    name: "Scholar",
    tagline: "From Academic Excellence to Global Admissions",
    whoFor:
      "Students beginning later-stage university preparation who want sustained guidance through profile development and admissions.",
    description:
      "Scholar connects academic planning, university research, profile development, testing, and application preparation within one longer-term plan.",
    focus: [
      "Academic and university planning",
      "Profile and application development",
      "Testing, scholarships, and admissions preparation",
    ],
  },
  {
    id: "dreamer",
    name: "Dreamer",
    tagline: "Turning Dreams into Global Destinations",
    whoFor:
      "Students who have enough time to explore their interests, strengthen their profile, and prepare deliberately for future university applications.",
    description:
      "Dreamer gives students time to explore possibilities, build meaningful experiences, and develop towards competitive global university applications.",
    focus: [
      "Career and academic exploration",
      "Long-term profile development",
      "University and application preparation",
    ],
  },
  {
    id: "visionary",
    name: "Visionary",
    tagline: "Building Strong Foundations for Global Success",
    whoFor:
      "Younger students and early undergraduate students who want to begin long-term planning well before applications.",
    description:
      "Visionary creates an early foundation for academic planning, skill development, extracurricular growth, and future university decisions.",
    focus: [
      "Early academic and career direction",
      "Skills, leadership, and sustained activities",
      "Long-term university preparation",
    ],
  },
];

export const compass360Public = {
  name: "Compass360",
  tagline: "Discover Yourself. Find Your Fit. Shape Your Future.",
  description:
    "A guided student discovery and direction program designed to help students better understand their strengths, explore academic and career possibilities, and make more informed decisions about what comes next.",
  focus: ["Self-discovery", "Career and course exploration", "University and global fit"],
  href: "/compass360/",
} as const;

export const score360Public = {
  name: "Score360",
  tagline: "Master the Test, Maximize the Score",
  description:
    "UniEXP Global's dedicated test-preparation program for students preparing for major undergraduate, graduate, and English-proficiency exams.",
  tests: "SAT · ACT · GRE · GMAT · IELTS · TOEFL",
  focus: [
    "Diagnostic-led preparation",
    "Test strategy and targeted practice",
    "Mock testing and performance review",
  ],
  formatNote: "1:1 and small-group options available",
  href: "/test-prep/",
} as const;

export const exclusiveServicesPublic = [
  "Psychometric assessment & career direction",
  "Test preparation coaching",
  "Research & publication guidance",
  "Internship guidance",
  "Visa guidance & documentation",
  "Foreign language support",
  "Scholarships, funding & education loan guidance",
] as const;

export const programFaqs: PricingFaq[] = [
  {
    question: "How do I know which program is right for my student?",
    answer:
      "It depends on the student's current stage, goals, and timeline. A free consultation is the simplest way to work this out. We will talk through where the student is today and suggest the program that fits best.",
  },
  {
    question: "What is the difference between Self-paced and Bundled Programs?",
    answer:
      "Self-paced Programs are focused on one stage at a time, such as discovery, profile development, or applications. Bundled Programs provide longer-term guidance that continues across several academic stages. Both include live guidance from UniEXP Global counsellors and mentors.",
  },
  {
    question: "Can Compass360 be taken separately?",
    answer:
      "Yes. Compass360 is a focused program for student discovery, academic direction, career exploration, university fit, and development planning, and it can be taken on its own.",
  },
  {
    question: "Is test preparation available separately?",
    answer:
      "Yes. Score360 provides dedicated preparation for SAT, ACT, GRE, GMAT, IELTS, and TOEFL, with both 1:1 and small-group options.",
  },
];
