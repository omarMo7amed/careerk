"use client";
import { useState } from "react";
import { Job, JobCardJobseeker, useJobsQuery } from "@/entities/job";
import { AnimatedSidebar, Button, Pagination } from "@/shared";
import { List } from "@/widgets/list";
import { TableOfOperation } from "@/features/filter";

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

      <AnimatedSidebar
        title="Filter"
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
      >
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <TableOfOperation
            title="Job Type"
            options={["Full-time", "Part-time", "Contract"]}
            asDropdown={false}
          />
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
