import type { QuizQuestion } from "@/types";

export const satQuestions: QuizQuestion[] = [
  {
    id: "q1",
    category: "reading",
    passage:
      "The counsellor emphasized that profile-led recommendations consider a student's long-term goals, not just rankings.",
    question:
      "As used in the passage, \"profile-led\" most nearly means prioritizing universities that —",
    options: [
      "have the highest global rankings",
      "align with the student's goals and profile",
      "offer the largest scholarships",
      "are easiest to gain admission to",
    ],
    correctIndex: 1,
  },
  {
    id: "q2",
    category: "math",
    question:
      "If a student completes 3 of 12 application tasks each week at a constant rate, how many weeks will it take to finish all tasks?",
    options: ["3 weeks", "4 weeks", "6 weeks", "9 weeks"],
    correctIndex: 1,
  },
  {
    id: "q3",
    category: "reading",
    passage:
      "Although the deadline seemed distant, starting essays early reduced last-minute stress for the entire family.",
    question: "The main idea of the passage is that —",
    options: [
      "deadlines are rarely important",
      "families should avoid discussing applications",
      "early preparation reduces stress",
      "essays should be written in one sitting",
    ],
    correctIndex: 2,
  },
  {
    id: "q4",
    category: "math",
    question: "If 5x + 15 = 40, what is the value of x?",
    options: ["3", "5", "7", "11"],
    correctIndex: 1,
  },
  {
    id: "q5",
    category: "writing",
    question:
      "Which choice completes the sentence with correct grammar? \"The student, along with her counsellor, ___ preparing the shortlist.\"",
    options: ["are", "is", "were", "have been"],
    correctIndex: 1,
  },
];
