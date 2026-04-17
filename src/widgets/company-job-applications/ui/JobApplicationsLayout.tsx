"use client";
import { getJob } from "@/entities/company-job";
import { BackButton, DashboardHeader, Pagination } from "@/shared";
import { Star } from "lucide-react";

import {
  ApplicationCard,
  useApplicationsByJobId,
} from "@/entities/company-applications";
import { useState } from "react";

export function JobApplicationsLayout({ jobId }: { jobId?: string }) {
  const {
    data: applicationsResponse,
    isLoading,
    error,
  } = useApplicationsByJobId(jobId);
  const applications = applicationsResponse?.data.applications ?? [];

  const [page, setPage] = useState(applicationsResponse?.data.page ?? 1);

  const totalPages = applicationsResponse?.data.totalPages ?? 1;

  // use directly
  const paginatedApplications = applications;

  const job = getJob(jobId!);
  return (
    <div>
      <div className="mb-8">
        <BackButton />
      </div>
      <div className="flex flex-col mb-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl font-bold ">
              Applications for {job.title}
            </h1>
          </div>
          <p className="text-sm text-text-secondary">
            Total applicants of {applications.length} • Showing candidates
            sorted by match score
          </p>
        </div>

        <DashboardHeader header="Top 5 Candidates" Icon={Star} />
        <div className="grid lg:grid-cols-2 gap-6">
          {paginatedApplications.map((a) => (
            <ApplicationCard key={a.id} application={a} />
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          page={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
