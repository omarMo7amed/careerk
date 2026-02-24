import { CompanyJob } from "@/entities/company-job/types/companyJob";
import { Badge, Button } from "@/shared";
import { capitalizeFirstLetter } from "@/shared/lib/capitalizeFirstLetter";
import Card from "@/shared/ui/Card";
import { Pause, PlayIcon, Trash2, Users } from "lucide-react";
import Link from "next/link";

type JobPostCardProps = {
  job: CompanyJob;
};

function JobPostCard({ job }: JobPostCardProps) {
  const {
    id,
    title,
    skills,
    location,
    workArrangement,
    employmentType,
    status,
    applicationsCount,
  } = job;

  return (
    <Card>
      <div className="space-y-4">
        <Link
          href={`./job-listings/${id}`}
          className="block hover:opacity-80 transition-opacity"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h4 className="text-lg font-semibold">{title}</h4>

              <Badge
                variant={status === "published" ? "active" : "pause"}
                className="rounded-lg shadow-xs"
              >
                {capitalizeFirstLetter(status)}
              </Badge>
            </div>

            <p className="text-sm text-text-secondary mb-3">
              {capitalizeFirstLetter(workArrangement)} •{" "}
              {capitalizeFirstLetter(location)} •{" "}
              {capitalizeFirstLetter(employmentType)}
            </p>

            <div className="flex items-center gap-1 text-sm text-text-secondary mb-3">
              <Users className="w-4 h-4" />
              <span>{applicationsCount} applicants</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill.id}
                  className="text-xs font-normal border-none rounded-lg shadow-xs"
                >
                  {capitalizeFirstLetter(skill.name)}
                </Badge>
              ))}
            </div>
          </div>
        </Link>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
          <Button size="sm" variant="ghost" className="gap-2">
            <Users className="w-4 h-4" />
            View Applications
          </Button>

          {job.status === "published" ? (
            <Button size="sm" variant="ghost" className="gap-2">
              <Pause className="w-4 h-4" />
              Pause
            </Button>
          ) : (
            <Button
              size="sm"
              variant="ghost"
              className="gap-2 text-success hover:bg-success/10 "
            >
              <PlayIcon className="w-4 h-4" />
              Activate
            </Button>
          )}
          <Button size="sm" variant="ghost" className="gap-2 text-error">
            <Trash2 className="w-4 h-4" />
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default JobPostCard;
