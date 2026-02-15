"use client";
import { Job, JobCardJobseeker, useJobsQuery } from "@/entities/job";
import { TableOfOperation } from "@/features/filter";
import { List } from "@/widgets/List";
export function JobsSection() {
  const { jobs } = useJobsQuery();
  console.log(jobs);
  return (
    <div className="max-w-screen-2xl mx-auto flex">
      <TableOfOperation />
      <List
        items={jobs as Job[]}
        renderItem={(job) => <JobCardJobseeker job={job} key={job.id} />}
      />
    </div>
  );
}
