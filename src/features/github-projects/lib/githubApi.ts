export const GITHUB_API = "https://api.github.com";

export function getGithubHeaders(): HeadersInit {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (token) {
    (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}
