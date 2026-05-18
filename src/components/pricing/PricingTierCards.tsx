import { CtaButton } from "@/components/cta/CtaButton";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { formatINR, pricingTiers } from "@/lib/constants/pricing";
import { cn } from "@/lib/utils/cn";

export function PricingTierCards() {
  return (
    <section className="section-pad bg-surface">
      <Container>
        <div className="grid gap-6 md:gap-7 lg:grid-cols-3 lg:items-stretch lg:gap-8">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              elevated={false}
              className={cn(
                "flex flex-col !p-6 md:!p-7",
                tier.popular
                  ? "relative z-10 border-cyan/25 bg-gradient-to-b from-cyan-soft/20 to-surface ring-2 ring-cyan/15"
                  : "border-border/70",
              )}
            >
              <div className="flex min-h-[2rem] flex-wrap items-center gap-x-2.5 gap-y-1">
                <h2 className="font-display text-2xl font-bold text-navy">{tier.name}</h2>
                {tier.badge && (
                  <Badge variant="cyan" className="text-[0.625rem] tracking-[0.1em]">
                    {tier.badge}
                  </Badge>
                )}
              </div>

              <p className="mt-3 font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
                {formatINR(tier.price)}
              </p>
              <p className="mt-2 text-sm font-medium text-cyan">{tier.touchpoints}</p>

              <div className="mt-5 rounded-xl bg-off-white/80 px-3.5 py-3 ring-1 ring-border/40">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-navy/70">
                  Best for
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{tier.bestFor}</p>
              </div>

              <div className="mt-5 flex-1 border-t border-border/60 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-navy/70">
                  Includes
                </p>
                <ul className="mt-3 space-y-2.5">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-snug text-muted">
                      <span className="mt-0.5 shrink-0 text-orange" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <CtaButton
                source={`pricing-${tier.id}`}
                className="mt-6 w-full"
                variant={tier.popular ? "primary" : "outline"}
              />
            </Card>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted md:mt-7">
          Applicable taxes extra.
        </p>
      </Container>
    </section>
  );
}
