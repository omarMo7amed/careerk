export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Job Details for Job ID: {jobId}</h1>
      {/* Here you would fetch and display the job details based on the jobId */}
    </div>
  );
}
