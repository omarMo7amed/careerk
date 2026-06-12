"use client";
import { Modal } from "@/shared";
import type { Guidance } from "@/entities/interview";

interface GuidanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: string;
  guidance: Guidance;
}

type SectionColor = "blue" | "red" | "green";

const sectionColorMap: Record<
  SectionColor,
  {
    heading: string;
    dot: string;
    badge: string;
    border: string;
  }
> = {
  blue: {
    heading: "text-primary",
    dot: "bg-primary/60",
    badge: "bg-primary/10 text-primary border-primary/20",
    border: "border-l-2 border-primary/30 pl-3",
  },
  red: {
    heading: "text-error",
    dot: "bg-error/60",
    badge: "bg-error/10 text-error border-error/20",
    border: "border-l-2 border-error/30 pl-3",
  },
  green: {
    heading: "text-success",
    dot: "bg-success/60",
    badge: "bg-success/10 text-success border-success/20",
    border: "border-l-2 border-success/30 pl-3",
  },
};

export function GuidanceModal({
  isOpen,
  onClose,
  question,
  guidance,
}: GuidanceModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Answer Guidance"
      maxWidth="lg"
    >
      <div className="max-h-[70vh] overflow-y-auto space-y-6 pr-1">
        <p className="text-sm text-text-secondary leading-relaxed bg-bg-muted rounded-md px-3 py-2 border border-border">
          {question}
        </p>
        <Section
          title="Key Points Expected"
          items={guidance.keyPoints}
          color="blue"
        />
        <Section
          title="Common Mistakes to Avoid"
          items={guidance.commonMistakes}
          color="red"
        />
        <Section
          title="Suggested Answer Structure"
          items={guidance.answerStructure}
          color="green"
        />
      </div>
    </Modal>
  );
}

function Section({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: SectionColor;
}) {
  const styles = sectionColorMap[color];
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${styles.badge}`}
        >
          {items.length}
        </span>
        <h4 className={`text-sm font-semibold ${styles.heading}`}>{title}</h4>
      </div>
      <ul className={`space-y-2 ${styles.border}`}>
        {items.map((item, i) => (
          <li
            key={i}
            className="text-sm text-text-secondary flex items-start gap-2"
          >
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${styles.dot}`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
