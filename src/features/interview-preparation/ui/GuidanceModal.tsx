"use client";

import { Modal } from "@/shared";
import type { Guidance } from "@/entities/interview";

interface GuidanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: string;
  guidance: Guidance;
}

export function GuidanceModal({ isOpen, onClose, question, guidance }: GuidanceModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Answer Guidance" maxWidth="lg">
      <div className="max-h-[70vh] overflow-y-auto space-y-6 pr-1">
        <p className="text-sm text-text-secondary leading-relaxed">{question}</p>

        <Section title="Key Points Expected" items={guidance.keyPoints} />
        <Section title="Common Mistakes to Avoid" items={guidance.commonMistakes} />
        <Section title="Suggested Answer Structure" items={guidance.answerStructure} />
      </div>
    </Modal>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-2">{title}</h4>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
