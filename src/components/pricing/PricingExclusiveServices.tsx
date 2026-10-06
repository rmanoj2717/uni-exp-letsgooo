import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { exclusiveServices, formatINR } from "@/lib/constants/pricing";

export function PricingExclusiveServices() {
  return (
    <section
      id="exclusive-services"
      className="scroll-mt-24 border-y border-border/60 bg-off-white py-12 md:scroll-mt-28 md:py-16"
    >
      <Container>
        <header className="mb-6 max-w-2xl md:mb-7">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Exclusive Services
          </h2>
          <div className="mt-5 h-1 w-12 rounded-full bg-cyan" aria-hidden />
        </header>

        <ul className="grid gap-x-10 sm:grid-cols-2">
          {exclusiveServices.map((service) => (
            <li
              key={service.id}
              className="flex items-baseline justify-between gap-4 border-b border-border/60 py-3.5"
            >
              <p className="text-sm font-medium leading-snug text-navy md:text-[0.9375rem]">
                {service.name}
              </p>
              {service.price === null ? (
                <Link
                  href="/contact/"
                  className="shrink-0 text-sm font-medium text-cyan transition-colors duration-200 hover:text-navy"
                >
                  Contact us for pricing
                </Link>
              ) : (
                <p className="shrink-0 font-display text-lg font-bold tabular-nums text-navy">
                  {formatINR(service.price)}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
