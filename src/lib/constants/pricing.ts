import type { PricingFaq } from "@/types";

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const selfPacedPrograms = [
  {
    id: "explorer",
    name: "Explorer",
    tagline: "Discover Potential and Build Foundations",
    stageLabel: "Foundations",
    price: 27999,
    idealFor: "Grades 8, 9 & 10 / Graduation 1st & 2nd years",
    idealDuration: "3 months",
    maximumDuration: "6 months",
    counsellorInteractions: 10,
    mentorInteractions: 4,
    testPrepInteractions: 0,
    keyFocus: [
      "Profile evaluation",
      "Career discovery",
      "Academic planning and subject selection",
      "Competitions, leadership and community service",
      "Passion projects and research orientation",
      "Introductory internships",
      "Portfolio development",
      "Reading and writing habits",
      "Mentor reviews",
    ],
    additionalSupport: [
      "Psychometric Test & Report",
      "Project & Internship connections",
      "Email / WhatsApp response during working days and hours",
    ],
    additionalSupportIntro: "Explorer support includes:",
  },
  {
    id: "builder",
    name: "Builder",
    tagline: "Build a Globally Competitive Profile",
    stageLabel: "Profile Development",
    price: 49995,
    idealFor: "Grades 10 & 11 / Graduation 2nd & 3rd years",
    idealDuration: "6 months",
    maximumDuration: "9 months",
    counsellorInteractions: 12,
    mentorInteractions: 6,
    testPrepInteractions: 6,
    keyFocus: [
      "Everything included in Explorer",
      "SAT / ACT / GRE / GMAT preparation support",
      "IELTS / TOEFL preparation support",
      "Research projects",
      "Publications",
      "Advanced internships",
      "Higher-level competitions",
      "Startup projects",
      "Resume development",
      "LinkedIn profile",
      "Personal branding",
      "Summer schools",
      "Portfolio refinement",
    ],
    additionalSupport: [
      "SAT / ACT / GRE / GMAT materials and mock tests",
      "IELTS / TOEFL materials and mock tests",
      "Exclusive talks with Startup Entrepreneurs",
    ],
    additionalSupportIntro: "Builder adds:",
  },
  {
    id: "achiever",
    name: "Achiever",
    tagline: "Convert Profile into Admission Offers",
    stageLabel: "Applications",
    price: 94995,
    idealFor: "Grades 11 & 12 / Graduation 3rd & 4th years",
    idealDuration: "9 months",
    maximumDuration: "12 months",
    counsellorInteractions: 18,
    mentorInteractions: 6,
    testPrepInteractions: 6,
    keyFocus: [
      "Everything included in Builder",
      "Application strategy and timeline management",
      "SOP and essay guidance",
      "LOR support",
      "Resume tailoring",
      "Application review and submission",
      "Interview preparation",
      "University shortlisting",
      "Waitlist strategy",
      "Financial planning",
      "Scholarship guidance",
      "Visa guidance",
      "Pre-departure guidance",
    ],
    additionalSupport: [
      "Dynamic SOP editing",
      "Dynamic application timeline tracking and triggers",
      "Mock interviews",
      "Application handholding",
    ],
    additionalSupportIntro: "Achiever adds:",
  },
] as const;

