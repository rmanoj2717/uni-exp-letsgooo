import { CtaButton } from "@/components/cta/CtaButton";
import { Container } from "@/components/ui/Container";
import { exclusiveServicesPublic } from "@/lib/constants/programs";

export function PricingExclusiveServices() {
  return (
    <section
      id="exclusive-services"
      className="scroll-mt-24 border-y border-border/60 bg-off-white py-12 md:scroll-mt-28 md:py-16"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <header className="max-w-md">
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Exclusive Services
            </h2>
            <div className="mt-5 h-1 w-12 rounded-full bg-cyan" aria-hidden />
            <p className="mt-5 leading-relaxed text-muted">
              Individual services are available for students and families who need focused support
              in a specific area.
            </p>
            <div className="mt-6">
              <CtaButton
                source="programs-exclusive-services"
                label="Talk to a Counsellor"
                variant="outline"
              />
            </div>
          </header>

          <ul className="grid gap-x-8 self-start sm:grid-cols-2">
            {exclusiveServicesPublic.map((service) => (
              <li
                key={service}
                className="flex items-start gap-2.5 border-b border-border/60 py-3.5"
              >
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden />
                <span className="text-sm font-medium leading-snug text-navy md:text-[0.9375rem]">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
