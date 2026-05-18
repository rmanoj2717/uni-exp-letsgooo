import type { Metadata } from "next";
import { PageCtaBand } from "@/components/sections/PageCtaBand";
import { EthicsBanner } from "@/components/sections/EthicsBanner";
import { TeamMemberCard } from "@/components/sections/TeamMemberCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/constants/contact";

export const metadata: Metadata = {
  title: "About",
  description:
    "UniExp Global — your success partner in top global university admissions.",
};

const team = [
  {
    role: "Admissions Strategist",
    image: "/images/team-admissions-strategist.png",
    name: "Kiran Kumar Yellugari",
    bio: "With over 18+ years of experience as an entrepreneur, intrapreneur, investor, and mentor, Kiran has worked extensively across strategy, consulting, and business development.",
  },
  {
    role: "Essay Specialist",
    image: "/images/team-essay-specialist.png",
    name: "Naveen",
    bio: "Naveen is a passionate and experienced edupreneur who has mentored thousands of students in his journey of 20+ years in the education space into teaching, student development, educational branding, content development and strategy.",
  },
];

const aboutTrustChips = [
  "Profile-led strategy",
  "Parent-friendly guidance",
  "Fit-first recommendations",
] as const;

const values = [
  {
    title: "Fit over rankings",
    description: "We recommend universities for long-term value and student goals.",
  },
  {
    title: "Family-first clarity",
    description: "Structured communication that keeps parents and students aligned.",
  },
  {
    title: "Data-informed strategy",
    description: "Shortlists and timelines backed by admissions insight, not guesswork.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About UniExp Global" subtitle={brand.tagline} />
      <EthicsBanner />

      <section className="section-pad">
        <Container>
          <div className="mx-auto max-w-[760px] px-2 text-center sm:px-0">
            <div
              className="mx-auto mb-7 h-0.5 w-12 rounded-full bg-cyan sm:mb-8"
              aria-hidden
            />
            <h2 className="font-display text-balance text-3xl font-bold tracking-tight text-navy sm:text-4xl sm:leading-[1.12] md:text-[2.35rem] md:leading-[1.1]">
              {brand.subtagline}
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted sm:mt-7">
              UniExp helps students and families with university shortlisting, admissions strategy,
              applications, essays, scholarships, test planning, visa guidance, and pre-departure
              support. Our process is designed to feel clear, structured, and less overwhelming —
              for students and parents alike.
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-9">
              {aboutTrustChips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-border/80 bg-off-white px-3.5 py-1.5 text-xs font-medium text-navy/85 shadow-[0_1px_0_rgba(21,36,71,0.04)] sm:text-sm"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} accent="cyan">
                <h3 className="font-display text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{v.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold text-navy">Meet Our Team</h2>
            <p className="mt-2 text-muted">Dedicated specialists supporting your admissions journey.</p>
            <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
              {team.map((member) => (
                <TeamMemberCard
                  key={member.role}
                  role={member.role}
                  image={member.image}
                  name={member.name}
                  bio={member.bio}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <PageCtaBand source="about" />
    </>
  );
}
