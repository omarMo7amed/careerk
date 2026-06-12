"use client";

import { useQuery } from "@tanstack/react-query";
import type { RoleSlug, LevelSlug } from "@/entities/interview";
import type { GitHubIssue, RecommendedProject } from "@/entities/github-project";
import { searchRepos } from "../api/searchRepos";
import { getRepoIssues } from "../api/getRepoIssues";
import { ROLE_QUERIES, LEVEL_LABELS } from "../lib/projectMapping";

async function fetchRecommendedProjects(
  role: RoleSlug,
  level: LevelSlug,
): Promise<RecommendedProject[]> {
  const query = ROLE_QUERIES[role];
  const labels = LEVEL_LABELS[level];
  const repos = await searchRepos(query, 6);

  const results = await Promise.allSettled(
    repos.map(async (repo) => {
      const owner = repo.owner.login;
      const name = repo.full_name.split("/")[1];
      let issues: GitHubIssue[] = [];
      try {
        issues = await getRepoIssues(owner, name, labels);
      } catch {
        // issue fetch failed silently — show repo without issue
      }
      const reasons: string[] = [`Repository for ${role.replace("_", " ").toLowerCase()} roles`];

      if (level === "JUNIOR") {
        reasons.push("Beginner-friendly issues available");
      } else if (level === "SENIOR") {
        reasons.push("Production-scale project for experienced contributors");
      }

      return {
        repo,
        firstIssue: issues[0] ?? null,
        reasons,
      } satisfies RecommendedProject;
    }),
  );

  return results
    .filter((r) => r.status === "fulfilled")
    .map((r) => (r as PromiseFulfilledResult<RecommendedProject>).value);
}

export function useRecommendedProjects(
  role: RoleSlug | null,
  level: LevelSlug | null,
) {
  return useQuery({
    queryKey: ["github-projects", role, level],
    queryFn: () => fetchRecommendedProjects(role!, level!),
    enabled: !!role && !!level,
    staleTime: 30 * 60 * 1000,
    retry: 1,
  });
}
