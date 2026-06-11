"use client";
import {
  JobType,
  jobTypeLabels,
  WorkPreference,
  workPreferenceLabels,
} from "@/entities/company-job";
import {
  AVAILABILITY_STATUS_LABELS,
  AvailabilityStatus,
  CandidateCard,
  JobSeeker,
  useCandidatesQuery,
} from "@/entities/job-seeker";
import { TableOfOperation } from "@/features/filter";
import { NotFound, SearchBar } from "@/features/search";
import {
  AnimatedSidebar,
  Button,
  DashboardHeader,
  getFilterKeyFromValue,
  Loader,
  Pagination,
  parseMultiParam,
  setMultiParam,
} from "@/shared";
import { List } from "@/widgets/list";
import { SlidersHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function CandidatesLayout() {
  const [filterOpen, setFilterOpen] = useState(false);

  const router = useRouter();
  // Search and Filter
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

  // Sort
  // const [sortedCandidates, setSortedCandidates] = useState(candidates);

  const handlePageChange = (nextPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(nextPage));
    params.set("limit", String(limit));
    router.push(`/dashboard/company/candidates?${params.toString()}`);
  };

  return (
    <div>
      {/* Header */}
      <div className="py-8">
        <DashboardHeader
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard/company/overview" },
            { label: "Candidates" },
          ]}
          title="Find Candidates"
          subtitle="Find and compare qualified candidates using AI powered matching"
        />
      </div>
      {/* Search */}
      <div className="mb-6">
        <SearchBar
          searchPlaceholder="Search for candidates by name or keyword"
          initialQuery={search}
          initialLocation={location}
          isLoading={isLoading}
          onSearchSubmit={(searchValue, locationValue) => {
            const params = new URLSearchParams();
            if (searchValue) params.set("search", searchValue);
            if (locationValue) params.set("location", locationValue);
            params.set("page", "1");

            const currentLimit = searchParams.get("limit");
            if (currentLimit) params.set("limit", currentLimit);

            const queryString = params.toString();
            const nextUrl = `/dashboard/company/candidates${queryString ? `?${queryString}` : ""}`;
            const currentQueryString = searchParams.toString();
            const currentUrl = `/dashboard/company/candidates${
              currentQueryString ? `?${currentQueryString}` : ""
            }`;

            if (nextUrl === currentUrl) {
              return;
            }

            router.push(nextUrl);
          }}
        />
      </div>

      {/* Sort and Filters */}
      <div className="flex items-center justify-end mb-6">
        <div className="flex gap-3">
          {/* <SortSelect
            candidates={sortedCandidates}
            onSort={setSortedCandidates}
          /> */}

          <Button
            className="flex gap-2"
            variant="outline"
            size="sm"
            onClick={() => setFilterOpen(true)}
          >
            <span>
              <SlidersHorizontal className="w-4 h-4" />
            </span>
            Filters
          </Button>
        </div>
      </div>

      {error && (
        <p className="m-auto text-sm text-error">
          Failed to load candidates. please try again later.
        </p>
      )}

      {!isLoading && !error && candidates?.length === 0 && <NotFound />}

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <List
            items={candidates as JobSeeker[]}
            renderItem={(candidate: JobSeeker) => (
              <CandidateCard
                candidate={candidate}
                key={candidate.profile.jobSeekerId}
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

      <AnimatedSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)}>
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
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
              router.push(`/dashboard/company/candidates?${params.toString()}`);
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
              router.push(`/dashboard/company/candidates?${params.toString()}`);
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
              router.push(`/dashboard/company/candidates?${params.toString()}`);
            }}
          />
        </div>
      </AnimatedSidebar>
    </div>
  );
}
