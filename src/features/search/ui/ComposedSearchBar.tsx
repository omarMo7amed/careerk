"use client";
import { cn } from "@/shared";
import { ComposedSearchBarProps } from "../types/composedSearchBar";
import { MapPin, Search, X } from "lucide-react";

export function ComposedSearchBar({
  searchPlaceholder,
  searchValue,
  onSearchValueChange,
  locationPlaceholder = "Location",
  locationValue,
  onLocationValueChange,
  onSearch,
  onKeyDown,
  className = "",
  searchButtonText = "Search",
  type = "jobs",
  isLoading = false,
  onClear,
}: ComposedSearchBarProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchValueChange?.(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onLocationValueChange?.(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch?.(searchValue || "", locationValue || "", type);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e);
    if (e.key === "Enter" && !e.defaultPrevented) {
      handleSearchClick();
    }
  };

  const hasValue = !!(searchValue || locationValue);

  return (
    <div className={cn("relative w-full", className)}>
      <div
        className={cn(
          "mx-auto flex flex-col sm:flex-row w-full max-w-2xl items-stretch sm:items-center gap-0 rounded-lg border border-border bg-bg-surface shadow-sm transition-all duration-300",
          "focus-within:ring-4 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background",
        )}
      >
        {/* Search input */}
        <div className="relative flex-1 w-full border-b sm:border-b-0 sm:border-r border-border">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
          <input
            aria-label="Search"
            type="text"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            className={cn(
              "w-full bg-transparent p-4 pl-12 pr-8 text-base  text-foreground placeholder:text-text-muted",
              "border-none outline-none focus:outline-none focus:ring-0 focus:ring-offset-0",
            )}
          />
          {hasValue && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => onClear?.()}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-text-muted hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Location input */}
        <div className="relative w-full sm:w-40 md:w-48 border-b sm:border-b-0 sm:border-r border-border">
          <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
          <input
            aria-label="Location"
            type="text"
            placeholder={locationPlaceholder}
            value={locationValue}
            onChange={handleLocationChange}
            onKeyDown={handleKeyDown}
            className={cn(
              "w-full bg-transparent p-4 pl-10 text-base text-foreground placeholder:text-text-muted",
              "border-none outline-none focus:outline-none focus:ring-0 focus:ring-offset-0",
            )}
          />
        </div>

        {/* Search button */}
        <button
          type="button"
          onClick={handleSearchClick}
          disabled={isLoading}
          aria-busy={isLoading}
          className={cn(
            "w-full sm:w-auto bg-primary px-8 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90",
            "rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg",
            isLoading ? "opacity-80 cursor-wait" : "cursor-pointer",
          )}
        >
          {isLoading ? (
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Searching…
            </span>
          ) : (
            searchButtonText
          )}
        </button>
      </div>
    </div>
  );
}
