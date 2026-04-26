import { JobSeeker } from "@/entities/job-seeker";
import { Company } from "@/entities/company";
import type { Job } from "@/entities/job";

export type SearchSuggestionsProps = {
  suggestions: Job[] | Company[] | JobSeeker[];
  highlighted: number;
  onHighlight: (index: number) => void;
  onSelect: (item: Job | Company | JobSeeker) => void;
  isLoading?: boolean;
  error?: Error | null;
  maxSuggestions?: number;
  query?: string;
};
