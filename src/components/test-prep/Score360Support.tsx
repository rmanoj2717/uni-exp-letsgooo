import { score360SupportThemes } from "@/lib/constants/score360";

export function Score360Support() {
  return (
    <div className="rounded-2xl border border-cyan/15 bg-cyan-soft/40 p-5 md:p-6">
      <h3 className="font-display text-lg font-bold text-navy md:text-xl">Score360 support</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-3 md:gap-0">
        {score360SupportThemes.map((theme, index) => (
          <div key={theme.title} className="relative md:px-6 md:first:pl-0 md:last:pr-0">
            {index > 0 && (
              <span
                className="absolute left-0 top-0 hidden h-full w-px bg-cyan/25 md:block"
                aria-hidden
              />
            )}
            <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-navy">
              {theme.title}
            </h4>
            <p className="mt-1.5 text-sm leading-snug text-muted">{theme.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
