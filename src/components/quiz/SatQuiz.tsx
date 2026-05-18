"use client";

import { useState } from "react";
import { QuizProgress } from "./QuizProgress";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResults } from "./QuizResults";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { satQuestions } from "@/lib/constants/sat-questions";

type Phase = "intro" | "quiz" | "results";

export function SatQuiz() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const current = satQuestions[currentIndex];
  const selected = current ? answers[current.id] ?? null : null;

  const score = satQuestions.reduce((acc, q) => {
    return answers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  if (phase === "intro") {
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-2xl font-bold text-navy">Sample SAT Quiz</h2>
        <p className="mt-3 text-muted">
          Five quick questions across reading, math, and writing. No timer — take your time and
          see where you stand.
        </p>
        <Button className="mt-8" size="lg" onClick={() => setPhase("quiz")}>
          Start quiz
        </Button>
      </Card>
    );
  }

  if (phase === "results") {
    return (
      <Card className="max-w-2xl mx-auto">
        <QuizResults
          score={score}
          total={satQuestions.length}
          onRetake={() => {
            setPhase("intro");
            setCurrentIndex(0);
            setAnswers({});
          }}
        />
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <QuizProgress current={currentIndex + 1} total={satQuestions.length} />
      <QuizQuestion
        question={current}
        selectedIndex={selected}
        onSelect={(index) => setAnswers({ ...answers, [current.id]: index })}
      />
      <div className="mt-8 flex justify-between gap-4">
        <Button
          type="button"
          variant="ghost"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => i - 1)}
        >
          Back
        </Button>
        <Button
          type="button"
          disabled={selected === null}
          onClick={() => {
            if (currentIndex < satQuestions.length - 1) {
              setCurrentIndex((i) => i + 1);
            } else {
              setPhase("results");
            }
          }}
        >
          {currentIndex < satQuestions.length - 1 ? "Next" : "See results"}
        </Button>
      </div>
    </Card>
  );
}
