import { DetailItem } from "./DetailedItem";
import { JobSection } from "./JobSection";
import { Briefcase, Calendar, DollarSign, MapPin } from "lucide-react";
export function JobDetailsGrid({
  location,
  minSalary,
  maxSalary,
  experienceLevel,
  applicationDeadline,
}: {
  location: string;
  minSalary: number | null;
  maxSalary: number | null;
  experienceLevel: string;
  applicationDeadline: string;
}) {
  return (
    <div className="pt-6 border-t border-border/50">
      <JobSection title="Job Details">
        <div className="grid grid-cols-2 gap-6">
          <DetailItem
            icon={<MapPin className="w-4 h-4" />}
            label="Location"
            value={location}
          />
          <DetailItem
            icon={<DollarSign className="w-4 h-4" />}
            label="Salary Range"
            value={`${minSalary} - ${maxSalary}`}
          />
          <DetailItem
            icon={<Briefcase className="w-4 h-4" />}
            label="Experience Level"
            value={experienceLevel}
          />
          <DetailItem
            icon={<Calendar className="w-4 h-4" />}
            label="Application Deadline"
            value={`Closes in ${applicationDeadline}`}
          />
        </div>
      </JobSection>
    </div>
  );
}
