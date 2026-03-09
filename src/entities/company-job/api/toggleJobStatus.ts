import { getJob } from "./getJob";

export function toggleJobStatus(id: string) {
  let job = getJob(id);
  const newStatus = job.status === "PUBLISHED" ? "PAUSED" : "PUBLISHED";
  job = { ...job, status: newStatus };
  console.log(newStatus);

  return newStatus;
}
