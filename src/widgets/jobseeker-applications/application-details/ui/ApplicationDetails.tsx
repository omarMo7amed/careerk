"use client";

import { useApplication } from "@/entities/application";
import { Error, Loader } from "@/shared";
import { ApplicationHeader } from "./ApplicationHeader";
import { AppliedDate } from "./AppliedDate";
import { DetailsActions } from "./DetailsActions";
import { JobDescription } from "./JobDescription";
import { SkillsList } from "./SkillsList";
import { StatusBadge } from "./StatusBadge";
import { ApplicationCardInfo, MatchScore } from "../../applications-layout";

interface ApplicationDetailsProps {
  applicationId: string;
  onClose: () => void;
}

export function ApplicationDetails({
  applicationId,
  onClose,
}: ApplicationDetailsProps) {
  const { details, isLoading, error } = useApplication(applicationId);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !details) {
    return <Error />;
  }

  const application = details.data;

  return (
    <div className="p-6 h-full flex flex-col justify-between">
      <div className="space-y-6 ">
        <ApplicationHeader job={application.directJob} />
        <StatusBadge status={application.status} />
        <MatchScore />
        <AppliedDate date={application.appliedAt} />
        <ApplicationCardInfo application={application} />
        <JobDescription description={application.directJob.description} />
        <SkillsList skills={application.directJob.skills} />
      </div>

      <DetailsActions
        jobId={application.directJob.id}
        applicationId={application.id}
        status={application.status}
        onClose={onClose}
      />
    </div>
  );
}
