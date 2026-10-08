import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FocusAreas } from "@/components/pricing/ProgramCard";
import { compass360Public, score360Public } from "@/lib/constants/programs";

const ctaClass =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-surface px-6 py-2.5 text-sm font-semibold text-navy shadow-[0_2px_12px_rgba(21,36,71,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-cyan-soft/40";

const label = "text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-navy/60";

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

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <article className="flex flex-col rounded-2xl border border-cyan/20 bg-cyan-soft/40 p-5 md:p-7">
            <h3 className="font-display text-2xl font-bold leading-none text-navy md:text-[1.75rem]">
              {compass360Public.name}
            </h3>
            <p className="mt-2 font-display text-base font-semibold leading-snug text-navy-light">
              {compass360Public.tagline}
            </p>
            <p className="mt-3 leading-relaxed text-muted">{compass360Public.description}</p>

            <div className="mt-5 border-t border-cyan/20 pt-4">
              <p className={label}>Focus areas</p>
              <FocusAreas items={compass360Public.focus} />
            </div>

            <div className="mt-auto pt-6">
              <Link href={compass360Public.href} className={ctaClass}>
                Explore Compass360
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>

          <article className="flex flex-col rounded-2xl border border-border/70 bg-off-white/60 p-5 md:p-7">
            <h3 className="font-display text-2xl font-bold leading-none text-navy md:text-[1.75rem]">
              {score360Public.name}
            </h3>
            <p className="mt-2 font-display text-base font-semibold leading-snug text-navy-light">
              {score360Public.tagline}
            </p>
            <p className="mt-3 leading-relaxed text-muted">{score360Public.description}</p>

            <p className="mt-4 font-display text-sm font-bold tracking-[0.06em] text-navy">
              {score360Public.tests}
            </p>

            <div className="mt-4 border-t border-border/60 pt-4">
              <p className={label}>Focus areas</p>
              <FocusAreas items={score360Public.focus} />
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:gap-5">
              <Link href={score360Public.href} className={`${ctaClass} self-start`}>
                Explore Test Preparation
                <span aria-hidden>→</span>
              </Link>
              <p className="text-xs text-muted">{score360Public.formatNote}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
