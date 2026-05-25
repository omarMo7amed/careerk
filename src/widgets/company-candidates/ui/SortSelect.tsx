"use client";

import { useState } from "react";
import { JobSeeker } from "@/entities/job-seeker";
import { Select } from "@/shared";
import { sortOptions } from "../constant/sortOptions";
import { sortCandidates } from "../lib/sortCandidates";

type SortSelectProps = {
  candidates: JobSeeker[];
  onSort: (sorted: JobSeeker[]) => void;
};

export function SortSelect({ candidates, onSort }: SortSelectProps) {
  const [sortBy, setSortBy] = useState("best_match");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setSortBy(value);
    const sorted = sortCandidates(candidates, value);

    onSort(sorted);
  }

  return (
    <div className="flex items-center gap-2">
      <Select
        options={sortOptions}
        value={sortBy}
        onChange={handleChange}
        className="text-sm font-medium"
      />
    </div>
  );
}
