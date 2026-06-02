import type { PricingComparisonRow, PricingFaq, PricingTier } from "@/types";

export const pricingTiers: PricingTier[] = [
  {
    id: "basic",
    name: "Basic",
    price: 50000,
    touchpoints: "1 counselling touchpoint per month",
    bestFor:
      "Focused guidance for families who need early direction, profile review, and university shortlisting support.",
    includes: [
      "Profile evaluation and admissions direction",
      "University shortlisting guidance",
      "Application direction and next-step planning",
      "Overview of testing requirements for target universities",
      "Monthly progress check-in",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: 150000,
    popular: true,
    badge: "Most Popular",
    touchpoints: "2 counselling touchpoints per month",
    bestFor:
      "Comprehensive admissions counselling for students who need structured university planning, application strategy, essay and SOP support, resume and CV guidance, scholarship guidance, and application tracking.",
    includes: [
      "25 hours of admissions counselling support",
      "Personalized strategy and university shortlisting",
      "Application strategy, essay/SOP, and resume/CV support",
      "Scholarship guidance and application tracking",
      "Visa and parent guidance",
      "Timeline planning and regular progress updates",
      "Test planning for SAT, ACT, IELTS, and TOEFL",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 300000,
    touchpoints: "3 counselling touchpoints per month",
    bestFor:
      "Premium combines our full Standard admissions counselling package with personalized 1:1 preparation support for IELTS/TOEFL and SAT/ACT, helping students align testing, applications, and timelines under one coordinated plan.",
    includes: [
      "Everything included in Standard",
      "25 hours of admissions counselling support",
      "20 hours of personalized 1:1 test prep support",
      "3 counselling touchpoints per month",
      "IELTS / TOEFL English proficiency preparation",
      "SAT / ACT standardized test preparation",
      "Enhanced progress guidance and regular updates",
    ],
  },
];

export const pricingComparisonRows: PricingComparisonRow[] = [
  {
    label: "Monthly counselling touchpoints",
    basic: "1 per month",
    standard: "2 per month",
    premium: "3 per month",
  },
  {
    label: "Admissions counselling support",
    basic: "Focused guidance",
    standard: "25 hours",
    premium: "25 hours",
  },
  {
    label: "Personalized 1:1 test prep support",
    basic: false,
    standard: false,
    premium: "20 hours",
  },
  {
    label: "Profile evaluation",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    label: "University shortlisting",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    label: "Application strategy",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    label: "Essay / SOP support",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    label: "Resume / CV guidance",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    label: "Scholarship guidance",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    label: "Application tracking",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    label: "Test prep planning (SAT, ACT, IELTS, TOEFL)",
    basic: "Overview",
    standard: true,
    premium: true,
  },
  {
    label: "IELTS / TOEFL preparation (1:1)",
    basic: false,
    standard: false,
    premium: true,
  },
  {
    label: "SAT / ACT preparation (1:1)",
    basic: false,
    standard: false,
    premium: true,
  },
  {
    label: "Visa / pre-departure support",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    label: "Parent updates",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    label: "Best for",
    basic: "Early planning & focused guidance",
    standard: "Structured admissions counselling",
    premium: "Standard + personalized 1:1 test prep",
  },
];

export const pricingFaqs: PricingFaq[] = [
  {
    question: "Which plan do most families choose?",
    answer:
      "Most families choose Standard because it provides comprehensive admissions counselling across shortlisting, essays, applications, scholarships, and tracking. Premium is a strong fit when students also need coordinated 1:1 test preparation alongside admissions support.",
  },
  {
    question: "What does Premium include compared to Standard?",
    answer:
      "Premium includes everything in Standard—25 hours of admissions counselling support and structured application guidance—plus 20 hours of personalized 1:1 test prep support for IELTS/TOEFL and SAT/ACT, with three counselling touchpoints per month.",
  },
  {
    question: "Can we upgrade later?",
    answer:
      "Yes. If your student needs personalized 1:1 test prep support in addition to admissions counselling, we can discuss moving from Standard to Premium.",
  },
  {
    question: "Are taxes included?",
    answer: "Applicable taxes are extra.",
  },
  {
    question: "How do we know which plan is right?",
    answer:
      "Start with a consultation. We'll review the student's stage, target countries, timeline, and support needs before recommending a plan.",
  },
];

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
