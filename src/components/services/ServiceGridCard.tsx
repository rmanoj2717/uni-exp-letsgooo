import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils/cn";

export function ServiceGridCard({
  index,
  title,
  description,
  helpWith,
}: {
  index: number;
  title: string;
  description: string;
  helpWith: string[];
}) {
  const accentOrange = index % 2 === 1;

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border bg-gradient-to-br from-off-white via-surface to-off-white p-6 shadow-[0_4px_24px_rgba(21,36,71,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(21,36,71,0.08)] md:rounded-3xl md:p-7",
        accentOrange ? "border-orange/10 hover:border-orange/20" : "border-border/70 hover:border-cyan/20",
      )}
    >
      <div
        className={cn(
          "mb-4 h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-14",
          accentOrange ? "bg-orange/80" : "bg-cyan/80",
        )}
        aria-hidden
      />
      <span
        className={cn(
          "font-display text-sm font-bold tabular-nums",
          accentOrange ? "text-orange" : "text-cyan",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <h2 className="mt-2 font-display text-xl font-bold leading-snug text-navy">{title}</h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-[0.9375rem]">
        {description}
      </p>
      <div className="mt-5 border-t border-border/50 pt-4">
        <p
          className={cn(
            "text-[0.6875rem] font-semibold uppercase tracking-[0.12em]",
            accentOrange ? "text-orange" : "text-cyan",
          )}
        >
          What we help with
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {helpWith.map((item) => (
            <li key={item}>
              <Badge variant="cyan" className="normal-case font-medium tracking-normal">
                {item}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
