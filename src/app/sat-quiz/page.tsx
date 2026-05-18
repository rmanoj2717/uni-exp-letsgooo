import type { Metadata } from "next";
import { SatQuiz } from "@/components/quiz/SatQuiz";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Sample SAT Quiz",
  description: "Try a 5-question sample SAT quiz and book a consultation to build your test plan.",
};

export default function SatQuizPage() {
  return (
    <>
      <PageHeader
        title="Sample SAT Quiz"
        subtitle="Five questions to preview our approach — then speak with a counsellor about your personalized test plan."
      />
      <section className="section-pad">
        <Container>
          <SatQuiz />
        </Container>
      </section>
    </>
  );
}
