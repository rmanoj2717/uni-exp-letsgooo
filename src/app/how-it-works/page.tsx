import type { Metadata } from "next";
import { CtaButton } from "@/components/cta/CtaButton";
import { PageCtaBand } from "@/components/sections/PageCtaBand";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { processSteps, universityPlanning } from "@/lib/constants/process-steps";
import { cn } from "@/lib/utils/cn";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Our profile-led, data-driven admissions process — from discovery to departure with Reach, Match, and Safety planning.",
};

const familyBenefits = [
  {
    title: "Clear next steps",
    description: "Know exactly what to focus on each month.",
  },
  {
    title: "Better shortlisting",
    description: "Reach, match, and safety options built around fit.",
  },
  {
    title: "Stronger applications",
    description: "Essays, documents, and submissions reviewed with care.",
  },
  {
    title: "Parent confidence",
    description: "Transparent updates so families understand the path ahead.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How it works"
        subtitle="A structured, transparent journey — so students and parents always know what comes next."
      />

      <section className="section-pad">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">
            <div className="relative min-w-0 lg:col-span-8">
              <div
                className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-cyan/40 via-border to-cyan/20 md:left-5"
                aria-hidden
              />
              <ol className="space-y-6 md:space-y-8">
                {processSteps.map((step, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <li key={step.id} className="relative flex gap-5 md:gap-8">
                      <div
                        className={cn(
                          "relative z-10 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white shadow-[0_4px_14px_rgba(21,36,71,0.12)] md:mt-2 md:h-11 md:w-11 md:text-base",
                          isEven ? "bg-cyan" : "bg-orange",
                        )}
                      >
                        {step.step}
                      </div>
                      <article
                        className={cn(
                          "min-w-0 flex-1 rounded-2xl border p-5 shadow-[0_4px_24px_rgba(21,36,71,0.04)] md:rounded-3xl md:p-6",
                          isEven
                            ? "border-cyan/15 bg-cyan-soft/60"
                            : "border-border/70 bg-off-white",
                        )}
                      >
                        <div
                          className={cn(
                            "mb-3 h-0.5 w-10 rounded-full",
                            isEven ? "bg-cyan" : "bg-orange",
                          )}
                          aria-hidden
                        />
                        <h2 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
                          {step.title}
                        </h2>
                        <p className="mt-3 text-pretty text-base leading-relaxed text-muted">
                          {step.description}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {step.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className={cn(
                                "rounded-full border px-3 py-1 text-xs font-medium sm:text-sm",
                                isEven
                                  ? "border-cyan/20 bg-surface/80 text-navy/85"
                                  : "border-orange/15 bg-surface text-navy/85",
                              )}
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </li>
                  );
                })}
              </ol>
            </div>

            <aside className="min-w-0 lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-cyan/15 bg-gradient-to-br from-cyan-soft/90 via-off-white to-surface p-6 shadow-[0_8px_32px_rgba(21,36,71,0.07)] md:rounded-3xl md:p-7">
                <div className="mb-4 h-0.5 w-10 rounded-full bg-cyan" aria-hidden />
                <h2 className="font-display text-xl font-bold leading-snug text-navy md:text-[1.35rem]">
                  What families get at every stage
                </h2>
                <ul className="mt-6 space-y-5">
                  {familyBenefits.map((benefit, index) => (
                    <li key={benefit.title} className="flex gap-3">
                      <span
                        className={cn(
                          "mt-2 h-2 w-2 shrink-0 rounded-full",
                          index % 2 === 0 ? "bg-cyan" : "bg-orange",
                        )}
                        aria-hidden
                      />
                      <div>
                        <h3 className="font-semibold text-navy">{benefit.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {benefit.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-y border-border/60 bg-cyan-soft/40 py-12 md:py-14">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-balance text-2xl font-bold text-navy md:text-3xl">
              Ready to understand your student&apos;s next step?
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted">
              Start with a profile assessment and a clear conversation about goals, countries,
              timelines, and application priorities.
            </p>
            <div className="mt-7 flex justify-center">
              <CtaButton source="how-it-works-timeline" size="lg" label="Book a Free Consultation" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-off-white section-pad pathway-bg">
        <Container>
          <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
            Reach, Match & Safety planning
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Every shortlist is balanced — ambitious targets, strong fits, and reliable options.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {universityPlanning.map((item) => (
              <Card key={item.label} accent="cyan">
                <h3 className="font-display text-xl font-bold text-navy">{item.label}</h3>
                <p className="mt-2 text-muted leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <PageCtaBand source="how-it-works" />
    </>
  );
}
