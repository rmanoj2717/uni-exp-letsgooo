import { cn } from "@/lib/utils/cn";

export function Textarea({
  label,
  error,
  className,
  id,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
}) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-semibold text-navy">
        {label}
      </label>
      <textarea
        id={inputId}
        rows={4}
        className={cn(
          "w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-navy shadow-sm transition-all duration-200 placeholder:text-muted/50",
          "focus:border-cyan focus:outline-none focus:ring-[3px] focus:ring-cyan/15",
          error && "border-orange focus:border-orange focus:ring-orange/15",
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-sm font-medium text-orange-dark" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
