"use client";
import { Button } from "@/shared";
import { Briefcase, Plus } from "lucide-react";
import { JobPostCard } from "./JobPostCard";
import Link from "next/link";
import { useCompanyJobs } from "@/entities/company-job";

export function CompanyJoblistings() {
  const { data: jobs = [], isLoading } = useCompanyJobs();

  if (isLoading) return <p>Loading...</p>;
  if (!jobs) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold ">All Job Listings</h3>
          </div>
          <p className="text-sm text-text-secondary">
            Showing all {jobs.length} jobs (
            {jobs.filter((j) => j.status === "PUBLISHED").length} active,{" "}
            {jobs.filter((j) => j.status === "PAUSED").length} paused)
          </p>
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
