export type BlogPostPreview = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

export const blogPostPreviews: BlogPostPreview[] = [
  {
    id: "choose-destination",
    category: "Destination Planning",
    title: "How to Choose the Right Study Abroad Destination",
    description:
      "A practical guide for families comparing countries based on academics, budget, career goals, and long-term fit.",
    image: "/images/destination-usa-campus-atmosphere.png",
  },
  {
    id: "when-to-start",
    category: "Admissions Timeline",
    title: "When Should Students Start Planning for Abroad Admissions?",
    description:
      "How early planning helps students build stronger profiles, reduce stress, and make better application decisions.",
    image: "/images/home-approach-strategy-desk.png",
  },
  {
    id: "which-test",
    category: "Test Prep",
    title: "SAT, IELTS, TOEFL: Which Test Do You Need?",
    description:
      "A simple breakdown of common test requirements and how they connect to university admissions.",
    image: "/images/blog-test-prep-choice-thumb.png",
  },
  {
    id: "balanced-shortlist",
    category: "Application Strategy",
    title: "How to Build a Balanced University Shortlist",
    description: "Why reach, match, and safety choices matter when applying abroad.",
    image: "/images/blog-balanced-shortlist-thumb.png",
  },
  {
    id: "parents-guide",
    category: "Family Guidance",
    title: "What Parents Should Know About Global Admissions",
    description:
      "Key things families should understand about timelines, documents, essays, costs, and decision-making.",
    image: "/images/blog-parents-guide-thumb.png",
  },
];
