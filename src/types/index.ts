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
  | "uae"
  | "singapore";

export type Destination = {
  id: string;
  name: string;
  tagline: string;
  highlights: string[];
  bestFor: string;
  considerations: string;
  visualLabel: string;
  theme: DestinationTheme;
};

export type FieldOfStudy = {
  id: string;
  name: string;
  description: string;
};

export type PricingTier = {
  id: string;
  name: string;
  price: number;
  popular?: boolean;
  touchpoints: string;
  features: string[];
};

export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  summary: string;
  bullets: string[];
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
