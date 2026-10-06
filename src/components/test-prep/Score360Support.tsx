import { score360SupportGroups } from "@/lib/constants/score360";

export function Score360Support() {
  return (
    <div className="rounded-2xl border border-cyan/15 bg-cyan-soft/40 p-5 md:p-6">
      <h3 className="font-display text-lg font-bold text-navy md:text-xl">Score360 support</h3>
      <div className="mt-4 grid gap-5 md:grid-cols-3 md:gap-0">
        {score360SupportGroups.map((group, index) => (
          <div key={group.title} className="relative md:px-6 md:first:pl-0 md:last:pr-0">
            {index > 0 && (
              <span
                className="absolute left-0 top-0 hidden h-full w-px bg-cyan/25 md:block"
                aria-hidden
              />
            )}
            <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-navy">
              {group.title}
            </h4>
            <ul className="mt-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="mb-1.5 flex gap-2 text-sm leading-snug text-muted last:mb-0"
                >
                  <span className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-cyan" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
