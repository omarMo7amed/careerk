import { MapPin, Briefcase, DollarSign } from "lucide-react";

interface JobDetailsProps {
  salary?: string;
  employmentType?: string;
  location: string;
}

export function JobDetails({
  salary,
  employmentType,
  location,
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
    </div>
  );
}
