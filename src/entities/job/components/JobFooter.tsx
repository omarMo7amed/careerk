import { Clock } from "lucide-react";
import { ApplyNow } from "@/features/apply-now";
import { BookmarkButton } from "@/features/bookmark-job";
import { useApplyNow } from "@/features/apply-now/model/useApplyNow";

interface JobFooterProps {
  postedDate?: string;
  isAuthenticated?: boolean;
  id: string;
  bookmarkId?: string;
  isBookmarked?: boolean;
  type: "direct" | "scraped";
  jobPostUrl?: string;
}

export function JobFooter({
  postedDate,
  isAuthenticated = true,
  id,
  type,
  bookmarkId,
  jobPostUrl,
  isBookmarked,
}: JobFooterProps) {
  const { applyNow, isSuccess, isPending } = useApplyNow();
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
          jobSource={type === "direct" ? "DIRECT" : "SCRAPED"}
          jobId={id}
          bookmarkId={bookmarkId}
          isBookmarked={isBookmarked}
        />

        {isAuthenticated && (
          <ApplyNow
            link={jobPostUrl}
            onClick={() => applyNow(id)}
            isLoading={isPending}
            isSuccess={isSuccess}
          />
        )}
      </div>
    </div>
  );
}
