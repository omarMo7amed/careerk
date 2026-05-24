"use client";
import { Education } from "@/entities/education";
import {
  EducationProvider,
  EducationComponents,
} from "../model/EducationContext";

interface EducationProps {
  isOwner?: boolean;
  educations?: Education[];
}

export function EducationSection({
  isOwner = false,
  educations,
}: EducationProps) {
  return (
    <EducationProvider isOwner={isOwner} educations={educations}>
      <EducationComponents.Header />
      <EducationComponents.Content />
    </EducationProvider>
  );
}
