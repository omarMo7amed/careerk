import { getJob } from "./getJob";

export function toggleJobStatus(id: string) {
  let job = getJob(id);
  const newStatus = job.status === "published" ? "paused" : "published";
  job = { ...job, status: newStatus };
  console.log(job.status);

  return newStatus;
}
