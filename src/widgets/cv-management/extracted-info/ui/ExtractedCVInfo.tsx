"use client";

import { EditableTable } from "../components/EditableTable";

import { ExperienceSection } from "@/widgets/experience-section";
import { EducationSection } from "@/widgets/education-section";
import { SkillsSection } from "@/widgets/skills-section";
import { Summary } from "@/widgets/jobseeker-summary";
import { JobSeeker, JobSeekerProfile } from "@/entities/job-seeker";

export function ExtractedCVInfo({
  cvInfo,
  isConfirmed,
  hasProfile,
}: {
  cvInfo?: JobSeeker;
  isConfirmed: boolean;
  hasProfile: boolean;
}) {
  if (!cvInfo) {
    return <div>No CV information available.</div>;
  }

  const personalInfo = {
    firstName: cvInfo?.firstName,
    lastName: cvInfo?.lastName,
    cvEmail: cvInfo?.profile?.cvEmail || "",
    phone: cvInfo?.profile?.phone || "",
    location: cvInfo?.profile?.location || "",
    linkedinUrl: cvInfo?.profile?.linkedinUrl || "",
    githubUrl: cvInfo?.profile?.githubUrl || "",
    portfolioUrl: cvInfo?.profile?.portfolioUrl || "",
    title: cvInfo?.profile?.title || "",
    yearsOfExperience: cvInfo?.profile?.yearsOfExperience || 0,
  };

  console.log("Personal Info for EditableTable:", personalInfo);

  return (
    <div className="flex flex-col gap-8 ">
      <EditableTable
        hasProfile={hasProfile}
        personalInfo={
          personalInfo as JobSeekerProfile & "firstName" & "lastName"
        }
        confirmed={isConfirmed}
      />

      <Summary isOwner summary={cvInfo?.profile?.summary || ""} />

      <ExperienceSection workExperiences={cvInfo?.workExperiences} />
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-6">
        <div className="lg:col-span-5">
          <EducationSection educations={cvInfo?.educations} isOwner />
        </div>
        <div className="lg:col-span-4">
          <SkillsSection skills={cvInfo?.skills} isOwner />
        </div>
      </div>
    </div>
  );
}
