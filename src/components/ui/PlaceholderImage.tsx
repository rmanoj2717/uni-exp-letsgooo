import { cn } from "@/lib/utils/cn";

export function PlaceholderImage({
  label,
  aspect = "video",
  className,
}: {
  label: string;
  aspect?: "video" | "square" | "portrait" | "wide";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-cyan-soft/90 via-off-white to-surface md:rounded-3xl",
        aspect === "video" && "aspect-video",
        aspect === "square" && "aspect-square",
        aspect === "portrait" && "aspect-[3/4]",
        aspect === "wide" && "aspect-[21/9]",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="none">
          <path
            d="M0 150 Q100 50 200 150 T400 150"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-cyan"
          />
          <path
            d="M0 200 Q150 100 300 200 T400 180"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 6"
            className="text-navy"
          />
        </svg>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-6 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface/90 text-cyan shadow-sm ring-1 ring-border/50">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
            <path d="M3 16l5-4 4 3 5-5 4 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="max-w-[220px] text-sm font-medium leading-snug text-navy/75">{label}</span>
        <span className="text-xs font-medium uppercase tracking-wider text-muted/80">
          Photo placeholder
        </span>
      </div>
    </div>
  );
}
