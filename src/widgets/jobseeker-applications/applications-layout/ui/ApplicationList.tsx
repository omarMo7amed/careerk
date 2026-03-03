"use client";

import { useApplications } from "@/entities/application";
import { Empty, Error, Loader } from "@/shared";
import { ApplicationCard } from "./ApplicationCard";
import { List } from "@/widgets/list";

interface ApplicationsListProps {
  onViewDetails: (applicationId: string) => void;
}

export function ApplicationsList({ onViewDetails }: ApplicationsListProps) {
  const { applications, isLoading, error } = useApplications();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  if (applications.length === 0) {
    return (
      <Empty
        message="No applications yet"
        linkText="Browse Jobs"
        linkHref="/dashboard/jobseeker/find-jobs"
      />
    );
  }

  return (
    <List
      items={applications}
      renderItem={(application) => (
        <ApplicationCard
          key={application.id}
          application={application}
          onViewDetails={() => onViewDetails(application.id)}
        />
      )}
      columnsInLarge={2}
    />
  );
}
