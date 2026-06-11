"use client";

import { useState } from "react";
import type { RoleSlug, LevelSlug } from "@/entities/interview";
import {
  RoleLevelSelect,
  useRecommendedProjects,
  ProjectList,
} from "@/features/github-projects";

export function GitHubProjectsWidget() {
  const [selectedRole, setSelectedRole] = useState<RoleSlug | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<LevelSlug | null>(null);

  const {
    data: projects = [],
    isLoading,
    isError,
    refetch,
  } = useRecommendedProjects(selectedRole, selectedLevel);

  const selectionMade = !!selectedRole && !!selectedLevel;

  return (
    <div className="space-y-6">
      <p className="text-sm text-text-secondary">
        Select your role and experience level to discover open-source projects
        with starter-friendly issues.
      </p>

      <RoleLevelSelect
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        selectedLevel={selectedLevel}
        onLevelChange={setSelectedLevel}
      />

      {!selectionMade && (
        <p className="text-sm text-text-secondary text-center py-12">
          Choose a role and level above to see recommended projects.
        </p>
      )}

      {selectionMade && (
        <ProjectList
          projects={projects}
          isLoading={isLoading}
          isError={isError}
          onRetry={() => refetch()}
        />
      )}
    </div>
  );
}
