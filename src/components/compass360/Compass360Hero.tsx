import { CtaButton } from "@/components/cta/CtaButton";
import { HeroAccent } from "@/components/decorative/HeroAccent";
import { PathwayLines } from "@/components/decorative/PathwayLines";
import { SectionCurve } from "@/components/decorative/SectionCurve";
import { Container } from "@/components/ui/Container";

export function Compass360Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_0%,rgba(45,184,232,0.1),transparent)]"
        aria-hidden
      />
      <PathwayLines className="text-cyan opacity-25" />
      <Container className="relative z-10 py-12 sm:py-14 md:py-16">
        <p className="eyebrow mb-3 text-cyan-bright">Compass360</p>
        <h1 className="font-display max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
          Discover Yourself. Find Your Fit. Shape Your Future.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          A guided program that helps students understand themselves, explore what to study, and
          make better-informed course and university decisions.
        </p>
        <div className="mt-7">
          <CtaButton source="compass360-hero" size="lg" />
        </div>
        <HeroAccent />
      </Container>
      <SectionCurve fill="surface" position="bottom" />
    </section>
  );
}
