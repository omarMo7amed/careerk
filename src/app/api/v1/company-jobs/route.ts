import { NextResponse } from "next/server";
import type { CompanyJob } from "@/entities/company-job";

const MOCK_JOBS: CompanyJob[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    description:
      "Build and maintain our core product UI using React and Next.js.",
    requirements: "3+ years React experience, TypeScript proficiency.",
    responsibilities: "Lead frontend architecture decisions, mentor juniors.",
    location: "Cairo, Egypt",
    salaryMin: 3000,
    salaryMax: 5000,
    jobType: "FULL_TIME",
    workPreference: "HYBRID",
    experienceLevel: "SENIOR",
    status: "PUBLISHED",
    deadline: "2025-06-01T00:00:00.000Z",
    publishedAt: "2025-04-01T00:00:00.000Z",
    company: {
      id: "c1",
      name: "Acme Corp",
      logoUrl: null,
      industry: "Software",
    },
    skills: [
      { skillId: "s1", name: "React" },
      { skillId: "s2", name: "TypeScript" },
      { skillId: "s3", name: "Next.js" },
    ],
    applicants: 12,
  },
  {
    id: "2",
    title: "Backend Engineer",
    description: "Design and maintain REST APIs and microservices.",
    requirements: "Experience with Node.js or Go, PostgreSQL.",
    responsibilities: "Own backend services end-to-end.",
    location: "Remote",
    salaryMin: 2500,
    salaryMax: 4500,
    jobType: "FULL_TIME",
    workPreference: "REMOTE",
    experienceLevel: "MID",
    status: "PUBLISHED",
    deadline: "2025-05-15T00:00:00.000Z",
    publishedAt: "2025-04-05T00:00:00.000Z",
    company: {
      id: "c1",
      name: "Acme Corp",
      logoUrl: null,
      industry: "Software",
    },
    skills: [
      { skillId: "s4", name: "Node.js" },
      { skillId: "s5", name: "PostgreSQL" },
    ],
    applicants: 7,
  },
  {
    id: "3",
    title: "UI/UX Designer",
    description: "Create intuitive designs for our web and mobile products.",
    requirements: "Portfolio required. Figma expert.",
    responsibilities: "Own design system, run user research sessions.",
    location: "Cairo, Egypt",
    salaryMin: null,
    salaryMax: null,
    jobType: "CONTRACT",
    workPreference: "ONSITE",
    experienceLevel: "JUNIOR",
    status: "DRAFT",
    deadline: null,
    publishedAt: null,
    company: {
      id: "c1",
      name: "Acme Corp",
      logoUrl: null,
      industry: "Software",
    },
    skills: [
      { skillId: "s6", name: "Figma" },
      { skillId: "s7", name: "User Research" },
    ],
    applicants: 0,
  },
];

export async function GET() {
  // delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  return NextResponse.json(
    {
      success: true,
      data: MOCK_JOBS,
      message: "Success",
      meta: {
        timestamp: new Date().toISOString(),
        path: "/api/company-jobs",
        method: "GET",
      },
    },
    { status: 200 },
  );
}
