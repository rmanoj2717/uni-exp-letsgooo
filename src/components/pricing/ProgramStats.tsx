import { cn } from "@/lib/utils/cn";

const interactionLabels = [
  { key: "counsellor", short: "Counsellor", full: "Live Counsellor Interactions" },
  { key: "mentor", short: "Subject Mentor", full: "Live Subject Mentor Interactions" },
  { key: "testPrep", short: "Test Prep", full: "Live Test Preparation Interactions" },
] as const;

export function InteractionStats({
  counsellor,
  mentor,
  testPrep,
  labels = "short",
  className,
}: {
  counsellor: number;
  mentor: number;
  testPrep: number;
  labels?: "short" | "full";
  className?: string;
}) {
  const values = { counsellor, mentor, testPrep };

  if (labels === "full") {
    return (
      <ul
        className={cn(
          "grid grid-cols-1 divide-y divide-cyan/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0",
          className,
        )}
      >
        {interactionLabels.map((item) => (
          <li
            key={item.key}
            className="flex items-center gap-3.5 py-3 first:pt-0 last:pb-0 sm:flex-col sm:items-start sm:gap-1.5 sm:px-6 sm:py-0 sm:first:pl-0 sm:last:pr-0"
          >
            <p className="font-display text-3xl font-bold leading-none tabular-nums text-navy sm:text-[2.5rem]">
              {values[item.key]}
            </p>
            <p className="text-sm font-medium leading-snug text-muted">{item.full}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={cn("grid grid-cols-3 divide-x divide-border/60", className)}>
      {interactionLabels.map((item) => (
        <li key={item.key} className="px-1.5 text-center first:pl-0 last:pr-0">
          <p className="font-display text-2xl font-bold leading-none tabular-nums text-navy">
            {values[item.key]}
          </p>
          <p className="mt-1 text-[0.6875rem] font-semibold uppercase leading-tight tracking-[0.06em] text-navy/60">
            <span className="sr-only">{item.full}</span>
            <span aria-hidden>{item.short}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}

export function MetaCell({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg bg-surface/85 px-3 py-2 ring-1 ring-border/50", className)}>
      <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-navy/55">
        {label}
      </dt>
      <dd className="mt-0.5 text-sm font-semibold leading-snug text-navy">{value}</dd>
    </div>
  );
}

export function FocusList({
  items,
  columns = true,
}: {
  items: readonly string[];
  columns?: boolean;
}) {
  return (
    <ul className={cn("mt-3", columns && "sm:columns-2 sm:gap-x-6 lg:columns-1")}>
      {items.map((item) => (
        <li
          key={item}
          className="mb-1.5 flex break-inside-avoid gap-2 text-sm leading-snug text-muted last:mb-0"
        >
          <span className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-cyan" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}
