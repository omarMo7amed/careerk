"use client";
import { Candidate, CandidateCard, allJobSeekers } from "@/entities/job-seeker";
import { DashboardHeader, Pagination } from "@/shared";
import { Briefcase } from "lucide-react";
import { SortSelect } from "./SortSelect";
import { useState } from "react";
import { List } from "@/widgets/list";

const PAGE_SIZE = 9;

export function CandidatesLayout() {
  const [displayedCandidates, setDisplayedCandidates] = useState(allJobSeekers);
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

      {/* Search and Filters */}
      <div className="p-6 shadow-sm border-border/50 bg-bg-surface rounded-lg mb-6"></div>

      {/* Sort */}
      <SortSelect candidates={allJobSeekers} onSort={setDisplayedCandidates} />

      <List
        items={paginatedCandidates as Candidate[]}
        renderItem={(c) => <CandidateCard key={c.jobSeekerId} candidate={c} />}
        columnsInLarge={3}
        columnsInMedium={2}
        columnsInSmall={1}
      />

      <Pagination totalPages={totalPages} page={page} onPageChange={setPage} />
    </div>
  );
}
