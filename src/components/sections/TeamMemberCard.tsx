import Image from "next/image";
import { assetPath } from "@/lib/utils/asset-path";
import { cn } from "@/lib/utils/cn";

export type TeamMemberCardProps = {
  role: string;
  image?: string;
  initials?: string;
  name?: string;
  bio?: string;
};

export function TeamMemberCard({ role, image, initials, name, bio }: TeamMemberCardProps) {
  const hasProfile = Boolean(name && bio);
  const showInitials = !image && initials;

  return (
    <figure
      className="group overflow-hidden rounded-2xl border border-border/70 bg-surface shadow-[0_8px_28px_rgba(21,36,71,0.08)] md:rounded-3xl"
      tabIndex={hasProfile ? 0 : undefined}
    >
      <div className="relative aspect-square overflow-hidden">
        {image ? (
          <Image
            src={assetPath(image)}
            alt={name ?? role}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : showInitials ? (
          <div
            className={cn(
              "flex h-full w-full flex-col items-center justify-center",
              "bg-gradient-to-br from-cyan-soft/90 via-off-white to-surface",
            )}
            aria-hidden
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan/20 bg-surface/90 font-display text-2xl font-bold tracking-tight text-cyan shadow-[0_4px_16px_rgba(21,36,71,0.08)] sm:h-24 sm:w-24 sm:text-3xl">
              {initials}
            </span>
          </div>
        ) : null}

        {hasProfile && (
          <>
            <div
              className="pointer-events-none absolute inset-0 z-10 bg-navy/70 opacity-0 transition-opacity duration-300 ease-out [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 ease-out sm:p-5 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100">
              <p className="font-display text-lg font-bold leading-tight text-white sm:text-xl">
                {name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/90">{bio}</p>
            </div>
          </>
        )}
      </div>

      {hasProfile && (
        <div className="hidden border-t border-border/70 bg-surface px-4 py-4 [@media(hover:none)]:block">
          <p className="font-display text-base font-bold text-navy">{name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{bio}</p>
        </div>
      )}

      <figcaption className="border-t border-border/70 bg-surface px-4 py-3 text-center text-xs font-semibold leading-snug text-navy sm:text-sm">
        {role}
      </figcaption>
    </figure>
  );
}
