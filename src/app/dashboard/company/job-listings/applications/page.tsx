import type { Metadata } from "next";
import { JobApplicationsLayout } from "@/widgets/company-job-applications";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ jobId?: string }>;
}

// export async function generateMetadata({
//   searchParams,
// }: Props): Promise<Metadata> {
//   const { jobId } = await searchParams;
//   const jobPost = await getJob(jobId!);

//   const jobTitle = jobPost.title;

//   return {
//     title: `${jobTitle} | Applications`,
//     description: `View applicants for ${jobTitle}.`,
//   };
// }

async function ApplicationsPage({ searchParams }: Props) {
  const { jobId } = await searchParams;

  if (!jobId) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">No Job Selected</h2>
          <p className="text-text-secondary mt-2 mb-4">
            Please select a job to view its applications.
          </p>
          <Link
            href="/dashboard/company/job-listings"
            className="text-primary hover:underline text-sm"
          >
            Back to Job Listings
          </Link>
        </div>
      </div>
    );
  }

  return <JobApplicationsLayout jobId={jobId} />;
}

export default ApplicationsPage;
