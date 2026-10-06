import { Container } from "@/components/ui/Container";
import { compass360Pillars } from "@/lib/constants/compass360";

/**
 * Quadrant borders form a single cross behind the hub so the four areas read as one
 * connected model. The inner padding keeps copy clear of the hub at every width.
 */
const quadrantClasses = [
  "border-b border-border/70 md:border-r md:pr-[4.5rem]",
  "border-b border-border/70 md:pl-[4.5rem]",
  "border-b border-border/70 md:border-b-0 md:border-r md:pr-[4.5rem]",
  "md:pl-[4.5rem]",
];

export function Compass360Pillars() {
  return (
    <section className="bg-off-white py-12 md:py-14">
      <Container>
        <header className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-navy-light">Four areas of guidance</p>
          <h2 className="mt-3 font-display text-balance text-2xl font-bold leading-tight text-navy md:text-3xl">
            What Compass360 looks at
          </h2>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-cyan" aria-hidden />
        </header>

        <div className="mx-auto mt-10 max-w-4xl md:mt-12">
          <div className="relative">
            <div className="grid md:grid-cols-2 md:grid-rows-2">
              {compass360Pillars.map((pillar, index) => (
                <article key={pillar.title} className={`py-6 md:py-8 ${quadrantClasses[index]}`}>
                  <span
                    className="font-display text-sm font-bold tabular-nums text-cyan"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-navy md:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{pillar.description}</p>
                </article>
              ))}
            </div>

            <p
              className="absolute left-1/2 top-1/2 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy px-3 text-center font-display text-sm font-bold uppercase leading-tight tracking-[0.08em] text-white ring-4 ring-off-white md:flex"
              aria-hidden
            >
              The Student
            </p>
          </div>

          {/* Mobile mirrors the desktop convergence by placing the student below the four areas. */}
          <div className="mt-1 md:hidden" aria-hidden>
            <span className="mx-auto block h-6 w-px bg-cyan/45" />
            <span
              className="mx-auto block h-0 w-0 border-x-[6px] border-t-[7px] border-x-transparent border-t-cyan/60"
              aria-hidden
            />
            <p className="mt-1 text-center">
              <span className="inline-flex items-center rounded-full bg-navy px-6 py-3 font-display text-sm font-bold uppercase leading-none tracking-[0.1em] text-white">
                The Student
              </span>
            </p>
          </div>

          <p className="mt-7 text-center font-display text-sm font-bold text-navy md:text-base">
            Four areas of guidance, all centred on the student.
          </p>
        </div>
      </Container>
    </section>
  );
}
