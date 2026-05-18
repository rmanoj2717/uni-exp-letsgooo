import { SectionCurve } from "@/components/decorative/SectionCurve";
import { PathwayLines } from "@/components/decorative/PathwayLines";
import { Container } from "@/components/ui/Container";

export function PageHeader({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_0%,rgba(45,184,232,0.1),transparent)]"
        aria-hidden
      />
      <PathwayLines className="text-cyan opacity-25" />
      <Container className="relative z-10 py-14 sm:py-16 md:py-20 lg:py-24">
        {eyebrow && <p className="eyebrow mb-3 text-cyan-bright">{eyebrow}</p>}
        <h1 className="font-display text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-[2.5rem] md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            {subtitle}
          </p>
        )}
        <div className="mt-8 h-1 w-14 rounded-full bg-cyan" aria-hidden />
      </Container>
      <SectionCurve fill="surface" position="bottom" />
    </section>
  );
}
