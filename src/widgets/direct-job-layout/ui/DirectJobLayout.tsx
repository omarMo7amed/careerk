"use client";
import { CompanyJob } from "@/entities/company-job";
import { BackButton } from "@/shared";
import {
  DirectJobContentCard,
  JobSidebar,
  JobStatistics,
} from "@/widgets/direct-job-content";

export function DirectJobLayout({ job }: { job: CompanyJob }) {
  return (
    <div>
      <div className="mb-8 ">
        <BackButton />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <DirectJobContentCard job={job} />
        <div className="space-y-6">
          <JobSidebar
            deadline={job.deadline}
            apply={() => {
              console.log("kk");
            }}
          />
          <JobStatistics status={job.status} />
        </div>
      </div>
    </div>
  );
}
