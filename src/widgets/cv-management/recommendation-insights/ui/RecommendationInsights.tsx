"use client";

import { useImprovementReport } from "@/entities/improvement";
import { Strengths } from "../components/Strengths";
import { Gaps } from "../components/Gaps";
import { Recommendations } from "../components/Recommendations";
import { Hero } from "../components/Hero";
import { IdleStatus } from "../components/IdleStatus";
import { LoadingStatus } from "../components/LoadingStatus";
import { ErrorStatus } from "../components/ErrorStatus";
import { ProcessingStatus } from "../components/ProcessingStatus";

export function RecommendationInsights() {
  const { state, getReport, retry } = useImprovementReport();

  if (state.status === "idle") {
    return <IdleStatus getReport={getReport} />;
  }

  if (state.status === "loading") {
    return <LoadingStatus />;
  }

  if (state.status === "error") {
    return <ErrorStatus errorMessage={state.message} retry={retry} />;
  }

  const { report } = state;

  if (report.status === "PROCESSING") {
    return <ProcessingStatus />;
  }

  if (report.status === "FAILED") {
    return (
      <ErrorStatus
        errorMessage="Analysis failed. Please try again."
        retry={retry}
      />
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-foreground">Suggestions for Improvements</h2>
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
