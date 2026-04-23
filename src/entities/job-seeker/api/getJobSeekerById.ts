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

  const jobSeeker = allJobSeekers.find(
    (c) => c.profile.jobSeekerId === jobSeekerId,
  );
  if (!jobSeeker) throw new Error(`Job Seeker ${jobSeekerId} not found`);

  return {
    firstName: jobSeeker.firstName,
    lastName: jobSeeker.lastName,
    profileImageUrl: jobSeeker.profileImageUrl,
    skills: jobSeeker.skills,
    profile: {
      jobSeekerId: jobSeeker.profile.jobSeekerId,
      title: jobSeeker.profile.title,
      location: jobSeeker.profile.location ?? "",
      availabilityStatus: jobSeeker.profile.availabilityStatus ?? null,
      workPreference: jobSeeker.profile.workPreference ?? null,
      preferredJobTypes: [],
      yearsOfExperience: 0,
      linkedinUrl: jobSeeker.profile.linkedinUrl ?? null,
      portfolioUrl: jobSeeker.profile.portfolioUrl ?? null,
      githubUrl: jobSeeker.profile.githubUrl ?? null,
      cvEmail: jobSeeker.profile.email ?? null,
      email: jobSeeker.profile.email ?? null,
      noticePeriod: null,
      phone: jobSeeker.profile.phone ?? null,
      expectedSalary: jobSeeker.profile.expectedSalary ?? null,
      summary: jobSeeker.profile.summary ?? null,
      cvScore: jobSeeker.profile.cvScore ?? null,
      cvMatchPercentage: jobSeeker.profile.cvMatchPercentage ?? null,
      cvUrl: jobSeeker.profile.cvUrl ?? null,
    },
    educations: [],
    workExperiences: [],
  };
}
