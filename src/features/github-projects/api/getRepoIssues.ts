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

  if (!response.ok) {
    const remaining = response.headers.get("X-RateLimit-Remaining");
    if (remaining === "0") {
      throw new Error("GitHub API rate limit reached. Please try again later.");
    }
    return [];
  }

  const json = await response.json().catch(() => []);
  return (json as GitHubIssue[]).filter((i) => !("pull_request" in i));
}
