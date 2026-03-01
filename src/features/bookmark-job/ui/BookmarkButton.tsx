"use client";
import { Button } from "@/shared";
import { Bookmark } from "lucide-react";
import { useState } from "react";
import { useBookmarkJob } from "../model/useBookmarkJob";

interface BookmarkButtonProps {
  jobId: string;
  isBookmarked: boolean;
}

function BookmarkButton({
  jobId,
  isBookmarked: initialBookmarked,
}: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);
  const { mutate: toggleBookmark, isPending } = useBookmarkJob();

  function handleClick() {
    toggleBookmark({ jobId, isCurrentlyBookmarked: !isBookmarked });
    setIsBookmarked(!isBookmarked);
  }

  return (
    <Button variant="ghost" onClick={handleClick} disabled={isPending}>
      <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-primary" : ""} `} />
    </Button>
  );
}

export { BookmarkButton };
