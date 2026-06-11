import { Target } from "lucide-react";
import { importanceStyle } from "../config/importanceStyle";
import { InsightHeader } from "./InsightHeader";
import { Gap } from "@/entities/improvement";

export function Gaps({ gaps }: { gaps: Gap[] }) {
  return (
    <div className="h-full rounded-2xl border border-border bg-bg-surface p-6">
      <InsightHeader icon={<Target className="w-6 h-6" />} title="Skill Gaps" />
      <div className="mt-4 flex flex-col gap-3">
        {gaps?.map((gap, i) => {
          const { label, className: cls } = importanceStyle[gap.importance];
          return (
            <div
              key={i}
              className="rounded-xl border border-border bg-bg-muted/50 p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-bold text-foreground text-sm">
                  {gap.skill}
                </span>
                <span
                  className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold ${cls}`}
                >
                  {label} priority
                </span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {gap.suggestion}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
