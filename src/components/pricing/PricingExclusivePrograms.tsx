import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Score360PricingTable } from "@/components/test-prep/Score360PricingTable";
import { compass360Pricing, formatINR } from "@/lib/constants/pricing";
import {
  score360Name,
  score360ShortDescription,
  score360SmallGroupNote,
  score360Tagline,
} from "@/lib/constants/score360";

const ctaClass =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-surface px-6 py-2.5 text-sm font-semibold text-navy shadow-[0_2px_12px_rgba(21,36,71,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-cyan-soft/40";

const metaLabel = "text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-navy/55";

export function PricingExclusivePrograms() {
  return (
    <section
      id="exclusive-programs"
      className="scroll-mt-24 bg-surface py-12 md:scroll-mt-28 md:py-16"
    >
      <Container>
        <header className="mb-7 max-w-2xl md:mb-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Exclusive Programs
          </h2>
          <div className="mt-5 h-1 w-12 rounded-full bg-cyan" aria-hidden />
        </header>

        <div className="grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-6">
          <article className="rounded-2xl border border-cyan/20 bg-cyan-soft/40 p-5 md:p-6">
            <h3 className="font-display text-2xl font-bold leading-none text-navy">
              {compass360Pricing.name}
            </h3>
            <p className="mt-2 font-display text-base font-semibold leading-snug text-navy-light">
              {compass360Pricing.tagline}
            </p>
            <p className="mt-3 leading-relaxed text-muted">{compass360Pricing.description}</p>

            <dl className="mt-5 divide-y divide-cyan/15 overflow-hidden rounded-xl bg-surface/80 ring-1 ring-cyan/15">
              {[
                { label: "Duration", value: compass360Pricing.duration },
                {
                  label: "Live interactions",
                  value: String(compass360Pricing.liveInteractions),
                },
                { label: "Ideal for", value: compass360Pricing.idealFor },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 px-4 py-3"
                >
                  <dt className={metaLabel}>{row.label}</dt>
                  <dd className="text-sm font-semibold leading-snug text-navy tabular-nums">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex flex-col gap-4 rounded-xl bg-surface/80 p-4 ring-1 ring-cyan/20 md:p-5 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="whitespace-nowrap font-display text-[1.75rem] font-bold leading-none tracking-tight text-navy tabular-nums md:text-3xl">
                  {formatINR(compass360Pricing.priceExGst)} + GST
                </p>
                <p className="mt-1.5 text-sm text-muted">
                  {formatINR(compass360Pricing.priceInclGst)} including GST
                </p>
              </div>
              <Link href={compass360Pricing.href} className={`${ctaClass} shrink-0 self-start`}>
                Explore Compass360
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>

          <article className="rounded-2xl border border-border/70 bg-off-white/60 p-5 md:p-6">
            <h3 className="font-display text-2xl font-bold leading-none text-navy">
              {score360Name}
            </h3>
            <p className="mt-2 font-display text-base font-semibold leading-snug text-navy-light">
              {score360Tagline}
            </p>
            <p className="mt-3 leading-relaxed text-muted">{score360ShortDescription}</p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-semibold text-navy ring-1 ring-border/60">
                1:1 preparation
              </span>
              <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm font-semibold text-navy ring-1 ring-border/60">
                Small group preparation
              </span>
              <span className="text-xs text-muted">{score360SmallGroupNote}</span>
            </div>

            <div className="mt-5">
              <Score360PricingTable variant="simple" />
            </div>

            <div className="mt-5">
              <Link href="/test-prep/" className={ctaClass}>
                View Test Preparation
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
