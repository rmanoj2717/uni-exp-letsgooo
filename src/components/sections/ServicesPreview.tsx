import Link from "next/link";
import { services } from "@/lib/constants/services";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils/cn";

const featuredServiceIds = [
  "profile-evaluation",
  "shortlisting",
  "essays",
  "strategy",
  "test-prep",
  "visa",
] as const;

export function ServicesPreview() {
  const featured = featuredServiceIds
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <Section
      eyebrow="What we offer"
      title="Comprehensive admissions support"
      subtitle="Structured guidance across the milestones that matter most — explore the full scope on our Services page."
      variant="off-white"
      className="!py-12 md:!py-14 [&_header]:!mb-8 md:[&_header]:!mb-9"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {featured.map((service, index) => {
          const accentOrange = index % 2 === 1;

          return (
            <article
              key={service.id}
              className={cn(
                "group rounded-2xl border bg-gradient-to-br from-surface to-off-white p-5 shadow-[0_2px_16px_rgba(21,36,71,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(21,36,71,0.07)] md:p-6",
                accentOrange ? "border-orange/10 hover:border-orange/20" : "border-border/70 hover:border-cyan/20",
              )}
            >
              <div
                className={cn(
                  "mb-3 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-11",
                  accentOrange ? "bg-orange/75" : "bg-cyan/75",
                )}
                aria-hidden
              />
              <span
                className={cn(
                  "font-display text-sm font-bold tabular-nums",
                  accentOrange ? "text-orange" : "text-cyan",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-base font-bold leading-snug text-navy md:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-8 text-center md:mt-10">
        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-surface px-7 py-3 text-sm font-semibold text-navy shadow-[0_2px_12px_rgba(21,36,71,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-cyan-soft/40 hover:text-navy"
        >
          View All Services
          <span aria-hidden>→</span>
        </Link>
      </div>
    </Section>
  );
}
