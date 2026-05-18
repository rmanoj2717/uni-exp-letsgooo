"use client";

import { cn } from "@/lib/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2",
        "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "rounded-full bg-orange text-white shadow-[0_4px_14px_rgb(249_115_22/0.35)] hover:-translate-y-0.5 hover:bg-orange-dark hover:shadow-[0_6px_20px_rgb(249_115_22/0.4)]",
        variant === "secondary" &&
          "rounded-full bg-navy text-white shadow-[0_4px_14px_rgb(30_47_92/0.25)] hover:-translate-y-0.5 hover:bg-navy-light",
        variant === "outline" &&
          "rounded-full border-2 border-navy/15 bg-surface text-navy hover:-translate-y-0.5 hover:border-cyan/60 hover:bg-cyan-soft/50 hover:text-navy",
        variant === "ghost" &&
          "rounded-xl text-navy hover:bg-cyan-soft/80",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-2.5 text-sm tracking-wide",
        size === "lg" && "px-8 py-3.5 text-base tracking-wide",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
