"use client";
import {
  deleteJob,
  jobTypeLabels,
  workPreferenceLabels,
} from "@/entities/company-job";
import { toggleJobStatus } from "@/entities/company-job";
import { CompanyJob } from "@/entities/company-job";
import { JobStatusLabels } from "@/entities/company-job/lib/labelMap";
import { Badge, Button, ConfirmationModal } from "@/shared";
import { capitalizeFirstLetter } from "@/shared";
import { Card } from "@/shared";
import { Pause, PlayIcon, Trash2, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type JobPostCardProps = {
  job: CompanyJob;

  onDelete?: (id: string) => void;
};

export function JobPostCard({ job, onDelete }: JobPostCardProps) {
  const [cardStatus, setCardStatus] = useState(job.status);

  function handleToggleStatus() {
    const newStatus = toggleJobStatus(job.id);
    setCardStatus(newStatus);
  }
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { id, title, skills, location, workPreference, jobType, status } = job;

  function handleConfirmDelete() {
    deleteJob(id);
    setShowDeleteModal(false);
    onDelete?.(id);
  }

  return (
    <>
      <Card>
        <div className="space-y-4">
          <Link
            href={`./job-listings/${id}`}
            className="block hover:opacity-80 transition-opacity"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-lg font-semibold">{title}</h4>

                <Badge
                  variant={status === "PUBLISHED" ? "active" : "pause"}
                  className="rounded-lg shadow-xs"
                >
                  {JobStatusLabels[job.status]}
                </Badge>
              </div>

              <p className="text-sm text-text-secondary mb-3">
                {workPreferenceLabels[workPreference]} •{" "}
                {location && `${capitalizeFirstLetter(location)} • `}
                {jobTypeLabels[jobType]}
              </p>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill.skillId}
                    className="text-xs font-normal border-none rounded-lg shadow-xs"
                  >
                    {capitalizeFirstLetter(skill.name)}
                  </Badge>
                ))}
              </div>
            </div>
          </Link>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
            <Link href={`./job-listings/applications?jobId=${id}`}>
              <Button
                size="sm"
                variant="ghost"
                className="text-foreground gap-2"
              >
                <Users className="w-4 h-4" />
                View Applications
              </Button>
            </Link>

            {cardStatus === "PUBLISHED" ? (
              <Button
                size="sm"
                variant="ghost"
                className="gap-2"
                onClick={handleToggleStatus}
              >
                <Pause className="w-4 h-4" />
                Pause
              </Button>
            ) : (
              <Button
                size="sm"
                variant="ghost"
                className="gap-2 text-success hover:bg-success/10"
                onClick={handleToggleStatus}
              >
                <PlayIcon className="w-4 h-4" />
                Activate
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
              className="gap-2 text-error"
              onClick={() => setShowDeleteModal(true)}
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </Button>
          </div>
        </div>
      </Card>

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
