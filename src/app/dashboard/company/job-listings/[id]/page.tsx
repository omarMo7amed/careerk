import { getJob } from "@/entities/company-job/api/getJob";
import { ViewJobPostLayout } from "@/widgets/view-job-post";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const jobPost = await getJob(id);

  const jobTitle = jobPost.title;

  return {
    title: `${jobTitle} | Job Details`,
    description: `View full details, requirements, and applicants for ${jobTitle}.`,
  };
}
async function page({ params }: Props) {
  const { id } = await params;

  const jobPost = await getJob(id);

  return (
    <div>
      <ViewJobPostLayout jobPost={jobPost} />
    </div>
  );
}

export default page;
