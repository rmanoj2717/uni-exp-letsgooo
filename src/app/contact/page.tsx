import type { Metadata } from "next";
import { ConsultationForm } from "@/components/cta/ConsultationForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { contact } from "@/lib/constants/contact";
import { registerModalIntro, registerModalTitle } from "@/lib/constants/register-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with UniExp Global for admissions counselling and registration.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact us"
        subtitle="We'd love to hear about your goals. Reach out or register below and our counsellors will follow up."
      />

      <section className="section-pad">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <Card>
                <h2 className="font-display text-lg font-bold text-navy">India</h2>
                <a
                  href={contact.india.phoneHref}
                  className="mt-2 block text-cyan hover:text-navy"
                >
                  {contact.india.phone}
                </a>
              </Card>
              <Card>
                <h2 className="font-display text-lg font-bold text-navy">USA</h2>
                <a href={contact.usa.phoneHref} className="mt-2 block text-cyan hover:text-navy">
                  {contact.usa.phone}
                </a>
              </Card>
              <Card>
                <h2 className="font-display text-lg font-bold text-navy">Email</h2>
                <div className="mt-2 space-y-1.5 text-sm">
                  <a href={contact.emailHref} className="block text-cyan hover:text-navy">
                    {contact.email}
                  </a>
                  <a
                    href={contact.emailSecondaryHref}
                    className="block text-cyan hover:text-navy"
                  >
                    {contact.emailSecondary}
                  </a>
                </div>
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
              <h2 className="font-display text-2xl font-bold text-navy">{registerModalTitle}</h2>
              <p className="mt-2 text-muted">{registerModalIntro}</p>
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
