"use client";
import { CandidateCard, JobSeeker, allJobSeekers } from "@/entities/job-seeker";
import { AnimatedSidebar, Button, DashboardHeader, Pagination } from "@/shared";
import { Briefcase, SlidersHorizontal } from "lucide-react";
import { SortSelect } from "./SortSelect";
import { useState } from "react";
import { List } from "@/widgets/list";
import { SearchBar } from "@/features/search";
import { TableOfOperation } from "@/features/filter";

const PAGE_SIZE = 9;

export function CandidatesLayout() {
  const [displayedCandidates, setDisplayedCandidates] = useState(allJobSeekers);
  const [filterOpen, setFilterOpen] = useState(false);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(displayedCandidates.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const paginatedCandidates = displayedCandidates.slice(
    start,
    start + PAGE_SIZE,
  );

  return (
    <div>
      {/* Header */}
      <DashboardHeader
        header="Candidate Search & Filtering"
        description="Find and compare qualified candidates using AI powered matching"
        Icon={Briefcase}
      />
      {/* Search */}
      <div className="mb-6">
        <SearchBar searchPlaceholder="Search for candidates by name or keyword" />
      </div>

      {/* Sort and Filters */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm font-semibold">
          {allJobSeekers.length} Candidates Found
        </p>

        <div className="flex gap-3">
          <SortSelect
            candidates={allJobSeekers}
            onSort={setDisplayedCandidates}
          />

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

      <List
        items={paginatedCandidates as JobSeeker[]}
        renderItem={(c) => (
          <CandidateCard key={c.profile.jobSeekerId} candidate={c} />
        )}
        columnsInLarge={3}
        columnsInMedium={2}
        columnsInSmall={1}
      />
      <Pagination totalPages={totalPages} page={page} onPageChange={setPage} />
      <AnimatedSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)}>
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <TableOfOperation
            title="Experience Level"
            options={["Entry Level", "Mid Level", "Senior Level"]}
            asDropdown={false}
          />
          <TableOfOperation
            title="Location"
            options={["Remote", "On-site", "Hybrid"]}
            asDropdown={false}
          />
        </div>
      </AnimatedSidebar>
    </div>
  );
}
