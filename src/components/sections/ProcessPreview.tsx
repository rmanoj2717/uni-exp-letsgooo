import Link from "next/link";
import { processSteps } from "@/lib/constants/process-steps";
import { Section } from "@/components/ui/Section";

export function ProcessPreview() {
  return (
    <Section
      eyebrow="Your journey"
      title="A clear path from discovery to departure"
      subtitle="Structured, parent-friendly milestones so you always know what comes next."
      variant="navy"
      className="!py-12 md:!py-14 [&_header]:!mb-8 md:[&_header]:!mb-10"
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {processSteps.map((step) => (
          <div key={step.id} className="group relative">
            <span className="font-display text-6xl font-bold text-white/[0.08] transition-colors group-hover:text-white/12">
              {step.step}
            </span>
            <h3 className="mt-3 font-display text-lg font-bold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{step.summary}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t border-white/10 pt-6">
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-2 font-semibold text-cyan-bright transition-all duration-200 hover:gap-3 hover:text-white"
        >
          Explore our full process
          <span aria-hidden>→</span>
        </Link>
      </div>
    </Section>
  );
}
