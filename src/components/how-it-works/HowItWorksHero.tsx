import { HeroAccent } from "@/components/decorative/HeroAccent";
import { SectionCurve } from "@/components/decorative/SectionCurve";
import { Container } from "@/components/ui/Container";

export function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(45,184,232,0.08),transparent_62%)]"
        aria-hidden
      />
      <Container className="relative z-10 py-14 sm:py-16 md:py-20 lg:py-24">
        <p className="eyebrow mb-3 text-cyan-bright">Our Process</p>
        <h1 className="font-display max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-[2.5rem] md:text-5xl">
          The UniEXP Global admissions journey
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          See what happens from the first consultation through university shortlisting,
          applications, decisions, and post-enrolment support.
        </p>
        <HeroAccent />
      </Container>
      <SectionCurve fill="surface" position="bottom" />
    </section>
  );
}
