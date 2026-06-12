"use client";

import { useMemo } from "react";
import type { InterviewQuestion, QuestionCategory } from "@/entities/interview";
import { CATEGORY_ICONS, CATEGORY_LABELS } from "../lib/constants";
import { QuestionCard } from "./QuestionCard";

interface QuestionBankProps {
  questions: InterviewQuestion[];
}

export function QuestionBank({ questions }: QuestionBankProps) {
  const grouped = useMemo(() => {
    const map = new Map<QuestionCategory, InterviewQuestion[]>();
    for (const q of questions) {
      const existing = map.get(q.category);
      if (existing) {
        existing.push(q);
      } else {
        map.set(q.category, [q]);
      }
    }
    return map;
  }, [questions]);

  if (questions.length === 0) {
    return (
      <p className="text-sm text-text-muted py-8 text-center">
        No questions match your selection.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {Array.from(grouped.entries()).map(([category, categoryQuestions]) => {
        const Icon = CATEGORY_ICONS[category];
        return (
          <section key={category}>
            <div className="flex items-center gap-2 mb-4">
              <Icon className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">
                {CATEGORY_LABELS[category]}
              </h3>
              <span className="text-xs text-text-muted bg-bg-muted px-2 py-0.5 rounded-full">
                {categoryQuestions.length}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
              {categoryQuestions.map((q) => (
                <QuestionCard key={q.id} question={q} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
