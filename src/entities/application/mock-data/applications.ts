import { ApplicationDetailsResponse, ApplicationsListResponse } from "..";

export const mockApplicationsResponse: ApplicationsListResponse = {
  success: true,
  data: {
    applications: [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        status: "INTERVIEW_SCHEDULED",
        appliedAt: "2026-05-12T00:00:00Z",
        updatedAt: "2026-05-12T00:00:00Z",
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
        id: "550e8400-e29b-41d4-a716-446655440001",
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
        id: "550e8400-e29b-41d4-a716-446655440002",
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
        id: "550e8400-e29b-41d4-a716-446655440003",
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

export const mockApplicationsDetails: ApplicationDetailsResponse[] = [
  {
    success: true,
    data: {
      id: "550e8400-e29b-41d4-a716-446655440000",
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
  {
    success: true,
    data: {
      id: "550e8400-e29b-41d4-a716-446655440001",
      status: "PENDING",
      appliedAt: "2025-10-10T00:00:00Z",
      updatedAt: "2025-10-10T00:00:00Z",
      directJob: {
        id: "job2",
        title: "Senior React Developer",
        description:
          "Build scalable and performant user interfaces for a fast-growing product team.",
        requirements:
          "Expert knowledge of React, TypeScript, component architecture, and frontend performance.",
        responsibilities:
          "Develop features, review code, and collaborate with product and design teams.",
        location: "Menlo Park, CA",
        jobType: "FULL_TIME",
        workPreference: "ONSITE",
        experienceLevel: "SENIOR",
        salaryMin: 140000,
        salaryMax: 180000,
        company: {
          id: "comp2",
          name: "Meta",
          logoUrl: "/companies/meta.svg",
          coverUrl: "/companies/meta-cover.jpg",
          description:
            "Meta builds products that help people connect and share.",
          industry: "Technology",
          size: "SIZE_10000_PLUS",
          websiteUrl: "https://meta.com",
          linkedIn: "https://linkedin.com/company/meta",
        },
        skills: [
          { skill: { id: "s5", name: "React" } },
          { skill: { id: "s6", name: "TypeScript" } },
          { skill: { id: "s7", name: "GraphQL" } },
          { skill: { id: "s8", name: "Performance Optimization" } },
        ],
      },
    },
    message: "Application retrieved successfully",
  },
  {
    success: true,
    data: {
      id: "550e8400-e29b-41d4-a716-446655440002",
      status: "INTERVIEW_SCHEDULED",
      appliedAt: "2025-10-08T00:00:00Z",
      updatedAt: "2025-10-12T00:00:00Z",
      directJob: {
        id: "job3",
        title: "Full Stack Engineer",
        description:
          "Join the team building internal and customer-facing products across the stack.",
        requirements:
          "Strong experience with React, Node.js, TypeScript, and API design.",
        responsibilities:
          "Ship end-to-end features, maintain services, and improve developer experience.",
        location: "Remote",
        jobType: "FULL_TIME",
        workPreference: "REMOTE",
        experienceLevel: "MID",
        salaryMin: 130000,
        salaryMax: 165000,
        company: {
          id: "comp3",
          name: "Stripe",
          logoUrl: "/companies/stripe.svg",
          coverUrl: "/companies/stripe-cover.jpg",
          description:
            "Stripe builds economic infrastructure for the internet.",
          industry: "Technology",
          size: "SIZE_1000_5000",
          websiteUrl: "https://stripe.com",
          linkedIn: "https://linkedin.com/company/stripe",
        },
        skills: [
          { skill: { id: "s9", name: "React" } },
          { skill: { id: "s10", name: "Node.js" } },
          { skill: { id: "s11", name: "TypeScript" } },
          { skill: { id: "s12", name: "REST APIs" } },
        ],
      },
    },
    message: "Application retrieved successfully",
  },
  {
    success: true,
    data: {
      id: "550e8400-e29b-41d4-a716-446655440003",
      status: "REJECTED",
      appliedAt: "2025-10-05T00:00:00Z",
      updatedAt: "2025-10-08T00:00:00Z",
      directJob: {
        id: "job4",
        title: "UI/UX Engineer",
        description:
          "Design intuitive product experiences with a strong focus on visual quality and usability.",
        requirements:
          "Experience with design systems, interaction design, and frontend implementation.",
        responsibilities:
          "Create polished interfaces, collaborate closely with product and design stakeholders.",
        location: "San Francisco, CA",
        jobType: "FULL_TIME",
        workPreference: "ONSITE",
        experienceLevel: "MID",
        salaryMin: 110000,
        salaryMax: 145000,
        company: {
          id: "comp4",
          name: "Figma",
          logoUrl: "/companies/figma.svg",
          coverUrl: "/companies/figma-cover.jpg",
          description: "Figma is a collaborative design platform.",
          industry: "Design Software",
          size: "SIZE_1000_5000",
          websiteUrl: "https://figma.com",
          linkedIn: "https://linkedin.com/company/figma",
        },
        skills: [
          { skill: { id: "s13", name: "Figma" } },
          { skill: { id: "s14", name: "Design Systems" } },
          { skill: { id: "s15", name: "React" } },
          { skill: { id: "s16", name: "Accessibility" } },
        ],
      },
    },
    message: "Application retrieved successfully",
  },
];
