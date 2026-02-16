"use client";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDebouncedValue } from "./useDebouncedValue";
import { getResult } from "../api/getResult";
import { UseSearchQueryOptions } from "../types/useSearchQueryOptions";
import { Job } from "@/entities/job";
import { Company } from "@/entities/company";
import { Candidate } from "@/entities/candidate";

export function useSearchQuery({
  initialQuery = "",
  initialLocation = "",
  debounceMs = 300,
  type = "job",
}: UseSearchQueryOptions) {
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);

  const debouncedQuery = useDebouncedValue(query, debounceMs);
  const debouncedLocation = useDebouncedValue(location, debounceMs);

  const queryClient = useQueryClient();

  const queryKey = ["search", type, debouncedQuery, debouncedLocation] as const;
  const { data, isLoading, isFetching, error } = useQuery<
    Job[] | Company[] | Candidate[],
    Error
  >({
    queryKey,
    queryFn: ({ signal }) =>
      getResult(debouncedQuery, debouncedLocation, type, { signal }),
    enabled: !!(debouncedQuery || debouncedLocation),
    staleTime: 1000 * 30,
    placeholderData: (prev) => prev,
  });

  async function searchNow() {
    try {
      const data = await queryClient.fetchQuery<
        Job[] | Candidate[] | Company[]
      >({
        queryKey: queryKey,
        queryFn: ({ signal }) =>
          getResult(query, location, type, {
            signal,
          }),
      });
      return data;
    } catch {
      return null;
    }
  }

  function clear() {
    setQuery("");
    setLocation("");
    queryClient.removeQueries({ queryKey: ["search", type] });
  }

  return {
    query,
    setQuery,
    location,
    setLocation,
    results: data ?? null,
    isLoading: isLoading || isFetching,
    error: error ?? null,
    searchNow,
    clear,
  };
}
