import Image from "next/image";
import { credibilityPoints } from "@/lib/constants/stats";
import { assetPath } from "@/lib/utils/asset-path";
import { Container } from "@/components/ui/Container";

export function ParentFriendly() {
  return (
    <section className="section-pad bg-surface">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-cyan">Built for families</p>
            <h2 className="mt-3 font-display text-balance text-3xl font-bold leading-tight tracking-tight text-navy md:text-4xl">
              Clear, structured support — less overwhelming for parents and students
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We know this journey affects the whole family. Our counsellors communicate with
              clarity, set realistic timelines, and keep you informed at every stage.
            </p>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {credibilityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-navy">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15 text-xs font-bold text-orange"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-sm font-medium leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 shadow-[0_12px_40px_rgba(21,36,71,0.1)] md:rounded-3xl lg:aspect-[5/4]">
            <Image
              src={assetPath("/images/home-counseling-session.png")}
              alt="Counsellor and student in a one-on-one admissions planning session"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
