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
  const { jobSeeker: ownData, isLoading, error } = useMyProfileQuery();

  const jobSeeker = jobSeekerProp ?? ownData;
  const profile = jobSeeker?.profile;
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
  // if (!profile) {
  //   return (
  //     <div className="flex items-center justify-center h-40 bg-bg-surface rounded-xl border border-border text-text-secondary text-sm">
  //       Profile data is unavailable.
  //     </div>
  //   );
  // }

  const profileInfo = {
    jobSeekerId: profile?.jobSeekerId || "",
    location: profile?.location || "",
    firstName: jobSeeker?.firstName || "",
    lastName: jobSeeker?.lastName || "",
    yearsOfExperience: profile?.yearsOfExperience || 0,
    title: profile?.title || "",
    profileImageUrl: jobSeeker?.profileImageUrl || null,
    cvEmail: profile?.cvEmail || "",
  };

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-5">
      <ProfileHeader profileHeader={profileInfo} isOwner={isOwner} />

      <div className="flex flex-col lg:flex-row gap-4 my-4 justify-between">
        <div className="flex flex-col gap-4">
          <Summary summary={profile?.summary} isOwner={isOwner} />
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
              workPreference: profile?.workPreference as WorkPreference,
              preferredJobTypes: profile?.preferredJobTypes || [],
              expectedSalary: profile?.expectedSalary || null,
              noticePeriod: (profile?.noticePeriod as number) || 1,
            }}
            isOwner={isOwner}
          />
          <LinksPortfolio
            socialContacts={{
              githubUrl: profile?.githubUrl || "",
              linkedinUrl: profile?.linkedinUrl || "",
              portfolioUrl: profile?.portfolioUrl || "",
            }}
            isOwner={isOwner}
          />
          <ContactInfo
            contactInfo={{
              phone: profile?.phone || "",
              cvEmail: profile?.cvEmail || "",
              location: profile?.location || "",
            }}
            isOwner={isOwner}
          />
        </div>
      </div>
    </div>
  );
}
