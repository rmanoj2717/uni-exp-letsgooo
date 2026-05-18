const heroStats = [
  { value: "100+", label: "Students Guided" },
  { value: "Top Global", label: "University Admits" },
  { value: "Fit-first", label: "Recommendations" },
  { value: "End-to-end", label: "Family Support" },
] as const;

export function HeroStatsStrip() {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4">
      {heroStats.map((stat, index) => (
        <li
          key={stat.label}
          className={`flex flex-col items-center justify-center px-4 py-5 text-center sm:px-7 sm:py-6 ${
            index % 2 === 1 ? "border-l border-[#e5ddd0]/90" : ""
          } ${index >= 2 ? "border-t border-[#e5ddd0]/90 md:border-t-0" : ""} ${
            index > 0 ? "md:border-l md:border-t-0" : ""
          }`}
        >
          <p className="font-display text-xl font-bold leading-none tracking-tight text-cyan sm:text-2xl">
            {stat.value}
          </p>
          <p className="mt-1.5 max-w-[9.5rem] text-[0.8125rem] font-medium leading-snug text-navy/60 sm:mt-2 sm:text-sm">
            {stat.label}
          </p>
        </li>
      ))}
    </ul>
  );
}
