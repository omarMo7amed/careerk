import type { Metadata } from "next";
import { JobApplicationsLayout } from "@/widgets/company-job-applications";

interface Props {
  searchParams: { jobId?: string };
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

  //   if (!jobId) redirect("./");

  return (
    <div>
      <JobApplicationsLayout jobId={jobId} />
    </div>
  );
}

export default ApplicationsPage;
