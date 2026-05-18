import { DestinationsPreview } from "@/components/sections/DestinationsPreview";
import { EthicsBanner } from "@/components/sections/EthicsBanner";
import { Hero } from "@/components/sections/Hero";
import { PageCtaBand } from "@/components/sections/PageCtaBand";
import { ParentFriendly } from "@/components/sections/ParentFriendly";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { StrategyFormula } from "@/components/sections/StrategyFormula";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EthicsBanner />
      <StrategyFormula />
      <ServicesPreview />
      <ProcessPreview />
      <DestinationsPreview />
      <ParentFriendly />
      <PricingTeaser />
      <PageCtaBand source="home-bottom" />
    </>
  );
}
