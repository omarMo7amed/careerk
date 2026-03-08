"use client";
import { useJobSeekerQuery, type JobSeeker } from "@/entities/job-seeker";
import { ProfileHeader } from "../../profile-header";
import { Summary } from "../../../jobseeker-summary";
import { ContactInfo } from "../../contact-info";
import { LinksPortfolio } from "../../links-portfolio";

import { ExperienceSection } from "@/widgets/experience-section";
import { EducationSection } from "@/widgets/education-section";
import { SkillsSection } from "@/widgets/skills-section";

import {
  ProfileStatus,
  EditingState,
} from "@/widgets/jobseeker-profile/profile-status";

interface JobSeekerProfileWidgetProps {
  jobSeeker?: JobSeeker;
  isOwner?: boolean;
}

export function JobSeekerProfileWidget({
  jobSeeker: jobSeekerProp,
  isOwner = false,
}: JobSeekerProfileWidgetProps) {
  const { jobSeeker: ownData, isLoading, error } = useJobSeekerQuery();

  const jobSeeker = jobSeekerProp ?? ownData;
  const loading = !jobSeekerProp && isLoading;

  //i will refactor this when implementing the API, for now we need to map the data to the expected format of the components

  const profileStatus: Omit<EditingState, "status"> = {
    availabilityStatus: jobSeeker?.profile.availabilityStatus ?? "",
    workPreference: jobSeeker?.profile.workPreference ?? "",
    preferredJobTypes: jobSeeker?.profile.preferredJobTypes ?? [],
    expectedSalary: jobSeeker?.profile.expectedSalary ?? null,
    noticePeriod: jobSeeker?.profile.noticePeriod ?? "",
  };

  const contactInfo = {
    phone: jobSeeker?.profile.phone || "",
    cvEmail: jobSeeker?.profile.cvEmail || "",
    location: jobSeeker?.profile.location || "",
    noticePeriod: jobSeeker?.profile.noticePeriod || "",
  };

  const profileInfo = {
    jobSeekerId: jobSeeker?.profile.jobSeekerId || "",
    location: jobSeeker?.profile.location || "",
    firstName: jobSeeker?.firstName || "",
    lastName: jobSeeker?.lastName || "",
    yearsOfExperience: jobSeeker?.profile.yearsOfExperience || 0,
    title: jobSeeker?.profile.title || "",
    avatarUrl: jobSeeker?.avatarUrl || null,
    cvUrl: jobSeeker?.profile.cvUrl || null,
  };

  if (loading) {
    return null; //  replace with skeleton or loading ya shahd
  }

  if ((!jobSeekerProp && error) || !jobSeeker) {
    return (
      <div className="flex items-center justify-center h-40 bg-bg-surface rounded-xl border border-border text-text-secondary text-sm">
        Failed to load profile. Please try again.
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-5">
      <ProfileHeader profileHeader={profileInfo} isOwner={isOwner} />

      <div className="flex flex-col lg:flex-row gap-4 my-4">
        <div className="flex flex-col gap-4">
          <Summary summary={jobSeeker.profile.summary} isOwner={isOwner} />
          <ExperienceSection workExperiences={jobSeeker.workExperiences} />
          <SkillsSection isOwner={isOwner} />
          <EducationSection isOwner={isOwner} />
        </div>

        <div className="flex flex-col gap-4">
          <ProfileStatus profileStatus={profileStatus} isOwner={isOwner} />
          <ContactInfo contactInfo={contactInfo} isOwner={isOwner} />
          <LinksPortfolio profile={jobSeeker.profile} isOwner={isOwner} />
        </div>
      </div>
    </div>
  );
}
