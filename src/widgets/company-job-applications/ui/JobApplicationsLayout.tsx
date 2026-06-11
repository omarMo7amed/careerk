"use client";
import { DashboardHeader, Pagination } from "@/shared";

import { ApplicationStatus } from "@/entities/application";
import {
  ApplicationCard,
  useJobApplications,
  useUpdateApplicationStatus,
} from "@/entities/company-applications";
import { useState } from "react";

export function JobApplicationsLayout({ jobId }: { jobId: string }) {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useJobApplications({
    jobId,
    page,
    limit: 10,
  });

  const { mutate: updateStatus } = useUpdateApplicationStatus();

  if (isLoading) return <p>Loading applications...</p>;
  if (error)
    return <p className="text-destructive">Failed to load applications.</p>;
  if (!data?.applications.length) return <p>No applications yet.</p>;

  const { applications, totalPages } = data;

  return (
    <div>
      <div className="flex flex-col mb-6">
        <div className="py-8">
          <DashboardHeader
            breadcrumbs={[
              { label: "Dashboard", href: "/dashboard/company/overview" },
              {
                label: "Job Listings",
                href: "/dashboard/company/job-listings",
              },

              { label: "Applications" },
            ]}
            title={`Applications for ${applications[0]?.directJob.title}`}
            subtitle={`Total applicants of ${applications.length} • Showing candidates
            sorted by match score`}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {applications.map((a) => (
            <ApplicationCard
              key={a.id}
              id={a.id}
              initialStatus={a.status as ApplicationStatus}
              onStatusChange={(status) => updateStatus({ id: a.id, status })}
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
