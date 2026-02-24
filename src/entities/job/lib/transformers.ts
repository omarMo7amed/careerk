import { Job } from "../types/BoomarkedJob";
import { SavedJobCardType } from "../types/savedJobCard";

export function jobToJobCard(job: Job): SavedJobCardType {
  return {
    id: job.id,
    title: job.title,
    companyName: job.companyName,
    location: job.location,
    salary: job.salary,
    jobType: job.jobType,
    skills: job.skills,
    isBookmarked: true, // Assuming all fetched jobs are bookmarked
  };
}

export function jobsToJobCards(jobs: Job[]): SavedJobCardType[] {
  return jobs.map(jobToJobCard);
}
