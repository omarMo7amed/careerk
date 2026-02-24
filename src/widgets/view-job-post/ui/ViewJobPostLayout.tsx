"use client";
import { CompanyJob } from "@/entities/company-job/types/companyJob";
import { Badge, Button } from "@/shared";
import Card from "@/shared/ui/Card";
import { useState } from "react";
import { JobSidebar } from "./JobSidebar";
import { JobStatistics } from "./JobStatistics";
import { JobDetailsGrid } from "./DetailsGrid";
import { JobSection } from "./JobSection";
import { JobHeader } from "./JobHeader";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface ViewJobPostLayoutProps {
  jobPost: CompanyJob;
}

export function ViewJobPostLayout({ jobPost }: ViewJobPostLayoutProps) {
  const {
    title,
    description,
    requirements,
    responsibilities,
    skills,
    location,
    minSalary,
    maxSalary,
    applicationDeadline,
    workArrangement,
    employmentType,
    experienceLevel,
    status,
    applicationsCount,
  } = jobPost;

  const [isEditingJob, setIsEditingJob] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 ">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          className="group flex items-center gap-2 text-foreground text-sm font-semibold"
        >
          <MoveLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Jobs
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <Card className="lg:col-span-2 space-y-8">
          <JobHeader
            title={title}
            workArrangement={workArrangement}
            employmentType={employmentType}
          />

          <JobSection title="About the Job">
            <p className="text-text-secondary">{description}</p>
          </JobSection>

          <JobSection title="Responsibilities">
            <p className="text-text-secondary">{responsibilities}</p>
          </JobSection>

          <JobSection title="Requirements">
            <p className="text-text-secondary">{requirements}</p>
          </JobSection>

          <JobSection title="Required Skills">
            <div className="flex gap-2">
              {skills.map((skill) => (
                <Badge key={skill.id} variant="skill">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </JobSection>

          <JobDetailsGrid
            location={location}
            minSalary={minSalary}
            maxSalary={maxSalary}
            experienceLevel={experienceLevel}
            applicationDeadline={applicationDeadline}
          />
        </Card>
        <div className="space-y-6">
          <JobSidebar
            isEditingJob={isEditingJob}
            setIsEditingJob={setIsEditingJob}
            applicationDeadline={applicationDeadline}
          />

          <JobStatistics
            status={status}
            applicationsCount={applicationsCount}
          />
        </div>
      </div>
    </div>
  );
}
