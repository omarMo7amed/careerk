export interface ComposedSearchBarProps {
  // Main search field props
  searchPlaceholder: string;
  searchValue?: string;
  onSearchValueChange?: (value: string) => void;

  // Location field props
  locationPlaceholder?: string;
  locationValue?: string;
  onLocationValueChange?: (value: string) => void;

  // Search action
  onSearch?: (
    searchValue: string,
    locationValue: string,
    type: "candidates" | "jobs" | "company",
  ) => void;

  // Optional handler for key events (arrow navigation, select, etc.)
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  // Styling
  className?: string;

  // Button customization
  searchButtonText?: string;

  // Type of search (for API endpoint)
  type?: "candidates" | "jobs" | "company";

  // UI state helpers (for containers)
  isLoading?: boolean;
  onClear?: () => void;
}
