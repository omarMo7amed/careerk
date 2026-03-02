import { MapPin, Briefcase, DollarSign, FileUser } from "lucide-react";

interface JobDetailsProps {
  salary?: string;
  employmentType?: string;
  location: string;
  totalApplicants?: number;
}

export function JobDetails({
  salary,
  employmentType,
  location,
  totalApplicants = 0,
}: JobDetailsProps) {
  return (
    <div className="space-y-2 mb-4">
      {salary && (
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <DollarSign className="w-4 h-4" />
          <span>{salary}</span>
        </div>
      )}
      {employmentType && (
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Briefcase className="w-4 h-4" />
          <span className="capitalize">{employmentType}</span>
        </div>
      )}
      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <MapPin className="w-4 h-4" />
        <span className="line-clamp-1">{location}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <FileUser className="w-4 h-4" />{" "}
        <span className="line-clamp-1">
          {totalApplicants} applicant
          {totalApplicants !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}
