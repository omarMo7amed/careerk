"use client";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/getMe";
import { mockJobSeeker } from "../mock-data/jobSeeker";
import { jobSeekerKeys } from "../lib/queryKeys";

export function useJobSeekerQuery() {
  const { data, isLoading, error } = useQuery({
    queryKey: jobSeekerKeys.me.all,
    queryFn: getMe,
    staleTime: 1000 * 60 * 5,
    placeholderData: mockJobSeeker,
  });

  return {
    jobSeeker: data ?? null,
    isLoading,
    error,
  };
}
