import { Container } from "@/components/ui/Container";
import { compass360JourneyPhases } from "@/lib/constants/compass360";

export function Compass360Timeline() {
  return (
    <section className="py-12 md:py-14">
      <Container>
        <header className="max-w-2xl">
          <p className="eyebrow text-navy-light">Indicative timeline</p>
          <h2 className="mt-3 font-display text-balance text-2xl font-bold leading-tight text-navy md:text-3xl">
            The Compass360 journey, in five phases
          </h2>
          <p className="mt-4 leading-relaxed text-muted md:text-lg">
            The core Compass360 journey is designed to run over approximately two weeks.
          </p>
          <div className="mt-6 h-1 w-12 rounded-full bg-cyan" aria-hidden />
        </header>

        <ol className="mt-10 grid md:grid-cols-5">
          {compass360JourneyPhases.map((phase, index) => {
            const isLast = index === compass360JourneyPhases.length - 1;

            return (
              <li key={phase.phase} className="flex gap-4 md:block">
                <div className="flex flex-col items-center md:hidden" aria-hidden>
                  <PhaseNode isLast={isLast} />
                  {!isLast && <span className="mt-1.5 w-px flex-1 bg-border" />}
                </div>

                <div className="hidden items-center md:flex" aria-hidden>
                  <PhaseNode isLast={isLast} />
                  {!isLast && <span className="h-px flex-1 bg-border" />}
                </div>

                <div className={`md:pr-6 md:pt-4 ${isLast ? "" : "pb-8 md:pb-0"}`}>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-navy-light">
                    {phase.days}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold uppercase tracking-[0.06em] text-navy">
                    {phase.phase}
                  </h3>
                  <ul className="mt-2.5 space-y-1">
                    {phase.steps.map((step) => (
                      <li key={step} className="text-sm leading-relaxed text-muted">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-9 max-w-3xl text-sm leading-relaxed text-muted">
          Timing is indicative and may vary with student availability, assessment completion, and
          profile complexity.
        </p>
      </Container>
    </section>
  );
}

function PhaseNode({ isLast }: { isLast: boolean }) {
  return (
    <span
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
        isLast ? "border-orange bg-orange" : "border-cyan bg-surface"
      }`}
    />
  );
}
