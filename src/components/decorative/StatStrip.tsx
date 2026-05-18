import { trustStats } from "@/lib/constants/stats";
import { cn } from "@/lib/utils/cn";

export function StatStrip({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={
        dark
          ? "grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4 md:gap-6"
          : "grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10"
      }
    >
      {trustStats.map((stat, i) => (
        <div
          key={stat.label}
          className={cn(
            "text-center md:text-left",
            i > 0 && dark && "md:border-l md:border-white/10 md:pl-6",
            i > 0 && !dark && "md:border-l md:border-border md:pl-8",
          )}
        >
          <p
            className={
              dark
                ? "font-display text-2xl font-bold text-cyan-bright sm:text-3xl"
                : "font-display text-2xl font-bold text-navy sm:text-3xl"
            }
          >
            {stat.value}
          </p>
          <p
            className={
              dark
                ? "mt-1.5 text-sm font-medium text-white/65"
                : "mt-1.5 text-sm font-medium text-muted"
            }
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
