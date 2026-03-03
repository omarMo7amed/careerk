"use client";
import { SavedJobCard, jobsToJobCards, useSavedJobs } from "@/entities/job";
import { Empty, Error, Loader, Pagination } from "@/shared";
import { List } from "@/widgets/list";
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

      {isLoading && <Loader />}

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
        <Empty
          message="No saved jobs yet"
          linkText="Browse jobs"
          linkHref="/dashboard/jobseeker/find-jobs"
        />
      )}
    </div>
  );
}
