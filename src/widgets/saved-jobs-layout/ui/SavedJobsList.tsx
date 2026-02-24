"use client";
import { SavedJobCard, jobsToJobCards, useSavedJobs } from "@/entities/job";
import { Error, Pagination } from "@/shared";
import { List } from "@/widgets/List";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export function SavedJobsList() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page") || "1");

  const { jobs, isLoading, error } = useSavedJobs({ page, pageSize: 12 });

  const jobCards = jobsToJobCards(jobs);
  const totalPages = Math.ceil(jobCards.length / 12);

  function handlePageChange(newPage: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Jobs</h1>
        <p className="text-gray-600">
          {jobCards.length > 0
            ? `Showing ${jobCards.length} saved jobs`
            : "No saved jobs yet"}
        </p>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      )}

      {error && <Error />}

      {!isLoading && !error && jobCards.length > 0 && (
        <>
          <List
            items={jobCards}
            renderItem={(job) => <SavedJobCard key={job.id} job={job} />}
          />

          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
      {!isLoading && !error && jobCards.length === 0 && (
        <div className="text-center py-20">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">No saved jobs yet</h2>
            <p className="text-text-secondary mb-6">
              Start bookmarking jobs you are interested in to find them here
            </p>
          </div>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
          >
            Browse Jobs
          </Link>
        </div>
      )}
    </div>
  );
}
