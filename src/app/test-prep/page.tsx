import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TestPrepCard } from "@/components/test-prep/TestPrepCard";
import { TestingPlanSection } from "@/components/test-prep/TestingPlanSection";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/cta/CtaButton";
import { testPrepItems } from "@/lib/constants/test-prep";

export const metadata: Metadata = {
  title: "Test Prep",
  description: "SAT, ACT, IELTS, and standardized test planning aligned with your university targets.",
};

const TEST_PREP_IMAGE = "/images/test-prep-student.jpg";

export default function TestPrepPage() {
  return (
    <>
      <PageHeader
        title="Test preparation support"
        subtitle="Structured prep plans aligned with your target universities and application timeline."
      />

      <section className="py-12 md:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-start lg:gap-12">
            <div>
              <div className="max-w-2xl">
                <div className="mb-3 h-0.5 w-10 rounded-full bg-cyan" aria-hidden />
                <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
                  Tests that fit your pathway
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  We help you choose the right tests, set realistic score targets, and build a prep
                  schedule that works alongside school and applications — not against them.
                </p>
              </div>

              <div className="mt-8 space-y-5">
                {testPrepItems.map((test, index) => (
                  <TestPrepCard
                    key={test.id}
                    name={test.name}
                    whatFor={test.whatFor}
                    bestFor={test.bestFor}
                    uniexpSupport={test.uniexpSupport}
                    accent={index % 2 === 1 ? "orange" : "cyan"}
                  />
                ))}
              </div>

              <TestingPlanSection />
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="relative mx-auto aspect-[4/5] max-h-[min(520px,70vh)] w-full max-w-md overflow-hidden rounded-2xl border border-border/70 shadow-[0_12px_40px_rgba(21,36,71,0.1)] md:rounded-3xl lg:max-w-none">
                <Image
                  src={TEST_PREP_IMAGE}
                  alt="Student studying for standardized tests with laptop and textbooks in a library"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>

          <Card className="mt-12 border-cyan/20 bg-gradient-to-br from-cyan-soft/80 to-cyan-soft/30 md:mt-14">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan">
                  Interactive preview
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-navy md:text-2xl">
                  Try our sample SAT quiz
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                  Five quick questions to experience our approach — then book a consultation to
                  build your personalized test plan.
                </p>
              </div>
              <Link
                href="/sat-quiz"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(21,36,71,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-light"
              >
                Take the quiz →
              </Link>
            </div>
          </Card>
        </Container>
      </section>

      <section className="border-t border-border/60 bg-gradient-to-br from-cyan-soft/50 via-off-white to-surface py-12 md:py-14">
        <Container>
          <div className="mx-auto max-w-2xl rounded-2xl border border-cyan/15 bg-surface/90 px-6 py-10 text-center shadow-[0_8px_32px_rgba(21,36,71,0.06)] md:rounded-3xl md:px-10 md:py-12">
            <h2 className="font-display text-balance text-2xl font-bold text-navy md:text-3xl">
              Not sure which test your student needs?
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted">
              We&apos;ll help you understand test requirements, timelines, target scores, and whether
              a score can strengthen the application.
            </p>
            <div className="mt-7 flex justify-center">
              <CtaButton source="test-prep-plan" size="lg" label="Build My Test Plan" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
