"use client";
import type { Job } from "@/entities/job";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookmarkJob, removeBookmarkJob } from "../api/bookmarkJob";
interface BookmarkJobParams {
  jobId: string;
  bookmarkId?: string;
  isCurrentlyBookmarked: boolean;
  jobSource: "DIRECT" | "SCRAPED";
  job?: Job;
}

export function useBookmarkJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      jobId,
      bookmarkId,
      isCurrentlyBookmarked,
      jobSource,
    }: BookmarkJobParams) => {
      if (isCurrentlyBookmarked) {
        await removeBookmarkJob(bookmarkId ?? jobId);
      } else {
        await bookmarkJob(jobId, jobSource);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmark"] });
    },
    onError: (error) => {
      console.error("Bookmark error:", error);
    },
  });
}
