export interface SavedJobCardType {
  id: string;
  title: string;
  companyName: string;
  location: string | null;
  salary: string | null;
  jobType: string | null;
  skills: Array<{ name: string }>;
  isBookmarked: boolean;
}
