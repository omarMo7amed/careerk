"use client";

import { CandidateHeader } from "@/entities/job-seeker";
import Skills from "@/entities/job-seeker/components/Skills";
import { useState } from "react";
import { ApplicationActions } from "./ApplicationActions";
import { ApplicationMeta } from "./ApplicationMeta";
import { ApplicationStatusDropdown } from "./ApplicationStatusDropdown";
import { useJobApplication } from "../hook/useJobApplication";

export type ApplicationStatus =
  | "PENDING"
  | "REVIEWED"
  | "SHORTLISTED"
  | "INTERVIEW_SCHEDULED"
  | "REJECTED"
  | "HIRED"
  | "WITHDRAWN";

interface ApplicationCardProps {
  id: string;
  initialStatus?: ApplicationStatus;
  includeSkills?: boolean;
  onStatusChange?: (status: ApplicationStatus) => void;
}

export function ApplicationCard({
  id,
  initialStatus = "PENDING",
  includeSkills = true,
  onStatusChange,
}: ApplicationCardProps) {
  const [status, setStatus] = useState<ApplicationStatus>(initialStatus);
  const { data: application, isLoading, error } = useJobApplication(id);

  if (!application) return null;

  const {
    jobSeeker: {
      id: candidateID,
      firstName,
      lastName,
      profileImageUrl,
      email,
      skills,
      profile: {
        title,
        location,
        yearsOfExperience,
        availabilityStatus,
        workPreference,
        expectedSalary,
        linkedinUrl,
        githubUrl,
        cvUrl,
        cvScore,
        cvMatchPercentage,
      },
    },
  } = application;

  function handleStatusChange(s: ApplicationStatus) {
    setStatus(s);
    onStatusChange?.(s);
  }

  return (
    <div className="bg-bg-surface rounded-lg border border-border shadow-sm p-3 flex flex-col gap-4">
      <div className="min-w-0 flex-1">
        <CandidateHeader
          id={candidateID}
          firstName={firstName}
          lastName={lastName}
          title={title}
          profileImageUrl={profileImageUrl}
          availabilityStatus={availabilityStatus ?? "OPEN_TO_WORK"}
          rank={cvMatchPercentage ?? cvScore ?? 0}
        />
      </div>

      <div className="flex justify-between items-center">
        {includeSkills && skills?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            <Skills skills={skills} />
          </div>
        )}
        <ApplicationStatusDropdown
          status={status}
          onChange={handleStatusChange}
        />
      </div>

      <ApplicationMeta
        location={location}
        workPreference={workPreference}
        expectedSalary={expectedSalary}
      />

      <ApplicationActions
        linkedinUrl={linkedinUrl}
        githubUrl={githubUrl}
        cvUrl={cvUrl}
        email={email}
        id={id}
      />
    </div>
  );
}
