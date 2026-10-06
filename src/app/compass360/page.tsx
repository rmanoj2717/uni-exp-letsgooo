import type { Metadata } from "next";

import { Compass360AssessmentFit } from "@/components/compass360/Compass360AssessmentFit";
import { Compass360Close } from "@/components/compass360/Compass360Close";
import { Compass360Hero } from "@/components/compass360/Compass360Hero";
import { Compass360JourneySessions } from "@/components/compass360/Compass360JourneySessions";
import { Compass360Pillars } from "@/components/compass360/Compass360Pillars";
import { Compass360PlanDeliverables } from "@/components/compass360/Compass360PlanDeliverables";
import { Compass360PromiseAudience } from "@/components/compass360/Compass360PromiseAudience";
import { Compass360Timeline } from "@/components/compass360/Compass360Timeline";

export const metadata: Metadata = {
  title: "Compass360",
  description:
    "Compass360 is UniEXP Global's student discovery and academic direction program, helping students understand their strengths, explore courses and careers, assess university fit, and build a practical development plan.",
};

export default function Compass360Page() {
  return (
    <>
      <Compass360Hero />
      <Compass360PromiseAudience />
      <Compass360Pillars />
      <Compass360JourneySessions />
      <Compass360AssessmentFit />
      <Compass360PlanDeliverables />
      <Compass360Timeline />
      <Compass360Close />
    </>
  );
}
