"use client";

import { ComposedSearchBar } from "./ComposedSearchBar";
import type { SearchBarProps } from "../types/searchBar";
import { useSearchQuery } from "../model/useSearchQuery";

export function SearchBar({
  type,
  initialQuery,
  initialLocation,
  onSearchSubmit,
  searchPlaceholder,
  getResult,
}: SearchBarProps) {
  const {
    query,
    setQuery,
    location,
    setLocation,
    isLoading,
    searchNow,
    clear,
  } = useSearchQuery({
    type,
    initialQuery,
    initialLocation,
    getResult,
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

          searchNow();
        }}
        isLoading={isLoading}
        onClear={clear}
      />
    </div>
  );
}
