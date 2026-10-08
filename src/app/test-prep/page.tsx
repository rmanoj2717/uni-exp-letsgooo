import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Score360AtAGlance } from "@/components/test-prep/Score360AtAGlance";
import { Score360Method } from "@/components/test-prep/Score360Method";
import { Score360Support } from "@/components/test-prep/Score360Support";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/cta/CtaButton";
import { testPrepOverviewLine } from "@/lib/constants/test-prep";
import {
  score360Name,
  score360PageDescription,
  score360Tagline,
  score360TestNames,
} from "@/lib/constants/score360";
import { assetPath } from "@/lib/utils/asset-path";

export const metadata: Metadata = {
  title: "Test Prep",
  description:
    "Score360 is UniEXP Global's test-preparation program for SAT, ACT, GRE, GMAT, IELTS, and TOEFL, with 1:1 and small-group options.",
};

const TEST_PREP_IMAGE = assetPath("/images/focused_study_session_in_a_modern_workspace.png");

export default function TestPrepPage() {
  return (
    <>
      <PageHeader title="Test preparation support" subtitle={testPrepOverviewLine} />

      <section className="py-12 md:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-start lg:gap-12">
            <div>
              <p className="eyebrow text-navy-light">{score360Name}</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy md:text-3xl">
                {score360Tagline}
              </h2>
              <p className="mt-4 leading-relaxed text-muted md:text-lg">
                {score360PageDescription}
              </p>
              <div className="mt-6 h-1 w-12 rounded-full bg-cyan" aria-hidden />
            </div>

            <div className="relative mx-auto aspect-[4/5] max-h-[min(420px,60vh)] w-full max-w-md overflow-hidden rounded-2xl border border-border/70 shadow-[0_12px_40px_rgba(21,36,71,0.1)] md:rounded-3xl lg:max-w-none">
              <Image
                src={TEST_PREP_IMAGE}
                alt="Student studying for admissions tests in a modern academic workspace"
                fill
                className="object-cover object-[center_42%]"
                sizes="(max-width: 1024px) 100vw, 36vw"
                priority
              />
            </div>
          </div>

          <div className="mt-8 md:mt-10">
            <Score360AtAGlance />
          </div>

          <div className="mt-10 md:mt-12">
            <Score360Method />
          </div>

          <div className="mt-10 rounded-2xl border border-cyan/15 bg-cyan-soft/30 p-5 md:mt-12 md:p-7">
            <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
              Tests supported
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
              We help determine which test is relevant before preparation begins.
            </p>
            <ul className="mt-5 grid grid-cols-3 gap-2.5 sm:grid-cols-6 md:gap-3">
              {score360TestNames.map((test) => (
                <li
                  key={test}
                  className="rounded-xl bg-surface py-3.5 text-center font-display text-lg font-bold tracking-wide text-navy ring-1 ring-cyan/20 md:py-4 md:text-xl"
                >
                  {test}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-4 border-t border-cyan/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium text-navy md:text-base">
                1:1 preparation and small-group options are available.
              </p>
              <CtaButton
                source="test-prep-format"
                label="Talk to a Counsellor"
                variant="outline"
                className="w-full shrink-0 sm:w-auto"
              />
            </div>
          </div>

          <div className="mt-10 md:mt-12">
            <Score360Support />
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
                  Try five sample questions, then speak with a counsellor about the tests and
                  preparation your applications may require.
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
              We will help you understand test requirements, timelines, target scores, and where
              testing fits into the wider application plan.
            </p>
            <div className="mt-7 flex justify-center">
              <CtaButton source="test-prep-plan" size="lg" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
