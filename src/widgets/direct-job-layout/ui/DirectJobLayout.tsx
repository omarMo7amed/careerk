"use client";
import { useGetDirectJobByID } from "@/entities/company-job/hook/useGetDirectJobByID";
import { ApplyNow, useApplyNow } from "@/features/apply-now";
import { NotFound } from "@/features/search";
import { BackButton, Loader } from "@/shared";
import {
  DirectJobContentCard,
  JobSidebar,
  JobStatistics,
} from "@/widgets/direct-job-content";

export function DirectJobLayout({ jobId }: { jobId: string }) {
  const { job, isLoading } = useGetDirectJobByID(jobId);
  const { applyNow, isPending, isSuccess } = useApplyNow();

  if (isLoading) return <Loader />;

  if (!job)
    return (
      <>
        <BackButton />
        <NotFound message="Job not found" />
      </>
    );

  return (
    <div>
      <div className="mb-8 ">
        <BackButton />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <DirectJobContentCard job={job} />
        <div className="space-y-6">
          <JobSidebar
            deadline={job.deadline}
            Apply={() => (
              <ApplyNow
                onClick={() => {
                  console.log("Applying for job:", job.id);
                  applyNow(job.id);
                }}
                isLoading={isPending}
                isSuccess={isSuccess}
              />
            )}
          />
          <JobStatistics
            applicationsCount={job?.applicants}
            status={job?.status}
          />
        </div>
      </div>
    </div>
  );
}
