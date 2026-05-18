import type { Destination } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { CountryFlagBadge, DestinationAccentStrip } from "./CountryFlag";
import { cn } from "@/lib/utils/cn";

export function DestinationCard({
  destination,
  featured = false,
}: {
  destination: Destination;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-off-white via-surface to-off-white shadow-[0_4px_24px_rgba(21,36,71,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/20 hover:shadow-[0_10px_36px_rgba(21,36,71,0.09)] md:rounded-3xl",
      )}
    >
      <DestinationAccentStrip theme={destination.theme} />
      <div
        className={cn(
          "flex flex-1 flex-col p-5 md:p-6",
          featured && "md:px-7 md:py-7",
        )}
      >
        <header className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div
              className="mb-3 h-0.5 w-8 rounded-full bg-cyan/80 transition-all duration-300 group-hover:w-11"
              aria-hidden
            />
            <h2
              className={cn(
                "font-display font-bold text-navy",
                featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
              )}
            >
              {destination.name}
            </h2>
          </div>
          <CountryFlagBadge theme={destination.theme} countryName={destination.name} />
        </header>

        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
          {destination.tagline}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {destination.highlights.map((highlight) => (
            <li key={highlight}>
              <Badge variant="cyan" className="normal-case">
                {highlight}
              </Badge>
            </li>
          ))}
        </ul>

        <div className="mt-4 space-y-2 border-t border-border/50 pt-4 text-sm leading-relaxed">
          <p>
            <span className="font-semibold text-navy">Best for: </span>
            <span className="text-muted">{destination.bestFor}</span>
          </p>
          <p>
            <span className="font-semibold text-navy">Considerations: </span>
            <span className="text-muted">{destination.considerations}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
