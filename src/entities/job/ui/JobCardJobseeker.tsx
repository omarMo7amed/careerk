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
import { RankingBadge, formatDate } from "@/shared";

import { JobDescription } from "../components/JobDescription";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function JobCardJobseeker({ job }: JobCardProps) {
  const pathname = usePathname();
  const id = job.id ?? job.id ?? "";
  const bookmarkId = job.bookmarkId;
  const isBookmarked = job.isBookmarked ?? false;
  const title = job.title ?? "Untitled Job";
  const description = job.description ?? "";
  const companyName = job.company?.name ?? job.companyName ?? "Unknown Company";
  const companyLogo = job.company?.logoUrl ?? undefined;
  const companyCategory = job.company?.industry;
  const salary =
    job.salary ??
    (job.salaryMin != null && job.salaryMax != null
      ? `$${job.salaryMin.toLocaleString()}-$${job.salaryMax.toLocaleString()}`
      : undefined);
  const type = job.type;
  const employmentType = job.jobType?.toLowerCase().replace(/_/g, "-");
  const workPreference = job.workPreference?.toLowerCase().replace(/_/g, "-");
  const experienceLevel = job.experienceLevel?.toLowerCase().replace(/_/g, "-");
  const location = job.location ?? "";
  const totalApplicants = job.applicants ?? 0;
  const postedDateRaw = job.postedAt ?? job.publishedAt ?? null;
  const postedDate = postedDateRaw ? formatDate(postedDateRaw) : undefined;
  const isScraped = job.type === "scraped";

  console.log(totalApplicants);

  return (
    <motion.div className="group relative rounded-2xl p-6 transition-shadow duration-300 cursor-pointer h-full bg-bg-surface border border-border hover:shadow-[0_20px_45px_rgba(10,102,194,0.28)]">
      <div className="flex">
        <div className="flex flex-1 gap-4">
          <div>
            <CompanyLogo logo={companyLogo} companyName={companyName} />
          </div>
          <div>
            <JobTitle title={title} experienceLevel={experienceLevel} />
            <CompanyInfo companyName={companyName} category={companyCategory} />
          </div>
        </div>
        {job.matchScore !== undefined && (
          <RankingBadge rank={job.matchScore || 90} />
        )}
      </div>
      <div className="my-6 flex justify-between items-baseline">
        <SourceBadge source={job.source} />
        {isScraped ? (
          <Link
            href={job.sourceUrl || "#"}
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
        <JobDescription description={description} />
      </div>

      <JobDetails
        salary={salary}
        employmentType={employmentType}
        workPreference={workPreference}
        location={location}
        totalApplicants={totalApplicants}
      />

      <JobFooter
        postedDate={postedDate}
        type={type}
        id={id}
        bookmarkId={bookmarkId}
        isBookmarked={isBookmarked}
        jobPostUrl={type === "scraped" ? job.sourceUrl : undefined}
      />
    </motion.div>
  );
}
