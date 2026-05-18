import { howWeHelpChoose } from "@/lib/constants/destination-choose";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

export function HowWeHelpChoose() {
  return (
    <section className="border-y border-border/50 bg-off-white py-12 md:py-14">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 h-0.5 w-10 rounded-full bg-cyan" aria-hidden />
          <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
            How we help you choose
          </h2>
          <p className="mt-3 text-muted">
            Destination decisions should feel strategic — grounded in your student&apos;s profile and
            your family&apos;s priorities.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
          {howWeHelpChoose.map((item, index) => (
            <article
              key={item.title}
              className={cn(
                "rounded-2xl border bg-surface p-6 shadow-[0_4px_20px_rgba(21,36,71,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(21,36,71,0.08)] md:rounded-3xl",
                index === 1 ? "border-orange/15" : "border-cyan/15",
              )}
            >
              <span
                className={cn(
                  "mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold text-white",
                  index === 1 ? "bg-orange" : "bg-cyan",
                )}
              >
                {index + 1}
              </span>
              <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
