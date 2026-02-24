export interface JobSkill {
  skillId: string;
  name: string;
}
export interface Job {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  salary: string | null;
  jobType: string | null;
  companyName: string;
  sourceUrl: string;
  postedAt: string | null;
  source: "scraped" | "direct";
  skills: JobSkill[];
}

export interface BookmarkedJob {
  bookmarkId: string;
  bookmarkedAt: string;
  job: Job;
}
export interface BookmarksResponse {
  success: boolean;
  data: BookmarkedJob[];
  message: string;
}
