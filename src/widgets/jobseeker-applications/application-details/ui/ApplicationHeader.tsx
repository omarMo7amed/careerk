import { ApplicationDetails } from "@/entities/application";

interface ApplicationHeaderProps {
  job: ApplicationDetails["directJob"];
}

export function ApplicationHeader({ job }: ApplicationHeaderProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
      <p className="text-lg text-text-secondary">{job.company.name}</p>
    </div>
  );
}
