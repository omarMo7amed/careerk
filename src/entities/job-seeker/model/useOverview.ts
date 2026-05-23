"use client";

import { useQuery } from "@tanstack/react-query";
import { getOverview } from "../api/getOverview";
import { jobSeekerKeys } from "../lib/queryKeys";

export function useOverview({ token }: { token: string | null }) {
  const { data, isLoading, error } = useQuery({
    queryKey: [...jobSeekerKeys.me.all, "overview"],
    queryFn: () => getOverview(token),
    staleTime: 1000 * 60 * 5,
  });

  return {
    overview: data?.data,
    isLoading,
    error,
  };
}
