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

const team: {
  id: string;
  role: string;
  name: string;
  bio: string;
  image?: string;
  initials?: string;
}[] = [
  {
    id: "raahul",
    role: "Cofounder",
    image: "/images/team-raahul-nair.png",
    name: "Raahul Nair",
    bio: "Raahul guides strategic growth and operational development at UniExp Global, helping expand access to international education through personalized guidance and mentorship. With a background spanning entrepreneurship, technology, and business development, he brings a practical, execution-driven approach to student-focused initiatives.",
  },
  {
    id: "kiran",
    role: "Cofounder, Director - Business Development & Partnerships",
    image: "/images/team-admissions-strategist.png",
    name: "Kiran Kumar Yellugari",
    bio: "With over 18+ years of experience as an entrepreneur, intrapreneur, investor, and mentor, Kiran has worked extensively across strategy, consulting, and business development. He brings a strong focus on partnerships, growth, and long-term value creation to UniExp Global.",
  },
  {
    id: "naveen",
    role: "Cofounder, Director - Marketing, Operations & Student Success",
    image: "/images/team-essay-specialist.png",
    name: "Naveen",
    bio: "Naveen leads marketing, operations, and student success at UniExp Global, helping ensure that students and families receive clear communication, structured support, and a smooth experience throughout the admissions journey.",
  },
  {
    id: "rishi",
    role: "Director - Technology & Compliance",
    image: "/images/team-rishi-manoj.png",
    name: "Rishi Manoj",
    bio: "Rishi leads technology and compliance initiatives at UniExp Global, supporting the systems, digital experience, and operational processes that help students and families navigate the admissions journey more efficiently. With a background in software development and product strategy, he helps connect the company's counseling model with reliable, scalable technology.",
  },
  {
    id: "danielle",
    role: "Student Profile Development Specialist",
    image: "/images/team-danielle-jones.png",
    name: "Danielle Jones",
    bio: "Danielle develops personalized academic and extracurricular profiles at UniExp Global, helping students build distinctive applications aligned with their strengths and long-term goals. With expertise in mentorship, positioning, and holistic profile development, she supports students in crafting competitive portfolios for international university admissions.",
  },
  {
    id: "brandon",
    role: "Subject Expert",
    image: "/images/team-brandon-kelly.png",
    name: "Brandon Kelly",
    bio: "Brandon brings years of higher education experience to UniExp Global as a Subject Expert, with director-level roles at Georgia State University, Johns Hopkins, and NYU/Rochester. He supports student profile development through academic enrichment, research and project guidance, leadership development, and subject-specific preparation to help students strengthen their candidacy for competitive global university admissions.",
  },
];

const aboutTrustChips = [
  "Profile-led planning",
  "Guidance built for families",
  "Clear admissions strategy",
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
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  role={member.role}
                  image={member.image}
                  initials={member.initials}
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
