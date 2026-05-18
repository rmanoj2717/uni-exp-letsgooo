import type { PricingComparisonRow, PricingFaq, PricingTier } from "@/types";

export const pricingTiers: PricingTier[] = [
  {
    id: "basic",
    name: "Basic",
    price: 50000,
    touchpoints: "1 touchpoint per month",
    bestFor:
      "Students and families who need focused guidance, early planning, or help understanding the next steps.",
    includes: [
      "Core counselling and profile review",
      "University shortlisting guidance",
      "Application direction and next steps",
      "Monthly progress check-in",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: 150000,
    popular: true,
    badge: "Most Popular",
    touchpoints: "2 touchpoints per month",
    bestFor:
      "Students actively preparing applications who need structured support from shortlisting through submission.",
    includes: [
      "Personalized strategy and university shortlisting",
      "Essay / SOP and application support",
      "Scholarship, visa, and parent guidance",
      "Timeline planning and progress tracking",
      "Strong fit for most students",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 300000,
    touchpoints: "4 touchpoints per month",
    bestFor:
      "Families who want high-touch, end-to-end support with deeper profile building and more frequent counsellor access.",
    includes: [
      "Comprehensive end-to-end counselling",
      "Deeper profile building and faster reviews",
      "Frequent counsellor access and premium guidance",
      "Application, essay, interview, visa, and pre-departure support",
      "Parent updates and priority planning",
    ],
  },
];

export const pricingComparisonRows: PricingComparisonRow[] = [
  {
    label: "Monthly touchpoints",
    basic: "1 per month",
    standard: "2 per month",
    premium: "4 per month",
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
    label: "Scholarship guidance",
    basic: false,
    standard: true,
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
    standard: "Active application preparation",
    premium: "End-to-end family support",
  },
];

export const pricingFaqs: PricingFaq[] = [
  {
    question: "Which plan do most families choose?",
    answer:
      "Most families choose Standard because it provides structured support across shortlisting, essays, applications, scholarships, visa guidance, and parent communication.",
  },
  {
    question: "Can we upgrade later?",
    answer:
      "Yes. If your student needs more frequent support or deeper profile-building, we can discuss moving to a higher-touch plan.",
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
