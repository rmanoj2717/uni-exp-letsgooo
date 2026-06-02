import { testingPlanPoints } from "@/lib/constants/test-prep";
import { cn } from "@/lib/utils/cn";

export function TestingPlanSection() {
  return (
    <div className="mt-10 rounded-2xl border border-cyan/15 bg-cyan-soft/40 p-5 md:rounded-3xl md:p-6">
      <h3 className="font-display text-lg font-bold text-navy md:text-xl">
        How we build your testing plan
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Planning across SAT, ACT, IELTS, TOEFL, GRE, and GMAT — timed to your university list and
        application deadlines.
      </p>
      <ul className="mt-5 space-y-4">
        {testingPlanPoints.map((point, index) => (
          <li key={point.title} className="flex gap-3">
            <span
              className={cn(
                "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white",
                index === 1 ? "bg-orange" : "bg-cyan",
              )}
            >
              {index + 1}
            </span>
            <div>
              <p className="font-semibold text-navy">{point.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted">{point.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
