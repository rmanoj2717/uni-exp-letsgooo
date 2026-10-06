import Link from "next/link";

import { CtaButton } from "@/components/cta/CtaButton";
import { PathwayLines } from "@/components/decorative/PathwayLines";
import { Container } from "@/components/ui/Container";
import { compass360Disclaimer } from "@/lib/constants/compass360";

export function Compass360Close() {
  return (
    <>
      <section className="bg-off-white pathway-bg py-12 md:py-14">
        <Container>
          <header className="max-w-2xl">
            <p className="eyebrow text-navy-light">The Compass360 difference</p>
            <h2 className="mt-3 font-display text-balance text-2xl font-bold leading-tight text-navy md:text-3xl">
              We start with the student, not the university
            </h2>
            <div className="mt-6 h-1 w-12 rounded-full bg-cyan" aria-hidden />
          </header>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-6">
            <article className="rounded-2xl border border-border/70 bg-surface p-5 md:p-7">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-navy-light">
                Traditional counselling often begins with
              </p>
              <blockquote className="mt-3 font-display text-lg font-semibold leading-snug text-navy md:text-xl">
                “Which university should I apply to?”
              </blockquote>
            </article>

            <article className="rounded-2xl border border-cyan/25 bg-cyan-soft/60 p-5 md:p-7">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-navy-light">
                Compass360 begins more broadly
              </p>
              <blockquote className="mt-3 font-display text-lg font-semibold leading-snug text-navy md:text-xl">
                “Who are you? What could you become? What should you study? Where could you thrive?
                What do you need to develop? And what should you do next?”
              </blockquote>
            </article>
          </div>

          <div className="mt-10 grid gap-8 border-t border-border/60 pt-9 lg:grid-cols-2 lg:gap-14">
            <div>
              <h3 className="font-display text-lg font-bold text-navy">
                A partnership with the family
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Parents provide context. Students provide the voice. Counsellors provide the
                perspective.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-navy">Post-program support</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                After the report is delivered, families have a defined period to clarify the
                recommendations and Individual Development Plan. Additional live counselling is not
                included. Students who want ongoing support can continue with UniEXP Global&apos;s{" "}
                <Link
                  href="/services"
                  className="font-semibold text-navy underline decoration-cyan/50 decoration-2 underline-offset-2 transition-colors hover:text-navy-light"
                >
                  longer-term counselling services
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-14 md:py-16">
        <PathwayLines className="text-white opacity-20" />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(45,184,232,0.15),transparent_55%)]"
          aria-hidden
        />
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-10 text-center backdrop-blur-sm sm:px-10 sm:py-12">
            <h2 className="font-display text-balance text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
              Talk to us about Compass360
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/80">
              Your future does not have to be completely decided today. But understanding yourself
              today can help you make much better decisions tomorrow.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton source="compass360-bottom" size="lg" />
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-xs leading-relaxed text-white/60">
            {compass360Disclaimer}
          </p>
        </Container>
      </section>
    </>
  );
}
