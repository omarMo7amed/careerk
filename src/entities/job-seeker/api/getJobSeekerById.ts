import { allJobSeekers } from "../mock-data/allJobSeekers";
import type { JobSeeker } from "../types/jobSeeker";

export async function getJobSeekerById(
  jobSeekerId: string,
): Promise<JobSeeker> {
  // i will replace the mock implementation with real API call later ya baaaaaaaaaaaby
  // const res = await fetch(`/api/job-seekers/${id}`);
  // if (!res.ok) throw new Error("Candidate not found");
  // return res.json();

  await new Promise((resolve) => setTimeout(resolve, 400));

  const jobSeeker = allJobSeekers.find((c) => c.jobSeekerId === jobSeekerId);
  if (!jobSeeker) throw new Error(`Job Seeker ${jobSeekerId} not found`);

  return {
    firstName: jobSeeker.firstName,
    lastName: jobSeeker.lastName,
    avatarUrl: jobSeeker.avatarUrl,
    skills: jobSeeker.skills,
    profile: {
      jobSeekerId: jobSeeker.jobSeekerId,
      title: jobSeeker.title,
      location: jobSeeker.location ?? "",
      availabilityStatus: jobSeeker.availabilityStatus ?? null,
      workPreference: jobSeeker.workPreference ?? null,
      preferredJobTypes: [],
      experienceLevel: jobSeeker.experienceLevel ?? null,
      yearsOfExperience: 0,
      linkedinUrl: jobSeeker.linkedinUrl ?? null,
      portfolioUrl: jobSeeker.portfolioUrl ?? null,
      githubUrl: jobSeeker.githubUrl ?? null,
      cvEmail: jobSeeker.email ?? null,
      email: jobSeeker.email ?? null,
      noticePeriod: null,
      phone: jobSeeker.phone ?? null,
      expectedSalary: jobSeeker.expectedSalary ?? null,
      summary: jobSeeker.summary ?? null,
      cvScore: jobSeeker.cvScore ?? null,
      cvMatchPercentage: jobSeeker.cvMatchPercentage ?? null,
      cvUrl: jobSeeker.cvUrl ?? null,
    },
    educations: [],
    workExperiences: [],
  };
}
