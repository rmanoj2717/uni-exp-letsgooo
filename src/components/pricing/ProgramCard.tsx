import { CtaButton } from "@/components/cta/CtaButton";
import type { PublicProgram } from "@/lib/constants/programs";
import { cn } from "@/lib/utils/cn";

const label = "text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-navy/60";

export function FocusAreas({ items, className }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={cn("mt-2.5 space-y-1.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-snug text-navy">
          <span className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-cyan" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProgramCard({
  program,
  source,
  className,
}: {
  program: PublicProgram;
  source: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border border-border/70 p-5 shadow-[0_1px_2px_rgba(21,36,71,0.03)] md:p-6",
        className,
      )}
    >
      <h3 className="font-display text-2xl font-bold leading-none text-navy">{program.name}</h3>
      <p className="mt-2 text-sm font-semibold leading-snug text-navy-light">{program.tagline}</p>

      <div className="mt-4 rounded-lg bg-cyan-soft/40 px-3.5 py-3 ring-1 ring-cyan/15">
        <p className={label}>Who it is for</p>
        <p className="mt-1 text-sm leading-relaxed text-navy">{program.whoFor}</p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{program.description}</p>

      <div className="mt-4 border-t border-border/60 pt-4">
        <p className={label}>Focus areas</p>
        <FocusAreas items={program.focus} />
      </div>

      <div className="mt-auto pt-5">
        <CtaButton
          source={source}
          label="Talk to a Counsellor"
          variant="outline"
          size="sm"
          className="w-full sm:w-auto"
        />
      </div>
    </article>
  );
}
