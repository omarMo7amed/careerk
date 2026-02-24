"use client";
import { useState } from "react";
import { Job, JobCardJobseeker, useJobsQuery } from "@/entities/job";
import { Button, Pagination } from "@/shared";
import { List } from "@/widgets/List";
import { FilterSideModal } from "@/widgets/filter-sidebar";

export function JobsList() {
  const { jobs } = useJobsQuery();
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="overflow-y-auto max-h-screen p-5">
      <div className="flex justify-between mb-10 items-baseline">
        <span className="text-sm text-text-secondary baseline rounded">
          Showing {jobs?.length} job{jobs && jobs.length > 1 ? "s" : ""}
        </span>

        <Button variant="outline" size="sm" onClick={() => setFilterOpen(true)}>
          Filters
        </Button>
      </div>

      <List
        items={jobs as Job[]}
        renderItem={(j) => <JobCardJobseeker job={j} key={j.id} />}
        columnsInLarge={3}
        columnsInMedium={2}
        columnsInSmall={1}
      />

      <Pagination totalPages={10} page={1} onPageChange={() => {}} />

      <FilterSideModal
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
      />
    </div>
  );
}
