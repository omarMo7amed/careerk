"use client";
import { Button } from "@/shared";
import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";
import { useBookmarkJob } from "../model/useBookmarkJob";

interface BookmarkButtonProps {
  jobId: string;
  bookmarkId?: string;
  isBookmarked?: boolean;
  jobSource: "DIRECT" | "SCRAPED";
}

function BookmarkButton({
  jobId,
  bookmarkId,
  jobSource,

  isBookmarked: initialBookmarked = false,
}: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);
  const { mutateAsync: toggleBookmark, isPending } = useBookmarkJob();

  useEffect(() => {
    setIsBookmarked(initialBookmarked);
  }, [initialBookmarked]);

  async function handleClick() {
    await toggleBookmark({
      jobId,
      bookmarkId,
      jobSource,
      isCurrentlyBookmarked: isBookmarked,
    });
    setIsBookmarked((currentValue) => !currentValue);
  }

  return (
    <Button variant="ghost" onClick={handleClick} disabled={isPending}>
      <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-primary" : ""} `} />
    </Button>
  );
}

export { BookmarkButton };
