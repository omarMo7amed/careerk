import { BarChart3, ChevronRight, TrendingUp } from "lucide-react";

export function IdleStatus({
  getReport,
  errorMessage,
}: {
  getReport: () => void;
  errorMessage?: string | null;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary via-[#0466c8] to-[#4895ef] p-10 flex flex-col items-center text-center gap-6">
      <span className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-white/10" />
      <span className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5" />

      <div className="relative w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
        <TrendingUp className="w-8 h-8 text-white" />
      </div>
      <div className="relative">
        <h3 className="text-2xl font-extrabold text-white">
          CV Improvement Insights
        </h3>
        <p className="text-white/75 text-sm mt-2 max-w-md mx-auto leading-relaxed">
          Get AI-powered skill-gap analysis and personalised recommendations
          tailored to your target role.
        </p>
      </div>
      <button
        onClick={getReport}
        className="relative inline-flex items-center gap-2 bg-white text-primary font-bold text-sm px-8 py-3 rounded-xl shadow-lg hover:bg-white/90 transition-colors"
      >
        <BarChart3 className="w-4 h-4" />
        Get Skill Gaps &amp; Recommendations
        <ChevronRight className="w-4 h-4" />
      </button>

      {errorMessage ? (
        <p className="relative max-w-md rounded-xl border border-white/20 bg-black/15 px-4 py-3 text-sm text-white/90">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
