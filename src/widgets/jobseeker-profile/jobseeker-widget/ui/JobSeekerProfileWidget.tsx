"use client";
import {
  AvailabilityStatus,
  useMyProfileQuery,
  type JobSeeker,
} from "@/entities/job-seeker";
import { ProfileHeader } from "../../profile-header";
import { Summary } from "../../../jobseeker-summary";
import { ContactInfo } from "../../contact-info";
import { LinksPortfolio } from "../../links-portfolio";

import { ExperienceSection } from "@/widgets/experience-section";
import { EducationSection } from "@/widgets/education-section";
import { SkillsSection } from "@/widgets/skills-section";

// import {useAuth} from "@/hooks/useAuth";

import { ProfileStatus } from "@/widgets/jobseeker-profile/profile-status";
import { Loader } from "@/shared";
import { WorkPreference } from "@/entities/company-job";

interface JobSeekerProfileWidgetProps {
  jobSeeker?: JobSeeker;
  isOwner?: boolean;
}

export function JobSeekerProfileWidget({
  jobSeeker: jobSeekerProp,
  isOwner = false,
}: JobSeekerProfileWidgetProps) {
  // const {token} = useAuth();
  const {
    jobSeeker: ownData,
    isLoading,
    error,
  } = useMyProfileQuery({ token: "" });

  const jobSeeker = jobSeekerProp ?? ownData;
  const loading = !jobSeekerProp && isLoading;

  if (loading) {
    return <Loader />;
  }

  if ((!jobSeekerProp && error) || !jobSeeker) {
    return (
      <div className="flex items-center justify-center h-40 bg-bg-surface rounded-xl border border-border text-text-secondary text-sm">
        Failed to load profile. Please try again.
      </div>
    );
  }
  const profileInfo = {
    jobSeekerId: jobSeeker?.profile.jobSeekerId || "",
    location: jobSeeker?.profile.location || "",
    firstName: jobSeeker?.firstName || "",
    lastName: jobSeeker?.lastName || "",
    yearsOfExperience: jobSeeker?.profile.yearsOfExperience || 0,
    title: jobSeeker?.profile.title || "",
    profileImageUrl: jobSeeker?.profileImageUrl || null,
    cvEmail: jobSeeker?.profile.cvEmail || "",
  };

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-5">
      <ProfileHeader profileHeader={profileInfo} isOwner={isOwner} />

      <div className="flex flex-col lg:flex-row gap-4 my-4 justify-between">
        <div className="flex flex-col gap-4">
          <Summary summary={jobSeeker.profile.summary} isOwner={isOwner} />
          <ExperienceSection
            workExperiences={jobSeeker.workExperiences || []}
          />
          <SkillsSection skills={jobSeeker.skills || []} isOwner={isOwner} />
          <EducationSection
            educations={jobSeeker.educations || []}
            isOwner={isOwner}
          />
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <ProfileStatus
            profileStatus={{
              availabilityStatus: jobSeeker?.profile
                ?.availabilityStatus as AvailabilityStatus,
              workPreference: jobSeeker?.profile
                ?.workPreference as WorkPreference,
              preferredJobTypes: jobSeeker?.profile?.preferredJobTypes || [],
              expectedSalary: jobSeeker?.profile?.expectedSalary || null,
              noticePeriod: jobSeeker?.profile?.noticePeriod as string,
            }}
            isOwner={isOwner}
          />
          <LinksPortfolio
            socialContacts={{
              githubUrl: jobSeeker?.profile?.githubUrl || "",
              linkedinUrl: jobSeeker?.profile?.linkedinUrl || "",
              portfolioUrl: jobSeeker?.profile?.portfolioUrl || "",
            }}
            isOwner={isOwner}
          />
          <ContactInfo
            contactInfo={{
              phone: jobSeeker?.profile.phone || "",
              cvEmail: jobSeeker?.profile.cvEmail || "",
              location: jobSeeker?.profile.location || "",
            }}
            isOwner={isOwner}
          />
        </div>
      </div>
    </div>
  );
}
