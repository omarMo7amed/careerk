"use client";
import {
  JobType,
  ExperienceLevel,
  WorkPreference,
  useCompanyJob,
  useDeleteCompanyJob,
  useUpdateCompanyJob,
} from "@/entities/company-job";
import { Badge, Button, ConfirmationModal } from "@/shared";
import { Card } from "@/shared";
import { useState } from "react";
import { JobSidebar } from "../../direct-job-content/ui/JobSidebar";

import { JobPostFormData } from "@/features/post-job-form";
import { BackButton } from "@/shared/ui/BackButton";
import { JobPostForm } from "@/features/post-job-form";
import {
  DirectJobContentCard,
  JobStatistics,
} from "@/widgets/direct-job-content";
import { MapPin, Sparkles } from "lucide-react";
import { useCandidatesQuery } from "@/entities/job-seeker";
import { getScoreColor } from "../lib/getScoreColor";
import { JobStatus } from "@/entities/company-job/types/companyJob";

export function ViewJobPostLayout({ jobId }: { jobId: string }) {
  const { data: jobPost, isLoading } = useCompanyJob(jobId);
  const { mutate: deleteJob, isPending: isDeleting } = useDeleteCompanyJob();
  const { mutateAsync: updateJob } = useUpdateCompanyJob();

  const { candidates } = useCandidatesQuery();

  const [isEditingJob, setIsEditingJob] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const topCandidates = candidates
    ?.slice()
    .sort((a, b) => (b.cvMatchPercentage ?? 0) - (a.cvMatchPercentage ?? 0))
    .slice(0, 5);

  if (isLoading) return <p>Loading...</p>;
  if (!jobPost) return null;

  const job = jobPost;
  const { title, deadline, status } = job;

  async function handleEditSubmit(data: JobPostFormData) {
    const updatedJob = {
      title: data.title,
      description: data.description,
      requirements: data.requirements,
      jobType: data.jobType as JobType,
      workPreference: data.workPreference as WorkPreference,
      experienceLevel: data.experienceLevel as ExperienceLevel,
      status: data.status as JobStatus,
      salaryMin: data.salaryMin ? Number(data.salaryMin) : null,
      salaryMax: data.salaryMax ? Number(data.salaryMax) : null,
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

  function handleConfirmDelete() {
    deleteJob(job.id);
    setShowDeleteModal(false);
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

            <JobStatistics status={status} />

            {topCandidates && topCandidates.length > 0 && (
              <Card>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <h3 className="text-lg font-semibold">
                    Recommended Candidates
                  </h3>
                </div>

                <div className="space-y-3">
                  {topCandidates.map((candidate, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer border border-border/30 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground text-sm truncate">
                            {`${candidate.firstName} ${candidate.lastName}`}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {candidate.title}
                          </p>
                        </div>
                        <Badge
                          className={`${getScoreColor(candidate.cvMatchPercentage)} border text-xs font-semibold`}
                        >
                          {candidate.cvMatchPercentage != null
                            ? `${candidate.cvMatchPercentage}%`
                            : "N/A"}
                        </Badge>
                      </div>
                      {candidate.location && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span className="truncate">{candidate.location}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-4 border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
                  onClick={() => {}}
                >
                  View All Candidates
                </Button>
              </Card>
            )}
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
