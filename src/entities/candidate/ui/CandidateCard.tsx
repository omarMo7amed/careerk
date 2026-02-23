import { CandidateSocialLinks } from "../components/CandidateSocialLinks";
import { CandidateMetaItem } from "../components/CandidateMetaItem";
import { CandidateHeader } from "../components/CandidateHeader";
import { ContactButton } from "../components/ContactButton";
import { ViewProfile } from "../components/ViewProfile";
import { Candidate } from "../types/candidate";

import { DollarSign, BriefcaseBusiness, MapPin } from "lucide-react";
import { DownloadButton } from "../components/DownloadButton";
import Skills from "../components/Skills";

export function CandidateCard({
  candidate,
  includeSkills = true,
}: {
  candidate: Candidate;
  includeSkills?: boolean;
}) {
  const {
    id,
    name,
    title,
    location,
    summary,
    availability_status,
    avatarUrl,
    work_preference,
    expected_salary,
    linkedin_url,
    portfolio_url,
    github_url,
    email,
    cv_score,
    cv_match_percentage,
    cv_url,
    skills,
  } = candidate;

  return (
    <div className="bg-bg-surface rounded-lg p-4 shadow-sm flex flex-col  border border-border">
      <div className="flex items-start justify-between gap-6">
        <CandidateHeader
          id={id}
          name={name}
          title={title}
          avatarUrl={avatarUrl}
          availability_status={availability_status}
          rank={cv_match_percentage || cv_score}
        />
      </div>

      <p
        className="text-text-secondary text-sm line-clamp-2 my-4"
        title={summary}
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
          icon={<BriefcaseBusiness className="w-4 h-4 text-text-secondary" />}
          label={work_preference}
        />
        <CandidateMetaItem
          icon={<DollarSign className="w-4 h-4 text-text-secondary" />}
          label={expected_salary}
        />
      </div>

      <CandidateSocialLinks
        linkedin_url={linkedin_url}
        portfolio_url={portfolio_url}
        github_url={github_url}
      />

      <div className="w-full flex flex-wrap text-nowrap justify-between gap-2 mt-4">
        <div className="flex-1 px-3 py-1.5 rounded-md bg-transparent border border-border text-white hover:opacity-90">
          <DownloadButton href={cv_url} />
        </div>
        <div className="flex-1 px-3 py-1.5 rounded-md bg-transparent border border-border text-white hover:opacity-90">
          <ContactButton email={email} />
        </div>
      </div>

      <div className="flex-1 px-3 py-1.5 my-4 rounded-md bg-primary text-white hover:opacity-90 ">
        <ViewProfile id={id} />
      </div>
    </div>
  );
}
