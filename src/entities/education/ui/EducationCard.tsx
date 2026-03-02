import { GraduationCap, CalendarDays, Award } from "lucide-react";
import { Badge, formatYear } from "@/shared";
import { Education } from "../types/types";
import { DEGREE_LABELS } from "../lib/lables";

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  const {
    fieldOfStudy,
    institutionName,
    degreeType,
    startDate,
    endDate,
    isCurrent,
    gpa,
    description,
  } = education;

  return (
    <div className="flex gap-4 p-4 rounded-lg bg-bg-muted border border-border">
      {/* Icon */}
      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <GraduationCap className="w-5 h-5 text-primary" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {fieldOfStudy}
            </h3>
            <p className="text-sm text-primary font-medium">
              {institutionName}
            </p>
          </div>
          {isCurrent && (
            <Badge variant="info" size="sm">
              Current
            </Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-3 mt-1.5 text-xs text-text-muted">
          {degreeType && (
            <span className="flex items-center gap-1">
              <Award className="w-3 h-3" />
              {DEGREE_LABELS[degreeType]}
            </span>
          )}
          <span className="flex items-center gap-1">
            <CalendarDays className="w-3 h-3" />
            {formatYear(startDate)} –{" "}
            {isCurrent ? "Present" : formatYear(endDate)}
          </span>
          {gpa != null && (
            <span className="font-medium text-foreground">GPA: {gpa}</span>
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
