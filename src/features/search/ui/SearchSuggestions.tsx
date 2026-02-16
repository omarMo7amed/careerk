"use client";

import { SearchSuggestionsProps } from "../types/searchSuggestions";

export function SearchSuggestions({
  suggestions,
  highlighted,
  onHighlight,
  onSelect,
  isLoading,
  error,
  query,
}: SearchSuggestionsProps) {
  return (
    <div className="absolute left-0 right-0 mt-2 z-30 flex justify-center">
      <div className="w-full max-w-2xl">
        <div
          role="listbox"
          aria-label="Search suggestions"
          className="rounded-md bg-white border border-border shadow-lg overflow-hidden"
        >
          {isLoading && !suggestions.length && (
            <div className="flex items-center gap-2 p-3 text-sm text-muted-foreground">
              <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
              Searching…
            </div>
          )}

          {error && (
            <div className="p-3 text-sm text-destructive">{error.message}</div>
          )}

          {!isLoading && !error && query && !suggestions.length && (
            <div className="p-3 text-sm text-muted-foreground">
              No results found
            </div>
          )}

          {suggestions.length > 0 && (
            <ul className="divide-y divide-border max-h-72 overflow-y-auto bg-white">
              {suggestions.map((item, i) => (
                <li
                  key={item.id}
                  role="option"
                  aria-selected={highlighted === i}
                  onPointerEnter={() => onHighlight(i)}
                  onPointerLeave={() => onHighlight(-1)}
                  onClick={() => onSelect(item)}
                  className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
                    highlighted === i ? "bg-accent/60" : "hover:bg-accent/30"
                  }`}
                >
                  {/* We will implement it */}

                  {/* <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {item.company?.name}
                      {item.location ? ` · ${item.location}` : ""}
                    </p>
                  </div>
                  {item.workArrangement && (
                    <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
                      {item.workArrangement}
                    </span>
                  )} */}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
