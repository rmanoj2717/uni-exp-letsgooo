import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function Compass360Preview() {
  return (
    <section className="bg-surface py-12 md:py-14">
      <Container>
        <div className="rounded-2xl border border-cyan/20 bg-cyan-soft/50 px-6 py-8 md:rounded-3xl md:px-10 md:py-10">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-10">
            <div>
              <p className="eyebrow text-navy-light">New from UniEXP Global</p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy md:text-3xl">
                Compass360
              </h2>
              <p className="mt-2 font-display text-base font-semibold text-navy-light md:text-lg">
                Discover Yourself. Find Your Fit. Shape Your Future.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Compass360 helps students understand their strengths, explore academic and career
                options, and assess course and university fit. It then turns those findings into a
                practical development plan.
              </p>
            </div>

            <div className="lg:pl-8 lg:border-l lg:border-cyan/20">
              <ul className="space-y-2.5">
                {[
                  "Self-Discovery",
                  "Career & Course Exploration",
                  "University & Global Fit",
                  "Individual Development",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden />
                    <span className="text-sm font-semibold text-navy">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/compass360"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-surface px-7 py-3 text-sm font-semibold text-navy shadow-[0_2px_12px_rgba(21,36,71,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-cyan-soft/40 hover:text-navy"
              >
                Explore Compass360
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
