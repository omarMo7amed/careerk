import { Clock } from "lucide-react";

interface JobFooterProps {
  postedDate?: string;
  applicants?: number;
  applicationsCount?: number;
}

export function JobFooter({
  postedDate,
  applicants,
  applicationsCount,
}: JobFooterProps) {
  const totalApplicants = applicants || applicationsCount;

  return (
    <div className="pt-4 border-t border-border flex items-center justify-between">
      {postedDate && (
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <Clock className="w-3 h-3" />
          <span>{postedDate}</span>
        </div>
      )}
      <div className="text-xs font-medium text-text-secondary">
        {totalApplicants} applicant{totalApplicants !== 1 ? "s" : ""}
      </div>
    </div>
  );
}
