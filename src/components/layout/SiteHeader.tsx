"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CtaButton } from "@/components/cta/CtaButton";
import { MobileNav } from "./MobileNav";
import { mainNav } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-surface/90 shadow-[0_4px_24px_rgb(21_36_71/0.06)] backdrop-blur-lg"
          : "border-b border-transparent bg-surface",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-3 px-5 sm:px-6 lg:h-[4.75rem] lg:px-8">
        <Link href="/" className="relative flex shrink-0 items-center transition-opacity hover:opacity-90">
          <Image
            src="/brand/logo.png"
            alt="UniExp Global"
            width={168}
            height={50}
            className="h-9 w-auto object-contain sm:h-10 md:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors duration-200",
                  active
                    ? "bg-cyan-soft text-navy"
                    : "text-muted hover:bg-off-white hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <CtaButton
            source="header"
            size="sm"
            className="hidden min-[480px]:inline-flex"
          />
          <button
            type="button"
            className="inline-flex rounded-xl border border-border/80 p-2.5 text-navy transition-colors hover:border-cyan/40 hover:bg-cyan-soft/50 xl:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 7h16M4 12h16M4 17h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
