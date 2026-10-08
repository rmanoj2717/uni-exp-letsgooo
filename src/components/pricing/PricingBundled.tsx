import { Container } from "@/components/ui/Container";
import { ProgramCard } from "@/components/pricing/ProgramCard";
import { ProgramStatement } from "@/components/pricing/ProgramStatement";
import { bundledPublic } from "@/lib/constants/programs";

export function PricingBundled() {
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

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {bundledPublic.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              source={`programs-${program.id}`}
              className="bg-surface"
            />
          ))}
        </div>

        <ProgramStatement
          title="Long-term guidance that evolves with the student"
          body="Bundled Programs combine regular counselling, academic and profile development, testing guidance, and admissions preparation over a longer period. The exact plan is tailored to the student's stage and goals."
          className="mt-6 border-cyan/25 bg-surface/85 md:mt-7"
        />
      </Container>
    </section>
  );
}
