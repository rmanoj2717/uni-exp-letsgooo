import { Container } from "@/components/ui/Container";
import { FocusList, InteractionStats } from "@/components/pricing/ProgramStats";
import { bundledProgramSupport, bundledPrograms, formatINR } from "@/lib/constants/pricing";

export function PricingBundled() {
  const [shared] = bundledPrograms;

  return (
    <section
      id="bundled"
      className="scroll-mt-24 bg-cyan-soft/50 py-12 pathway-bg md:scroll-mt-28 md:py-16"
    >
      <Container>
        <header className="mb-7 max-w-2xl md:mb-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Bundled Programs
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            Longer-term guidance for students who want continuous academic, profile, test, and
            admissions planning over multiple years.
          </p>
          <div className="mt-5 h-1 w-12 rounded-full bg-cyan" aria-hidden />
        </header>

        <div className="rounded-2xl border border-cyan/20 bg-surface/80 p-5 md:p-6">
          <h3 className="font-display text-base font-bold text-navy md:text-lg">
            Every Bundled Program includes, per year
          </h3>
          <InteractionStats
            counsellor={shared.counsellorInteractionsPerYear}
            mentor={shared.mentorInteractionsPerYear}
            testPrep={shared.testPrepInteractionsPerYear}
            labels="full"
            className="mt-4"
          />
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {bundledPrograms.map((program) => (
            <article
              key={program.id}
              className="flex h-full flex-col rounded-2xl border border-border/70 bg-surface p-5 shadow-[0_1px_2px_rgba(21,36,71,0.03)] md:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-bold leading-none text-navy">
                  {program.name}
                </h3>
                <span className="shrink-0 rounded-full bg-cyan-soft px-2.5 py-1 font-display text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-navy ring-1 ring-cyan/25">
                  {program.duration}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium leading-snug text-navy-light">
                {program.tagline}
              </p>
              <p className="mt-3 font-display text-[1.75rem] font-bold leading-none tracking-tight text-navy tabular-nums md:text-3xl">
                {formatINR(program.price)}
              </p>

              <dl className="mt-4 rounded-lg bg-off-white/70 px-3 py-2 ring-1 ring-border/50">
                <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-navy/55">
                  Ideal for
                </dt>
                <dd className="mt-0.5 text-sm font-semibold leading-snug text-navy">
                  {program.idealFor}
                </dd>
              </dl>

              <div className="mt-5 flex-1 border-t border-border/60 pt-4">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-navy/60">
                  Key areas
                </p>
                <FocusList items={program.keyAreas} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-cyan/20 bg-surface/80 p-5 md:mt-7 md:p-6">
          <h3 className="font-display text-lg font-bold text-navy">
            Included across Bundled Programs
          </h3>
          <ul className="mt-4 grid gap-x-8 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
            {bundledProgramSupport.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-snug text-muted">
                <span className="mt-[0.1rem] shrink-0 text-cyan" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
