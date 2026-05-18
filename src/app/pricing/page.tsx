import type { Metadata } from "next";
import { PageCtaBand } from "@/components/sections/PageCtaBand";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaButton } from "@/components/cta/CtaButton";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { pricingTiers, formatINR } from "@/lib/constants/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent counselling packages — Basic, Standard, and Premium plans in INR.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Pricing"
        subtitle="Choose the level of support that fits your timeline, goals, and family needs."
      />

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch lg:gap-10">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.id}
                elevated={tier.popular}
                className={`flex flex-col ${tier.popular ? "relative z-10 lg:-mt-2" : ""}`}
              >
                {tier.popular && (
                  <Badge variant="popular" className="mb-5 w-fit">
                    Most Popular
                  </Badge>
                )}
                <h2 className="font-display text-2xl font-bold text-navy">
                  {tier.name}
                  {tier.id === "standard" && (
                    <span className="ml-2 text-sm font-normal text-muted">/ Value</span>
                  )}
                </h2>
                <p className="mt-3 font-display text-4xl font-bold text-navy">
                  {formatINR(tier.price)}
                </p>
                <p className="mt-2 text-sm font-medium text-cyan">{tier.touchpoints}</p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-muted">
                      <span className="text-orange" aria-hidden>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <CtaButton
                  source={`pricing-${tier.id}`}
                  className="mt-8 w-full"
                  variant={tier.popular ? "primary" : "outline"}
                />
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <PageCtaBand source="pricing" />
    </>
  );
}
