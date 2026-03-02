"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookmarkJob, removeBookmarkJob } from "../api/bookmarkJob";
interface BookmarkJobParams {
  jobId: string;
  isCurrentlyBookmarked: boolean;
}

export function useBookmarkJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ jobId, isCurrentlyBookmarked }: BookmarkJobParams) => {
      if (isCurrentlyBookmarked) {
        await removeBookmarkJob(jobId);
      } else {
        await bookmarkJob(jobId);
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
