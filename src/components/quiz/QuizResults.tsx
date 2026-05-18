"use client";

import { CtaButton } from "@/components/cta/CtaButton";
import { Button } from "@/components/ui/Button";

export function QuizResults({
  score,
  total,
  onRetake,
}: {
  score: number;
  total: number;
  onRetake: () => void;
}) {
  const percent = Math.round((score / total) * 100);

  let message = "Let's build your foundation together.";
  let detail =
    "A structured test plan can help you improve steadily — we'll map the right prep for your targets.";

  if (score >= 4) {
    message = "Strong progress — let's optimize.";
    detail =
      "You're on the right track. A counsellor can help fine-tune your strategy for your dream universities.";
  } else if (score >= 3) {
    message = "Good start with room to grow.";
    detail =
      "Focused practice on weaker areas can make a big difference. We'll help you prioritize.";
  }

  return (
    <div className="text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-cyan-soft">
        <span className="font-display text-3xl font-bold text-navy">
          {score}/{total}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium text-cyan">{percent}% correct</p>
      <h2 className="mt-6 font-display text-2xl font-bold text-navy">{message}</h2>
      <p className="mx-auto mt-3 max-w-md text-muted">{detail}</p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <CtaButton
          source="sat-quiz-results"
          label="Book a Free Consultation to Build Your Test Plan"
          size="lg"
        />
        <Button type="button" variant="outline" onClick={onRetake}>
          Retake quiz
        </Button>
      </div>
    </div>
  );
}
