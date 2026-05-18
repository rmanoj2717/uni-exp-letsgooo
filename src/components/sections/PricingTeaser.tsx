import Link from "next/link";
import { CtaButton } from "@/components/cta/CtaButton";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils/cn";

const planPreviews = [
  {
    id: "basic",
    name: "Basic",
    description: "Focused monthly guidance for early planning or targeted support.",
    bestFor: "Early exploration or specific questions.",
  },
  {
    id: "standard",
    name: "Standard",
    description: "Structured support for students actively preparing applications.",
    bestFor: "Shortlisting, essays, and application planning.",
  },
  {
    id: "premium",
    name: "Premium",
    description:
      "High-touch counselling for deeper profile-building and frequent guidance.",
    bestFor: "End-to-end family support.",
  },
] as const;

export function PricingTeaser() {
  return (
    <Section
      eyebrow="Investment"
      title="Plans built around your level of support"
      subtitle="Choose focused guidance, structured application support, or high-touch end-to-end counselling based on where your student is in the journey."
      className="!py-11 md:!py-12 [&_header]:!mb-5 md:[&_header]:!mb-6"
    >
      <p className="mb-6 max-w-2xl text-sm text-muted md:mb-7">
        View full inclusions and pricing details on the{" "}
        <Link href="/pricing" className="font-medium text-cyan transition-colors hover:text-navy">
          Pricing page
        </Link>
        .
      </p>

      <div className="grid gap-3.5 md:grid-cols-3 md:items-stretch md:gap-4">
        {planPreviews.map((plan) => (
          <article
            key={plan.id}
            className={cn(
              "flex h-full flex-col rounded-2xl border p-4 shadow-[0_2px_10px_rgba(21,36,71,0.04)] md:p-[1.125rem]",
              plan.id === "standard"
                ? "border-cyan/20 bg-gradient-to-br from-cyan-soft/25 to-surface"
                : "border-border/60 bg-surface/90 hover:border-cyan/15",
            )}
          >
            <div className="min-h-[2.75rem]">
              <h3 className="font-display text-base font-bold leading-tight text-navy md:text-lg">
                {plan.name}
              </h3>
              {plan.id === "standard" ? (
                <p className="mt-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-cyan">
                  Most Popular
                </p>
              ) : null}
            </div>

            <p className="mt-2.5 flex-1 text-sm leading-snug text-muted">{plan.description}</p>

            <p className="mt-3 border-t border-border/50 pt-3 text-xs leading-relaxed text-muted">
              <span className="font-semibold text-navy/80">Best for: </span>
              {plan.bestFor}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-7 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4 md:mt-8">
        <Link
          href="/pricing"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-surface px-6 py-2.5 text-sm font-semibold text-navy shadow-[0_2px_10px_rgba(21,36,71,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-cyan-soft/40 sm:w-auto"
        >
          Compare All Plans
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
