import { cn } from "@/lib/utils/cn";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "navy" | "popular";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[0.6875rem] font-bold tracking-[0.08em] uppercase",
        variant === "default" && "bg-off-white text-navy ring-1 ring-border/60",
        variant === "cyan" && "bg-cyan-soft text-navy ring-1 ring-cyan/20",
        variant === "navy" && "bg-navy text-white",
        variant === "popular" && "bg-orange text-white shadow-sm shadow-orange/30",
        className,
      )}
    >
      {children}
    </span>
  );
}
