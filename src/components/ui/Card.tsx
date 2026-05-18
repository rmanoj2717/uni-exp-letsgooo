import { cn } from "@/lib/utils/cn";

export function Card({
  className,
  children,
  accent,
  elevated,
}: {
  className?: string;
  children: React.ReactNode;
  accent?: "cyan" | "orange" | "none";
  elevated?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/80 bg-surface p-6 ring-1 ring-navy/[0.03] transition-all duration-300 ease-out md:rounded-3xl md:p-8",
        "shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]",
        accent === "cyan" && "border-l-[3px] border-l-cyan pl-5 md:pl-7",
        accent === "orange" && "border-l-[3px] border-l-orange pl-5 md:pl-7",
        elevated &&
          "shadow-[var(--shadow-elevated)] ring-2 ring-orange/20 hover:shadow-[var(--shadow-elevated)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
