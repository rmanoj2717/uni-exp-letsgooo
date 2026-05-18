import Link from "next/link";
import { destinations } from "@/lib/constants/destinations";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export function DestinationsPreview() {
  return (
    <Section
      eyebrow="Where you can study"
      title="Study destinations worldwide"
      subtitle="Fit-first recommendations across top global education hubs."
      variant="off-white"
      className="!py-12 md:!py-14 [&_header]:!mb-8 md:[&_header]:!mb-9 [&_header]:mx-auto [&_header]:max-w-2xl [&_header]:text-center [&_header>div]:mx-auto"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {destinations.map((d) => (
            <Link key={d.id} href="/destinations" className="transition-transform hover:-translate-y-0.5">
              <Badge
                variant="cyan"
                className="cursor-pointer px-4 py-2.5 text-sm font-semibold normal-case tracking-normal hover:bg-cyan hover:text-white"
              >
                {d.name}
              </Badge>
            </Link>
          ))}
        </div>
        <p className="mt-6">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 font-semibold text-cyan transition-all duration-200 hover:gap-3 hover:text-navy"
          >
            Explore destinations & fields of study
            <span aria-hidden>→</span>
          </Link>
        </p>
      </div>
    </Section>
  );
}
