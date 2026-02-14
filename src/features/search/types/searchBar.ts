import { Candidate } from "@/entities/candidate";
import { Company } from "@/entities/company";
import { Job } from "@/entities/job";

export type SearchType = "candidate" | "job" | "company";

export interface SearchBarProps {
  type?: SearchType;
  maxSuggestions?: number;
  debounceMs?: number;
  initialQuery?: string;
  initialLocation?: string;
  onSelect?: (item: Job | Candidate | Company) => void;
}
