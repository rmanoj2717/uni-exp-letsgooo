import { Container } from "@/components/ui/Container";
import { compass360AssessmentAreas } from "@/lib/constants/compass360";

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

          <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {compass360AssessmentAreas.map((area, index) => (
              <li
                key={area}
                className={`flex min-h-14 items-center justify-center rounded-xl bg-cyan-soft/60 px-3 py-3 text-center font-display text-sm font-bold leading-snug text-navy ring-1 ring-cyan/20 md:text-base ${
                  index === compass360AssessmentAreas.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                {area}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block" aria-hidden>
            <div className="grid grid-cols-5 gap-6">
              {compass360AssessmentAreas.map((area) => (
                <span key={area} className="mx-auto h-6 w-px bg-cyan/45" />
              ))}
            </div>
            <div className="mx-[10%] h-px bg-cyan/45" />
            <div className="mx-auto h-6 w-px bg-cyan/45" />
          </div>

          <div className="mx-auto mt-6 h-6 w-px bg-cyan/45 lg:hidden" aria-hidden />

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
        </div>

        <div className="mt-12 grid gap-3 border-t border-border/60 pt-9 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-baseline md:gap-10">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            University &amp; course fit
          </h3>
          <p className="leading-relaxed text-muted md:text-lg">
            We look beyond rankings. Course and university fit is considered across academic,
            career, financial, environmental, and personal factors.
          </p>
        </div>
      </Container>
    </section>
  );
}
