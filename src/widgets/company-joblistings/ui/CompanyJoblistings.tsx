"use client";
import { useCompanyJobs } from "@/entities/company-job";
import { Button, DashboardHeader } from "@/shared";
import { Plus } from "lucide-react";
import Link from "next/link";
import { JobPostCard } from "./JobPostCard";

export function CompanyJoblistings() {
  const { data: jobs = [], isLoading } = useCompanyJobs();

  if (isLoading) return <p>Loading...</p>;
  if (!jobs) return null;

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
            subtitle={` Showing all ${jobs.length} jobs (
            ${jobs.filter((j) => j.status === "PUBLISHED").length} active, 
            ${jobs.filter((j) => j.status === "PAUSED").length} paused)`}
          />
        </div>
        <Link href="./job-listings/post-new-job">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Post New Job
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {jobs.map((job) => (
          <JobPostCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
