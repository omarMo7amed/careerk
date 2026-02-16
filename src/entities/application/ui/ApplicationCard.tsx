/**
 * ApplicationCard Component
 *
 * Displays application information with status and actions.
 * Used in both company and jobseeker dashboards.
 */

import { cn } from "@/shared/lib/cn";

interface ApplicationCardProps {
  jobTitle: string;
  candidateName?: string;
  companyName?: string;
  status: "pending" | "reviewed" | "interview" | "accepted" | "rejected";
  appliedDate: string;
}

export function ApplicationCard({
  jobTitle,
  candidateName,
  companyName,
  status,
  appliedDate,
}: ApplicationCardProps) {
  return (
    <div className="application-card">
      <h4>{jobTitle}</h4>
      {candidateName && <p className="candidate">{candidateName}</p>}
      {companyName && <p className="company">{companyName}</p>}
      <div className="application-meta">
        <span className={cn("status", `status-${status}`)}>{status}</span>
        <span className="date">Applied: {appliedDate}</span>
      </div>
    </div>
  );
}
