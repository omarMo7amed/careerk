import { RoleSlug, LevelSlug, QuestionCategory, Difficulty } from "@/entities/interview";
import { BookOpen, Server, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

export const CATEGORY_ICONS: Record<QuestionCategory, LucideIcon> = {
  [QuestionCategory.TECHNICAL]: Server,
  [QuestionCategory.PROBLEM_SOLVING]: Cloud,
  [QuestionCategory.BEHAVIORAL]: BookOpen,
};

export const CATEGORY_LABELS: Record<QuestionCategory, string> = {
  [QuestionCategory.TECHNICAL]: "Technical",
  [QuestionCategory.PROBLEM_SOLVING]: "Problem Solving",
  [QuestionCategory.BEHAVIORAL]: "Behavioral",
};

export const DIFFICULTY_BADGE: Record<Difficulty, { variant: "success" | "warning" | "error"; label: string }> = {
  [Difficulty.EASY]: { variant: "success", label: "Easy" },
  [Difficulty.MEDIUM]: { variant: "warning", label: "Medium" },
  [Difficulty.HARD]: { variant: "error", label: "Hard" },
};
