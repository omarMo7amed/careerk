import { CheckCircle2 } from "lucide-react";
import { InsightHeader } from "./InsightHeader";

export function Strengths({ strengths }: { strengths: string[] }) {
  return (
    <div className="rounded-2xl border border-success/25 bg-success/5 p-6">
      <InsightHeader
        icon={<CheckCircle2 className="w-6 h-6" />}
        title="Strengths"
      />
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {strengths.map((s, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 bg-bg-surface rounded-xl px-4 py-3 border border-success/15 text-sm text-text-secondary"
          >
            <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
