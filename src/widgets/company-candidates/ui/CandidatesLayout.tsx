"use client";
import { CandidateCard, allJobSeekers } from "@/entities/job-seeker";
import { DashboardHeader } from "@/shared";
import { Briefcase } from "lucide-react";
import { SortSelect } from "./SortSelect";
import { useState } from "react";

export function CandidatesLayout() {
  const [displayedCandidates, setDisplayedCandidates] = useState(allJobSeekers);
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {displayedCandidates.map((candidate, index) => (
          <CandidateCard key={index} candidate={candidate} />
        ))}
      </div>
    </div>
  );
}
