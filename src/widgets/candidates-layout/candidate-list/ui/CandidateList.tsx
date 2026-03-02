"use client";
import {
  CandidateCard,
  Candidate,
  useCandidatesQuery,
} from "@/entities/job-seeker";
import { TableOfOperation } from "@/features/filter";
import {
  Pagination,
  AVAILABILITY_OPTIONS,
  WORK_PREFERENCE_OPTIONS,
  EXPERIENCE_OPTIONS,
} from "@/shared";
import { List } from "@/widgets/list";

export function CandidateList() {
  const { candidates } = useCandidatesQuery();
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row gap-4 ">
      <div className="sm:w-1/3 lg:w-1/4 flex flex-row sm:flex-col flex-wrap pl-4 py-4 gap-4 ">
        <TableOfOperation
          title="Availability"
          options={[...AVAILABILITY_OPTIONS]}
        />
        <TableOfOperation
          title="Work Preference"
          options={[...WORK_PREFERENCE_OPTIONS]}
        />
        <TableOfOperation
          title="Years of Experience"
          options={[...EXPERIENCE_OPTIONS]}
        />
      </div>

      <div className="flex-1 px-4 sm:pl-0 sm:pr-4 py-4 max-h-screen overflow-scroll">
        <List
          items={candidates as Candidate[]}
          renderItem={(candidate) => (
            <CandidateCard candidate={candidate} key={candidate.jobSeekerId} />
          )}
          columnsInLarge={2}
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
