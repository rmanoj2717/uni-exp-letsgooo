import { cn } from "@/lib/utils/cn";

export function PathwayLines({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <path
        d="M0 400 Q300 200 600 400 T1200 400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-cyan opacity-[0.12]"
      />
      <path
        d="M0 500 Q400 300 800 500 T1200 480"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="8 12"
        className="text-navy opacity-[0.08]"
      />
      <ellipse
        cx="600"
        cy="400"
        rx="280"
        ry="120"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-cyan opacity-[0.06]"
      />
    </svg>
  );
}
