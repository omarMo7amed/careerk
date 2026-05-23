"use client";
import { BackButton, DashboardHeader, Pagination } from "@/shared";
import { Star } from "lucide-react";

import {
  ApplicationCard,
  useJobApplications,
  useUpdateApplicationStatus,
} from "@/entities/company-applications";
import { useState } from "react";
import { ApplicationStatus } from "@/entities/application";

export function JobApplicationsLayout({ jobId }: { jobId: string }) {
  const [page, setPage] = useState(1);
  const token = "123"; // will change

  const { data, isLoading, error } = useJobApplications({
    jobId,
    page,
    limit: 10,
    token,
  });

  const { mutate: updateStatus } = useUpdateApplicationStatus();

  if (isLoading) return <p>Loading applications...</p>;
  if (error)
    return <p className="text-destructive">Failed to load applications.</p>;
  if (!data?.applications.length) return <p>No applications yet.</p>;

  const { applications, totalPages } = data;

  return (
    <div>
      <div className="mb-8">
        <BackButton />
      </div>
      <div className="flex flex-col mb-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl font-bold ">
              Applications for {applications[0]?.directJob.title}
            </h1>
          </div>
          <p className="text-sm text-text-secondary">
            Total applicants of {applications.length} • Showing candidates
            sorted by match score
          </p>
        </div>

        <DashboardHeader header="Top 5 Candidates" Icon={Star} />
        <div className="grid lg:grid-cols-2 gap-6">
          {applications.map((a) => (
            <ApplicationCard
              key={a.id}
              application={a}
              initialStatus={a.status as ApplicationStatus}
              onStatusChange={(status) =>
                updateStatus({ id: a.id, status, token })
              }
            />
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
