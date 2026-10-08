import { cn } from "@/lib/utils/cn";

export function ProgramStatement({
  title,
  body,
  className,
}: {
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-2xl border border-cyan/20 bg-cyan-soft/40 px-5 py-4 md:flex-row md:items-center md:gap-8 md:px-6 md:py-5",
        className,
      )}
    >
      <h3 className="flex shrink-0 items-center gap-2.5 font-display text-base font-bold text-navy md:w-72 md:text-lg">
        <span className="h-4 w-1 shrink-0 rounded-full bg-cyan" aria-hidden />
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted md:text-[0.9375rem]">{body}</p>
    </div>
  );
}
