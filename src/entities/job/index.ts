export type { Job } from "./types/job";
export { JobCardJobseeker } from "./ui/JobCardJobseeker";

// Components exports
export { SourceBadge } from "./components/SourceBadge";
export { CompanyLogo } from "./components/CompanyLogo";
export { CompanyInfo } from "./components/CompanyInfo";
export { JobTitle } from "./components/JobTitle";
export { JobDetails } from "./components/JobDetails";
export { JobFooter } from "./components/JobFooter";
export { ViewJobOverlay } from "./components/ViewJobOverlay";

export { useJobsQuery } from "./model/useJobsQuery";
export { useMatchedJobsQuery } from "./model/useMatchedJobsQuery";

export { useSavedJobs } from "./model/useSavedJobs";
export { getBookmarkedJobs } from "./api/getBookmarkedJobs";
export type { Job as JobOfBookmark } from "./types/BoomarkedJob";
export type { BookmarkedJob, BookmarksResponse } from "./types/BoomarkedJob";
export { jobsToJobCards } from "./lib/transformers";
export { SavedJobCard } from "./ui/SavedJobCard";

export type { SavedJobCardType } from "./types/savedJobCard";

export { default as getJobs } from "./api/getJobs";
export { default as getMatchedJobs } from "./api/getMatchedJobs";
export type { GetJobsOptions, JobsResponse, ScrapedJob } from "./types/job";

// Mock data exports
export { jobListings } from "./mock-data/jobs";
export { matchedJobs } from "./mock-data/matchedJobs";
