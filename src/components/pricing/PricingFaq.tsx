import { Container } from "@/components/ui/Container";
import { pricingFaqs } from "@/lib/constants/pricing";

export function PricingFaq() {
  return (
    <section className="section-pad bg-surface">
      <Container>
        <header className="mb-8 max-w-xl md:mb-9">
          <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
            Common questions
          </h2>
          <div className="mt-4 h-1 w-10 rounded-full bg-cyan" aria-hidden />
        </header>

        <div className="mx-auto max-w-3xl divide-y divide-border/60 rounded-2xl border border-border/60 bg-off-white/50">
          {pricingFaqs.map((faq) => (
            <details key={faq.question} className="group px-5 py-4 md:px-6 md:py-5">
              <summary className="cursor-pointer list-none font-display text-base font-semibold text-navy marker:content-none md:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span
                    className="mt-1 shrink-0 text-cyan transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 pr-8 text-sm leading-relaxed text-muted md:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
