import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    title: "Student Profile",
    description:
      "Academics, activities, goals, and personal story — the foundation of every decision.",
  },
  {
    title: "Admissions Data",
    description:
      "Acceptance trends, program fit, and outcomes — so choices are informed, not guessed.",
  },
  {
    title: "Counsellor Insight",
    description:
      "Experienced guidance that translates data into a strategy your family can trust.",
  },
];

const shortlistTiers = [
  { label: "Reach", hint: "Ambitious targets with strong preparation" },
  { label: "Match", hint: "Solid alignment with typical admits" },
  { label: "Safety", hint: "Reliable options that protect your timeline" },
] as const;

const familyPriorities = ["Budget", "Country fit", "Career goals"] as const;

const familyOutcomes = [
  "Clearer decisions",
  "Fewer rushed applications",
  "A shortlist built around fit, budget, and goals",
] as const;

function BestFitStrategyPreview() {
  return (
    <aside className="flex h-full flex-col rounded-2xl border border-border/70 bg-surface p-5 shadow-[0_8px_32px_rgba(21,36,71,0.07)] md:rounded-3xl md:p-6 lg:sticky lg:top-24">
      <div className="mb-3 h-0.5 w-10 rounded-full bg-cyan" aria-hidden />
      <h3 className="font-display text-xl font-bold text-navy md:text-[1.35rem]">
        Admissions Roadmap Preview
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Built around profile, goals, budget, and long-term outcomes.
      </p>

      <div className="mt-5">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-cyan">
          Balanced shortlist
        </p>
        <ul className="mt-2.5 space-y-1.5">
          {shortlistTiers.map((tier) => (
            <li
              key={tier.label}
              className="rounded-xl border border-cyan/15 bg-cyan-soft/40 px-3 py-2"
            >
              <p className="text-sm font-semibold text-navy">{tier.label}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted">{tier.hint}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 border-t border-border/50 pt-4">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-cyan">
          Family priorities
        </p>
        <ul className="mt-2.5 space-y-1.5">
          {familyPriorities.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-navy">
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-xs font-bold text-cyan"
                aria-hidden
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted italic">
        Recommendations are guided by fit, not commissions.
      </p>

      <Link
        href="/how-it-works"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan transition-colors hover:text-navy"
      >
        See our process
        <span aria-hidden>→</span>
      </Link>
    </aside>
  );
}

export function StrategyFormula() {
  return (
    <section className="section-pad bg-off-white pathway-bg">
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-w-0 flex-col">
            <p className="eyebrow mb-3 text-cyan">Our approach</p>
            <h2 className="font-display text-balance text-3xl font-bold leading-tight tracking-tight text-navy md:text-4xl">
              How we build your best-fit strategy
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Student Profile + Admissions Data + Counsellor Insight = A plan your family
              can trust
            </p>
            <div className="mt-6 h-1 w-12 rounded-full bg-cyan" aria-hidden />

            <div className="mt-8 flex flex-wrap items-center gap-2 font-display text-sm font-semibold text-navy sm:text-base">
              <span className="rounded-xl bg-surface px-4 py-2.5 shadow-[var(--shadow-card)] ring-1 ring-border/50">
                Student Profile
              </span>
              <span className="px-1 text-cyan">+</span>
              <span className="rounded-xl bg-surface px-4 py-2.5 shadow-[var(--shadow-card)] ring-1 ring-border/50">
                Admissions Data
              </span>
              <span className="px-1 text-cyan">+</span>
              <span className="rounded-xl bg-surface px-4 py-2.5 shadow-[var(--shadow-card)] ring-1 ring-border/50">
                Counsellor Insight
              </span>
              <span className="px-1 text-cyan">=</span>
              <span className="rounded-xl bg-navy px-4 py-2.5 text-white shadow-[var(--shadow-card)]">
                Clear Admissions Roadmap
              </span>
            </div>

            <div className="mt-8 flex-1 rounded-2xl border border-cyan/15 bg-cyan-soft/35 p-5 md:mt-10 md:p-6">
              <h3 className="font-display text-lg font-bold text-navy">
                What this means for families
              </h3>
              <ul className="mt-3 space-y-2.5">
                {familyOutcomes.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-xs font-bold text-cyan"
                      aria-hidden
                    >
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <BestFitStrategyPreview />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8 lg:mt-14">
          {pillars.map((pillar, i) => (
            <Card key={pillar.title} accent="cyan" className={`animate-fade-up stagger-${i + 1}`}>
              <span className="font-display text-4xl font-bold text-cyan/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-navy">{pillar.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
