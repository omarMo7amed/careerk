import { Candidate } from "@/entities/job-seeker";
import { Company } from "@/entities/company";
import { Job } from "@/entities/job";
import { SearchQueryOptions } from "./useSearchQueryOptions";

export type SearchType = "candidates" | "jobs" | "companies";

export interface SearchBarProps {
  type: SearchType;
  searchPlaceholder: string;
  getResult: (options?: SearchQueryOptions) => Promise<unknown>;

  initialQuery?: string;
  initialLocation?: string;
  onSelect?: (item: Job | Candidate | Company) => void;
  onSearchSubmit?: (searchValue: string, locationValue: string) => void;
}
