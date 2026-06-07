"use client";
import { useCompanyJobs } from "@/entities/company-job";
import OverviewCharts from "./Charts";
import QuickActions from "./QuickActions";
import OverviewStats from "./Stats";
import TopPerformingJobs from "./TopPerformingJobs";
import { useJobApplications } from "@/entities/company-applications";

export function CompanyOverview() {
  const token = "123";
  const { data: jobs = [], isLoading: jobsLoading } = useCompanyJobs(token);
  const { data: applicationsData, isLoading: appsLoading } = useJobApplications({
    page: 1,
    limit: 1000, // fetch all
    token,
  });

  const applications = applicationsData?.applications ?? [];
  const isLoading = jobsLoading || appsLoading;

  if (isLoading) return <p>Loading overview...</p>;

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
