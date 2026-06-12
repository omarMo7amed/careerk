"use client";
import { useCompanyJobs } from "@/entities/company-job";
import { Button, DashboardHeader, Loader } from "@/shared";
import { Plus } from "lucide-react";
import Link from "next/link";
import { JobPostCard } from "./JobPostCard";

export function CompanyJoblistings() {
  const { data: jobs = [], isLoading, error, isError } = useCompanyJobs();
  if (isLoading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <Loader />
      </div>
    );
  }

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
      <div className="flex items-center justify-between">
        <div className="py-8">
          <DashboardHeader
            breadcrumbs={[
              { label: "Dashboard", href: "/dashboard/company/overview" },
              { label: "Job Listings" },
            ]}
            title="All Job Listings"
            subtitle={
              jobs.length > 0
                ? `Showing all ${jobs.length} jobs (
            ${jobs.filter((j) => j.status === "PUBLISHED").length} active, 
            ${jobs.filter((j) => j.status === "PAUSED").length} paused)`
                : ""
            }
          />
        </div>
        <Link href="./job-listings/post-new-job">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Post New Job
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobPostCard key={job.id} job={job} />)
        ) : (
          <p className="text-sm text-text-secondary">No jobs found yet.</p>
        )}
      </div>
    </div>
  );
}
