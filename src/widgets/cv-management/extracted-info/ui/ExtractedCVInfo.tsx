"use client";

import { EditableTable } from "../components/EditableTable";

import type { CVInfo } from "@/entities/cv";

import { ExperienceSection } from "@/widgets/experience-section";
import { EducationSection } from "@/widgets/education-section";
import { SkillsSection } from "@/widgets/skills-section";
import { Summary } from "@/widgets/jobseeker-summary";

interface ExtractedCVInfoProps {
  cvInfo: CVInfo;
}

export function ExtractedCVInfo({ cvInfo }: ExtractedCVInfoProps) {
  const { personalInfo, summary, experience, education, skills, title } =
    cvInfo;

  return (
    <div className="flex flex-col gap-8 ">
      <EditableTable
        title={title}
        personalInfo={personalInfo}
        confirmed={false}
      />

      <Summary isOwner summary={summary} />

      <ExperienceSection workExperiences={experience} />
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-6">
        <div className="lg:col-span-5">
          <EducationSection educations={education} isOwner />
        </div>
        <div className="lg:col-span-4">
          <SkillsSection skills={skills} isOwner />
        </div>
      </div>
    </div>
  );
}
