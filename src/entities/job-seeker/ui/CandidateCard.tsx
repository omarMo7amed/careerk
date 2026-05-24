import { CandidateSocialLinks } from "../components/CandidateSocialLinks";
import { CandidateMetaItem } from "../components/CandidateMetaItem";
import { CandidateHeader } from "../components/CandidateHeader";
import { ContactButton } from "../components/ContactButton";
import { ViewProfile } from "../components/ViewProfile";

import { DollarSign, BriefcaseBusiness, MapPin, Clock3 } from "lucide-react";
import Skills from "../components/Skills";
import { JobSeeker } from "../types/jobSeeker";
import { AVAILABILITY_STATUS_LABELS } from "../lib/labels";
import { AvailabilityStatus } from "../types/availabilityStatus";
import { DownloadButton } from "@/entities/cv";

export function CandidateCard({
  candidate,
  includeSkills = true,
}: {
  candidate: JobSeeker;
  includeSkills?: boolean;
}) {
  const {
    firstName,
    lastName,
    profileImageUrl,
    profile: {
      jobSeekerId,
      title,
      location,
      summary,
      availabilityStatus,
      workPreference,
      expectedSalary,
      linkedinUrl,
      portfolioUrl,
      githubUrl,
      cvEmail,
      cvScore,
      cvMatchPercentage,
      yearsOfExperience,
    },
    skills,
  } = candidate;

  return (
    <div className="bg-bg-surface rounded-lg p-4 shadow-sm flex flex-col  border border-border">
      <div className="flex items-start justify-between gap-6">
        <CandidateHeader
          id={jobSeekerId}
          firstName={firstName}
          lastName={lastName}
          title={title}
          profileImageUrl={profileImageUrl}
          availabilityStatus={
            AVAILABILITY_STATUS_LABELS[
              availabilityStatus ?? "NOT_LOOKING"
            ] as AvailabilityStatus
          }
          rank={cvMatchPercentage ?? cvScore ?? 0}
        />
      </div>

      <p
        className="text-text-secondary text-sm line-clamp-2 my-4"
        title={summary ?? ""}
      >
        {summary}
      </p>

      {includeSkills && <Skills skills={skills} />}

      <div className="flex flex-wrap gap-2 items-center justify-between">
        <CandidateMetaItem
          icon={<MapPin className="w-4 h-4 text-text-secondary" />}
          label={location}
        />
        <CandidateMetaItem
          icon={<Clock3 className="w-4 h-4 text-text-secondary" />}
          label={`${yearsOfExperience} years exp`}
        />
        <CandidateMetaItem
          icon={<BriefcaseBusiness className="w-4 h-4 text-text-secondary" />}
          label={workPreference}
        />
        <CandidateMetaItem
          icon={<DollarSign className="w-4 h-4 text-text-secondary" />}
          label={expectedSalary}
        />
      </div>

      <CandidateSocialLinks
        linkedinUrl={linkedinUrl}
        portfolioUrl={portfolioUrl}
        githubUrl={githubUrl}
      />

      <div className="w-full flex flex-wrap text-nowrap justify-between gap-2 mt-4">
        <DownloadButton />

        <ContactButton email={cvEmail || ""} />
      </div>

      <ViewProfile id={jobSeekerId} />
    </div>
  );
}
