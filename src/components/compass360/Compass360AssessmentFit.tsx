import { Container } from "@/components/ui/Container";
import { compass360AssessmentAreas, compass360FitGroups } from "@/lib/constants/compass360";

export function Compass360AssessmentFit() {
  return (
    <section className="py-12 md:py-14">
      <Container>
        <header className="max-w-2xl">
          <p className="eyebrow text-navy-light">Assessment &amp; fit</p>
          <h2 className="mt-3 font-display text-balance text-2xl font-bold leading-tight text-navy md:text-3xl">
            Assessments are one part of the picture
          </h2>
          <p className="mt-4 leading-relaxed text-muted md:text-lg">
            Compass360 looks at aptitude, interests, behaviour, skills, aspirations, and experience
            together. That context is then used to explore course and university fit.
          </p>
          <div className="mt-6 h-1 w-12 rounded-full bg-cyan" aria-hidden />
        </header>

        {/* Five dimensions converging on a single counsellor interpretation. */}
        <div className="mt-10">
          <h3 className="text-center font-display text-lg font-bold text-navy md:text-xl">
            Different inputs, considered together.
          </h3>

          <ul className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-5 lg:text-center">
            {compass360AssessmentAreas.map((area) => (
              <li key={area.title}>
                <h4 className="font-display text-lg font-bold leading-snug text-navy">
                  {area.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{area.detail}</p>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block" aria-hidden>
            <div className="mt-7 grid grid-cols-5">
              {compass360AssessmentAreas.map((area) => (
                <span key={area.title} className="mx-auto h-6 w-px bg-cyan/45" />
              ))}
            </div>
            <div className="mx-[10%] h-px bg-cyan/45" />
            <div className="mx-auto h-6 w-px bg-cyan/45" />
          </div>

          <div className="mx-auto mt-7 h-6 w-px bg-cyan/45 lg:hidden" aria-hidden />

          <span
            className="mx-auto block h-0 w-0 border-x-[6px] border-t-[7px] border-x-transparent border-t-cyan/60"
            aria-hidden
          />

          <p className="mx-auto mt-1 w-fit max-w-md rounded-full bg-navy px-7 py-4 text-center font-display text-base font-bold leading-snug text-white md:text-lg">
            Reviewed together with your counsellor
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted">
            Assessment results are considered alongside academic performance, student responses,
            interests, aspirations, achievements, and counsellor observations. No single assessment
            is used to determine a student&apos;s future.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-muted/90">
            Compass360 may use assessments covering cognitive aptitude, career interests,
            personality and behaviour, strengths and skills, values and motivators, and career
            decision readiness.
          </p>
        </div>

        {/* One fit question, resolved across five clusters of criteria. */}
        <div className="mt-12 border-t border-border/60 pt-10">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
              University &amp; course fit
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              We look beyond rankings, considering nine factors across academic, career,
              environment, cost and funding, and personal fit.
            </p>
          </div>

          <p className="mx-auto mt-8 w-fit rounded-full border border-cyan/30 bg-cyan-soft px-7 py-3.5 text-center font-display text-base font-bold text-navy md:text-lg">
            Student–university fit
          </p>

          <div className="hidden lg:block" aria-hidden>
            <div className="mx-auto h-7 w-px bg-cyan/45" />
            <div className="mx-[10%] h-px bg-cyan/45" />
            <div className="grid grid-cols-5">
              {compass360FitGroups.map((group) => (
                <span key={group.group} className="mx-auto h-10 w-px bg-cyan/45" />
              ))}
            </div>
          </div>

          <div className="mx-auto mt-7 h-7 w-px bg-cyan/45 lg:hidden" aria-hidden />

          <ul className="mt-7 grid gap-x-6 gap-y-7 sm:grid-cols-2 lg:mt-0 lg:grid-cols-5">
            {compass360FitGroups.map((group) => (
              <li key={group.group} className="border-t-2 border-cyan pt-4">
                <h4 className="font-display text-lg font-bold text-navy">{group.group}</h4>
                <ul className="mt-2 space-y-1">
                  {group.dimensions.map((dimension) => (
                    <li key={dimension} className="text-sm leading-relaxed text-muted">
                      {dimension}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
