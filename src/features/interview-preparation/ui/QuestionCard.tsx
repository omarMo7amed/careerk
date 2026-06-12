"use client";

import { useState } from "react";
import { Card, Badge, Button } from "@/shared";
import type { InterviewQuestion } from "@/entities/interview";
import { DIFFICULTY_BADGE } from "../lib/constants";
import { GuidanceModal } from "./GuidanceModal";

interface QuestionCardProps {
  question: InterviewQuestion;
}

export function QuestionCard({ question }: QuestionCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const badge = DIFFICULTY_BADGE[question.difficulty];

  return (
    <>
      <Card className="p-4 space-y-3">
        <p className="text-sm font-semibold text-text-secondary leading-relaxed">
          {question.question}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={badge.variant} size="sm">
            {badge.label}
          </Badge>
          <span className="text-xs text-text-muted">
            {question.estimatedTime}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {question.skills.map((skill) => (
            <Badge key={skill} variant="info" size="sm">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="pt-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setModalOpen(true)}
          >
            Show Guidance
          </Button>
        </div>
      </Card>

      <GuidanceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        question={question.question}
        guidance={question.guidance}
      />
    </>
  );
}
