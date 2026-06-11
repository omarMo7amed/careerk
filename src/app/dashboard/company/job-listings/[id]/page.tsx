import { ViewJobPostLayout } from "@/widgets/view-job-post";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { id } = await params;
//   const jobPost = await getJob(id);

//   const jobTitle = jobPost.title;

//   return {
//     title: `${jobTitle} | Job Details`,
//     description: `View full details, requirements, and applicants for ${jobTitle}.`,
//   };
// }
async function page({ params }: Props) {
  const { id } = await params;

  return (
    <div className="py-8">
      <ViewJobPostLayout jobId={id} />
      {/* <DirectJobLayout job={jobPost} /> */}
    </div>
  );
}

export default page;
