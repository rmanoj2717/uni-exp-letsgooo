import { Container } from "@/components/ui/Container";
import { ProgramCard } from "@/components/pricing/ProgramCard";
import { ProgramStatement } from "@/components/pricing/ProgramStatement";
import { selfPacedPublic, selfPacedStages } from "@/lib/constants/programs";

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
          {selfPacedStages.map((stage, index) => (
            <li key={`${stage.id}-stage`} className="relative flex items-center gap-3">
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
              <span className="flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-cyan ring-4 ring-cyan/15" />
              </span>
              <span>
                <span className="block font-display text-base font-bold leading-tight text-navy">
                  {stage.name}
                </span>
                <span className="mt-0.5 block text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-navy/55">
                  {stage.stageLabel}
                </span>
              </span>
            </li>
          ))}
        </ol>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {selfPacedPublic.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              source={`programs-${program.id}`}
              className="bg-off-white/50"
            />
          ))}
        </div>

        <ProgramStatement
          title="Support grows with the student"
          body="Each program builds on the previous stage, with the level of guidance expanding as academic, profile, testing, and application needs become more complex."
          className="mt-6 md:mt-7"
        />
      </Container>
    </section>
  );
}
