import { Candidate } from "@/entities/candidate";
import { Company } from "@/entities/company";
import type { Job } from "@/entities/job";

export type SearchSuggestionsProps = {
  suggestions: Job[] | Company[] | Candidate[];
  highlighted: number;
  onHighlight: (index: number) => void;
  onSelect: (item: Job | Company | Candidate) => void;
  isLoading?: boolean;
  error?: Error | null;
  maxSuggestions?: number;
  query?: string;
};
