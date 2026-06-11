import type { GitHubIssue } from "@/entities/github-project";
import { GITHUB_API, getGithubHeaders } from "../lib/githubApi";

export async function getRepoIssues(
  owner: string,
  repo: string,
  labels: string,
): Promise<GitHubIssue[]> {
  const url = `${GITHUB_API}/repos/${owner}/${repo}/issues?labels=${labels}&state=open&per_page=1&sort=created`;

  const response = await fetch(url, {
    headers: getGithubHeaders(),
  });

  if (!response.ok) return [];

  const json = await response.json();
  return (json as GitHubIssue[]).filter((i) => !("pull_request" in i));
}
