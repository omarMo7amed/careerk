import { mockJobs } from "@/entities/company-job/mock-jobs/mockJobs";
import { ViewJobPostLayout } from "@/widgets/view-job-post";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const jobPost = mockJobs[Number(id) - 1];

  // const jobPost = await getPost(id);

  const jobTitle = jobPost.title;

  return {
    title: `${jobTitle} | Job Details`,
    description: `View full details, requirements, and applicants for ${jobTitle}.`,
  };
}
async function page({ params }: Props) {
  const { id } = await params;
  const jobPost = mockJobs[Number(id) - 1];

  //   const jobPost = await getPost(id);

  return (
    <div>
      <ViewJobPostLayout jobPost={jobPost} />
    </div>
  );
}

export default page;
