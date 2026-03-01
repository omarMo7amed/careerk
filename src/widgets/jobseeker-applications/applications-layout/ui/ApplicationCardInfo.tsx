import { ApplicationListItem } from "@/entities/application";
import { format } from "date-fns";
import { Briefcase, Calendar, MapPin } from "lucide-react";

function ApplicationCardInfo({
  application,
}: {
  application: ApplicationListItem;
}) {
  return (
    <div className="space-y-2 mb-4">
      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <MapPin className="w-4 h-4 shrink-0" />
        <span className="truncate">{application.directJob.location}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <Briefcase className="w-4 h-4 shrink-0" />
        <span>{application.directJob.jobType.replace("_", " ")}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <Calendar className="w-4 h-4 shrink-0" />
        <span>
          Applied {format(new Date(application.appliedAt), "MMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
}

export { ApplicationCardInfo };
