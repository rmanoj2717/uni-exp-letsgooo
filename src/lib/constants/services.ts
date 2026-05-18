import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "profile-evaluation",
    title: "Profile Evaluation & Personalized Counselling",
    summary:
      "A deep dive into academics, goals, and strengths to shape a clear admissions direction.",
    description:
      "We start by understanding the student's academic background, strengths, interests, goals, and family priorities. This gives us the foundation to create a personalized admissions direction instead of offering generic university advice.",
    helpWith: [
      "Academic and extracurricular profile review",
      "Goals, interests, and destination preferences",
      "Clear next steps for the student's stage",
    ],
    icon: "profile",
  },
  {
    id: "shortlisting",
    title: "University Shortlisting",
    summary: "Data-driven, fit-first university lists aligned with your profile and ambitions.",
    description:
      "We build a balanced university list based on academic fit, career goals, budget, location preferences, and long-term value. Families receive reach, match, and safety options so they can make decisions with more clarity and confidence.",
    helpWith: [
      "Reach, match, and safety planning",
      "Country, program, and university fit",
      "Budget, ROI, and scholarship considerations",
    ],
    icon: "list",
  },
  {
    id: "strategy",
    title: "Application Strategy & Timeline",
    summary: "Structured milestones so applications stay on track and stress stays low.",
    description:
      "We turn the admissions process into a clear roadmap with milestones, deadlines, and priorities. This helps students stay organized while reducing last-minute pressure for parents and families.",
    helpWith: [
      "Application calendar and key deadlines",
      "Test, essay, and document planning",
      "Monthly action steps and progress tracking",
    ],
    icon: "calendar",
  },
  {
    id: "resume",
    title: "Resume / CV Tailoring",
    summary: "Polished, university-ready documents that highlight impact and clarity.",
    description:
      "We help students present academics, achievements, activities, projects, and leadership experience in a clear and compelling format. The goal is to create a university-ready document that supports the student's overall application story.",
    helpWith: [
      "Activity and achievement organization",
      "Resume/CV structure and wording",
      "Stronger academic and extracurricular positioning",
    ],
    icon: "doc",
  },
  {
    id: "essays",
    title: "Essay / SOP Guidance",
    summary: "Authentic storytelling that reflects who you are and what you bring.",
    description:
      "Essays and SOPs should feel authentic while clearly showing purpose, fit, and potential. We help students shape their story, refine their message, and avoid generic writing that does not stand out.",
    helpWith: [
      "Topic selection and story development",
      "Draft review and structured feedback",
      "Final polishing for clarity and impact",
    ],
    icon: "pen",
  },
  {
    id: "lor",
    title: "LOR Support",
    summary: "Guidance for recommenders so letters reinforce your strongest narrative.",
    description:
      "Strong recommendation letters reinforce the student's strengths and support the overall application narrative. We guide students on choosing the right recommenders and preparing context that helps recommenders write stronger letters.",
    helpWith: [
      "Recommender selection strategy",
      "LOR guidance and context notes",
      "Alignment with the application story",
    ],
    icon: "letter",
  },
  {
    id: "extracurricular",
    title: "Extracurricular & Profile Building",
    summary: "Holistic development plans that strengthen your candidacy over time.",
    description:
      "For students with time before applications, we help build a stronger profile through meaningful activities, projects, competitions, volunteering, and leadership. The focus is depth, authenticity, and long-term growth, not random activity stacking.",
    helpWith: [
      "Activity planning and prioritization",
      "Leadership and project development",
      "Building a standout profile over time",
    ],
    icon: "star",
  },
  {
    id: "test-prep",
    title: "Test Preparation Support",
    summary: "SAT, ACT, IELTS, and more — structured prep aligned with your target schools.",
    description:
      "We help students understand which tests matter for their target universities and when to take them. Test prep should support the admissions timeline instead of becoming a separate source of stress.",
    helpWith: [
      "SAT, ACT, IELTS, TOEFL, GRE, or GMAT planning",
      "Score goals and retake strategy",
      "Test timelines connected to applications",
    ],
    icon: "test",
  },
  {
    id: "scholarships",
    title: "Financial Aid & Scholarship Guidance",
    summary: "Identify funding opportunities and present compelling aid applications.",
    description:
      "We help families identify scholarship and financial aid opportunities that match the student's profile and target universities. Cost, value, and long-term outcomes stay part of the decision-making process.",
    helpWith: [
      "Scholarship opportunity identification",
      "Financial aid documentation guidance",
      "Cost and value comparison across options",
    ],
    icon: "aid",
  },
  {
    id: "review",
    title: "Application Review & Submission",
    summary: "Meticulous checks before every submission so nothing slips through.",
    description:
      "Before submission, every detail matters. We review applications for accuracy, completeness, consistency, and alignment with the student's overall story so nothing important slips through.",
    helpWith: [
      "Final application checks",
      "Document and deadline review",
      "Submission tracking and quality control",
    ],
    icon: "check",
  },
  {
    id: "interview",
    title: "Interview Preparation",
    summary: "Mock sessions and feedback to help you communicate with confidence.",
    description:
      "For programs or universities that require interviews, we help students prepare with clarity and confidence. Students practice communicating their goals, strengths, and fit in a natural and polished way.",
    helpWith: [
      "Mock interview practice",
      "Common question preparation",
      "Confidence, clarity, and communication coaching",
    ],
    icon: "mic",
  },
  {
    id: "visa",
    title: "Visa & Pre-Departure Support",
    summary: "From visa documentation to departure readiness — support through takeoff.",
    description:
      "After admissions decisions arrive, families still need support with visas, documents, travel planning, and the transition to campus. We help students and parents prepare for the next stage with confidence.",
    helpWith: [
      "Visa and document guidance",
      "Pre-departure checklist",
      "Parent and student transition support",
    ],
    icon: "plane",
  },
];
