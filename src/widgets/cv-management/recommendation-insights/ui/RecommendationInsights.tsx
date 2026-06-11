"use client";

import {
  ErrorStatus,
  Gaps,
  Hero,
  IdleStatus,
  LoadingStatus,
  ProcessingStatus,
  Recommendations,
  Strengths,
} from "@/entities/improvement";
import { useImprovementsQuery } from "@/features/suggest-improvements";
export function RecommendationInsights() {
  const {
    report,
    isPending,
    requestImprovement,
    isProcessing,
    isError,
    error,
    requestErrorMessage,
    reset,
    reportExists,
    regenerateReport,
  } = useImprovementsQuery();

  if (isError) {
    return (
      <ErrorStatus
        errorMessage={error?.message || "An error occurred"}
        retry={reset}
      />
    );
  }

  console.log("Report data: is  pending and is", isPending, isProcessing);

  // if (isPending) {
  //   return <LoadingStatus />;
  // }

  if (isPending) {
    return <ProcessingStatus />;
  }

  if (!reportExists) {
    return (
      <IdleStatus
        getReport={requestImprovement}
        errorMessage={requestErrorMessage}
      />
    );
  }

  return (
    <div className="space-y-6">
      {requestErrorMessage ? (
        <div
          role="alert"
          className="rounded-2xl border border-error/30 bg-error/5 px-4 py-3 text-sm text-error"
        >
          {requestErrorMessage}
        </div>
      ) : null}

      <div className="flex justify-between items-center">
        <h2 className="text-foreground">Suggestions for Improvements</h2>
        <button
          onClick={regenerateReport}
          disabled={isPending}
          className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
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