export const bundledPrograms = [
  {
    id: "scholar",
    name: "Scholar",
    tagline: "From Academic Excellence to Global Admissions",
    price: 144999,
    duration: "2 years",
    idealFor: "Grade 11 / Graduation 3rd year",
    counsellorInteractionsPerYear: 18,
    mentorInteractionsPerYear: 6,
    testPrepInteractionsPerYear: 6,
    keyAreas: [
      "Academic performance and university alignment",
      "Country, university, course and career research",
      "Profile development",
      "Testing strategy",
      "Research, projects and internships",
      "Leadership",
      "Reach / Target / Safe university planning",
      "Application planning",
      "Essays and SOPs",
      "Scholarships and affordability",
      "Interview preparation",
      "Application tracking",
    ],
  },
  {
    id: "dreamer",
    name: "Dreamer",
    tagline: "Turning Dreams into Global Destinations",
    price: 225999,
    duration: "3 years",
    idealFor: "Grade 10 / Graduation 2nd year",
    counsellorInteractionsPerYear: 18,
    mentorInteractionsPerYear: 6,
    testPrepInteractionsPerYear: 6,
    keyAreas: [
      "Academic and subject planning",
      "Interest and career exploration",
      "Personalised 3-year roadmap",
      "Global course and university exploration",
      "Extracurricular, leadership, research and project development",
      "Meaningful activities rather than certificate accumulation",
      "Competition, hackathon and conference exposure",
      "Test planning",
      "Tuition, scholarships and financial awareness",
      "Regular reviews and roadmap adjustment",
    ],
  },
  {
    id: "visionary",
    name: "Visionary",
    tagline: "Building Strong Foundations for Global Success",
    price: 315999,
    duration: "4 years",
    idealFor: "Grade 9 / Graduation 1st year",
    counsellorInteractionsPerYear: 18,
    mentorInteractionsPerYear: 6,
    testPrepInteractionsPerYear: 6,
    keyAreas: [
      "Interests, strengths and aspirations",
      "Career exploration",
      "Long-term academic planning",
      "Global university and education-system awareness",
      "Course and discipline exploration",
      "Future-ready skills",
      "Sustained extracurricular activities",
      "Leadership",
      "Reading, research and independent learning",
      "Projects, internships and volunteering",
      "Competitions and certifications",
      "Profile development",
      "Early financial and scholarship awareness",
      "Annual planning and reviews",
    ],
  },
] as const;

export const bundledProgramSupport = [
  "Psychometric Test & Report",
  "Project & Internship connections",
  "Email / WhatsApp response during working days and hours",
  "SAT / ACT / GRE / GMAT material and mock tests",
  "IELTS / TOEFL material and mock tests",
  "Exclusive talks with Startup Entrepreneurs",
  "Dynamic SOP editing",
  "Dynamic application timeline tracking and triggers",
  "Mock interviews",
  "Application handholding",
] as const;

export const compass360Pricing = {
  name: "Compass360",
  tagline: "Discover Yourself. Find Your Fit. Shape Your Future.",
  priceExGst: 9999,
  priceInclGst: 11799,
  duration: "2 weeks",
  liveInteractions: 3,
  idealFor: "Grade 8 and above",
  description:
    "A student discovery, academic direction, career exploration, university fit, and development planning program.",
  href: "/compass360/",
} as const;

export const exclusiveServices = [
  {
    id: "psychometric",
    name: "Psychometric assessment & report, university matching, career roadmap",
    price: 10000,
  },
  {
    id: "test-prep-coaching",
    name: "Test prep coaching",
    price: null,
  },
  {
    id: "research-publication",
    name: "Research papers & publication",
    price: null,
  },
  {
    id: "internships",
    name: "Internships & guidance",
    price: null,
  },
  {
    id: "visa",
    name: "Visa guidance & documentation",
    price: null,
  },
  {
    id: "languages",
    name: "Foreign languages",
    price: null,
  },
  {
    id: "funding",
    name: "Scholarships, funding & educational loans guidance",
    price: null,
  },
] as const;

export const pricingFaqs: PricingFaq[] = [
  {
    question: "What is the difference between Self-paced and Bundled Programs?",
    answer:
      "Self-paced Programs run for a defined short-term period, while Bundled Programs provide longer-term guidance over two to four years. Both include live counsellor and mentor interactions, with the level and duration depending on the program.",
  },
  {
    question: "Which Self-paced Program is appropriate for my student?",
    answer:
      "Explorer is designed primarily for Grades 8–10 and early undergraduate students, Builder for Grades 10–11 and mid-undergraduate students, and Achiever for Grades 11–12 and later undergraduate students. We can help families choose based on the student's current stage and goals.",
  },
  {
    question: "Is test preparation available separately?",
    answer:
      "Yes. Score360 provides dedicated preparation for SAT, ACT, GRE, GMAT, TOEFL, and IELTS, with both 1:1 and small-group options.",
  },
  {
    question: "Can Compass360 be taken separately?",
    answer:
      "Yes. Compass360 is a focused two-week program for student discovery, academic direction, career exploration, university fit, and development planning.",
  },
];
