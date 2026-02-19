"use client";
import {
  CandidateCard,
  Candidate,
  useCandidatesQuery,
} from "@/entities/candidate";
import { TableOfOperation } from "@/features/filter";
import { Pagination } from "@/shared";
import { List } from "@/widgets/List";

export function CandidateList() {
  const { candidates } = useCandidatesQuery();
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row gap-4 ">
      <div className="sm:w-1/3 lg:w-1/4 flex flex-row sm:flex-col flex-wrap pl-4 py-4 gap-4 ">
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

      <div className="flex-1 px-4 sm:pl-0 sm:pr-4 py-4 max-h-screen overflow-scroll">
        <List
          items={candidates as Candidate[]}
          renderItem={(candidate) => (
            <CandidateCard candidate={candidate} key={candidate.id} />
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
