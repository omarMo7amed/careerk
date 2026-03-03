import { notFound } from "next/navigation";
import { mockJobs } from "../mock-jobs/mockJobs";

export function getJob(id: string) {
  const jobPost = mockJobs.find((job) => job.id === id);
  if (!jobPost) {
    notFound(); // shows 404 page
  }
  return jobPost;
}
