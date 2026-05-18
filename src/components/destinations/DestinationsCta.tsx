import { CtaButton } from "@/components/cta/CtaButton";
import { Container } from "@/components/ui/Container";

export function DestinationsCta() {
  return (
    <section className="border-t border-border/60 bg-gradient-to-br from-cyan-soft/70 via-off-white to-surface py-12 md:py-14">
      <Container>
        <div className="mx-auto max-w-2xl rounded-2xl border border-cyan/15 bg-surface/80 px-6 py-10 text-center shadow-[0_8px_32px_rgba(21,36,71,0.06)] backdrop-blur-sm md:rounded-3xl md:px-10 md:py-12">
          <h2 className="font-display text-balance text-2xl font-bold text-navy md:text-3xl">
            Not sure which country fits your profile?
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted">
            Start with a consultation and we&apos;ll help you compare destinations based on academics,
            budget, timelines, career goals, and long-term fit.
          </p>
          <div className="mt-7 flex justify-center">
            <CtaButton
              source="destinations-fit"
              size="lg"
              label="Discuss My Destination Fit"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
