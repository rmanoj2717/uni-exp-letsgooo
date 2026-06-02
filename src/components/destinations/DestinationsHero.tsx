import { SectionCurve } from "@/components/decorative/SectionCurve";
import { PathwayLines } from "@/components/decorative/PathwayLines";
import { Container } from "@/components/ui/Container";
import { destinationsMarketingCopy } from "@/lib/constants/study-destinations";

export function DestinationsHero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#152447] via-[#14213f] to-[#0e1a32]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(45,184,232,0.12),transparent_55%)]"
        aria-hidden
      />
      <PathwayLines className="text-cyan opacity-20" />
      <svg
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[min(52%,520px)] opacity-[0.14] lg:block"
        viewBox="0 0 520 400"
        aria-hidden
      >
        <circle cx="260" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan" />
        <circle cx="260" cy="200" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="text-white/40" />
        <circle cx="180" cy="160" r="4" className="fill-cyan/60" />
        <circle cx="320" cy="140" r="3" className="fill-white/40" />
        <circle cx="290" cy="230" r="3.5" className="fill-cyan/50" />
        <circle cx="210" cy="250" r="2.5" className="fill-orange/50" />
        <circle cx="350" cy="200" r="3" className="fill-white/35" />
        <path
          d="M180 160 Q240 120 320 140 T290 230"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray="6 10"
          className="text-cyan/50"
        />
      </svg>
      <Container className="relative z-10 py-12 sm:py-14 md:py-16 lg:py-20">
        <p className="eyebrow mb-3 text-cyan-bright">Study abroad strategy</p>
        <h1 className="font-display max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-[2.5rem] md:text-5xl">
          Global destinations
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          University planning built around goals, budget, and outcomes across{" "}
          {destinationsMarketingCopy}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
          We help families choose destinations based on academic fit, budget, career goals, and
          long-term outcomes — not trends alone.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {["Balanced shortlists", "Scholarship-aware planning", "Long-term outcomes"].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/75 sm:text-sm"
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-8 h-1 w-14 rounded-full bg-cyan" aria-hidden />
      </Container>
      <SectionCurve fill="surface" position="bottom" />
    </section>
  );
}
