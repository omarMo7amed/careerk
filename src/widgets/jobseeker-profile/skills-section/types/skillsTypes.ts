import type { JobSeekerSkill } from "@/entities/skill";

export type SkillsState =
  | { status: "idle" }
  | { status: "editing"; skills: JobSeekerSkill[]; input: string };

export type SkillsAction =
  | { type: "START_EDIT"; skills: JobSeekerSkill[] }
  | { type: "SET_INPUT"; value: string }
  | { type: "ADD_SKILL" }
  | { type: "REMOVE_SKILL"; name: string }
  | { type: "CANCEL" }
  | { type: "SAVE_SUCCESS" };

export interface SkillsSectionProps {
  isOwner?: boolean;
}
