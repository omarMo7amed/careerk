"use client";

import { useState } from "react";
import { Candidate } from "@/entities/job-seeker";
import { Select } from "@/shared";
import { sortOptions } from "../constant/sortOptions";
// import { sortCandidates } from "../lib/sortCandidates";

type SortSelectProps = {
  candidates: Candidate[];
  onSort: (sorted: Candidate[]) => void;
};

export function SortSelect({ candidates, onSort }: SortSelectProps) {
  const [sortBy, setSortBy] = useState("best_match");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setSortBy(value);
    // onSort(sortCandidates(candidates, value));
  }

  return (
    <div className="flex items-center justify-between mb-6">
      <p className="text-sm font-semibold">
        {candidates.length} Candidates Found
      </p>
      <div className="flex items-center gap-2">
        <Select
          options={sortOptions}
          value={sortBy}
          onChange={handleChange}
          className="text-sm font-medium"
        />
      </div>
    </div>
  );
}
