import Link from "next/link";

export function Compass360FeaturedBanner() {
  return (
    <aside className="rounded-2xl border border-border/70 bg-off-white px-6 py-7 md:rounded-3xl md:px-9 md:py-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <p className="eyebrow text-navy-light">Looking for direction before applications?</p>
          <h2 className="mt-3 font-display text-xl font-bold text-navy md:text-2xl">Compass360</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Compass360 brings together assessments, one-to-one counselling, course and university
            fit, and a personalised development plan to help students decide what to pursue next.
          </p>
        </div>

        <Link
          href="/compass360"
          className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border-2 border-navy/15 bg-surface px-7 py-3 text-sm font-semibold text-navy shadow-[0_2px_12px_rgba(21,36,71,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-cyan-soft/40 hover:text-navy lg:self-auto"
        >
          Explore Compass360
          <span aria-hidden>→</span>
        </Link>
      </div>
    </aside>
  );
}
