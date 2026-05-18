import Link from "next/link";
import { pricingTiers, formatINR } from "@/lib/constants/pricing";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/cta/CtaButton";

export function PricingTeaser() {
  return (
    <Section
      eyebrow="Investment"
      title="Plans that match your journey"
      subtitle="Transparent counselling packages — from focused guidance to comprehensive end-to-end support."
    >
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {pricingTiers.map((tier) => (
          <Card
            key={tier.id}
            elevated={tier.popular}
            className={tier.popular ? "relative pt-2" : ""}
          >
            {tier.popular && (
              <Badge variant="popular" className="absolute -top-3 left-6">
                Most Popular
              </Badge>
            )}
            <h3 className="font-display text-xl font-bold text-navy">{tier.name}</h3>
            <p className="mt-3 font-display text-3xl font-bold text-navy">
              {formatINR(tier.price)}
            </p>
            <p className="mt-2 text-sm font-semibold text-cyan">{tier.touchpoints}</p>
            <ul className="mt-5 space-y-2.5 border-t border-border/80 pt-5 text-sm text-muted">
              {tier.features.slice(0, 2).map((f) => (
                <li key={f} className="flex gap-2 leading-relaxed">
                  <span className="text-orange" aria-hidden>
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Link
          href="/pricing"
          className="font-semibold text-cyan transition-colors duration-200 hover:text-navy"
        >
          Compare all plans →
        </Link>
        <CtaButton source="pricing-teaser" variant="outline" />
      </div>
    </Section>
  );
}
