"use client";
import {
  ExperienceLevel,
  JobType,
  WorkPreference,
  useCompanyJob,
  useDeleteCompanyJob,
  useUpdateCompanyJob,
} from "@/entities/company-job";
import { Card, ConfirmationModal } from "@/shared";
import { useState } from "react";
import { JobSidebar } from "../../direct-job-content/ui/JobSidebar";

import { JobStatus } from "@/entities/company-job/types/companyJob";
import { JobPostForm, JobPostFormData } from "@/features/post-job-form";
import { BackButton } from "@/shared/ui/BackButton";
import {
  DirectJobContentCard,
  JobStatistics,
} from "@/widgets/direct-job-content";
import { RecommendedCandidates } from "./RecommendedCandidates";
import { useRouter } from "next/navigation";

export function ViewJobPostLayout({ jobId }: { jobId: string }) {
  const { data: jobPost, isLoading } = useCompanyJob(jobId);
  const { mutateAsync: deleteJob, isPending: isDeleting } =
    useDeleteCompanyJob();
  const { mutateAsync: updateJob } = useUpdateCompanyJob();

  const [isEditingJob, setIsEditingJob] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const router = useRouter();

  if (isLoading) return <p>Loading...</p>;
  if (!jobPost) return null;

  const job = jobPost;
  const { title, deadline, status, applicants } = job;

  async function handleEditSubmit(data: JobPostFormData) {
    const updatedJob = {
      title: data.title,
      description: data.description,
      requirements: data.requirements,
      jobType: data.jobType as JobType,
      workPreference: data.workPreference as WorkPreference,
      experienceLevel: data.experienceLevel as ExperienceLevel,
      status: data.status as JobStatus,
      salaryMin: data.salaryMin ? data.salaryMin : undefined,
      salaryMax: data.salaryMax ? data.salaryMax : undefined,
      location: data.location,
      deadline: data.deadline,
      skillNames: data.skillNames,
      publishedAt: new Date().toISOString(),
    };
    const dd = await updateJob({
      jobId: job.id,
      data: updatedJob,
    });
    console.log("response", dd);
    setIsEditingJob(false);
  }

  async function handleConfirmDelete() {
    await deleteJob({ id: job.id });
    setShowDeleteModal(false);
    setTimeout(() => router.push("/dashboard/company/job-listings"), 1000);
  }

  return (
    <div>
      <div>
        <div className="mb-8">
          <BackButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {isEditingJob ? (
            <Card className="md:col-span-2 space-y-8">
              <JobPostForm
                initialData={jobPost}
                onSubmit={handleEditSubmit}
                onCancel={() => setIsEditingJob(false)}
              />
            </Card>
          ) : (
            <div className="md:col-span-2">
              <DirectJobContentCard job={jobPost} />
            </div>
          )}

          <div className="flex flex-col gap-6">
            <JobSidebar
              isEditingJob={isEditingJob}
              setIsEditingJob={setIsEditingJob}
              deadline={deadline}
              onDeleteClick={() => setShowDeleteModal(true)}
            />

            <JobStatistics
              jobId={jobId}
              status={status}
              applicationsCount={applicants || 0}
            />

            <RecommendedCandidates jobId={jobId} />
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Job Post"
        message={`Are you sure you want to delete "${title}"? This action cannot be undone.`}
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        cancelText="Cancel"
      />
    </div>
  );
}
