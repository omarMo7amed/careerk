"use client";

import { ComposedSearchBar } from "./ComposedSearchBar";
import { SearchSuggestions } from "./SearchSuggestions";
import { useSearchController } from "../model/useSearchController";
import type { SearchBarProps } from "../types/searchBar";

export function SearchBar({
  type,
  maxSuggestions,
  debounceMs,
  initialQuery,
  initialLocation,
  onSelect,
  searchPlaceholder,
}: SearchBarProps) {
  const controller = useSearchController({
    type,
    debounceMs,
    initialQuery,
    initialLocation,
    maxSuggestions,
    onSelect,
  });

  const {
    containerRef,
    query,
    setQuery,
    location,
    setLocation,
    suggestions,
    isLoading,
    error,
    shouldShow,
    highlighted,
    setHighlighted,
    onKeyDown,
    onSelect: handleSelect,
    searchNow, // may be i will remove it
    clear,
  } = controller;

  return (
    <div ref={containerRef} className="relative w-full px-4">
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
        onSearch={() => searchNow()}
        onKeyDown={onKeyDown}
        isLoading={isLoading}
        onClear={clear}
      />

      {shouldShow && (
        <SearchSuggestions
          suggestions={suggestions}
          highlighted={highlighted}
          onHighlight={setHighlighted}
          onSelect={handleSelect}
          isLoading={isLoading}
          error={error}
          maxSuggestions={maxSuggestions}
          query={query}
        />
      )}
    </div>
  );
}
