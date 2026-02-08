"use client";
import { MapPin, Search } from "lucide-react";
import React, { useState } from "react";
import { cn } from "../lib/cn";
import type { ComposedSearchBarProps } from "../types/ComposedSearchBar";

export function ComposedSearchBar({
  searchPlaceholder = "Job title, keywords, or company",
  searchValue,
  onSearchValueChange,
  locationPlaceholder = "Location",
  locationValue,
  onLocationValueChange,
  onSearch,
  className = "",
  searchButtonText = "Search",
}: ComposedSearchBarProps) {
  // Internal state for uncontrolled mode
  const [internalSearchValue, setInternalSearchValue] = useState("");
  const [internalLocationValue, setInternalLocationValue] = useState("");

  // Use controlled values if provided, otherwise use internal state
  const currentSearchValue =
    searchValue !== undefined ? searchValue : internalSearchValue;
  const currentLocationValue =
    locationValue !== undefined ? locationValue : internalLocationValue;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInternalSearchValue(value);
    onSearchValueChange?.(value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInternalLocationValue(value);
    onLocationValueChange?.(value);
  };

  const handleSearchClick = () => {
    onSearch?.(currentSearchValue, currentLocationValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div
        className={cn(
          "mx-auto flex flex-col sm:flex-row w-full max-w-2xl items-stretch sm:items-center gap-0 rounded-lg border border-border bg-white shadow-sm transition-all duration-300",
          "focus-within:ring-4 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background",
        )}
      >
        {/* Search input */}
        <div className="relative flex-1 w-full border-b sm:border-b-0 sm:border-r border-border">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={currentSearchValue}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            className={cn(
              "w-full bg-transparent p-4 pl-12 text-base text-foreground placeholder:text-muted-foreground",
              "border-none outline-none focus:outline-none focus:ring-0 focus:ring-offset-0",
            )}
          />
        </div>

        {/* Location input */}
        <div className="relative w-full sm:w-40 md:w-48 border-b sm:border-b-0 sm:border-r border-border">
          <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder={locationPlaceholder}
            value={currentLocationValue}
            onChange={handleLocationChange}
            onKeyDown={handleKeyDown}
            className={cn(
              "w-full bg-transparent p-4 pl-10 text-base text-foreground placeholder:text-muted-foreground",
              "border-none outline-none focus:outline-none focus:ring-0 focus:ring-offset-0",
            )}
          />
        </div>

        {/* Search button */}
        <button
          onClick={handleSearchClick}
          className={cn(
            "w-full sm:w-auto bg-primary px-8 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90",
            " rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg",
            "cursor-pointer",
          )}
        >
          {searchButtonText}
        </button>
      </div>
    </div>
  );
}
