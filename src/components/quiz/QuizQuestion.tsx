"use client";

import type { QuizQuestion as QuizQuestionType } from "@/types";
import { cn } from "@/lib/utils/cn";

export function QuizQuestion({
  question,
  selectedIndex,
  onSelect,
}: {
  question: QuizQuestionType;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
}) {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-wider text-cyan">
        {question.category}
      </span>
      {question.passage && (
        <blockquote className="mt-4 rounded-xl border-l-4 border-cyan bg-cyan-soft/50 p-4 text-navy italic">
          {question.passage}
        </blockquote>
      )}
      <p className="mt-4 font-display text-xl font-semibold text-navy">{question.question}</p>
      <ul className="mt-6 space-y-3" role="radiogroup">
        {question.options.map((option, index) => (
          <li key={option}>
            <button
              type="button"
              role="radio"
              aria-checked={selectedIndex === index}
              onClick={() => onSelect(index)}
              className={cn(
                "w-full rounded-xl border px-4 py-3 text-left text-sm transition-all",
                selectedIndex === index
                  ? "border-cyan bg-cyan-soft font-medium text-navy ring-2 ring-cyan/30"
                  : "border-border bg-surface text-muted hover:border-cyan/50 hover:text-navy",
              )}
            >
              <span className="mr-3 font-semibold text-cyan">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
