interface BookmarkJobResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
  };
}
export async function bookmarkJob(jobId: string): Promise<BookmarkJobResponse> {
  console.log("Bookmarking job:", jobId);
  return {
    success: true,
    message: "Job bookmarked successfully",
    data: {
      id: jobId,
    },
  };
}
export async function removeBookmarkJob(
  jobId: string,
): Promise<BookmarkJobResponse> {
  console.log("Removing bookmark for job:", jobId);
  return {
    success: true,
    message: "Job bookmark removed successfully",
    data: {
      id: jobId,
    },
  };
}
