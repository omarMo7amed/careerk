"use client";
import { SkillsProvider, SkillsComponents } from "../model/SkillsContext";

interface SkillsProps {
  isOwner?: boolean;
}

export function SkillsSection({ isOwner = false }: SkillsProps) {
  return (
    <SkillsProvider isOwner={isOwner}>
      <SkillsComponents.Header />
      <SkillsComponents.Display />
      <SkillsComponents.Editing />
    </SkillsProvider>
  );
}
