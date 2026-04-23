import { SearchType } from "./searchBar";

export interface UseSearchControllerOptions {
  type: SearchType;
  initialQuery?: string;
  initialLocation?: string;
}
