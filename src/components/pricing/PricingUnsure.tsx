import { CtaButton } from "@/components/cta/CtaButton";
import { Container } from "@/components/ui/Container";

export function PricingUnsure() {
  return (
    <section className="border-y border-border/50 bg-surface py-12 md:py-14">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
            Not sure which plan fits your student?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Every student&apos;s timeline is different. If you are unsure whether your family needs
            focused support or full end-to-end counselling, start with a consultation and we&apos;ll
            recommend the right level of guidance based on your goals, target countries, and
            application stage.
          </p>
          <div className="mt-7 flex justify-center">
            <CtaButton source="pricing-unsure" size="lg" label="Book a Free Consultation" />
          </div>
        </div>
      </Container>
    </section>
  );
}
