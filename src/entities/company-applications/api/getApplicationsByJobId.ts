import { mockApplications } from "../mock-data/mock-applications";

export async function getApplicationsByJobId(jobId: string) {
  await new Promise((res) => setTimeout(res, 500));

  const applications = mockApplications.filter(
    (app) => app.directJob.id === jobId,
  );

  return {
    success: true,
    data: { applications, total: 12, page: 1, limit: 6, totalPages: 2 },
    message: "Applications retrieved successfully",
  };
}
