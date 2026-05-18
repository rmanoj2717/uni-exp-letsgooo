import { CtaButton } from "@/components/cta/CtaButton";
import { PathwayLines } from "@/components/decorative/PathwayLines";
import { Container } from "@/components/ui/Container";

export function PageCtaBand({
  title = "Ready to plan your global university journey?",
  subtitle = "Book a free consultation with our counsellors. We'll understand your goals and outline clear next steps — for students and parents.",
  source = "page-cta",
}: {
  title?: string;
  subtitle?: string;
  source?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-20">
      <PathwayLines className="text-white opacity-20" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(45,184,232,0.15),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-10 text-center backdrop-blur-sm sm:px-10 sm:py-12 md:px-14">
          <h2 className="font-display text-balance text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/80">
            {subtitle}
          </p>
          <div className="mt-9 flex justify-center">
            <CtaButton source={source} size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
