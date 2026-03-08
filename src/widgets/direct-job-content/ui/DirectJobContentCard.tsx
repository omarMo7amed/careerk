import { Card, Badge } from "@/shared";
import {
  CompanyJob,
  experienceLevelLabels,
  jobTypeLabels,
  workPreferenceLabels,
} from "@/entities/company-job";
import { JobHeader } from "./JobHeader";
import { JobSection } from "./JobSection";
import { JobDetailsGrid } from "./DetailsGrid";

type DirectJobContentCardProps = {
  job: CompanyJob;
};

export function DirectJobContentCard({ job }: DirectJobContentCardProps) {
  const {
    title,
    description,
    responsibilities,
    requirements,
    skills,
    location,
    salaryMin,
    salaryMax,
    experienceLevel,
    jobType,
    workPreference,
    deadline,
  } = job;

  return (
    <Card className="lg:col-span-2  space-y-8 ">
      <JobHeader
        title={title}
        workPreference={workPreferenceLabels[workPreference]}
        jobType={jobTypeLabels[jobType]}
      />

      {description && (
        <JobSection title="About the Job">
          <p className="text-text-secondary">{description}</p>
        </JobSection>
      )}

      {responsibilities && (
        <JobSection title="Responsibilities">
          <p className="text-text-secondary">{responsibilities}</p>
        </JobSection>
      )}

      {requirements && (
        <JobSection title="Requirements">
          <p className="text-text-secondary">{requirements}</p>
        </JobSection>
      )}

      {skills.length > 0 && (
        <JobSection title="Required Skills">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill.skillId} variant="skill">
                {skill.name}
              </Badge>
            ))}
          </div>
        </JobSection>
      )}

      <JobDetailsGrid
        location={location}
        minSalary={salaryMin}
        maxSalary={salaryMax}
        experienceLevel={experienceLevelLabels[experienceLevel]}
        deadline={deadline}
      />
    </Card>
  );
}
