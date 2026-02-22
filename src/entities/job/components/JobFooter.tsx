import { Bookmark, Clock } from "lucide-react";
import { ApplyNow } from "./ApplyNow";

interface JobFooterProps {
  postedDate?: string;
  isAuthenticated?: boolean;
}

export function JobFooter({
  postedDate,
  isAuthenticated = true,
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
        <Bookmark
          className="text-primary hover:bg-primary/10 p-2 rounded-lg"
          size={40}
        />
        {isAuthenticated && <ApplyNow />}
      </div>
    </div>
  );
}
