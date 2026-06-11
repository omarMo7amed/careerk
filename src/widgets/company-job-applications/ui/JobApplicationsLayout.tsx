"use client";
import { DashboardHeader, Loader, Pagination } from "@/shared";

import { ApplicationStatus } from "@/entities/application";
import {
  ApplicationCard,
  useJobApplications,
  useUpdateApplicationStatus,
} from "@/entities/company-applications";
import { useState } from "react";
import { NotFound } from "@/features/search";

export function JobApplicationsLayout({ jobId }: { jobId: string }) {
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isError } = useJobApplications({
    jobId,
    page,
    limit: 10,
  });

  const { mutate: updateStatus } = useUpdateApplicationStatus();

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
  if (!data) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <NotFound message="No applications found yet." />
      </div>
    );
  }
  const { applications, totalPages } = data;

  return (
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
          subtitle={
            applications.length > 0
              ? `Total applicants of ${applications.length} • Showing candidates
            sorted by match score`
              : ""
          }
        />
      </div>
      {applications.length > 0 ? (
        <>
          <div className="grid gap-6 lg:grid-cols-2">
            {applications.map((application) => (
              <ApplicationCard
                key={application.id}
                id={application.id}
                initialStatus={application.status as ApplicationStatus}
                onStatusChange={(status) =>
                  updateStatus({
                    id: application.id,
                    status,
                  })
                }
              />
            ))}
          </div>

          <Pagination
            totalPages={totalPages}
            page={page}
            onPageChange={setPage}
          />
        </>
      ) : (
        <p className="text-sm text-text-secondary">
          No applications found yet.
        </p>
      )}
    </div>
  );
}
