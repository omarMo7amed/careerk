"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserSettings } from "..";

export function useUserSettings() {
  return useQuery({
    queryKey: ["userSettings"],
    queryFn: () => getUserSettings(),
    staleTime: 1000 * 60 * 5,
  });
}
