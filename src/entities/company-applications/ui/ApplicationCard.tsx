"use client";

import {
  DollarSign,
  BriefcaseBusiness,
  MapPin,
  ChevronDown,
  Check,
} from "lucide-react";
import { useState } from "react";
import { JobApplication } from "@/entities/company-applications";
import {
  CandidateHeader,
  CandidateMetaItem,
  CandidateSocialLinks,
  ContactButton,
  ViewProfile,
} from "@/entities/job-seeker";
import Skills from "@/entities/job-seeker/components/Skills";
import { DownloadButton } from "@/entities/cv";

export type ApplicationStatus =
  | "PENDING"
  | "REVIEWED"
  | "SHORTLISTED"
  | "INTERVIEW_SCHEDULED"
  | "REJECTED"
  | "HIRED"
  | "WITHDRAWN";

const STATUS_CONFIG: Record<
  ApplicationStatus,
  { label: string; color: string; bg: string }
> = {
  PENDING: {
    label: "Pending",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  REVIEWED: {
    label: "Reviewed",
    color: "text-blue-600",
    bg: "bg-blue-50 ",
  },
  SHORTLISTED: {
    label: "Shortlisted",
    color: "text-purple-600",
    bg: "bg-purple-50 ",
  },
  INTERVIEW_SCHEDULED: {
    label: "Interview Scheduled",
    color: "text-indigo-600",
    bg: "bg-indigo-50 ",
  },
  REJECTED: {
    label: "Rejected",
    color: "text-red-600",
    bg: "bg-red-50 ",
  },
  HIRED: {
    label: "Hired",
    color: "text-green-600",
    bg: "bg-green-50 ",
  },
  WITHDRAWN: {
    label: "Withdrawn",
    color: "text-gray-500",
    bg: "bg-gray-100 ",
  },
};

interface ApplicationCardProps {
  application: JobApplication;
  initialStatus?: ApplicationStatus;
  includeSkills?: boolean;
  onStatusChange?: (status: ApplicationStatus) => void;
}

export function ApplicationCard({
  application,
  initialStatus = "PENDING",
  includeSkills = true,
  onStatusChange,
}: ApplicationCardProps) {
  const [status, setStatus] = useState<ApplicationStatus>(initialStatus);
  const [open, setOpen] = useState(false);
  const {
    jobSeeker: {
      id,
      firstName,
      lastName,
      profileImageUrl,
      email,
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
      skills,
    },
  } = application;

  const cfg = STATUS_CONFIG[status];

  const handleSelect = (s: ApplicationStatus) => {
    setStatus(s);
    setOpen(false);
    onStatusChange?.(s);
  };

  return (
    <div className="bg-bg-surface rounded-lg border border-border shadow-sm p-3 flex flex-col gap-4">
      {/* ───── Header + Status ───── */}

      <div className="min-w-0 flex-1">
        <CandidateHeader
          id={id}
          firstName={firstName}
          lastName={lastName}
          title={title}
          profileImageUrl={profileImageUrl}
          availabilityStatus={availabilityStatus ?? "Not Available"}
          rank={cvMatchPercentage ?? cvScore ?? 0}
        />
      </div>
      <div className="flex justify-between items-center">
        {/* ───── Skills ───── */}
        {includeSkills && skills?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            <Skills skills={skills} />
          </div>
        )}
        <div className="relative shrink-0 flex justify-end">
          <button
            onClick={() => setOpen((v) => !v)}
            className={`
              flex items-center h-fit gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
              border border-border transition-all
              ${cfg.bg} ${cfg.color}
            `}
          >
            {cfg.label}
            <ChevronDown
              className={`w-3 h-3 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setOpen(false)}
              />
              <div className="absolute right-0 mt-8 z-20 w-48 rounded-lg border border-border bg-bg-surface shadow-lg overflow-hidden">
                {(Object.keys(STATUS_CONFIG) as ApplicationStatus[]).map(
                  (s) => {
                    const c = STATUS_CONFIG[s];
                    return (
                      <button
                        key={s}
                        onClick={() => handleSelect(s)}
                        className={`
                          w-full flex items-center justify-between px-3 py-2 text-xs
                          transition-colors text-left
                          ${s === status ? "font-medium" : ""}
                        `}
                      >
                        <span className={c.color}>{c.label}</span>
                        {s === status && (
                          <Check className="w-3 h-3 text-text-secondary" />
                        )}
                      </button>
                    );
                  },
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-3 items-center text-xs">
        <CandidateMetaItem
          icon={<MapPin className="w-3.5 h-3.5 text-text-secondary" />}
          label={location}
        />
        <CandidateMetaItem
          icon={
            <BriefcaseBusiness className="w-3.5 h-3.5 text-text-secondary" />
          }
          label={workPreference}
        />
        <CandidateMetaItem
          icon={<DollarSign className="w-3.5 h-3.5 text-text-secondary" />}
          label={expectedSalary}
        />
      </div>

      {/* ───── Meta + Actions ───── */}
      <div className="flex flex-col gap-3 pt-2 border-t border-border">
        <div className="flex items-center justify-between gap-2">
          <CandidateSocialLinks
            linkedinUrl={linkedinUrl}
            // portfolioUrl={portfolioUrl}
            githubUrl={githubUrl}
          />

          <div className="flex items-center gap-2">
            <DownloadButton />
            <ContactButton email={email} />
            <ViewProfile id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
