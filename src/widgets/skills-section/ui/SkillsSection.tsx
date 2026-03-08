"use client";
import { JobSeekerSkill } from "@/entities/skill";
import { SkillsProvider, SkillsComponents } from "../model/SkillsContext";

interface SkillsProps {
  isOwner?: boolean;
  skills?: JobSeekerSkill[];
}

export function SkillsSection({ isOwner = false, skills }: SkillsProps) {
  return (
    <SkillsProvider isOwner={isOwner} skills={skills}>
      <SkillsComponents.Header />
      <SkillsComponents.Display />
      <SkillsComponents.Editing />
    </SkillsProvider>
  );
}
