"use client";
import {
  CompanyJob,
  JobType,
  ExperienceLevel,
  WorkPreference,
} from "@/entities/company-job";
import { ConfirmationModal } from "@/shared";
import { Card } from "@/shared";
import { useState } from "react";
import { JobSidebar } from "../../direct-job-content/ui/JobSidebar";

import { JobPostFormData } from "@/features/post-job-form";
import { updateJob } from "@/entities/company-job";
import { BackButton } from "@/shared/ui/BackButton";
import { deleteJob } from "@/entities/company-job";
import { JobPostForm } from "@/features/post-job-form";
import {
  DirectJobContentCard,
  JobStatistics,
} from "@/widgets/direct-job-content";

interface ViewJobPostLayoutProps {
  jobPost: CompanyJob;
}

export function ViewJobPostLayout({ jobPost }: ViewJobPostLayoutProps) {
  const {
    title,
    deadline,
    status,
    // applicationsCount,
  } = jobPost;
  const [isEditingJob, setIsEditingJob] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  function handleEditSubmit(data: JobPostFormData) {
    const updated: CompanyJob = {
      ...jobPost,
      ...data,
      jobType: data.jobType as JobType,
      workPreference: data.workPreference as WorkPreference,
      experienceLevel: data.experienceLevel as ExperienceLevel,
      salaryMin: data.salaryMin ? Number(data.salaryMin) : null,
      salaryMax: data.salaryMax ? Number(data.salaryMax) : null,
      skills: data.skills.map((name, i) => ({
        skillId: String(i),
        name,
      })),
      publishedAt: new Date().toISOString(),
    };
    updateJob(jobPost.id, updated);
    setIsEditingJob(false);

    console.log(updated);
  }

  function handleConfirmDelete() {
    deleteJob(jobPost.id);
    setShowDeleteModal(false);
  }
  return (
    <>
      <div>
        <div className="mb-8 ">
          <BackButton />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {isEditingJob ? (
            <Card className="lg:col-span-2 space-y-8">
              <JobPostForm
                initialData={jobPost}
                onSubmit={handleEditSubmit}
                onCancel={() => setIsEditingJob(false)}
              />
            </Card>
          ) : (
            <DirectJobContentCard job={jobPost} />
          )}
          <div className="space-y-6">
            <JobSidebar
              isEditingJob={isEditingJob}
              setIsEditingJob={setIsEditingJob}
              deadline={deadline}
              onDeleteClick={() => setShowDeleteModal(true)}
            />

            <JobStatistics status={status} />
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Job Post"
        message={`Are you sure you want to delete "${title}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
      />
    </>
  );
}
