import type { Metadata } from "next";
import Image from "next/image";
import { ServiceGridCard } from "@/components/services/ServiceGridCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaButton } from "@/components/cta/CtaButton";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/constants/services";
import { assetPath } from "@/lib/utils/asset-path";

const SERVICES_INTRO_IMAGE = assetPath("/images/services-intro-counselling.png");

export const metadata: Metadata = {
  title: "Services",
  description:
    "Profile evaluation, university shortlisting, essays, SAT/ACT/IELTS/TOEFL/GRE/GMAT test planning, scholarships, visa support, and more.",
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
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
              <div className="mx-auto mb-4 h-0.5 w-12 rounded-full bg-cyan lg:mx-0" aria-hidden />
              <h2 className="font-display text-balance text-2xl font-bold text-navy md:text-3xl">
                Support across every stage of the admissions journey
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted md:text-lg">
                From profile evaluation to final submission, UniExp Global helps students and families
                move through the process with structure, clarity, and confidence — including test
                planning for SAT, ACT, IELTS, TOEFL, GRE, and GMAT.
              </p>
            </div>
            <div className="relative mx-auto aspect-[5/4] w-full max-w-lg overflow-hidden rounded-2xl border border-border/70 shadow-[0_12px_40px_rgba(21,36,71,0.1)] md:rounded-3xl lg:max-w-none">
              <Image
                src={SERVICES_INTRO_IMAGE}
                alt="Counsellor guiding a student and parent through admissions planning"
                fill
                className="object-cover object-[center_40%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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
