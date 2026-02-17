"use client";
import { Job, JobCardJobseeker, useJobsQuery } from "@/entities/job";
import { TableOfOperation } from "@/features/filter";
import { List } from "@/widgets/List";
export function JobsList() {
  const { jobs } = useJobsQuery();
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row gap-4 ">
      <div className="sm:w-1/3 lg:w-1/4 flex flex-row sm:flex-col  gap-4 py-4 pl-4 ">
        <TableOfOperation
          title="Job Type"
          options={["Full-time", "Part-time"]}
        />
        <TableOfOperation
          title="Experience Level"
          options={["Entry Level", "Mid Level", "Senior Level", "Other"]}
        />
      </div>
      <div className="flex-1 pr-4 py-4 max-h-screen overflow-scroll">
        <List
          items={jobs as Job[]}
          renderItem={(job) => <JobCardJobseeker job={job} key={job.id} />}
          columnsInLarge={3}
        />
      </div>
    </div>
  );
}
