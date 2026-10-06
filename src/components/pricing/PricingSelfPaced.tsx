import { Container } from "@/components/ui/Container";
import { FocusList, InteractionStats, MetaCell } from "@/components/pricing/ProgramStats";
import { formatINR, selfPacedPrograms } from "@/lib/constants/pricing";

const INHERITED_PREFIX = "Everything included in";

export function PricingSelfPaced() {
  return (
    <section id="self-paced" className="scroll-mt-24 bg-surface py-12 md:scroll-mt-28 md:py-16">
      <Container>
        <header className="mb-7 max-w-2xl md:mb-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Self-paced Programs
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            Focused programs with defined timelines, live counsellor and mentor interactions, and
            specific development goals.
          </p>
          <div className="mt-5 h-1 w-12 rounded-full bg-cyan" aria-hidden />
        </header>

        <ol className="mb-7 grid gap-4 sm:grid-cols-3 sm:gap-8 md:mb-8">
          {selfPacedPrograms.map((program, index) => (
            <li key={`${program.id}-stage`} className="relative flex items-center gap-3">
              {index > 0 && (
                <>
                  <span
                    className="absolute -top-4 left-3 h-4 w-px bg-cyan/30 sm:hidden"
                    aria-hidden
                  />
                  <span
                    className="absolute -left-[1.375rem] top-1.5 hidden text-sm font-bold text-cyan/70 sm:block"
                    aria-hidden
                  >
                    →
                  </span>
                </>
              )}
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan font-display text-[0.6875rem] font-bold tabular-nums text-white"
                aria-hidden
              >
                {index + 1}
              </span>
              <span>
                <span className="block font-display text-base font-bold leading-tight text-navy">
                  {program.name}
                </span>
                <span className="mt-0.5 block text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-navy/55">
                  {program.stageLabel}
                </span>
              </span>
            </li>
          ))}
        </ol>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {selfPacedPrograms.map((program, index) => {
            const inherited = program.keyFocus.find((item) =>
              item.startsWith(INHERITED_PREFIX),
            );
            const focusItems = program.keyFocus.filter((item) => item !== inherited);

            return (
              <article
                key={program.id}
                className="flex h-full flex-col rounded-2xl border border-border/70 bg-off-white/50 p-5 shadow-[0_1px_2px_rgba(21,36,71,0.03)] md:p-6"
              >
                <div className="flex items-baseline gap-2.5">
                  <span
                    className="font-display text-sm font-bold tabular-nums text-cyan"
                    aria-hidden
                  >
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-2xl font-bold leading-none text-navy">
                    {program.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm font-medium leading-snug text-navy-light">
                  {program.tagline}
                </p>
                <p className="mt-3 font-display text-[1.75rem] font-bold leading-none tracking-tight text-navy tabular-nums md:text-3xl">
                  {formatINR(program.price)}
                </p>

                <dl className="mt-4 grid grid-cols-2 gap-2">
                  <MetaCell label="Ideal for" value={program.idealFor} className="col-span-2" />
                  <MetaCell label="Ideal" value={program.idealDuration} />
                  <MetaCell label="Max" value={program.maximumDuration} />
                </dl>

                <div className="mt-3 rounded-lg bg-surface/85 px-3 py-3 ring-1 ring-border/50">
                  <p className="text-center text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-navy/55">
                    Live interactions
                  </p>
                  <InteractionStats
                    counsellor={program.counsellorInteractions}
                    mentor={program.mentorInteractions}
                    testPrep={program.testPrepInteractions}
                    className="mt-2.5"
                  />
                </div>

                <div className="mt-5 flex-1 border-t border-border/60 pt-4">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-navy/60">
                    Key focus
                  </p>
                  {inherited && (
                    <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-cyan-soft px-3 py-1 text-xs font-semibold text-navy ring-1 ring-cyan/25">
                      <span aria-hidden>↳</span>
                      {inherited}
                    </p>
                  )}
                  <FocusList items={focusItems} />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-border/60 bg-off-white/70 p-5 md:mt-7 md:p-6">
          <h3 className="font-display text-lg font-bold text-navy">Additional support</h3>
          <ol className="mt-4 grid gap-5 md:grid-cols-3 md:gap-0">
            {selfPacedPrograms.map((program, index) => (
              <li
                key={`${program.id}-support`}
                className="relative md:px-6 md:first:pl-0 md:last:pr-0"
              >
                {index > 0 && (
                  <span
                    className="absolute left-0 top-0 hidden h-full w-px bg-cyan/20 md:block"
                    aria-hidden
                  />
                )}
                <p className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/15 font-display text-[0.625rem] font-bold tabular-nums text-navy"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  {program.additionalSupportIntro}
                </p>
                <ul className="mt-2.5 md:pl-7">
                  {program.additionalSupport.map((item) => (
                    <li
                      key={item}
                      className="mb-1.5 flex gap-2 text-sm leading-snug text-muted last:mb-0"
                    >
                      <span
                        className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-cyan"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
