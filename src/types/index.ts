export type Service = {
  id: string;
  title: string;
  description: string;
  summary: string;
  helpWith: string[];
  icon: string;
};

export type DestinationTheme =
  | "usa"
  | "uk"
  | "canada"
  | "australia"
  | "germany"
  | "france"
  | "netherlands"
  | "japan"
  | "uae"
  | "singapore"
  | "ireland"
  | "newzealand";

export type Destination = {
  id: string;
  name: string;
  tagline: string;
  highlights: string[];
  bestFor: string;
  considerations: string;
  visualLabel: string;
  theme: DestinationTheme;
  /** Optional atmosphere photo for featured cards (path under /images/) */
  image?: string;
};

export type FieldOfStudy = {
  id: string;
  name: string;
  description: string;
};

export type PricingTier = {
  id: string;
  name: string;
  nameSuffix?: string;
  price: number;
  popular?: boolean;
  badge?: string;
  summary?: string;
  touchpoints: string;
  bestFor: string;
  includes: string[];
};

export type PricingComparisonRow = {
  label: string;
  basic: boolean | string;
  standard: boolean | string;
  premium: boolean | string;
};

export type PricingFaq = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  summary: string;
  bullets: string[];
};

export type AdmissionsJourneyStep = {
  step: number;
  title: string;
  description: string;
  tag: string;
};

export type PhaseFamilySummary = {
  headline: string;
  points: string[];
};

export type AdmissionsJourneyPhase = {
  id: string;
  phase: number;
  title: string;
  description: string;
  steps: AdmissionsJourneyStep[];
  familySummary: PhaseFamilySummary;
};

export type QuizQuestion = {
  id: string;
  category: "reading" | "math" | "writing";
  passage?: string;
  question: string;
  options: string[];
  correctIndex: number;
};

export type NavItem = {
  label: string;
  href: string;
};
