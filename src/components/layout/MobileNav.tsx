"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CtaButton } from "@/components/cta/CtaButton";
import { mainNav } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      <div
        className="absolute inset-0 bg-navy-deep/60 backdrop-blur-md animate-fade-in"
        onClick={onClose}
        aria-hidden
      />
      <nav
        className="absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col bg-surface shadow-[-8px_0_40px_rgb(21_36_71/0.12)] animate-slide-in"
        aria-label="Mobile"
      >
        <div className="flex items-center justify-between border-b border-border/80 px-5 py-4">
          <span className="font-display text-lg font-bold text-navy">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-muted transition-colors hover:bg-off-white hover:text-navy"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-3">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "mb-1 block rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                pathname === item.href
                  ? "bg-cyan-soft text-navy"
                  : "text-muted hover:bg-off-white hover:text-navy",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="border-t border-border/80 bg-off-white/50 p-5">
          <CtaButton source="mobile-nav" className="w-full" size="lg" />
        </div>
      </nav>
    </div>
  );
}
