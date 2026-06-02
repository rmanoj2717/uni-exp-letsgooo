import { familyTestimonials } from "@/lib/constants/testimonials";
import { Section } from "@/components/ui/Section";

export function FamilyFeedback() {
  return (
    <Section
      eyebrow="Family feedback"
      title="Trusted by students and parents navigating global admissions"
      subtitle="Families choose UniExp Global for clear guidance, structured planning, and support across every stage of the admissions journey."
      variant="default"
      className="!py-11 md:!py-12 [&_header]:!mb-7 md:[&_header]:!mb-8"
    >
      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {familyTestimonials.map((item) => (
          <figure
            key={item.label}
            className="relative flex h-full flex-col rounded-xl border border-border/50 bg-off-white/50 px-5 py-5 md:px-5 md:py-5"
          >
            <span
              className="font-display text-3xl leading-none text-cyan/25 select-none"
              aria-hidden
            >
              &ldquo;
            </span>
            <blockquote className="mt-1 flex-1 text-sm leading-relaxed text-navy/90 md:text-[0.9375rem]">
              {item.quote}
            </blockquote>
            <figcaption className="mt-4 border-t border-border/40 pt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-cyan">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
