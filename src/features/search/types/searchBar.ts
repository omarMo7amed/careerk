import { JobSeeker } from "@/entities/job-seeker";
import { Company } from "@/entities/company";
import { Job } from "@/entities/job";

export type SearchType = "candidates" | "jobs" | "companies";

export interface SearchBarProps {
  searchPlaceholder: string;
  isLoading?: boolean;

  initialQuery?: string;
  initialLocation?: string;
  onSelect?: (item: Job | JobSeeker | Company) => void;
  onSearchSubmit?: (searchValue: string, locationValue: string) => void;
}
