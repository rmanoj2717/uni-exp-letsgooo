import type { Metadata } from "next";
import { ConsultationForm } from "@/components/cta/ConsultationForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { contact } from "@/lib/constants/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with UniExp Global for a free admissions consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact us"
        subtitle="We'd love to hear about your goals. Reach out or book a free consultation below."
      />

      <section className="section-pad">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <h2 className="font-display text-lg font-bold text-navy">Email</h2>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-2 block text-cyan hover:text-navy"
                >
                  {contact.email}
                </a>
              </Card>
              <Card>
                <h2 className="font-display text-lg font-bold text-navy">Phone</h2>
                <a href={contact.phoneHref} className="mt-2 block text-cyan hover:text-navy">
                  {contact.phone}
                </a>
              </Card>
              <Card>
                <h2 className="font-display text-lg font-bold text-navy">Website</h2>
                <a
                  href={contact.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-cyan hover:text-navy"
                >
                  {contact.website}
                </a>
              </Card>
            </div>

            <Card className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-navy">
                Book a Free Consultation
              </h2>
              <p className="mt-2 text-muted">
                Tell us how we can help — we&apos;ll respond within 24 hours.
              </p>
              <div className="mt-6">
                <ConsultationForm source="contact-page" inline />
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
