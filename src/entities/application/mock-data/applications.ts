import { ApplicationDetailsResponse, ApplicationsListResponse } from "..";

export const mockApplicationsResponse: ApplicationsListResponse = {
  success: true,
  data: {
    applications: [
      {
        id: "1",
        status: "INTERVIEW_SCHEDULED",
        appliedAt: "2025-10-12T00:00:00Z",
        updatedAt: "2025-10-15T00:00:00Z",
        directJob: {
          id: "job1",
          title: "Frontend Developer",
          location: "Mountain View, CA",
          jobType: "FULL_TIME",
          workPreference: "HYBRID",
          company: {
            id: "comp1",
            name: "Google",
            logoUrl: "/companies/google.svg",
          },
        },
      },
      {
        id: "2",
        status: "PENDING",
        appliedAt: "2025-10-10T00:00:00Z",
        updatedAt: "2025-10-10T00:00:00Z",
        directJob: {
          id: "job2",
          title: "Senior React Developer",
          location: "Menlo Park, CA",
          jobType: "FULL_TIME",
          workPreference: "ONSITE",
          company: {
            id: "comp2",
            name: "Meta",
            logoUrl: "/companies/meta.svg",
          },
        },
      },
      {
        id: "3",
        status: "INTERVIEW_SCHEDULED",
        appliedAt: "2025-10-08T00:00:00Z",
        updatedAt: "2025-10-12T00:00:00Z",
        directJob: {
          id: "job3",
          title: "Full Stack Engineer",
          location: "Remote",
          jobType: "FULL_TIME",
          workPreference: "REMOTE",
          company: {
            id: "comp3",
            name: "Stripe",
            logoUrl: "/companies/stripe.svg",
          },
        },
      },
      {
        id: "4",
        status: "REJECTED",
        appliedAt: "2025-10-05T00:00:00Z",
        updatedAt: "2025-10-08T00:00:00Z",
        directJob: {
          id: "job4",
          title: "UI/UX Engineer",
          location: "San Francisco, CA",
          jobType: "FULL_TIME",
          workPreference: "ONSITE",
          company: {
            id: "comp4",
            name: "Figma",
            logoUrl: "/companies/figma.svg",
          },
        },
      },
    ],
    total: 4,
    page: 1,
    limit: 20,
    totalPages: 1,
  },
  message: "Applications retrieved successfully",
};

export const mockApplicationDetails: Record<
  string,
  ApplicationDetailsResponse
> = {
  "1": {
    success: true,
    data: {
      id: "1",
      status: "INTERVIEW_SCHEDULED",
      appliedAt: "2025-10-12T00:00:00Z",
      updatedAt: "2025-10-15T00:00:00Z",
      directJob: {
        id: "job1",
        title: "Frontend Developer",
        description:
          "We are looking for an experienced Frontend Developer to join our team and build amazing user experiences.",
        requirements:
          "Strong proficiency in React, TypeScript, and modern web technologies. 3+ years of experience.",
        responsibilities:
          "Build and maintain web applications, collaborate with design team, write clean code.",
        location: "Mountain View, CA",
        jobType: "FULL_TIME",
        workPreference: "HYBRID",
        experienceLevel: "MID",
        salaryMin: 120000,
        salaryMax: 150000,
        company: {
          id: "comp1",
          name: "Google",
          logoUrl: "/companies/google.svg",
          coverUrl: "/companies/google-cover.jpg",
          description: "Google is a multinational technology company.",
          industry: "Technology",
          size: "SIZE_10000_PLUS",
          websiteUrl: "https://google.com",
          linkedIn: "https://linkedin.com/company/google",
        },
        skills: [
          { skill: { id: "s1", name: "React" } },
          { skill: { id: "s2", name: "TypeScript" } },
          { skill: { id: "s3", name: "Tailwind CSS" } },
          { skill: { id: "s4", name: "Next.js" } },
        ],
      },
    },
    message: "Application retrieved successfully",
  },
};
