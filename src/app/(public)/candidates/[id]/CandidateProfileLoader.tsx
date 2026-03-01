"use client";
import { useCandidateByIdQuery } from "@/entities/job-seeker";
import { JobSeekerProfileWidget } from "@/widgets/jobseeker-profile/jobseeker-widget";
import { Loader2 } from "lucide-react";

export function CandidateProfileLoader({ id }: { id: string }) {
  const { jobSeeker, isLoading, error } = useCandidateByIdQuery(id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !jobSeeker) {
    return (
      <div className="flex items-center justify-center h-40 bg-bg-surface rounded-xl border border-border text-text-secondary text-sm">
        Candidate not found.
      </div>
    );
  }

  return <JobSeekerProfileWidget jobSeeker={jobSeeker} isOwner={false} />;
}
