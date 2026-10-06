import { cn } from "@/lib/utils/cn";

/** Shared cyan closing rule for inner-page navy heroes. */
export function HeroAccent({ className }: { className?: string }) {
  return (
    <div className={cn("mt-8 h-1 w-14 shrink-0 rounded-full bg-cyan", className)} aria-hidden />
  );
}
