import { Button } from "@/shared";

import { Briefcase, Plus } from "lucide-react";
import JobPostCard from "./JobPostCard";
import Link from "next/link";

export function CompanyJoblistings() {
  const jobs = [
    {
      title: "Senior React Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      status: "Active",
      applicants: 47,
      skills: ["React", "JavaScript", "TypeScript"],
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      status: "Active",
      applicants: 23,
      skills: ["Product Strategy", "Agile", "Analytics"],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      status: "Paused",
      applicants: 31,
      skills: ["AWS", "Docker", "Kubernetes"],
    },
  ];
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
            {jobs.filter((j) => j.status === "Active").length} active,{" "}
            {jobs.filter((j) => j.status === "Paused").length} paused)
          </p>
        </div>

        <Link href="./job-listings/post-job">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Post New Job
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <JobPostCard key={job.title} job={job} />
        ))}
      </div>
    </div>
  );
}
