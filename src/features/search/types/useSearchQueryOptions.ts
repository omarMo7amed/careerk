import { SearchType } from "./searchBar";

export type SearchQueryOptions = {
  signal?: AbortSignal;
  search?: string;
  location?: string;
};

export interface UseSearchQueryOptions {
  initialQuery?: string;
  initialLocation?: string;
  type?: SearchType;
  getResult: (options?: SearchQueryOptions) => Promise<unknown>;
}
