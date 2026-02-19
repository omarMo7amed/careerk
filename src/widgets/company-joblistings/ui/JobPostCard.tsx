import { Badge, Button } from "@/shared";
import Card from "@/shared/ui/Card";
import { Pause, PlayIcon, Trash2, Users } from "lucide-react";

type JobPostCardProps = {
  job: {
    title: string;
    department: string;
    location: string;
    type: string;
    status: string;
    applicants: number;
    skills: string[];
  };
};

function JobPostCard({ job }: JobPostCardProps) {
  return (
    <Card>
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h4 className="text-lg font-semibold">{job.title}</h4>

            <Badge
              variant={job.status === "Active" ? "active" : "pause"}
              className="rounded-lg shadow-xs"
            >
              {job.status}
            </Badge>
          </div>

          <p className="text-sm text-text-secondary mb-3">
            {job.department} • {job.location} • {job.type}
          </p>

          <div className="flex items-center gap-1 text-sm text-text-secondary mb-3">
            <Users className="w-4 h-4" />
            <span>{job.applicants} applicants</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <Badge
                key={skill}
                className="text-xs font-normal border-none rounded-lg shadow-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
          <Button size="sm" variant="ghost" className="gap-2">
            <Users className="w-4 h-4" />
            View Applications
          </Button>

          {job.status === "Active" ? (
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
