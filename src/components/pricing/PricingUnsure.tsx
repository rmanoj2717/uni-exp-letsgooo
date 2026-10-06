import { CtaButton } from "@/components/cta/CtaButton";
import { Container } from "@/components/ui/Container";

export function PricingUnsure() {
  return (
    <section className="border-t border-border/50 bg-surface py-12 md:py-14">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
            Not sure which program fits your student?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            If you are unsure which program is appropriate, start with a consultation. We will look
            at the student&apos;s stage, goals, timeline, and the type of support needed.
          </p>
          <div className="mt-7 flex justify-center">
            <CtaButton source="pricing-unsure" size="lg" label="Book a Free Consultation" />
          </div>
        </div>
      </Container>
    </section>
  );
}
