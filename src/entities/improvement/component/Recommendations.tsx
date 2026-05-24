import { Lightbulb } from "lucide-react";
import { InsightHeader } from "./InsightHeader";

export function Recommendations({
  recommendations,
}: {
  recommendations: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-linear-to-b from-bg-surface to-bg-muted/30 p-8 shadow-xl shadow-black/5">
      <InsightHeader
        icon={<Lightbulb className="w-6 h-6" />}
        title="Our Recommendations"
      />

      <ul className="mt-8 space-y-4">
        {recommendations.map((rec, i) => (
          <li
            key={i}
            className="group flex items-baseline gap-5 p-2 rounded-2xl transition-all duration-200 hover:bg-white/10"
          >
            <div className="relative mt-1">
              <div className="absolute -inset-1 rounded-full bg-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-surface border border-border text-sm font-bold text-primary shadow-sm">
                {i + 1}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-base text-text-secondary leading-relaxed tracking-tight">
                {rec}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
