import { cn } from "@/lib/utils/cn";

export function Select({
  label,
  error,
  className,
  id,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-2">
      <label htmlFor={selectId} className="block text-sm font-semibold text-navy">
        {label}
      </label>
      <select
        id={selectId}
        className={cn(
          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-navy shadow-sm transition-all duration-200",
          "focus:border-cyan focus:outline-none focus:ring-[3px] focus:ring-cyan/15",
          error && "border-orange focus:border-orange focus:ring-orange/15",
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${selectId}-error` : undefined}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p id={`${selectId}-error`} className="text-sm font-medium text-orange-dark" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
