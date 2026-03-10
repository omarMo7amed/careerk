"use client";
import {
  experienceLevelLabels,
  jobTypeLabels,
  workPreferenceLabels,
} from "@/entities/company-job";
import { Job, JobCardJobseeker, useJobsQuery } from "@/entities/job";
import { TableOfOperation } from "@/features/filter";
import { Pagination } from "@/shared";
import { List } from "@/widgets/list";
export function JobsList() {
  const { jobs } = useJobsQuery();
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row gap-4 ">
      <div className="sm:w-1/3 lg:w-1/4 flex flex-row sm:flex-col  gap-4 py-4 pl-4 ">
        <TableOfOperation
          key={"Job Type"}
          title="Job Type"
          options={Object.entries(jobTypeLabels).map(([value, label]) => ({
            value,
            label,
          }))}
        />
        <TableOfOperation
          key={"Experience Level"}
          title="Experience Level"
          options={Object.entries(experienceLevelLabels).map(
            ([value, label]) => ({ value, label }),
          )}
        />

        <TableOfOperation
          key={"Work Preference"}
          title="Work Preference"
          options={Object.entries(workPreferenceLabels).map(
            ([value, label]) => ({ value, label }),
          )}
        />
      </div>
      <div className="flex-1 px-4 sm:pl-0 sm:pr-4 py-4 max-h-screen overflow-scroll">
        <List
          items={jobs as Job[]}
          renderItem={(job) => <JobCardJobseeker job={job} key={job.id} />}
          columnsInLarge={3}
          columnsInMedium={2}
          columnsInSmall={1}
        />

        <Pagination
          page={1}
          totalPages={10}
          onPageChange={(page) => console.log(page)}
        />
      </div>
    </div>
  );
}
