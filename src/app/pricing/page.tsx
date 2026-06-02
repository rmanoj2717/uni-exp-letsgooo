import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { PricingFaq } from "@/components/pricing/PricingFaq";
import { PricingTierCards } from "@/components/pricing/PricingTierCards";
import { PricingUnsure } from "@/components/pricing/PricingUnsure";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Basic, Standard, and Premium counselling packages — Standard for admissions support, Premium for Standard plus personalized 1:1 test prep.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Pricing"
        subtitle="Standard is our main admissions counselling package. Premium includes everything in Standard plus personalized 1:1 test prep for IELTS/TOEFL and SAT/ACT."
      />

      <PricingTierCards />
      <PricingComparison />
      <PricingUnsure />
      <PricingFaq />
    </>
  );
}
