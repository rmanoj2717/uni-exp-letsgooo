import { Container } from "@/components/ui/Container";
import {
  compass360Deliverables,
  compass360DevelopmentAreas,
  compass360IdpChain,
  compass360Outputs,
  compass360ReportContents,
} from "@/lib/constants/compass360";

const listLabel = "font-display text-xs font-bold uppercase tracking-[0.12em] text-navy-light";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" aria-hidden />
          <span className="text-sm leading-relaxed text-navy">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Compass360PlanDeliverables() {
  return (
    <section className="bg-off-white pathway-bg py-12 md:py-14">
      <Container>
        <header className="max-w-3xl">
          <p className="eyebrow text-navy-light">The plan and what you receive</p>
          <h2 className="mt-3 font-display text-balance text-2xl font-bold leading-tight text-navy md:text-3xl">
            You leave with a plan, not just assessment results.
          </h2>
          <div className="mt-6 h-1 w-12 rounded-full bg-cyan" aria-hidden />
        </header>

        <div className="mt-8 rounded-2xl border border-cyan/25 bg-cyan-soft px-5 py-5 md:px-8 md:py-6">
          <p className={listLabel}>How an Individual Development Plan is built</p>
          <ol className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-0">
            {compass360IdpChain.map((step, index) => (
              <li
                key={step}
                className={`relative flex min-w-0 flex-1 flex-col lg:block ${
                  index > 0 ? "lg:pl-8" : ""
                }`}
              >
                {index > 0 && (
                  <span
                    className="mb-1.5 font-display text-lg leading-none text-cyan lg:absolute lg:left-2 lg:top-4 lg:mb-0"
                    aria-hidden
                  >
                    <span className="lg:hidden">↓</span>
                    <span className="hidden lg:inline">→</span>
                  </span>
                )}
                <div className="min-w-0">
                  <span
                    className="font-display text-xs font-bold tabular-nums tracking-[0.08em] text-cyan"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 font-display text-sm font-bold uppercase leading-snug tracking-[0.06em] text-navy md:text-[0.9375rem]">
                    {step}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-6 max-w-3xl leading-relaxed text-muted">
          The Individual Development Plan is tailored to the student. It identifies what to work on,
          what to do next, and a suggested timeframe. Examples are indicative. Priorities and
          timelines vary by student.
        </p>

        <ul className="mt-6 grid max-w-4xl overflow-hidden rounded-2xl bg-surface sm:grid-cols-2">
          {compass360DevelopmentAreas.map((item, index) => {
            const last = index === compass360DevelopmentAreas.length - 1;
            const lastRow = index >= compass360DevelopmentAreas.length - 2;
            const tintedRow = index === 2 || index === 3;

            return (
              <li
                key={item.area}
                className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border/80 px-5 py-3.5 md:px-6 ${
                  last ? "border-b-0" : ""
                } ${lastRow ? "sm:border-b-0" : ""} ${tintedRow ? "sm:bg-cyan-soft/40" : ""}`}
              >
                <span className="font-display text-[0.9375rem] font-bold text-navy">
                  {item.area}
                </span>
                <span className="text-[0.8125rem] leading-snug text-muted">{item.timeline}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-12">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            What you leave with
          </h3>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border/70 bg-surface">
            <ol className="grid gap-0 lg:grid-cols-3">
              {compass360Outputs.map((output, index) => (
                <li
                  key={output.title}
                  className={`relative px-5 py-5 md:px-7 md:py-6 ${
                    index > 0
                      ? "border-t border-border/70 lg:border-t-0 lg:border-l lg:border-border/70"
                      : ""
                  }`}
                >
                  <div className="border-t-2 border-cyan pt-4">
                    <span
                      className="font-display text-xl font-bold tabular-nums leading-none text-cyan md:text-2xl"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mt-2 font-display text-lg font-bold leading-snug text-navy md:text-xl">
                      {output.title}
                    </h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{output.summary}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="border-t border-border/70 bg-surface px-5 py-6 md:px-7 md:py-7">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-0">
                <div className="border-b border-border/70 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
                  <h4 className={listLabel}>Included in Compass360</h4>
                  <BulletList items={compass360Deliverables} />
                </div>
                <div className="lg:pl-10">
                  <h4 className={listLabel}>Your report brings together</h4>
                  <BulletList items={compass360ReportContents} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
