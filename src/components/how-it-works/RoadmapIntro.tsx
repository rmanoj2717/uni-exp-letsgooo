import {
  admissionsJourneyPhases,
  journeyStepCount,
} from "@/lib/constants/how-it-works-journey";

export function RoadmapIntro() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-surface via-surface to-cyan-soft/25 py-10 md:py-12 lg:py-14">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_100%_0%,rgba(45,184,232,0.06),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/70 to-transparent"
        aria-hidden
      />
      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
        <div className="max-w-lg">
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-[1.75rem] md:text-3xl">
            4 phases. {journeyStepCount} guided steps.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            A structured admissions roadmap from first conversation to campus arrival, built to
            help families understand what happens now, what comes next, and what needs attention
            before each deadline.
          </p>
        </div>

        <nav className="relative px-1 sm:px-2" aria-label="Admissions roadmap overview">
          <div
            className="absolute left-[12%] right-[12%] top-5 hidden h-px bg-gradient-to-r from-transparent via-cyan/55 to-transparent sm:block"
            aria-hidden
          />
          <div
            className="absolute left-[12%] right-[12%] top-5 hidden h-[10px] bg-[radial-gradient(ellipse_60%_120%_at_50%_0%,rgba(45,184,232,0.22),transparent_70%)] sm:block"
            aria-hidden
          />
          <ol className="grid grid-cols-2 gap-x-4 gap-y-8 sm:flex sm:justify-between sm:gap-2">
            {admissionsJourneyPhases.map((phase) => (
              <li key={phase.id} className="relative flex min-w-0 flex-1 flex-col items-center sm:px-1">
                <a href={`#${phase.id}`} className="group flex w-full flex-col items-center text-center">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-cyan/45 bg-surface font-display text-xs font-bold text-cyan shadow-[0_6px_20px_rgba(21,36,71,0.10)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-cyan group-hover:shadow-[0_10px_28px_rgba(45,184,232,0.22)]">
                    {String(phase.phase).padStart(2, "0")}
                  </span>
                  <span className="mt-3 max-w-[8.5rem] font-display text-xs font-semibold leading-snug text-navy transition-colors group-hover:text-cyan sm:text-sm">
                    {phase.title}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
