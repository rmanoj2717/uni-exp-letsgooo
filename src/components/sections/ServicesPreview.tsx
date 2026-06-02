import Link from "next/link";
import { services } from "@/lib/constants/services";
import { Section } from "@/components/ui/Section";

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
      title="Admissions support at every stage"
      subtitle="Structured guidance across profile, applications, essays, and test planning (SAT, ACT, IELTS, TOEFL, GRE, GMAT) — explore the full scope on our Services page."
      variant="off-white"
      className="!py-12 md:!py-14 [&_header]:!mb-8 md:[&_header]:!mb-9"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {featured.map((service, index) => (
          <article
            key={service.id}
            className="group rounded-2xl border border-border/70 bg-gradient-to-br from-surface to-off-white p-5 shadow-[0_2px_16px_rgba(21,36,71,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/20 hover:shadow-[0_8px_28px_rgba(21,36,71,0.07)] md:p-6"
          >
            <div
              className="mb-3 h-0.5 w-8 rounded-full bg-cyan/75 transition-all duration-300 group-hover:w-11"
              aria-hidden
            />
            <span className="font-display text-sm font-bold tabular-nums text-cyan">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-display text-base font-bold leading-snug text-navy md:text-lg">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
          </article>
        ))}
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
