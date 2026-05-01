import { Clock } from "lucide-react";
import { ApplyNow } from "./ApplyNow";
import { BookmarkButton } from "@/features/bookmark-job";

interface JobFooterProps {
  postedDate?: string;
  isAuthenticated?: boolean;
  id: string;
  bookmarkId?: string;
  isBookmarked?: boolean;
}

export function JobFooter({
  postedDate,
  isAuthenticated = true,
  id,
  bookmarkId,
  isBookmarked,
}: JobFooterProps) {
  return (
    <div className="pt-4 border-t border-border flex items-center justify-between">
      {postedDate && (
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <Clock className="w-3 h-3" />
          <span>{postedDate}</span>
        </div>
      )}

      <div className="flex items-center gap-4">
        <BookmarkButton
          jobId={id}
          bookmarkId={bookmarkId}
          isBookmarked={isBookmarked}
        />

        {isAuthenticated && <ApplyNow />}
      </div>
    </div>
  );
}
