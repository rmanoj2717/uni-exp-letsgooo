import { Container } from "@/components/ui/Container";
import { pricingComparisonRows } from "@/lib/constants/pricing";
import { cn } from "@/lib/utils/cn";

function ComparisonCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan/10 text-sm font-bold text-cyan">
        ✓
      </span>
    ) : (
      <span className="text-sm text-muted/50" aria-label="Not included">
        —
      </span>
    );
  }

  return <span className="text-sm leading-snug text-muted">{value}</span>;
}

export function PricingComparison() {
  return (
    <section className="section-pad bg-off-white pathway-bg">
      <Container>
        <header className="mb-8 max-w-2xl md:mb-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Compare what&apos;s included
          </h2>
          <div className="mt-5 h-1 w-12 rounded-full bg-cyan" aria-hidden />
        </header>

        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 z-10 w-[38%] bg-off-white pb-4 pr-4 text-sm font-semibold text-navy"
                >
                  <span className="sr-only">Feature</span>
                </th>
                <th
                  scope="col"
                  className="pb-4 px-3 text-center text-sm font-bold text-navy md:px-4"
                >
                  Basic
                </th>
                <th
                  scope="col"
                  className="pb-4 px-3 text-center text-sm font-bold text-navy md:px-4"
                >
                  Standard
                </th>
                <th
                  scope="col"
                  className="pb-4 px-3 text-center text-sm font-bold text-navy md:px-4"
                >
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingComparisonRows.map((row, index) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className={cn(
                      "sticky left-0 z-10 bg-off-white py-3.5 pr-4 text-left text-sm font-medium text-navy",
                      index !== pricingComparisonRows.length - 1 && "border-b border-border/50",
                    )}
                  >
                    {row.label}
                  </th>
                  <td
                    className={cn(
                      "py-3.5 px-3 text-center align-middle md:px-4",
                      index !== pricingComparisonRows.length - 1 && "border-b border-border/50",
                    )}
                  >
                    <div className="flex justify-center">
                      <ComparisonCell value={row.basic} />
                    </div>
                  </td>
                  <td
                    className={cn(
                      "bg-cyan-soft/25 py-3.5 px-3 text-center align-middle md:px-4",
                      index !== pricingComparisonRows.length - 1 && "border-b border-cyan/10",
                    )}
                  >
                    <div className="flex justify-center">
                      <ComparisonCell value={row.standard} />
                    </div>
                  </td>
                  <td
                    className={cn(
                      "py-3.5 px-3 text-center align-middle md:px-4",
                      index !== pricingComparisonRows.length - 1 && "border-b border-border/50",
                    )}
                  >
                    <div className="flex justify-center">
                      <ComparisonCell value={row.premium} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
