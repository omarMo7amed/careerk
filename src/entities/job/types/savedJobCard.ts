export interface SavedJobCardType {
  id: string;
  bookmarkId: string;
  title: string;
  type: "direct" | "scraped";
  companyName: string;
  location: string | null;
  salary: string | null;
  jobType: string | null;
  skills: Array<{ name: string }>;
  isBookmarked: boolean;
}
