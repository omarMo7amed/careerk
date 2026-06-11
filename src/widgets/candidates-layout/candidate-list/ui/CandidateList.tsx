"use client";
import {
  JobType,
  jobTypeLabels,
  WorkPreference,
  workPreferenceLabels,
} from "@/entities/company-job";
import {
  CandidateCard,
  useCandidatesQuery,
  JobSeeker,
  AvailabilityStatus,
} from "@/entities/job-seeker";
import { AVAILABILITY_STATUS_LABELS } from "@/entities/job-seeker/lib/labels";
import { TableOfOperation } from "@/features/filter";
import { NotFound } from "@/features/search";
import {
  Pagination,
  setMultiParam,
  parseMultiParam,
  getFilterKeyFromValue,
  Loader,
} from "@/shared";
import { List } from "@/widgets/list";
import { useRouter, useSearchParams } from "next/navigation";

export function CandidateList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const location = searchParams.get("location") ?? "";
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 12;
  const workPreference = parseMultiParam(
    searchParams,
    "workPreference",
  ) as WorkPreference[];
  const preferredJobTypes = parseMultiParam(
    searchParams,
    "preferredJobTypes",
  ) as JobType[];
  const availabilityStatus = parseMultiParam(
    searchParams,
    "availabilityStatus",
  ) as AvailabilityStatus[];

  const { candidates, totalPages, error, isLoading } = useCandidatesQuery({
    page,
    limit,
    search,
    location,
    workPreference,
    preferredJobTypes,
    availabilityStatus,
    enabled: true,
  });

  const handlePageChange = (nextPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(nextPage));
    params.set("limit", String(limit));
    router.push(`/candidates?${params.toString()}`);
  };

  console.log("candidates", candidates);

  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row gap-4 ">
      <div className="sm:w-1/3 lg:w-1/4 pt-4">
        <div className="flex flex-row sm:flex-col gap-4 max-h-screen overflow-scroll">
          <TableOfOperation
            title="Availability"
            options={[...Object.entries(AVAILABILITY_STATUS_LABELS)].map(
              ([value, label]) => ({
                value,
                label,
              }),
            )}
            onChange={(values) => {
              const params = new URLSearchParams(searchParams.toString());
              setMultiParam(
                params,
                "availabilityStatus",
                getFilterKeyFromValue(values),
              );
              params.set("page", "1");
              router.push(`/candidates?${params.toString()}`);
            }}
          />
          <TableOfOperation
            title="Work Preference"
            options={[...Object.entries(workPreferenceLabels)].map(
              ([value, label]) => ({
                value,
                label,
              }),
            )}
            onChange={(values) => {
              const params = new URLSearchParams(searchParams.toString());
              setMultiParam(
                params,
                "workPreference",
                getFilterKeyFromValue(values),
              );
              params.set("page", "1");
              router.push(`/candidates?${params.toString()}`);
            }}
          />
          <TableOfOperation
            title="Preferred Job Types"
            options={(Object.entries(jobTypeLabels) as [JobType, string][]).map(
              ([value, label]) => ({ value, label }),
            )}
            onChange={(values) => {
              const params = new URLSearchParams(searchParams.toString());
              setMultiParam(params, "preferredJobTypes", values);
              params.set("page", "1");
              console.log(params);
              router.push(`/candidates?${params.toString()}`);
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

          {!isLoading && !error && candidates?.length === 0 && <NotFound />}

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <List
                items={candidates || ([] as JobSeeker[])}
                renderItem={(candidate) => (
                  <CandidateCard
                    candidate={candidate as JobSeeker}
                    key={candidate.profile.jobSeekerId as string}
                  />
                )}
                columnsInLarge={2}
                columnsInMedium={1}
                columnsInSmall={1}
              />

              {candidates?.length > 0 && (
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
