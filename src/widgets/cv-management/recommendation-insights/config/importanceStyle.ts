import { Gap } from "@/entities/improvement";

export const importanceStyle: Record<
  Gap["importance"],
  { label: string; className: string }
> = {
  high: {
    label: "High",
    className: "bg-red-100 text-red-700 border border-red-200",
  },
  medium: {
    label: "Medium",
    className: "bg-amber-100 text-amber-700 border border-amber-200",
  },
  low: {
    label: "Low",
    className: "bg-blue-100 text-blue-700 border border-blue-200",
  },
};

export function scoreData(cvScore: number): { label: string; color: string } {
  switch (true) {
    case cvScore >= 85:
      return { label: "Elite Match", color: "text-emerald-500" };
    case cvScore >= 70:
      return { label: "Strong Fit", color: "text-primary" };
    case cvScore >= 50:
      return { label: "Competitive", color: "text-amber-400" };
    default:
      return { label: "Needs Polish", color: "text-rose-400" };
  }
}
