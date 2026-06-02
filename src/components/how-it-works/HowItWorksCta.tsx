import { CtaButton } from "@/components/cta/CtaButton";
import { Container } from "@/components/ui/Container";

export function HowItWorksCta() {
  return (
    <section className="border-t border-border/50 bg-gradient-to-b from-off-white to-surface py-12 md:py-14 lg:py-16">
      <Container>
        <div className="mx-auto max-w-2xl rounded-2xl border border-border/50 bg-surface px-6 py-10 text-center shadow-[0_8px_32px_rgba(21,36,71,0.06)] sm:px-10 md:text-left lg:max-w-3xl lg:px-12 lg:py-11">
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy md:text-[1.75rem]">
            Ready to map your student&apos;s admissions journey?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Start with a consultation and we&apos;ll help you understand the right next steps based
            on profile, timeline, target countries, and family priorities.
          </p>
          <div className="mt-7 flex justify-center md:justify-start">
            <CtaButton source="how-it-works-journey" size="lg" label="Register Now" />
          </div>
        </div>
      </Container>
    </section>
  );
}
