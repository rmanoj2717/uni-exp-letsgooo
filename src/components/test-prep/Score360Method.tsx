import { score360Method } from "@/lib/constants/score360";

const connectors = [
  // Vertical connector between stacked steps on mobile.
  "before:absolute before:left-[0.9375rem] before:top-9 before:-bottom-6 before:w-px before:bg-cyan/40 before:content-[''] sm:before:hidden",
  "[&:last-child]:before:hidden",
  // Horizontal connector between steps in a row, hidden at the end of each row.
  "after:absolute after:left-10 after:top-4 after:hidden after:h-px after:w-[calc(100%-0.5rem)] after:bg-cyan/40 after:content-['']",
  "sm:after:block sm:[&:nth-child(2n)]:after:hidden",
  "lg:[&:nth-child(2n)]:after:block lg:[&:nth-child(3n)]:after:hidden",
  "[&:last-child]:after:hidden",
].join(" ");

export function Score360Method() {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-navy md:text-2xl">How Score360 works</h3>
      <ol className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-9">
        {score360Method.map((step, index) => (
          <li key={step.title} className={`relative pl-11 sm:pl-0 ${connectors}`}>
            <span
              className="absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-soft font-display text-xs font-bold tabular-nums text-navy ring-1 ring-cyan/30 sm:static"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h4 className="flex min-h-8 items-center font-display text-base font-bold leading-tight text-navy sm:mt-3.5 sm:min-h-0 md:text-lg">
              {step.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
