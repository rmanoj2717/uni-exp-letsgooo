import { contact } from "@/lib/constants/contact";
import { cn } from "@/lib/utils/cn";

export function ContactInfoBlock({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const linkClass =
    variant === "dark"
      ? "text-white/75 transition-colors hover:text-white"
      : "text-cyan transition-colors hover:text-navy";

  const labelClass =
    variant === "dark" ? "text-white/50" : "text-muted";

  const textClass = variant === "dark" ? "text-white/85" : "text-navy";

  return (
    <div
      className={cn(
        "space-y-2 text-sm",
        variant === "light" && "rounded-xl border border-border/60 bg-off-white/60 px-4 py-3.5",
        className,
      )}
    >
      <p className={cn("text-xs font-semibold uppercase tracking-[0.08em]", labelClass)}>
        Contact us
      </p>
      <ul className={cn("space-y-1.5", textClass)}>
        <li>
          <span className={labelClass}>{contact.india.label}: </span>
          <a href={contact.india.phoneHref} className={linkClass}>
            {contact.india.phone}
          </a>
        </li>
        <li>
          <span className={labelClass}>{contact.usa.label}: </span>
          <a href={contact.usa.phoneHref} className={linkClass}>
            {contact.usa.phone}
          </a>
        </li>
        <li>
          <a href={contact.emailHref} className={linkClass}>
            {contact.email}
          </a>
        </li>
        <li>
          <a href={contact.emailSecondaryHref} className={linkClass}>
            {contact.emailSecondary}
          </a>
        </li>
        {variant === "light" && (
          <li>
            <a
              href={contact.websiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {contact.website}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
