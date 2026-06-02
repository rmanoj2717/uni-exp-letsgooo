import type { Metadata } from "next";
import { HowItWorksCta } from "@/components/how-it-works/HowItWorksCta";
import { HowItWorksHero } from "@/components/how-it-works/HowItWorksHero";
import { PhaseRoadmapPanels } from "@/components/how-it-works/PhaseRoadmapPanels";
import { RoadmapIntro } from "@/components/how-it-works/RoadmapIntro";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The full UniExp Global admissions journey — 14 structured steps from free consultation through post-enrollment support.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />

      <section className="bg-surface">
        <Container>
          <RoadmapIntro />
        </Container>
      </section>

      <section className="relative overflow-hidden bg-off-white/80">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(45,184,232,0.08),transparent_55%)]"
          aria-hidden
        />
        <Container className="relative">
          <PhaseRoadmapPanels />
        </Container>
      </section>

      <HowItWorksCta />
    </>
  );
}
