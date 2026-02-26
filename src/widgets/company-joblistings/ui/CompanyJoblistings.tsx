"use client";
import { Button } from "@/shared";
import { Briefcase, Plus } from "lucide-react";
import JobPostCard from "./JobPostCard";
import Link from "next/link";
import { mockJobs } from "@/entities/company-job/mock-jobs/mockJobs";
import { useState } from "react";

export function CompanyJoblistings() {
  const [jobs, setJobs] = useState(mockJobs);

  function handleDelete(id: string) {
    setJobs((prev) => prev.filter((j) => j.id !== id));
  }
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
            {jobs.filter((j) => j.status === "published").length} active,{" "}
            {jobs.filter((j) => j.status === "paused").length} paused)
          </p>
        </div>

        <Link href="./job-listings/post-new-job">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Post New Job
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <JobPostCard key={job.id} job={job} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
