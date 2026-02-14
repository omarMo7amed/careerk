"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchQuery } from "./useSearchQuery";
import { useClickOutside } from "@/shared";
import { Job } from "@/entities/job";
import { UseSearchControllerOptions } from "../types/searchController";
import { Candidate } from "@/entities/candidate";
import { Company } from "@/entities/company";

export function useSearchController({
  type = "job",
  debounceMs = 300,
  initialQuery = "",
  initialLocation = "",
  maxSuggestions = 6,
  onSelect,
}: UseSearchControllerOptions) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const containerRef = useClickOutside<HTMLDivElement>(() => {
    setOpen(false);
    setHighlighted(-1);
  });

  const {
    query,
    setQuery,
    location,
    setLocation,
    results,
    isLoading,
    error,
    searchNow,
    clear: clearQuery,
  } = useSearchQuery({ initialQuery, initialLocation, debounceMs, type });

  const clear = () => {
    clearQuery();
    setOpen(false);
    setHighlighted(-1);
  };

  const suggestions: Job[] | Company[] | Candidate[] = results ?? [];
  const limited = suggestions.slice(0, maxSuggestions);

  const shouldShow =
    (open || !!(query || location)) &&
    !!(limited.length || isLoading || (error && query));

  const doSelect = (item: Job) => {
    setOpen(false);
    setHighlighted(-1);
    //we will implement it
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((h) => Math.min(h + 1, limited.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((h) => Math.max(h - 1, 0));
        break;
      case "Escape":
        setOpen(false);
        setHighlighted(-1);
        break;
      case "Enter":
        if (highlighted >= 0 && limited[highlighted]) {
          e.preventDefault();
          doSelect(limited[highlighted]);
        } else {
          // trigger immediate search
          searchNow();
          setOpen(true);
        }
        break;
    }
  };

  return {
    // refs
    containerRef,

    // query state
    query,
    setQuery,
    location,
    setLocation,

    // results
    suggestions: limited,
    allSuggestions: suggestions,
    isLoading,
    error,

    // UI state
    open,
    setOpen,
    highlighted,
    setHighlighted,
    shouldShow,

    // actions
    onKeyDown,
    onSelect: doSelect,
    searchNow,
    clear,
  } as const;
}
