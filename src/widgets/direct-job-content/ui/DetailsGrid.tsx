import { DetailItem } from "./DetailedItem";
import { JobSection } from "./JobSection";
import { Briefcase, Calendar, DollarSign, MapPin } from "lucide-react";

export function JobDetailsGrid({
  location,
  minSalary,
  maxSalary,
  experienceLevel,
  deadline,
}: {
  location?: string | null;
  minSalary?: number | null;
  maxSalary?: number | null;
  experienceLevel: string;
  deadline: string | null;
}) {
  const salaryValue =
    minSalary != null && maxSalary != null
      ? `$${minSalary.toLocaleString()} – $${maxSalary.toLocaleString()}`
      : minSalary != null
        ? `From $${minSalary.toLocaleString()}`
        : maxSalary != null
          ? `Up to $${maxSalary.toLocaleString()}`
          : null;

  const deadlineValue = deadline
    ? `Closes on ${new Date(deadline).toLocaleDateString("en-US", { dateStyle: "medium" })}`
    : null;

  return (
    <div className="pt-6 border-t border-border/50">
      <JobSection title="Job Details">
        <div className="grid grid-cols-2 gap-6">
          <DetailItem
            icon={<MapPin className="w-4 h-4" />}
            label="Location"
            value={location ?? null}
          />
          <DetailItem
            icon={<DollarSign className="w-4 h-4" />}
            label="Salary Range"
            value={salaryValue}
          />
          <DetailItem
            icon={<Briefcase className="w-4 h-4" />}
            label="Experience Level"
            value={experienceLevel}
          />
          <DetailItem
            icon={<Calendar className="w-4 h-4" />}
            label="Application Deadline"
            value={deadlineValue}
          />
        </div>
      </JobSection>
    </div>
  );
}
