"use client";

import { RoleSelector, QuestionBank, useInterviewPrep } from "@/features/interview-preparation";
import { Button } from "@/shared";

export function InterviewPreparationWidget() {
  const {
    selectedRole,
    setSelectedRole,
    selectedLevel,
    setSelectedLevel,
    filteredQuestions,
    stats,
    selectionMade,
    isLoading,
    queryError,
    refetch,
  } = useInterviewPrep();

  return (
    <div className="space-y-6">
      <RoleSelector
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        selectedLevel={selectedLevel}
        onLevelChange={setSelectedLevel}
        stats={stats}
        selectionMade={selectionMade}
        isLoading={isLoading}
      />

      {queryError && (
        <div className="flex items-center justify-between p-4 rounded-lg border border-error/20 bg-error/5">
          <p className="text-sm text-error">{queryError}</p>
          <Button variant="outline" size="sm" onClick={() => refetch?.()}>
            Retry
          </Button>
        </div>
      )}

      {selectionMade && !isLoading && !queryError && (
        <QuestionBank questions={filteredQuestions} />
      )}
    </div>
  );
}
