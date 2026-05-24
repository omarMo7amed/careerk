import { Card } from "@/shared";
import { TrendingUp } from "lucide-react";
import { CompanyJob } from "@/entities/company-job";

interface Props {
  jobs: CompanyJob[];
}

function TopPerformingJobs({ jobs }: Props) {
  const sorted = [...jobs]
    .filter((j) => j.applicants !== undefined)
    .sort((a, b) => (b.applicants ?? 0) - (a.applicants ?? 0))
    .slice(0, 5);

  const maxApplicants = sorted[0]?.applicants ?? 1;

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-4 h-4 text-primary" />
        <h3 className="text-lg font-bold">Top Performing Jobs</h3>
      </div>
      <Card className="flex-1">
        <div className="space-y-6">
          {sorted.map((job) => (
            <div key={job.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <h6 className="font-semibold">{job.title}</h6>
                <span className="text-sm font-medium text-primary">
                  {job.applicants} applicants
                </span>
              </div>
              <div className="w-full bg-bg-muted rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(((job.applicants ?? 0) / maxApplicants) * 100, 100)}%`,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-text-secondary">
                <span>{job.experienceLevel}</span>
                <span>{job.location ?? "Remote"}</span>
              </div>
            </div>
          ))}

          {sorted.length === 0 && (
            <p className="text-sm text-text-secondary">
              No jobs with applicants yet.
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}

export default TopPerformingJobs;
