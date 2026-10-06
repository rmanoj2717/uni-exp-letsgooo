import { Container } from "@/components/ui/Container";
import {
  compass360Audiences,
  compass360Promise,
} from "@/lib/constants/compass360";

export function Compass360PromiseAudience() {
  return (
    <section className="py-12 md:py-14">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <p className="eyebrow text-navy-light">Why Compass360</p>
            <h2 className="mt-3 font-display text-balance text-2xl font-bold leading-tight text-navy md:text-3xl">
              Clarity before you choose
            </h2>
            <p className="mt-4 leading-relaxed text-muted md:text-lg">
              Students are often asked to choose a course, country, or university before they have
              had the chance to understand what actually suits them. Compass360 gives them the space
              and guidance to work that out first.
            </p>

            <blockquote className="mt-8 border-l-2 border-cyan pl-5 md:pl-6">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-navy-light">
                The Compass360 Promise
              </p>
              <p className="mt-2.5 text-pretty font-display text-lg font-medium leading-relaxed text-navy md:text-xl">
                {compass360Promise}
              </p>
            </blockquote>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-navy md:text-xl">
              Who Compass360 is for
            </h3>
            <ul className="mt-5 border-t border-border/60">
              {compass360Audiences.map((audience) => (
                <li
                  key={audience}
                  className="flex items-start gap-3 border-b border-border/60 py-3"
                >
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-cyan"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M3 8.5 6.5 12 13 4.5" />
                  </svg>
                  <span className="text-[0.9375rem] leading-relaxed text-navy">{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
