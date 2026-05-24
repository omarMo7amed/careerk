"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { List } from "@/widgets/list";

import {
  ExperienceLevel,
  experienceLevelLabels,
  JobType,
  jobTypeLabels,
  WorkPreference,
  workPreferenceLabels,
} from "@/entities/company-job";
import { Job, JobCardJobseeker, useJobsQuery } from "@/entities/job";

import { TableOfOperation } from "@/features/filter";
import { NotFound } from "@/features/search";

import { Loader, Pagination, parseMultiParam, setMultiParam } from "@/shared";

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
  const jobSource = parseMultiParam(searchParams, "jobSource") as string[];

  const { jobs, totalPages, isLoading, error } = useJobsQuery({
    page,
    limit,
    search: query,
    location,
    jobType,
    experienceLevel,
    workPreference,
    jobSource,
    enabled: true,
  });

  const displayJobs = jobs ?? [];

  const handlePageChange = (nextPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(nextPage));
    params.set("limit", String(limit));
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row gap-4 ">
      <div className="sm:w-1/3 lg:w-1/4 pt-4">
        <div className="flex flex-row sm:flex-col gap-4 max-h-screen overflow-scroll">
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
            selected={jobSource}
            onChange={(data) => {
              const params = new URLSearchParams(searchParams.toString());
              setMultiParam(params, "jobSource", data);
              params.set("page", "1");
              router.push(`/jobs?${params.toString()}`);
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
              router.push(`/jobs?${params.toString()}`);
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
              router.push(`/jobs?${params.toString()}`);
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
              router.push(`/jobs?${params.toString()}`);
            }}
          />
        </div>
      </div>

      <div className="flex-1 px-4 sm:pl-0 sm:pr-4 py-4">
        <div className=" max-h-screen overflow-scroll flex flex-col justify-between">
          {error && (
            <p className="m-auto text-sm text-error">
              Failed to load jobs search results. please try again later.
            </p>
          )}

          {!isLoading && !error && displayJobs.length === 0 && <NotFound />}

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <List
                items={displayJobs as Job[]}
                renderItem={(job) => (
                  <JobCardJobseeker job={job} key={job.id} />
                )}
                columnsInLarge={3}
                columnsInMedium={2}
                columnsInSmall={1}
              />

              {displayJobs.length > 0 && (
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
