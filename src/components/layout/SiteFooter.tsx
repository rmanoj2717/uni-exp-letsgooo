import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/utils/asset-path";
import { PathwayLines } from "@/components/decorative/PathwayLines";
import { SectionCurve } from "@/components/decorative/SectionCurve";
import { contact, brand } from "@/lib/constants/contact";
import { mainNav } from "@/lib/constants/navigation";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <SectionCurve fill="navy-deep" position="top" className="-translate-y-px bg-surface" />
      <PathwayLines className="text-cyan opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Image
              src={assetPath("/brand/logo.png")}
              alt="UniExp Global"
              width={180}
              height={54}
              className="h-11 w-auto brightness-0 invert sm:h-12"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
              {brand.tagline}
            </p>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/45">
              {brand.ethicalNote}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow text-cyan-bright">Navigate</h3>
            <ul className="mt-5 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-cyan-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/sat-quiz"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-cyan-bright"
                >
                  Sample SAT Quiz
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="eyebrow text-cyan-bright">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <span className="text-white/50">{contact.india.label}: </span>
                <a
                  href={contact.india.phoneHref}
                  className="text-white/75 transition-colors duration-200 hover:text-white"
                >
                  {contact.india.phone}
                </a>
              </li>
              <li>
                <span className="text-white/50">{contact.usa.label}: </span>
                <a
                  href={contact.usa.phoneHref}
                  className="text-white/75 transition-colors duration-200 hover:text-white"
                >
                  {contact.usa.phone}
                </a>
              </li>
              <li>
                <span className="block text-white/50">Email</span>
                <a
                  href={contact.emailHref}
                  className="mt-1 block text-white/75 transition-colors duration-200 hover:text-white"
                >
                  {contact.email}
                </a>
                <a
                  href={contact.emailSecondaryHref}
                  className="mt-1 block text-white/75 transition-colors duration-200 hover:text-white"
                >
                  {contact.emailSecondary}
                </a>
              </li>
              <li>
                <a
                  href={contact.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 transition-colors duration-200 hover:text-white"
                >
                  {contact.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} UniExp Global. All rights reserved.</p>
          <p className="text-white/35">Your success partner in global university admissions</p>
        </div>
      </div>
    </footer>
  );
}
