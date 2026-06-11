"use client";

import { useState, useMemo } from "react";
import { RoleSlug, LevelSlug } from "@/entities/interview/types";
import { PrepStats, QuestionCategory } from "@/entities/interview";
import { useInterviewQuestions } from "@/entities/interview";

export function useInterviewPrep() {
  const [selectedRole, setSelectedRole] = useState<RoleSlug | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<LevelSlug | null>(null);

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useInterviewQuestions(selectedRole, selectedLevel);

  const filteredQuestions = useMemo(
    () => data?.questions ?? [],
    [data?.questions],
  );

  const stats: PrepStats | null = useMemo(() => {
    if (filteredQuestions.length === 0) return null;
    const technical = filteredQuestions.filter((q) => q.category === QuestionCategory.TECHNICAL).length;
    const problemSolving = filteredQuestions.filter((q) => q.category === QuestionCategory.PROBLEM_SOLVING).length;
    const behavioral = filteredQuestions.filter((q) => q.category === QuestionCategory.BEHAVIORAL).length;
    return {
      total: filteredQuestions.length,
      technical,
      problemSolving,
      behavioral,
    };
  }, [filteredQuestions]);

  const selectionMade = selectedRole !== null && selectedLevel !== null;

  const queryError = error instanceof Error ? error.message : isError ? "Failed to load questions" : null;

  return {
    selectedRole,
    setSelectedRole,
    selectedLevel,
    setSelectedLevel,
    filteredQuestions,
    stats,
    selectionMade,
    isLoading: isLoading && selectionMade,
    queryError,
    refetch,
  };
}
