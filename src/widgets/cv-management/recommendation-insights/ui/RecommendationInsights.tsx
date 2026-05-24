"use client";

import {
  ErrorStatus,
  IdleStatus,
  LoadingStatus,
  ProcessingStatus,
  Gaps,
  Hero,
  Strengths,
  Recommendations,
} from "@/entities/improvement";
import { useImprovementsQuery } from "@/features/suggest-improvements";
// import { useAuth } from "@/features/auth";
export function RecommendationInsights() {
  // const {token }=useAuth()
  const {
    report,
    isPending,
    requestImprovement,
    isProcessing,
    isError,
    error,
    reset,
    reportExists,
    regenerateReport,
  } = useImprovementsQuery({
    token: "",
  });

  if (isError) {
    return (
      <ErrorStatus
        errorMessage={error?.message || "An error occurred"}
        retry={reset}
      />
    );
  }

  if (isPending) {
    return <LoadingStatus />;
  }

  if (isProcessing) {
    return <ProcessingStatus />;
  }

  if (!reportExists) {
    return <IdleStatus getReport={requestImprovement} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-foreground">Suggestions for Improvements</h2>
        <button
          onClick={regenerateReport}
          disabled={isPending}
          className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {isPending ? "Regenerating..." : "Regenerate"}
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-6">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <Gaps gaps={report.gaps} />
        </div>
        <div className="order-1 lg:order-2 lg:col-span-4">
          <Hero
            cvScore={report.cvScore}
            targetRole={report.targetRole}
            description={report.description}
          />
        </div>
      </div>

      <Strengths strengths={report.strengths} />

      <Recommendations recommendations={report.recommendations} />
    </div>
  );
}
