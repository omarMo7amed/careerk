import { RoleSlug, LevelSlug } from "@/entities/interview";

export const ROLE_QUERIES: Record<RoleSlug, string> = {
  FRONTEND: "react OR vue OR angular OR next.js OR svelte language:typescript stars:>500",
  BACKEND: "api OR backend OR server OR microservices language:typescript OR language:python OR language:go OR language:rust OR language:java stars:>1000",
  DATA_ENGINEER: "language:python spark OR airflow OR kafka OR dbt OR data-pipeline OR etl stars:>300",
  DEVOPS: "kubernetes OR docker OR terraform OR devops OR helm OR prometheus OR ansible stars:>500",
  SYSTEMS_ENGINEER: "language:go OR language:rust OR language:c OR language:c++ distributed-systems OR database OR networking OR kernel OR compiler stars:>500",
};

export const LEVEL_LABELS: Record<LevelSlug, string> = {
  JUNIOR: "good+first+issue",
  MID: "good+first+issue,help+wanted",
  SENIOR: "help+wanted",
};

export const ROLE_OPTIONS = [
  { value: RoleSlug.FRONTEND, label: "Frontend Developer" },
  { value: RoleSlug.BACKEND, label: "Backend Developer" },
  { value: RoleSlug.DATA_ENGINEER, label: "Data Engineer" },
  { value: RoleSlug.DEVOPS, label: "DevOps Engineer" },
  { value: RoleSlug.SYSTEMS_ENGINEER, label: "Systems Engineer" },
] as const;

export const LEVEL_OPTIONS = [
  { value: LevelSlug.JUNIOR, label: "Junior" },
  { value: LevelSlug.MID, label: "Mid" },
  { value: LevelSlug.SENIOR, label: "Senior" },
] as const;
