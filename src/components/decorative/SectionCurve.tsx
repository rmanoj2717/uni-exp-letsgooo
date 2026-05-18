import { cn } from "@/lib/utils/cn";

export function SectionCurve({
  fill = "off-white",
  position = "bottom",
  className,
}: {
  fill?: "off-white" | "surface" | "navy-deep";
  position?: "top" | "bottom";
  className?: string;
}) {
  const fillClass =
    fill === "surface"
      ? "bg-surface"
      : fill === "navy-deep"
        ? "bg-navy-deep"
        : "bg-off-white";

  return (
    <div
      className={cn(
        "pointer-events-none absolute left-0 right-0 h-14 md:h-16",
        position === "bottom" ? "bottom-0 curve-to-light" : "top-0 curve-to-navy",
        fillClass,
        className,
      )}
      aria-hidden
    />
  );
}
