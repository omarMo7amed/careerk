import { mockApplications } from "../mock-data/mock-applications";

export async function getApplicationsByJobId(jobId: string) {
  await new Promise((res) => setTimeout(res, 500));

  const applications = mockApplications.filter(
    (app) => app.directJob.id === jobId,
  );

  return {
    success: true,
    data: applications,
    message: "Applications retrieved successfully",
  };
}
