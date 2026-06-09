import { BookmarkedJob } from "../types/BoomarkedJob";
import { SavedJobCardType } from "../types/savedJobCard";

export function jobToJobCard(bookmark: BookmarkedJob): SavedJobCardType {
  return {
    id: bookmark.job.id,
    bookmarkId: bookmark.bookmarkId,
    title: bookmark.job.title,
    companyName: bookmark.job.companyName,
    location: bookmark.job.location,
    salary: bookmark.job.salary,
    jobType: bookmark.job.jobType,
    skills: bookmark.job.skills,
    isBookmarked: true, // Assuming all fetched jobs are bookmarked
  };
}

type BookmarkedJobsInput =
  | BookmarkedJob[]
  | { data?: BookmarkedJob[] }
  | null
  | undefined;

export function jobsToJobCards(
  bookmarks: BookmarkedJobsInput,
): SavedJobCardType[] {
  const bookmarkedJobs = Array.isArray(bookmarks)
    ? bookmarks
    : (bookmarks?.data ?? []);

  return bookmarkedJobs.map(jobToJobCard);
}
