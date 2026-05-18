import type { Metadata } from "next";
import { ServiceGridCard } from "@/components/services/ServiceGridCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaButton } from "@/components/cta/CtaButton";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/constants/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Profile evaluation, university shortlisting, essays, test prep, scholarships, visa support, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Admissions services"
        subtitle="End-to-end counselling designed for ambitious students and supportive families."
      />

      <section className="py-12 md:py-14">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-0.5 w-12 rounded-full bg-cyan" aria-hidden />
            <h2 className="font-display text-balance text-2xl font-bold text-navy md:text-3xl">
              Support across every stage of the admissions journey
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted md:text-lg">
              From profile evaluation to final submission, UniExp Global helps students and families
              move through the process with structure, clarity, and confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-7 lg:mt-12 lg:gap-8">
            {services.map((service, index) => (
              <ServiceGridCard
                key={service.id}
                index={index}
                title={service.title}
                description={service.description}
                helpWith={service.helpWith}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border/60 bg-gradient-to-br from-cyan-soft/50 via-off-white to-surface py-12 md:py-14">
        <Container>
          <div className="mx-auto max-w-2xl rounded-2xl border border-cyan/15 bg-surface/90 px-6 py-10 text-center shadow-[0_8px_32px_rgba(21,36,71,0.06)] md:rounded-3xl md:px-10 md:py-12">
            <h2 className="font-display text-balance text-2xl font-bold text-navy md:text-3xl">
              Not sure where your student needs support?
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted">
              Start with a consultation and we&apos;ll help identify the right next steps based on
              your profile, timeline, and target destinations.
            </p>
            <div className="mt-7 flex justify-center">
              <CtaButton source="services-consultation" size="lg" label="Book a Free Consultation" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
