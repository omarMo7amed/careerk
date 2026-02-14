import { Candidate } from "@/entities/candidate";
import { Company } from "@/entities/company";
import { Job } from "@/entities/job";
import { SearchType } from "./searchBar";

export interface UseSearchControllerOptions {
  type?: SearchType;
  debounceMs?: number;
  initialQuery?: string;
  initialLocation?: string;
  maxSuggestions?: number;
  onSelect?: (item: Job | Candidate | Company) => void;
}
