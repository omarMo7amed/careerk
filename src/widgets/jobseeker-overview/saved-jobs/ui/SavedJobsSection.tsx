"use client";
import { useSavedJobs } from "@/entities/job";
import { SavedJobCard } from "../../../../entities/job/ui/SavedJobCard";

import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { SavedJobCardType } from "../../../../entities/job/types/savedJobCard";
import { List } from "@/widgets/List";
import { jobsToJobCards } from "@/entities/job/lib/transformers";
import { Error } from "@/shared";

export function SavedJobsSection() {
  const { jobs, isLoading, error } = useSavedJobs({
    page: 1,
    pageSize: 3,
  });

  const savedJobCards: SavedJobCardType[] = jobsToJobCards(jobs);

  return (
    <div className="rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Bookmarked Jobs</h2>
        <Link
          href="/dashboard/jobseeker/saved-jobs"
          className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline group"
        >
          <span>View all</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      )}

      {error && <Error />}

      {!isLoading && !error && savedJobCards.length > 0 && (
        <List
          items={savedJobCards}
          renderItem={(job) => <SavedJobCard key={job.id} job={job} />}
        />
      )}

      {!isLoading && !error && savedJobCards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary mb-4">No saved jobs yet</p>
          <Link
            href="/dashboard/jobseeker/find-jobs"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <span>Browse jobs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
