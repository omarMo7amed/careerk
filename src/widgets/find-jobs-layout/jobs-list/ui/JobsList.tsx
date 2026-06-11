"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import {
  ExperienceLevel,
  experienceLevelLabels,
  JobType,
  jobTypeLabels,
  WorkPreference,
  workPreferenceLabels,
} from "@/entities/company-job";
import { Job, JobCardJobseeker, useMatchedJobsQuery } from "@/entities/job";
import {
  AnimatedSidebar,
  Button,
  Pagination,
  parseMultiParam,
  setMultiParam,
  Loader,
} from "@/shared";
import { List } from "@/widgets/list";
import { TableOfOperation } from "@/features/filter";
import { NotFound } from "@/features/search";

export function JobsList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("search") ?? searchParams.get("q") ?? "";
  const location = searchParams.get("location") ?? "";
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 12;
  const jobType = parseMultiParam(searchParams, "jobType") as JobType[];
  const experienceLevel = parseMultiParam(
    searchParams,
    "experienceLevel",
  ) as ExperienceLevel[];
  const workPreference = parseMultiParam(
    searchParams,
    "workPreference",
  ) as WorkPreference[];
  const source = parseMultiParam(searchParams, "source") as string[];
  const [filterOpen, setFilterOpen] = useState(false);
  // const {token}=useAuth();

  const { jobs, totalPages, isLoading, error } = useMatchedJobsQuery({
    page,
    limit,
    search: query,
    location,
    jobType,
    experienceLevel,
    workPreference,
    source,
    enabled: true,
  });

  const displayJobs = jobs ?? [];

  const handlePageChange = (nextPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(nextPage));
    params.set("limit", String(limit));
    router.push(`/dashboard/jobseeker/find-jobs?${params.toString()}`);
  };

  return (
    <div className="overflow-y-auto max-h-screen p-5">
      <div className="flex justify-between mb-10 items-baseline">
        <span className="text-sm text-text-secondary baseline rounded">
          Showing {displayJobs.length} job
          {displayJobs.length === 1 ? "" : "s"}
        </span>

        <Button variant="outline" size="sm" onClick={() => setFilterOpen(true)}>
          Filters
        </Button>
      </div>

      {error && (
        <p className="mb-6 text-sm text-error">
          Failed to load matched jobs. Please try again later.
        </p>
      )}

      {isLoading ? (
        <Loader />
      ) : !error && displayJobs.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <List
            items={displayJobs as Job[]}
            renderItem={(j) => <JobCardJobseeker job={j} key={j.id} />}
            columnsInLarge={3}
            columnsInMedium={2}
            columnsInSmall={1}
          />

          {displayJobs.length > 0 && (
            <Pagination
              totalPages={totalPages}
              page={page}
              onPageChange={handlePageChange}
            />
          )}
        </>
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
            options={[
              "Careerk",
              "LinkedIn",
              "Indeed",
              "Glassdoor",
              "Bayt",
              "Wuzzuf",
            ]}
            selected={source}
            onChange={(data) => {
              const params = new URLSearchParams(searchParams.toString());
              setMultiParam(params, "source", data);
              params.set("page", "1");
              router.push(
                `/dashboard/jobseeker/find-jobs?${params.toString()}`,
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
                `/dashboard/jobseeker/find-jobs?${params.toString()}`,
              );
            }}
          />

          <TableOfOperation
            key={"Experience Level"}
            title="Experience Level"
            options={Object.entries(experienceLevelLabels).map(
              ([value, label]) => ({ value, label }),
            )}
            selected={experienceLevel}
            onChange={(data) => {
              const params = new URLSearchParams(searchParams.toString());
              setMultiParam(params, "experienceLevel", data);
              params.set("page", "1");
              params.set("type", "direct");
              router.push(
                `/dashboard/jobseeker/find-jobs?${params.toString()}`,
              );
            }}
          />

          <TableOfOperation
            key={"Work Preference"}
            title="Work Preference"
            options={Object.entries(workPreferenceLabels).map(
              ([value, label]) => ({ value, label }),
            )}
            selected={workPreference}
            onChange={(data) => {
              const params = new URLSearchParams(searchParams.toString());
              setMultiParam(params, "workPreference", data);
              params.set("page", "1");
              params.set("type", "direct");
              router.push(
                `/dashboard/jobseeker/find-jobs?${params.toString()}`,
              );
            }}
          />
        </div>

        {/* Footer */}
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
