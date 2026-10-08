import Link from "next/link";
import { CtaButton } from "@/components/cta/CtaButton";
import { Section } from "@/components/ui/Section";

const categoryPreviews = [
  {
    id: "self-paced",
    name: "Self-paced Programs",
    programs: "Explorer · Builder · Achiever",
    description: "Focused programs for discovery, profile development, and application readiness.",
  },
  {
    id: "bundled",
    name: "Bundled Programs",
    programs: "Scholar · Dreamer · Visionary",
    description:
      "Longer-term guidance that develops with the student over multiple academic stages.",
  },
  {
    id: "exclusive-programs",
    name: "Exclusive Programs",
    programs: "Compass360 · Score360",
    description: "Focused programs for student discovery and dedicated test preparation.",
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
          <Link
            key={category.id}
            href={`/pricing/#${category.id}`}
            className="group flex h-full flex-col rounded-2xl border border-border/60 bg-surface/90 p-4 shadow-[0_2px_10px_rgba(21,36,71,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/40 md:p-[1.125rem]"
          >
            <h3 className="font-display text-base font-bold leading-tight text-navy md:text-lg">
              {category.name}
            </h3>
            <p className="mt-2 font-display text-sm font-semibold text-navy-light">{category.programs}</p>
            <p className="mt-3 border-t border-border/50 pt-3 text-sm leading-relaxed text-muted">
              {category.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-7 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4 md:mt-8">
        <Link
          href="/pricing/"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-surface px-6 py-2.5 text-sm font-semibold text-navy shadow-[0_2px_10px_rgba(21,36,71,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-cyan-soft/40 sm:w-auto"
        >
          Explore Programs
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
