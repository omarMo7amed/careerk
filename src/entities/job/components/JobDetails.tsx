import { MapPin, Briefcase, DollarSign, FileUser } from "lucide-react";

interface JobDetailsProps {
  salary?: string;
  employmentType?: string;
  location: string;
  totalApplicants?: number;
  workPreference?: string;
}

export function JobDetails({
  salary,
  employmentType,
  location,
  totalApplicants = 0,
  workPreference,
}: JobDetailsProps) {
  return (
    <div className="space-y-2 mb-4">
      {employmentType && (
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Briefcase className="w-4 h-4" />
          <span className="capitalize">
            {employmentType}
            {workPreference ? ` (${workPreference})` : ""}
          </span>
        </div>
      )}

      {salary && (
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <DollarSign className="w-4 h-4" />
          <span>{salary}</span>
        </div>
      )}
      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <MapPin className="w-4 h-4" />
        <span className="line-clamp-1">{location}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <FileUser className="w-4 h-4" />{" "}
        <span className="line-clamp-1">
          {totalApplicants
            ? +totalApplicants +
              " applicant" +
              (totalApplicants !== 1 ? "s" : "")
            : `This Job doesn't provide applicant count.`}
        </span>
      </div>
    </div>
  );
}
