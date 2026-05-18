import { fieldsOfStudy } from "@/lib/constants/fields-of-study";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

export function FieldsOfStudySection() {
  return (
    <section className="py-12 md:py-14">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 h-0.5 w-10 rounded-full bg-orange" aria-hidden />
          <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">Fields of study</h2>
          <p className="mt-3 text-muted">
            We match academic fields to student strengths, portfolio readiness, and career goals —
            across STEM, business, creative paths, and specialist programs.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fieldsOfStudy.map((field, index) => (
            <article
              key={field.id}
              className={cn(
                "group rounded-2xl border bg-gradient-to-br from-off-white to-surface p-4 shadow-[0_2px_16px_rgba(21,36,71,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/20 hover:shadow-[0_8px_24px_rgba(21,36,71,0.07)] md:p-5",
                index % 2 === 0 ? "border-border/70" : "border-cyan/10",
              )}
            >
              <h3 className="font-display text-base font-bold leading-snug text-navy">{field.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{field.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
