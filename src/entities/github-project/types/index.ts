export interface GitHubRepo {
  id: number
  full_name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  topics: string[]
  owner: { login: string; avatar_url: string }
}

export interface GitHubIssue {
  id: number
  number: number
  title: string
  html_url: string
  labels: { name: string; color: string }[]
  body: string | null
  created_at: string
  comments: number
}

export interface RecommendedProject {
  repo: GitHubRepo
  firstIssue: GitHubIssue | null
  reasons: string[]
}
