import type { PricingTier } from "@/types";

export const pricingTiers: PricingTier[] = [
  {
    id: "basic",
    name: "Basic",
    price: 50000,
    touchpoints: "1 touchpoint per month",
    features: [
      "Core counselling and profile review",
      "University shortlisting guidance",
      "Application direction and next steps",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: 150000,
    popular: true,
    touchpoints: "2 touchpoints per month",
    features: [
      "Personalized strategy and shortlisting",
      "Essay / SOP and application support",
      "Scholarship, visa, and parent guidance",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 300000,
    touchpoints: "4 touchpoints per month",
    features: [
      "Comprehensive end-to-end support",
      "Deeper profile building and faster reviews",
      "Frequent counsellor access and premium guidance",
    ],
  },
];

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
