import { formatINR } from "@/lib/constants/pricing";
import { score360Tests } from "@/lib/constants/score360";
import { cn } from "@/lib/utils/cn";

const headCell =
  "px-4 py-3 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-navy";
const bodyCell = "border-t border-border/50 px-4 py-3.5";

export function Score360PricingTable({
  variant = "simple",
}: {
  variant?: "simple" | "full";
}) {
  const detailed = variant === "full";

  return (
    <div>
      <div className="space-y-2.5 md:hidden">
        {score360Tests.map((test) => (
          <article
            key={test.id}
            className="overflow-hidden rounded-xl bg-surface ring-1 ring-border/60"
          >
            <h4 className="bg-cyan-soft/70 px-4 py-2 font-display text-base font-bold text-navy">
              {test.name}
            </h4>
            <dl className="divide-y divide-border/50">
              {detailed && (
                <>
                  <div className="flex items-baseline justify-between gap-3 px-4 py-2">
                    <dt className="text-sm text-muted">Duration</dt>
                    <dd className="text-sm font-medium text-navy">{test.duration}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 px-4 py-2">
                    <dt className="text-sm text-muted">Live interactions</dt>
                    <dd className="text-sm font-medium tabular-nums text-navy">
                      {test.liveInteractions}
                    </dd>
                  </div>
                </>
              )}
              <div className="flex items-baseline justify-between gap-3 px-4 py-2.5">
                <dt className="text-sm text-muted">1:1</dt>
                <dd className="font-display text-base font-bold tabular-nums text-navy">
                  {formatINR(test.oneToOne)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 px-4 py-2.5">
                <dt className="text-sm text-muted">Small group</dt>
                <dd className="font-display text-base font-bold tabular-nums text-navy">
                  {formatINR(test.smallGroup)}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-xl bg-surface ring-1 ring-border/60 md:block">
        <table className="w-full border-collapse text-left">
          <thead className="bg-cyan-soft/70">
            <tr>
              <th scope="col" className={headCell}>
                Test
              </th>
              {detailed && (
                <>
                  <th scope="col" className={headCell}>
                    Duration
                  </th>
                  <th scope="col" className={headCell}>
                    Live interactions
                  </th>
                </>
              )}
              <th scope="col" className={cn(headCell, "text-right")}>
                1:1
              </th>
              <th scope="col" className={cn(headCell, "text-right")}>
                Small group
              </th>
            </tr>
          </thead>
          <tbody>
            {score360Tests.map((test, index) => (
              <tr key={test.id} className={index % 2 === 1 ? "bg-off-white/50" : undefined}>
                <th
                  scope="row"
                  className={cn(bodyCell, "font-display text-base font-bold text-navy")}
                >
                  {test.name}
                </th>
                {detailed && (
                  <>
                    <td className={cn(bodyCell, "text-sm text-muted")}>{test.duration}</td>
                    <td className={cn(bodyCell, "text-sm tabular-nums text-muted")}>
                      {test.liveInteractions}
                    </td>
                  </>
                )}
                <td
                  className={cn(
                    bodyCell,
                    "text-right font-display text-base font-bold tabular-nums text-navy",
                  )}
                >
                  {formatINR(test.oneToOne)}
                </td>
                <td
                  className={cn(
                    bodyCell,
                    "text-right font-display text-base font-bold tabular-nums text-navy",
                  )}
                >
                  {formatINR(test.smallGroup)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
