"use client";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { UseSearchQueryOptions } from "../types/useSearchQueryOptions";

export function useSearchQuery({
  type = "jobs",
  initialQuery = "",
  initialLocation = "",
  getResult,
}: UseSearchQueryOptions) {
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    setLocation(initialLocation);
  }, [initialLocation]);

  const queryClient = useQueryClient();

  const queryKey = ["search", type, query, location] as const;
  const { data, isLoading, isFetching, error } = useQuery<unknown, Error>({
    queryKey,
    queryFn: ({ signal }) => getResult({ search: query, location, signal }),
    enabled: false,
    staleTime: 1000 * 30,
    placeholderData: (prev: unknown) => prev,
  });

  async function searchNow() {
    try {
      const data = await queryClient.fetchQuery<unknown>({
        queryKey: queryKey,
        queryFn: ({ signal }) => getResult({ search: query, location, signal }),
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
