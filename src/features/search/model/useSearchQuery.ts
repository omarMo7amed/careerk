"use client";
import { useEffect, useState } from "react";
import { UseSearchQueryOptions } from "../types/useSearchQueryOptions";

export function useSearchQuery({
  initialQuery = "",
  initialLocation = "",
}: UseSearchQueryOptions) {
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    setLocation(initialLocation);
  }, [initialLocation]);

  function clear() {
    setQuery("");
    setLocation("");
  }

  return {
    query,
    setQuery,
    location,
    setLocation,
    clear,
  };
}
