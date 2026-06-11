import { authInterceptor } from "@/shared";

interface BookmarkJobResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
  };
  meta: {
    timestamp: string;
    path: string;
    method: string;
  };
}

export async function bookmarkJob(
  jobId: string,
  jobSource: "DIRECT" | "SCRAPED",
): Promise<BookmarkJobResponse> {
  const res = await authInterceptor(`/jobs/bookmark`, {
    method: "POST",
    body: JSON.stringify({ jobId, jobSource }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || "Failed to bookmark job");
  }

  return res.json();
}

export async function removeBookmarkJob(
  bookmarkId: string,
): Promise<BookmarkJobResponse> {
  const res = await authInterceptor(`/jobs/bookmarks/${bookmarkId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || "Failed to remove bookmark");
  }

  return res.json();
}
