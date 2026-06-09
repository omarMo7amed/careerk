import type { Job } from "@/entities/job";
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

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3000/api/v1";

export async function bookmarkJob(
  jobId: string,
): Promise<BookmarkJobResponse> {
  const res = await authInterceptor(`/jobs/bookmarks/${jobId}`, {
    method: "POST",
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
