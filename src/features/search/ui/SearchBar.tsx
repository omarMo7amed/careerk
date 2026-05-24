"use client";

import { ComposedSearchBar } from "./ComposedSearchBar";
import type { SearchBarProps } from "../types/searchBar";
import { useSearchQuery } from "../model/useSearchQuery";

export function SearchBar({
  initialQuery,
  initialLocation,
  onSearchSubmit,
  searchPlaceholder,
  isLoading,
}: SearchBarProps) {
  const { query, setQuery, location, setLocation, clear } = useSearchQuery({
    initialQuery,
    initialLocation,
  });

  return (
    <div className="relative w-full px-4">
      <ComposedSearchBar
        searchPlaceholder={searchPlaceholder}
        searchValue={query}
        onSearchValueChange={(v) => {
          setQuery(v);
        }}
        locationValue={location}
        onLocationValueChange={(v) => {
          setLocation(v);
        }}
        onSearch={(searchValue, locationValue) => {
          if (onSearchSubmit) {
            onSearchSubmit(searchValue, locationValue);
            return;
          }
        }}
        isLoading={isLoading}
        onClear={clear}
      />
    </div>
  );
}
