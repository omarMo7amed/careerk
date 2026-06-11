import { DirectJobLayout } from "@/widgets/direct-job-layout/ui/DirectJobLayout";
import { ViewJobPostLayout } from "@/widgets/view-job-post/ui/ViewJobPostLayout";

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;

  return (
    <div className="p-4">
      {/* <ViewJobPostLayout jobId={jobId} /> */}
      <DirectJobLayout jobId={jobId} />
      {/* Here you would fetch and display the job details based on the jobId */}
    </div>
  );
}
