import { CalendarDays, MapPin } from "lucide-react";
import { WorkExperience } from "@/entities/experience";
import { Badge, formatDate, getDuration } from "@/shared";

interface ExperienceCardProps {
  experience: WorkExperience;
  isMostRecent?: boolean;
}

export function ExperienceCard({
  experience,
  isMostRecent,
}: ExperienceCardProps) {
  const {
    jobTitle,
    companyName,
    startDate,
    endDate,
    location,
    description,
    isCurrent,
  } = experience;

  return (
    <div className="flex gap-4">
      {/* Timeline dot */}
      <div className="shrink-0 mt-1.5">
        <div
          className={`w-4 h-4 rounded-full border-2 ${
            isCurrent || isMostRecent
              ? "bg-primary border-primary"
              : "bg-bg-surface border-border"
          }`}
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {jobTitle}
            </h3>
            <p className="text-sm text-primary font-medium">{companyName}</p>
          </div>
          {isCurrent && (
            <Badge variant="success" size="sm">
              Current
            </Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-3 mt-1 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <CalendarDays className="w-3 h-3" />
            {formatDate(startDate)} → {formatDate(endDate)} ·{" "}
            <span className="font-medium">
              {getDuration(startDate, endDate)}
            </span>
          </span>
          {location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {location}
            </span>
          )}
        </div>

        {description && (
          <p className="text-text-secondary text-sm mt-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
