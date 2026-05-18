import { cn } from "@/lib/utils/cn";

type TestPrepCardProps = {
  name: string;
  whatFor: string;
  bestFor: string;
  uniexpSupport: string;
  accent?: "cyan" | "orange";
};

function Label({ children, variant }: { children: React.ReactNode; variant: "cyan" | "orange" }) {
  return (
    <p
      className={cn(
        "text-[0.6875rem] font-semibold uppercase tracking-[0.12em]",
        variant === "cyan" ? "text-cyan" : "text-orange",
      )}
    >
      {children}
    </p>
  );
}

export function TestPrepCard({
  name,
  whatFor,
  bestFor,
  uniexpSupport,
  accent = "cyan",
}: TestPrepCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border bg-gradient-to-br from-off-white via-surface to-off-white p-5 shadow-[0_4px_20px_rgba(21,36,71,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/20 hover:shadow-[0_10px_32px_rgba(21,36,71,0.08)] md:p-6",
        accent === "orange" ? "border-orange/10" : "border-border/70",
      )}
    >
      <div
        className={cn(
          "mb-4 h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-14",
          accent === "orange" ? "bg-orange/80" : "bg-cyan/80",
        )}
        aria-hidden
      />
      <h3 className="font-display text-xl font-bold text-navy">{name}</h3>
      <div className="mt-3">
        <Label variant="cyan">What it&apos;s for</Label>
        <p className="mt-1 text-sm leading-relaxed text-muted">{whatFor}</p>
      </div>

      <div className="mt-4 space-y-3 border-t border-border/50 pt-4">
        <div>
          <Label variant="orange">Timing</Label>
          <p className="mt-1 text-sm leading-relaxed text-muted">{bestFor}</p>
        </div>
        <div>
          <Label variant="cyan">UniExp support</Label>
          <p className="mt-1 text-sm leading-relaxed text-muted">{uniexpSupport}</p>
        </div>
      </div>
    </article>
  );
}
