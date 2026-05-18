import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { PricingFaq } from "@/components/pricing/PricingFaq";
import { PricingTierCards } from "@/components/pricing/PricingTierCards";
import { PricingUnsure } from "@/components/pricing/PricingUnsure";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent counselling packages — Basic, Standard, and Premium plans with clear inclusions for students and families.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Pricing"
        subtitle="Choose the level of support that fits your timeline, goals, and family needs — with clear inclusions at every tier."
      />

      <PricingTierCards />
      <PricingComparison />
      <PricingUnsure />
      <PricingFaq />
    </>
  );
}
