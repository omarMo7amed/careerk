"use client";

import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getOverview } from "../api/getOverview";
import { jobSeekerKeys } from "../lib/queryKeys";
import { JobSeeker } from "../types/jobSeeker";

export function useOverview({ token }: { token: string | null }) {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: [...jobSeekerKeys.me.all, "overview"],
    queryFn: () => getOverview(token),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data?.data) {
      queryClient.setQueryData(
        jobSeekerKeys.me.all,
        (oldData: { data: JobSeeker }) => {
          return {
            ...oldData,
            data: {
              ...oldData.data,
              firstName: data.data.firstName,
              lastName: data.data.lastName,
              profileImageUrl: data.data.profileImageUrl,
            },
          };
        },
      );
    }
  }, [data, queryClient]);

  return {
    overview: data?.data,
    isLoading,
    error,
  };
}
