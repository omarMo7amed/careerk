export interface ComposedSearchBarProps {
  // Main search field props
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchValueChange?: (value: string) => void;

  // Location field props
  locationPlaceholder?: string;
  locationValue?: string;
  onLocationValueChange?: (value: string) => void;

  // Search action
  onSearch?: (searchValue: string, locationValue: string) => void;

  // Styling
  className?: string;

  // Button customization
  searchButtonText?: string;
}
