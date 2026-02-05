"use client";

import { motion } from "framer-motion";
import { JobCardProps } from "../types/jobCardJobseeker";
import {
  SourceBadge,
  CompanyLogo,
  CompanyInfo,
  JobTitle,
  JobDetails,
  JobFooter,
  ViewJobOverlay,
} from "../components";

export function JobCardJobseeker({ job }: JobCardProps) {
  return (
    <motion.div className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full bg-bg-surface border border-border hover:shadow-lg">
      <SourceBadge source={job.source} />

      <CompanyLogo logo={job.company.logo} companyName={job.company.name} />

      <CompanyInfo companyName={job.company.name} category={job.category} />

      <JobTitle title={job.title} />

      <JobDetails
        salary={job.salary}
        employmentType={job.employmentType}
        location={job.location}
      />

      <JobFooter
        postedDate={job.postedDate}
        applicants={job.applicants}
        applicationsCount={job.applicationsCount}
      />

      <ViewJobOverlay />
    </motion.div>
  );
}
