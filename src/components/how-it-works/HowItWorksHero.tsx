import { SectionCurve } from "@/components/decorative/SectionCurve";
import { Container } from "@/components/ui/Container";

export function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(45,184,232,0.08),transparent_62%)]"
        aria-hidden
      />
      <Container className="relative z-10 pb-9 pt-14 sm:pb-10 sm:pt-16 md:pb-11 md:pt-[4.75rem]">
        <p className="eyebrow mb-3 text-cyan-bright">Our Process</p>
        <h1 className="font-display max-w-3xl text-balance text-[1.625rem] font-bold leading-[1.2] tracking-tight text-white sm:text-[1.875rem] md:text-[2.125rem]">
          The UniExp Global admissions journey
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/78 sm:text-[0.9375rem]">
          From the first consultation to post-enrollment support, our process helps students and
          families move through global admissions with clarity, structure, and confidence.
        </p>
        <div className="mt-5 h-px w-12 bg-cyan/60" aria-hidden />
      </Container>
      <SectionCurve fill="surface" position="bottom" className="h-7 md:h-9" />
    </section>
  );
}
