import { ApplicationsCard } from "./ApplicationCard";
import { JobCard } from "./JobCard";
import { JobMatchesCard } from "./JobMatchesCard";

export function MockupCards() {
  return (
    <div className="flex-1 flex items-center justify-center py-8">
      <div className="mockup-card relative w-full max-w-sm">
        <ApplicationsCard />
        <JobCard />
        <JobMatchesCard />
      </div>
    </div>
  );
}
