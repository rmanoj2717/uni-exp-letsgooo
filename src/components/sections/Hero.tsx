import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/cta/CtaButton";
import { HeroStatsStrip } from "./HeroStatsStrip";
import { Container } from "@/components/ui/Container";
import { assetPath } from "@/lib/utils/asset-path";

const HERO_IMAGE = assetPath("/images/home-hero-path-forward.png");

const heroHeadline = "A clearer path to global university admissions.";
const heroSubheadline =
  "UniExp Global helps students and families plan, shortlist, apply, and prepare for top universities abroad with profile-led strategy and end-to-end counselling support.";

const admissionsPath = [
  "Profile Review",
  "Shortlist",
  "Essays",
  "Applications",
  "Visa Prep",
] as const;

const trustBadges = [
  "Balanced university recommendations",
  "Parent & student counselling",
  "End-to-end family support",
] as const;

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#152447] via-[#14213f] to-[#0e1a32]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_38%,rgba(45,184,232,0.07),transparent_68%)]"
          aria-hidden
        />

        <Container className="relative z-10 py-8 sm:py-10 md:py-11 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
            <div className="animate-fade-up flex min-w-0 flex-col lg:max-w-xl">
              <p className="mb-4 text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-cyan-bright/70 sm:mb-5 sm:text-sm sm:tracking-[0.18em]">
                Guiding students. Supporting parents.
              </p>

              <h1 className="font-display max-w-[16ch] text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:max-w-[18ch] sm:text-5xl md:text-[3.15rem] md:leading-[1.06] lg:text-[3.35rem]">
                {heroHeadline}
              </h1>

              <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/76 sm:mt-5 sm:text-xl sm:leading-relaxed">
                {heroSubheadline}
              </p>

              <div className="mt-7 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap">
                <CtaButton source="hero" size="lg" className="w-full sm:w-auto" />
                <Link
                  href="/how-it-works"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-white/10 hover:text-cyan-bright sm:w-auto"
                >
                  See Our Process
                </Link>
              </div>

              <ul className="mt-5 flex max-w-2xl flex-wrap gap-2 sm:mt-6">
                {trustBadges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/72 sm:text-sm"
                  >
                    {badge}
                  </li>
                ))}
              </ul>

              <nav
                className="mt-7 w-full max-w-2xl border-t border-white/10 pt-6 sm:mt-8 sm:pt-7"
                aria-label="Admissions pathway"
              >
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-bright/70">
                  Your admissions path
                </p>
                <ol className="flex flex-wrap items-center gap-x-1 gap-y-2 text-sm sm:gap-x-1.5 sm:text-[0.9375rem]">
                  {admissionsPath.map((step, index) => (
                    <li key={step} className="flex items-center gap-1 sm:gap-1.5">
                      <span className="font-medium text-white/86">{step}</span>
                      {index < admissionsPath.length - 1 && (
                        <span className="text-cyan/40" aria-hidden>
                          →
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            <div className="animate-fade-up relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.35)] sm:aspect-[16/9] lg:mx-0 lg:max-w-none">
              <Image
                src={HERO_IMAGE}
                alt="Student and parent in a university admissions consultation with a counsellor"
                fill
                className="object-cover object-[72%_center]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deep/50 via-transparent to-transparent lg:from-navy-deep/30"
                aria-hidden
              />
            </div>
          </div>
        </Container>
      </section>

      <section
        className="relative bg-gradient-to-b from-[#ebe6de] via-[#f2efe9] to-[#f7f4ef] pb-8 pt-3 sm:pb-9 sm:pt-4 md:pb-10"
        aria-label="Credibility highlights"
      >
        <Container className="relative z-10 -mt-5 sm:-mt-6 md:-mt-7">
          <HeroStatsStrip />
        </Container>
      </section>
    </>
  );
}
