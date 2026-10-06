import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const families = [
  {
    id: "self-paced",
    label: "Self-paced",
    description: "Short-term development programs",
  },
  {
    id: "bundled",
    label: "Bundled",
    description: "Long-term guidance over multiple years",
  },
  {
    id: "exclusive-programs",
    label: "Exclusive Programs",
    description: "Focused specialist programs",
  },
  {
    id: "exclusive-services",
    label: "Exclusive Services",
    description: "Individual services when a full program is not required",
  },
] as const;

export function PricingFamilyRail() {
  return (
    <section className="border-b border-border/60 bg-surface pb-8 pt-2 md:pb-10 md:pt-4">
      <Container>
        <div className="relative">
          <div
            className="pointer-events-none absolute left-1 right-1 top-[0.3125rem] hidden h-px bg-gradient-to-r from-cyan/0 via-cyan/40 to-cyan/0 lg:block"
            aria-hidden
          />
          <ol className="relative grid gap-4 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
            {families.map((family, index) => (
              <li key={family.id} className="relative pl-5 lg:pl-0 lg:pt-5">
                {index > 0 && (
                  <span
                    className="absolute -top-4 left-[0.1875rem] h-4 w-px bg-cyan/25 sm:hidden"
                    aria-hidden
                  />
                )}
                <span
                  className={cn(
                    "absolute left-0 top-[0.4375rem] h-2 w-2 rounded-full bg-cyan",
                    "lg:left-0 lg:top-0.5 lg:ring-4 lg:ring-surface",
                  )}
                  aria-hidden
                />
                <a href={`#${family.id}`} className="group block">
                  <p className="eyebrow text-navy transition-colors duration-200 group-hover:text-cyan">
                    {family.label}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-muted">{family.description}</p>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
