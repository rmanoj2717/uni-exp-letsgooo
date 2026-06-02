import { homepageStats } from "@/lib/constants/stats";

export function HeroStatsStrip() {
  return (
    <div className="overflow-hidden rounded-xl border border-border/55 bg-surface shadow-[0_10px_36px_rgba(21,36,71,0.09)] sm:rounded-2xl">
      <ul className="grid grid-cols-2 md:grid-cols-4">
        {homepageStats.map((stat, index) => (
          <li
            key={stat.label}
            className={`flex flex-col items-center justify-center px-3 py-4 text-center sm:px-5 sm:py-5 ${
              index % 2 === 1 ? "border-l border-border/45" : ""
            } ${index >= 2 ? "border-t border-border/45 md:border-t-0" : ""} ${
              index > 0 ? "md:border-l md:border-t-0" : ""
            }`}
          >
            <p className="font-display text-lg font-bold leading-none tracking-tight text-navy sm:text-xl md:text-2xl">
              {stat.value}
            </p>
            <p className="mt-1.5 max-w-[10rem] text-[0.75rem] font-medium leading-snug text-muted sm:text-[0.8125rem]">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
