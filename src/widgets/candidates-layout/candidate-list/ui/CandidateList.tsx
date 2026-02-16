"use client";
import { Job, JobCardJobseeker, useJobsQuery } from "@/entities/job";
import { TableOfOperation } from "@/features/filter";
import { List } from "@/widgets/List";

export function CandidateList() {
  const { jobs } = useJobsQuery();
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row gap-4 px-4 py-6">
      <div className="sm:w-1/3 lg:w-1/4 flex flex-row sm:flex-col flex-wrap  gap-4 ">
        <TableOfOperation
          title="Availability"
          options={["Available", "Not Available", "Open to offers"]}
        />
        <TableOfOperation
          title="Work Preference"
          options={["Remote", "On-site", "Hybrid"]}
        />
        <TableOfOperation
          title="Years of Experience"
          options={["0-1 years", "1-3 years", "3-5 years", "5+ years"]}
        />
      </div>
      <List
        items={jobs as Job[]}
        renderItem={(job) => <JobCardJobseeker job={job} key={job.id} />}
      />
    </div>
  );
}
