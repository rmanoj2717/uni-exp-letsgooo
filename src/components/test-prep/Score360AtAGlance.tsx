import { score360Highlights } from "@/lib/constants/score360";

export function Score360AtAGlance() {
  return (
    <ul className="grid grid-cols-2 gap-x-5 gap-y-3 rounded-2xl border border-cyan/20 bg-cyan-soft/40 px-5 py-4 md:px-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-cyan/20">
      {score360Highlights.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2.5 lg:px-6 lg:first:pl-0 lg:last:pr-0"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden />
          <span className="font-display text-sm font-bold leading-snug text-navy md:text-base">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
