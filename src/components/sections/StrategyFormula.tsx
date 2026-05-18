import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

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

export function StrategyFormula() {
  return (
    <Section
      eyebrow="Our approach"
      title="How we build your best-fit strategy"
      subtitle="Student Profile + Admissions Data + Counsellor Insight = Best-Fit University Strategy"
      variant="off-white"
    >
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2 text-center font-display text-sm font-semibold text-navy sm:text-base">
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
          Best-Fit Strategy
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
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
    </Section>
  );
}
