import type { Metadata } from "next";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { DestinationsCta } from "@/components/destinations/DestinationsCta";
import { DestinationsHero } from "@/components/destinations/DestinationsHero";
import { FieldsOfStudySection } from "@/components/destinations/FieldsOfStudySection";
import { HowWeHelpChoose } from "@/components/destinations/HowWeHelpChoose";
import { Container } from "@/components/ui/Container";
import { destinations, featuredDestinationIds } from "@/lib/constants/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Study abroad in the USA, UK, Canada, Australia, Germany, France, UAE, Singapore — and more.",
};

const featuredDestinations = destinations.filter((d) =>
  (featuredDestinationIds as readonly string[]).includes(d.id),
);
const otherDestinations = destinations.filter(
  (d) => !(featuredDestinationIds as readonly string[]).includes(d.id),
);

export default function DestinationsPage() {
  return (
    <>
      <DestinationsHero />

      <section className="py-12 md:py-14">
        <Container>
          <div className="mb-8 max-w-2xl">
            <div className="mb-3 h-0.5 w-10 rounded-full bg-cyan" aria-hidden />
            <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
              Explore destinations
            </h2>
            <p className="mt-2 text-muted">
              Compare countries by fit, outcomes, and family priorities — with clear guidance on what
              each hub offers.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} featured />
            ))}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </Container>
      </section>

      <HowWeHelpChoose />
      <FieldsOfStudySection />
      <DestinationsCta />
    </>
  );
}
