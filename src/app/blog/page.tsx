import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { blogPostPreviews } from "@/lib/constants/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Study abroad insights for students and parents: admissions planning, destinations, tests, applications, and preparation.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Study abroad insights for students and parents"
        subtitle="Articles on university planning, destinations, applications, tests, scholarships, and preparing to study abroad."
      />

      <section className="section-pad bg-surface">
        <Container>
          <p className="mb-8 max-w-2xl text-muted md:mb-10">
            We are building a library of practical articles for students and families. These are
            the topics we will be covering first.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {blogPostPreviews.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
