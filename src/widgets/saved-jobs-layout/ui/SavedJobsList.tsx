"use client";
import { jobTypeLabels } from "@/entities/company-job/lib/labelMap";
import { JobType } from "@/entities/company-job/types/companyJob";
import { SavedJobCard, jobsToJobCards, useSavedJobs } from "@/entities/job";
import { TableOfOperation } from "@/features/filter/ui/TableOfOperation";
import {
  AnimatedSidebar,
  Button,
  Empty,
  Error,
  Loader,
  Pagination,
  parseMultiParam,
  setMultiParam,
} from "@/shared";
import { List } from "@/widgets/list";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function SavedJobsList() {
  const [filterOpen, setFilterOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("search") ?? searchParams.get("q") ?? "";
  const location = searchParams.get("location") ?? "";

  const jobType = parseMultiParam(searchParams, "jobType") as JobType[];
  const jobSource = parseMultiParam(searchParams, "jobSource") as string[];

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 12;

  const { data, isLoading, error } = useSavedJobs({
    search: query,
    location,
    jobType,
    jobSource,
    page,
    limit,
  });
  const jobs = data?.data || [];
  const jobCards = jobsToJobCards(jobs);
  const totalPages = Math.ceil(jobCards.length / 12);

  function handlePageChange(newPage: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-2">
          <p className="text-sm text-text-secondary">
            {isLoading ? "Loading..." : `Showing ${jobCards.length} saved jobs`}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => setFilterOpen(true)}>
          Filters
        </Button>
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
      <AnimatedSidebar
        title="Filter"
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
      >
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <TableOfOperation
            key={"Job Source"}
            title="Job Source"
            options={["Direct", "Scraped"]}
            selected={jobSource}
            onChange={(data) => {
              const params = new URLSearchParams(searchParams.toString());
              setMultiParam(params, "jobSource", data);
              params.set("page", "1");
              router.push(
                `/dashboard/jobseeker/saved-jobs?${params.toString()}`,
              );
            }}
          />

          <TableOfOperation
            key={"Job Type"}
            title="Job Type"
            options={Object.entries(jobTypeLabels).map(([value, label]) => ({
              value,
              label,
            }))}
            selected={jobType}
            onChange={(data) => {
              const params = new URLSearchParams(searchParams.toString());
              setMultiParam(params, "jobType", data);
              params.set("page", "1");
              router.push(
                `/dashboard/jobseeker/saved-jobs?${params.toString()}`,
              );
            }}
          />
        </div>

        <div className="p-4 border-t border-border flex gap-2 justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFilterOpen(false)}
          >
            Close
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setFilterOpen(false)}
          >
            Apply
          </Button>
        </div>
      </AnimatedSidebar>
    </div>
  );
}
