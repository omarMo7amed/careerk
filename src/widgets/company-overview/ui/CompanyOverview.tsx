"use client";
import { useCompanyJobs } from "@/entities/company-job";
import OverviewCharts from "./Charts";
import QuickActions from "./QuickActions";
import OverviewStats from "./Stats";
import TopPerformingJobs from "./TopPerformingJobs";
import { useJobApplications } from "@/entities/company-applications";

import { Loader } from "@/shared";
import { NotFound } from "@/features/search";

export function CompanyOverview() {
  const {
    data: jobs = [],
    isLoading: jobsLoading,
    error: jobsError,
    isError: jobsIsError,
  } = useCompanyJobs();
  const {
    data: applicationsData,
    isLoading: appsLoading,
    error: appsError,
    isError: appsIsError,
  } = useJobApplications({
    page: 1,
    limit: 1000, // fetch all
  });

  const applications = applicationsData?.applications ?? [];
  const isLoading = jobsLoading || appsLoading;
  const isError = jobsIsError || appsIsError;

  if (isLoading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <Loader />
      </div>
    );
  }

  const hasData = jobs.length > 0 || applications.length > 0;

  if (!hasData) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <NotFound message="No jobs or applications found yet." />
      </div>
    );
  }

  const error = jobsError || appsError;
  if (isError) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Something went wrong</h2>
          <p className="text-text-secondary mt-2">
            {error instanceof Error ? error.message : "Failed to load data"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <OverviewStats jobs={jobs} applications={applications} />
      <OverviewCharts jobs={jobs} applications={applications} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <QuickActions />
        <TopPerformingJobs jobs={jobs} />
      </div>
    </div>
  );
}
