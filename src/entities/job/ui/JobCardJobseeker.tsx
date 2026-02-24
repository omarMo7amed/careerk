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
} from "../components";
import { RankingBadge } from "@/shared";

import { JobDescription } from "../components/JobDescription";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function JobCardJobseeker({ job }: JobCardProps) {
  const pathname = usePathname();
  return (
    <motion.div className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full bg-bg-surface border border-border hover:shadow-lg">
      <div className="flex">
        <div className="flex flex-1 gap-4">
          <div>
            <CompanyLogo
              logo={job.company.logo}
              companyName={job.company.name}
            />
          </div>
          <div>
            <JobTitle title={job.title} />
            <CompanyInfo
              companyName={job.company.name}
              category={job.company.industry}
            />
          </div>
        </div>
        {job.job_matched_score === undefined && (
          <RankingBadge rank={job.job_matched_score || 90} />
        )}
      </div>
      <div className="my-6 flex justify-between items-baseline">
        <SourceBadge source={job.source} />
        {job.type === "scraped" ? (
          <Link
            href={job.url || "#"}
            target="_blank"
            className="text-sm text-primary hover:underline ml-2"
          >
            View Original Job
          </Link>
        ) : (
          <Link
            href={`${pathname}/${job.id}`}
            className="text-sm text-primary hover:underline ml-2"
          >
            View Details
          </Link>
        )}
      </div>

      <div className="mb-6">
        <JobDescription description={job.description} />
      </div>

      <JobDetails
        salary={job.salary}
        employmentType={job.employmentType}
        location={job.location}
        totalApplicants={job.applicationsCount}
      />

      <JobFooter postedDate={job.postedDate} />
    </motion.div>
  );
}

//  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
//           <Crown size={12} className="fill-amber-900" />
//           Recommended
//         </div>
