"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getInterviewQuestions } from "../api/getInterviewQuestions";
import type { RoleSlug, LevelSlug } from "../types";

export function useInterviewQuestions(
  role: RoleSlug | null,
  level: LevelSlug | null,
) {
  return useQuery({
    queryKey: ["interview-questions", role, level],
    queryFn: () =>
      getInterviewQuestions({ role: role!, level: level!, limit: 50 }),
    enabled: !!role && !!level,
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
}
