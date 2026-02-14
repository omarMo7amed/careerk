import { SearchType } from "./searchBar";

export interface UseSearchQueryOptions {
  initialQuery?: string;
  initialLocation?: string;
  debounceMs?: number;
  type?: SearchType;
}
