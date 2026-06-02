import type { DestinationTheme } from "@/types";
import { cn } from "@/lib/utils/cn";

const accentStrip: Record<DestinationTheme, string> = {
  usa: "from-[#b22234]/70 via-[#3c3b6e]/50 to-transparent",
  uk: "from-[#012169]/65 via-[#c8102e]/40 to-transparent",
  canada: "from-[#d80621]/60 via-[#ffffff]/30 to-[#d80621]/50",
  australia: "from-[#012169]/55 via-[#e4002b]/35 to-transparent",
  germany: "from-[#000000]/50 via-[#dd0000]/45 to-[#ffce00]/40",
  france: "from-[#002395]/55 via-[#ffffff]/25 to-[#ed2939]/45",
  netherlands: "from-[#ae1c28]/55 via-[#ffffff]/25 to-[#21468b]/45",
  japan: "from-[#ffffff]/30 via-[#bc002d]/45 to-transparent",
  uae: "from-[#00732f]/50 via-[#ffffff]/20 to-[#ff0000]/45",
  singapore: "from-[#ed2939]/55 via-[#ffffff]/25 to-transparent",
  ireland: "from-[#169b62]/50 via-[#ffffff]/25 to-[#ff883e]/40",
  newzealand: "from-[#00247d]/55 via-[#ffffff]/20 to-[#cc142b]/45",
};

function FlagSvg({ theme, className }: { theme: DestinationTheme; className?: string }) {
  switch (theme) {
    case "usa":
      return (
        <svg viewBox="0 0 28 20" className={className} aria-hidden>
          <rect width="28" height="20" fill="#b22234" />
          <path fill="#fff" d="M0 2h28M0 6h28M0 10h28M0 14h28M0 18h28" stroke="#fff" strokeWidth="2" />
          <rect width="11" height="11" fill="#3c3b6e" />
        </svg>
      );
    case "uk":
      return (
        <svg viewBox="0 0 28 20" className={className} aria-hidden>
          <rect width="28" height="20" fill="#012169" />
          <path stroke="#fff" strokeWidth="3" d="M0 0l28 20M28 0L0 20" />
          <path stroke="#c8102e" strokeWidth="1.5" d="M0 0l28 20M28 0L0 20" />
          <path stroke="#fff" strokeWidth="5" d="M14 0v20M0 10h28" />
          <path stroke="#c8102e" strokeWidth="2.5" d="M14 0v20M0 10h28" />
        </svg>
      );
    case "canada":
      return (
        <svg viewBox="0 0 28 20" className={className} aria-hidden>
          <rect width="9" height="20" fill="#d80621" />
          <rect x="9" width="10" height="20" fill="#fff" />
          <rect x="19" width="9" height="20" fill="#d80621" />
          <path fill="#d80621" d="M14 6l1.2 2.5H18l-2 1.8.8 2.7-2.8-1.6-2.8 1.6.8-2.7-2-1.8h2.8z" />
        </svg>
      );
    case "australia":
      return (
        <svg viewBox="0 0 28 20" className={className} aria-hidden>
          <rect width="28" height="20" fill="#012169" />
          <rect width="12" height="10" fill="#012169" />
          <path stroke="#fff" strokeWidth="1.2" d="M0 0l12 10M12 0L0 10M6 0v10M0 5h12" />
          <circle cx="20" cy="14" r="1.2" fill="#fff" />
          <circle cx="23" cy="8" r="1" fill="#fff" />
          <circle cx="18" cy="6" r="0.9" fill="#fff" />
        </svg>
      );
    case "germany":
      return (
        <svg viewBox="0 0 28 20" className={className} aria-hidden>
          <rect width="28" height="6.67" y="0" fill="#000" />
          <rect width="28" height="6.67" y="6.67" fill="#dd0000" />
          <rect width="28" height="6.66" y="13.34" fill="#ffce00" />
        </svg>
      );
    case "france":
      return (
        <svg viewBox="0 0 28 20" className={className} aria-hidden>
          <rect width="9.33" height="20" fill="#002395" />
          <rect x="9.33" width="9.34" height="20" fill="#fff" />
          <rect x="18.67" width="9.33" height="20" fill="#ed2939" />
        </svg>
      );
    case "netherlands":
      return (
        <svg viewBox="0 0 28 20" className={className} aria-hidden>
          <rect width="28" height="6.67" fill="#ae1c28" />
          <rect y="6.67" width="28" height="6.66" fill="#fff" />
          <rect y="13.33" width="28" height="6.67" fill="#21468b" />
        </svg>
      );
    case "japan":
      return (
        <svg viewBox="0 0 28 20" className={className} aria-hidden>
          <rect width="28" height="20" fill="#fff" />
          <circle cx="14" cy="10" r="5" fill="#bc002d" />
        </svg>
      );
    case "uae":
      return (
        <svg viewBox="0 0 28 20" className={className} aria-hidden>
          <rect width="6" height="20" fill="#ff0000" />
          <rect x="6" width="22" height="6.67" fill="#00732f" />
          <rect x="6" y="6.67" width="22" height="6.66" fill="#fff" />
          <rect x="6" y="13.33" width="22" height="6.67" fill="#000" />
        </svg>
      );
    case "singapore":
      return (
        <svg viewBox="0 0 28 20" className={className} aria-hidden>
          <rect width="28" height="10" fill="#ed2939" />
          <rect y="10" width="28" height="10" fill="#fff" />
          <circle cx="8" cy="7" r="3" fill="#fff" />
          <circle cx="9" cy="7" r="2.2" fill="#ed2939" />
          <circle cx="11.5" cy="7" r="0.7" fill="#fff" />
        </svg>
      );
    case "ireland":
      return (
        <svg viewBox="0 0 28 20" className={className} aria-hidden>
          <rect width="11" height="20" fill="#169b62" />
          <rect x="11" width="6" height="20" fill="#fff" />
          <rect x="17" width="11" height="20" fill="#ff883e" />
        </svg>
      );
    case "newzealand":
      return (
        <svg viewBox="0 0 28 20" className={className} aria-hidden>
          <rect width="28" height="20" fill="#00247d" />
          <rect width="12" height="10" fill="#012169" />
          <path d="M0 0 L12 10 M12 0 L0 10" stroke="#fff" strokeWidth="1.2" />
          <path d="M0 0 L12 10 M12 0 L0 10" stroke="#c8102e" strokeWidth="0.6" />
          <circle cx="20" cy="6" r="1" fill="#fff" />
          <circle cx="23" cy="9" r="0.8" fill="#fff" />
          <circle cx="21" cy="12" r="0.9" fill="#fff" />
          <circle cx="17" cy="10" r="0.7" fill="#fff" />
        </svg>
      );
    default:
      return null;
  }
}

export function CountryFlagBadge({
  theme,
  countryName,
  className,
}: {
  theme: DestinationTheme;
  countryName: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center overflow-hidden rounded-md border border-border/60 bg-surface shadow-[0_1px_3px_rgba(21,36,71,0.06)]",
        className,
      )}
      title={countryName}
      aria-label={`${countryName} flag`}
    >
      <FlagSvg theme={theme} className="h-[18px] w-[26px] object-cover" />
    </span>
  );
}

export function DestinationAccentStrip({ theme }: { theme: DestinationTheme }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r",
        accentStrip[theme],
      )}
      aria-hidden
    />
  );
}
