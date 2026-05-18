import { cn } from "@/lib/utils/cn";

export function CurvedPanel({
  children,
  className,
  variant = "bottom",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "top" | "bottom";
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {variant === "bottom" && (
        <div
          className="pointer-events-none absolute -bottom-px left-0 right-0 h-16 bg-surface"
          style={{
            clipPath: "ellipse(55% 100% at 50% 100%)",
          }}
          aria-hidden
        />
      )}
      {children}
    </div>
  );
}
