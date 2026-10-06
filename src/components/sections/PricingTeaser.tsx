import Link from "next/link";
import { CtaButton } from "@/components/cta/CtaButton";
import { Section } from "@/components/ui/Section";
import {
  bundledPrograms,
  compass360Pricing,
  formatINR,
  selfPacedPrograms,
} from "@/lib/constants/pricing";

const categoryPreviews = [
  {
    id: "self-paced",
    name: "Self-paced Programs",
    supporting: "3 to 12 months depending on program",
    items: selfPacedPrograms.map((program) => ({
      name: program.name,
      price: formatINR(program.price),
    })),
  },
  {
    id: "bundled",
    name: "Bundled Programs",
    supporting: "2 to 4 years depending on program",
    items: bundledPrograms.map((program) => ({
      name: program.name,
      price: formatINR(program.price),
    })),
  },
  {
    id: "exclusive-programs",
    name: "Exclusive Programs",
    supporting: "Focused student discovery and dedicated test preparation programs",
    items: [
      { name: compass360Pricing.name, price: `${formatINR(compass360Pricing.priceExGst)} + GST` },
      { name: "Score360", price: "test-specific pricing" },
    ],
  },
] as const;

export function PricingTeaser() {
  return (
    <Section
      eyebrow="Programs"
      title="Programs for different stages"
      subtitle="Choose short-term development programs, longer-term guidance, or specialist programs based on where the student is today."
      className="!py-11 md:!py-12 [&_header]:!mb-5 md:[&_header]:!mb-6"
    >
      <div className="grid gap-3.5 md:grid-cols-3 md:items-stretch md:gap-4">
        {categoryPreviews.map((category) => (
          <article
            key={category.id}
            className="flex h-full flex-col rounded-2xl border border-border/60 bg-surface/90 p-4 shadow-[0_2px_10px_rgba(21,36,71,0.04)] md:p-[1.125rem]"
          >
            <h3 className="font-display text-base font-bold leading-tight text-navy md:text-lg">
              {category.name}
            </h3>
            <ul className="mt-3 flex-1 space-y-1.5">
              {category.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-muted">{item.name}</span>
                  <span className="shrink-0 font-semibold tabular-nums text-navy">{item.price}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 border-t border-border/50 pt-3 text-xs leading-relaxed text-muted">
              {category.supporting}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-7 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4 md:mt-8">
        <Link
          href="/pricing/"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-surface px-6 py-2.5 text-sm font-semibold text-navy shadow-[0_2px_10px_rgba(21,36,71,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-cyan-soft/40 sm:w-auto"
        >
          View Programs & Pricing
          <span aria-hidden>→</span>
        </Link>
        <CtaButton
          source="pricing-teaser"
          label="Book a Free Consultation"
          className="w-full sm:w-auto"
        />
      </div>
    </Section>
  );
}
