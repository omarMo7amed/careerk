"use client";
import {
  CandidateCard,
  Candidate,
  useCandidatesQuery,
} from "@/entities/candidate";
import { TableOfOperation } from "@/features/filter";
import { List } from "@/widgets/List";

export function CandidateList() {
  const { candidates } = useCandidatesQuery();
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
        items={candidates as Candidate[]}
        renderItem={(candidate) => (
          <CandidateCard candidate={candidate} key={candidate.id} />
        )}
      />
    </div>
  );
}
