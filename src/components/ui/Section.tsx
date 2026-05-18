import { cn } from "@/lib/utils/cn";
import { Container } from "./Container";

export function Section({
  title,
  subtitle,
  eyebrow,
  variant = "default",
  className,
  children,
  id,
}: {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  variant?: "default" | "navy" | "off-white" | "cyan-soft";
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-pad",
        variant === "default" && "bg-surface",
        variant === "navy" && "bg-navy text-white",
        variant === "off-white" && "bg-off-white pathway-bg",
        variant === "cyan-soft" && "bg-cyan-soft",
        className,
      )}
    >
      <Container>
        {(title || subtitle || eyebrow) && (
          <header className="mb-12 max-w-2xl md:mb-16">
            {eyebrow && (
              <p
                className={cn(
                  "eyebrow mb-3",
                  variant === "navy" ? "text-cyan-bright" : "text-cyan",
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "font-display text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]",
                  variant === "navy" ? "text-white" : "text-navy",
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "mt-4 text-lg leading-relaxed md:text-xl md:leading-relaxed",
                  variant === "navy" ? "text-white/80" : "text-muted",
                )}
              >
                {subtitle}
              </p>
            )}
            <div
              className={cn(
                "mt-6 h-1 w-12 rounded-full",
                variant === "navy" ? "bg-cyan-bright" : "bg-cyan",
              )}
              aria-hidden
            />
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
