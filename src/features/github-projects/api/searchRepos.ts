import type { GitHubRepo } from "@/entities/github-project";
import { GITHUB_API, getGithubHeaders } from "../lib/githubApi";

export async function searchRepos(query: string, perPage = 6): Promise<GitHubRepo[]> {
  const url = `${GITHUB_API}/search/repositories?q=${encodeURIComponent(query)}&sort=stars&per_page=${perPage}`;

  const response = await fetch(url, {
    headers: getGithubHeaders(),
  });

  if (!response.ok) {
    const remaining = response.headers.get("X-RateLimit-Remaining");
    if (remaining === "0") {
      throw new Error("GitHub API rate limit reached. Please try again later.");
    }
    throw new Error(`GitHub API error (${response.status})`);
  }

  const json = await response.json();
  return json.items as GitHubRepo[];
}
