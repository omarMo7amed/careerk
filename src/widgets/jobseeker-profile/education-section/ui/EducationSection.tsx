"use client";
import {
  EducationProvider,
  EducationComponents,
} from "../model/EducationContext";

interface EducationProps {
  isOwner?: boolean;
}

export function EducationSection({ isOwner = false }: EducationProps) {
  return (
    <EducationProvider isOwner={isOwner}>
      <EducationComponents.Header />
      <EducationComponents.Display />
      <EducationComponents.Editing />
    </EducationProvider>
  );
}
