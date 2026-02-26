"use client";
import { useSavedJobs } from "@/entities/job";
import { SavedJobCard } from "../../../../entities/job/ui/SavedJobCard";

import { jobsToJobCards } from "@/entities/job/lib/transformers";
import { Empty, Error, Loader } from "@/shared";
import { List } from "@/widgets/List";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SavedJobCardType } from "../../../../entities/job/types/savedJobCard";

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

      {isLoading && <Loader />}

      {error && <Error />}

      {!isLoading && !error && savedJobCards.length > 0 && (
        <List
          items={savedJobCards}
          renderItem={(job) => <SavedJobCard key={job.id} job={job} />}
        />
      )}

      {!isLoading && !error && savedJobCards.length === 0 && (
        <Empty
          message="No saved jobs yet"
          linkText="Browse jobs"
          linkHref="/dashboard/jobseeker/find-jobs"
        />
      )}
    </div>
  );
}
