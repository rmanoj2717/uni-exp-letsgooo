import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { PricingBundled } from "@/components/pricing/PricingBundled";
import { PricingExclusivePrograms } from "@/components/pricing/PricingExclusivePrograms";
import { PricingExclusiveServices } from "@/components/pricing/PricingExclusiveServices";
import { PricingFamilyRail } from "@/components/pricing/PricingFamilyRail";
import { PricingFaq } from "@/components/pricing/PricingFaq";
import { PricingSelfPaced } from "@/components/pricing/PricingSelfPaced";
import { PricingUnsure } from "@/components/pricing/PricingUnsure";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore UniEXP Global programs designed for different stages of academic, profile, admissions, and test preparation.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Programs"
        subtitle="Explore UniEXP Global programs designed for different stages of academic, profile, admissions, and test preparation."
      />

      <PricingFamilyRail />
      <PricingSelfPaced />
      <PricingBundled />
      <PricingExclusivePrograms />
      <PricingExclusiveServices />
      <PricingFaq />
      <PricingUnsure />
    </>
  );
}
