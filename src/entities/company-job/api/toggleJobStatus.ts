import { getCompanyJob } from "./getCompanyJob";

export function toggleJobStatus(id: string) {
  let job = getCompanyJob(id);
  // const newStatus = job.status === "PUBLISHED" ? "PAUSED" : "PUBLISHED";
  // job = { ...job, status: newStatus };
  // console.log(newStatus);

  // return newStatus;
  return "PAUSED";
}
