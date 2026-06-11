"use client";

import type { RecommendedProject } from "@/entities/github-project";
import { Empty, Card, Button } from "@/shared";
import { ProjectCard } from "./ProjectCard";

interface ProjectListProps {
  projects: RecommendedProject[];
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
}

export function ProjectList({
  projects,
  isLoading,
  isError,
  onRetry,
}: ProjectListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="p-5 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-bg-muted animate-pulse shrink-0" />
              <div className="space-y-2 flex-1">
                <div className="h-4 w-3/4 rounded bg-bg-muted animate-pulse" />
                <div className="h-3 w-1/2 rounded bg-bg-muted animate-pulse" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-full rounded bg-bg-muted animate-pulse" />
              <div className="h-3 w-5/6 rounded bg-bg-muted animate-pulse" />
            </div>
            <div className="flex gap-2">
              <div className="h-6 w-20 rounded-full bg-bg-muted animate-pulse" />
              <div className="h-6 w-24 rounded-full bg-bg-muted animate-pulse" />
            </div>
          </Card>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-between p-4 rounded-lg border border-error/20 bg-error/5">
        <p className="text-sm text-error">
          Failed to load projects. This may be due to GitHub API rate limits.
        </p>
        <Button variant="outline" size="sm" onClick={onRetry}>
          Retry
        </Button>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <Empty
        message="No projects found. Try selecting a different role or level."
        linkHref="/dashboard/jobseeker/github-projects"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.repo.id} project={project} />
      ))}
    </div>
  );
}
