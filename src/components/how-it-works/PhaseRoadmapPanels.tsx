import { admissionsJourneyPhases } from "@/lib/constants/how-it-works-journey";
import type { AdmissionsJourneyPhase, AdmissionsJourneyStep } from "@/types";
import { cn } from "@/lib/utils/cn";

const panelClasses =
  "scroll-mt-28 relative overflow-hidden rounded-2xl border border-border/45 bg-gradient-to-br from-cyan-soft/22 via-surface to-off-white/80 p-5 shadow-[0_8px_30px_rgba(21,36,71,0.06)] sm:p-6 md:p-8 lg:rounded-3xl";

const stepCardClasses =
  "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/45 bg-surface/90 p-4 shadow-[0_6px_22px_rgba(21,36,71,0.06)] ring-1 ring-inset ring-cyan/10 transition-all duration-200 before:absolute before:left-0 before:top-0 before:h-[2px] before:w-full before:bg-gradient-to-r before:from-cyan/50 before:via-cyan/20 before:to-transparent hover:-translate-y-0.5 hover:border-cyan/20 hover:shadow-[0_12px_32px_rgba(21,36,71,0.10)] sm:p-5";

function StepMilestoneCard({ step }: { step: AdmissionsJourneyStep }) {
  return (
    <article className={stepCardClasses}>
      <span className="absolute right-4 top-4 sm:right-5 sm:top-5">
        <span
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan/25 bg-cyan/10 font-display text-[0.6875rem] font-bold tabular-nums text-cyan shadow-[0_1px_8px_rgba(21,36,71,0.08)]"
          aria-label={`Step ${step.step}`}
        >
          {String(step.step).padStart(2, "0")}
        </span>
      </span>
      <h3 className="mt-2 font-display text-base font-semibold leading-snug text-navy">
        {step.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{step.description}</p>
      <p className="mt-3 text-[0.6875rem] font-medium tracking-wide text-cyan/80">{step.tag}</p>
    </article>
  );
}

function phaseGridClass(stepCount: number): string {
  if (stepCount === 3) {
    return "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5";
  }
  return "grid gap-4 sm:grid-cols-2 lg:gap-5";
}

function PhasePanel({ phase }: { phase: AdmissionsJourneyPhase }) {
  const stepLabel =
    phase.steps.length === 1 ? "1 guided step" : `${phase.steps.length} guided steps`;

  return (
    <section id={phase.id} className={panelClasses}>
      <div className="border-b border-border/40 pb-5 md:pb-6">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan/25 bg-surface/80 font-display text-xs font-bold text-navy shadow-[0_2px_12px_rgba(21,36,71,0.08)]"
            aria-hidden
          >
            {phase.phase}
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
              <p className="font-semibold uppercase tracking-[0.12em] text-cyan">
                Phase {phase.phase}
              </p>
              <span className="text-muted">·</span>
              <p className="font-medium text-muted">{stepLabel}</p>
            </div>
            <div className="mt-2 h-0.5 w-16 rounded-full bg-cyan/70" aria-hidden />
          </div>
        </div>
        <h2 className="mt-4 font-display text-xl font-bold tracking-tight text-navy sm:text-2xl md:text-[1.75rem]">
          {phase.title}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted md:text-[0.9375rem]">
          {phase.description}
        </p>
      </div>

      <ol className={cn("mt-5 md:mt-6", phaseGridClass(phase.steps.length))}>
        {phase.steps.map((step) => (
          <li key={step.step}>
            <StepMilestoneCard step={step} />
          </li>
        ))}
      </ol>
    </section>
  );
}

export function PhaseRoadmapPanels() {
  return (
    <div className="space-y-6 py-10 md:space-y-8 md:py-12 lg:space-y-10">
      {admissionsJourneyPhases.map((phase) => (
        <PhasePanel key={phase.id} phase={phase} />
      ))}
    </div>
  );
}
