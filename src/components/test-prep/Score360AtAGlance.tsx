import { score360Glance } from "@/lib/constants/score360";

export function Score360AtAGlance() {
  return (
    <ul className="grid divide-y divide-cyan/20 rounded-2xl border border-cyan/20 bg-cyan-soft/40 px-5 py-4 sm:grid-cols-2 sm:divide-y-0 md:px-6 lg:grid-cols-4">
      {score360Glance.map((item, index) => (
        <li
          key={item.id}
          className={`py-3 sm:py-2 lg:px-6 lg:first:pl-0 lg:last:pr-0 ${
            index % 2 === 1 ? "sm:border-l sm:border-cyan/20 sm:pl-5 lg:pl-6" : ""
          } ${index === 2 ? "lg:border-l lg:border-cyan/20" : ""}`}
        >
          <p className="font-display text-lg font-bold leading-tight text-navy">{item.headline}</p>
          <p className="mt-1 text-xs leading-snug text-muted">{item.detail}</p>
        </li>
      ))}
    </ul>
  );
}
