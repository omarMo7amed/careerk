import { BookmarkButton } from "@/features/bookmark-job";
import { Badge } from "@/shared";
import { Briefcase, Building2, MapPin } from "lucide-react";
import { SavedJobCardType } from "../types/savedJobCard";

interface SavedJobCardProps {
  job: SavedJobCardType;
}

export function SavedJobCard({ job }: SavedJobCardProps) {
  const {
    title,
    companyName,
    id,
    bookmarkId,
    isBookmarked,
    location,
    jobType,
    skills,
    salary,
  } = job;

  return (
    <div className="group  flex flex-col h-full  bg-bg-surface rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary-hover transition-all">
      <div className="flex items-start justify-between mb-4 min-h-14 ">
        <div className="flex-1 pr-2 min-w-0">
          <h4 className="font-bold mb-1 line-clamp-1">{title}</h4>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Building2 className="w-4 h-4 shrink-0" />
            <span className="truncate">{companyName}</span>
          </div>
        </div>

        <BookmarkButton
          jobId={id}
          bookmarkId={bookmarkId}
          isBookmarked={isBookmarked}
        />
      </div>

      <div className="space-y-2 mb-4 min-h-12">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <MapPin className="w-4 h-4" />
          <span className="truncate">{location || "Not specified"}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Briefcase className="w-4 h-4" />
          <span className="truncate">{jobType || "Not specified"}</span>
        </div>
      </div>

      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {skills.slice(0, 3).map((skill, index) => (
            <Badge
              key={index}
              size="sm"
              className="font-medium "
              variant="info"
            >
              {skill.name}
            </Badge>
          ))}
          {skills.length > 3 && (
            <span className="px-2 py-1 bg-bg-muted text-text-secondary text-xs font-semibold rounded">
              +{skills.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Salary */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <p className="text-sm font-semibold">{salary || "Competitive"}</p>
      </div>
    </div>
  );
}
