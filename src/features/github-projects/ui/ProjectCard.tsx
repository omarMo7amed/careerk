"use client";

import type { RecommendedProject } from "@/entities/github-project";
import { Card, Badge, Button } from "@/shared";

interface ProjectCardProps {
  project: RecommendedProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { repo, firstIssue, reasons } = project;

  return (
    <Card className="flex flex-col justify-between h-full p-5 space-y-4">
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="w-10 h-10 rounded-full shrink-0"
          />
          <div className="min-w-0">
            <h3 className="font-semibold text-text-primary truncate">
              {repo.full_name}
            </h3>
            <div className="flex items-center gap-3 text-xs text-text-secondary mt-0.5">
              <span>★ {repo.stargazers_count.toLocaleString()}</span>
              <span>⑂ {repo.forks_count.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {repo.description && (
          <p className="text-sm text-text-secondary line-clamp-2">
            {repo.description}
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {repo.language && (
            <Badge variant="info" size="sm">
              {repo.language}
            </Badge>
          )}
          {reasons.map((reason) => (
            <Badge key={reason} variant="skill" size="sm">
              {reason}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-3 pt-2 border-t border-border/50">
        {firstIssue ? (
          <div className="space-y-2">
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wide">
              First Issue
            </p>
            <a
              href={firstIssue.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-primary hover:underline"
            >
              #{firstIssue.number}: {firstIssue.title}
            </a>
            <div className="flex flex-wrap gap-1.5">
              {firstIssue.labels.slice(0, 3).map((label) => (
                <span
                  key={label.name}
                  className="inline-block text-[10px] px-2 py-0.5 rounded-full border"
                  style={{
                    backgroundColor: `#${label.color}20`,
                    borderColor: `#${label.color}40`,
                    color: `#${label.color}`,
                  }}
                >
                  {label.name}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm text-text-secondary">
            No starter issues right now — explore the repo to find ways to contribute.
          </p>
        )}

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(repo.html_url, "_blank")}
          >
            View Repository
          </Button>
          {firstIssue && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(firstIssue.html_url, "_blank")}
            >
              View Issue
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
