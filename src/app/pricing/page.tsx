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
  title: "Programs & Pricing",
  description:
    "Self-paced, bundled, and exclusive UniEXP Global programs, plus exclusive services. Public prices for Explorer, Builder, Achiever, Scholar, Dreamer, Visionary, Compass360, and Score360.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Programs & Pricing"
        subtitle="Choose from focused short-term programs, longer-term bundled guidance, and specialist programs based on the student's stage and goals."
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
