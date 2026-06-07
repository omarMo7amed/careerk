import { CompanyJob, JobMatch } from "../types/companyJob";

export let mockJobs: CompanyJob[] = [
  {
    id: "job_001",

    title: "Senior Frontend Developer",

    description:
      "We are looking for a skilled Senior Frontend Developer to join our team and build scalable web applications using modern technologies.",

    requirements:
      "5+ years of experience with React, TypeScript, and modern frontend tooling. Strong understanding of state management and performance optimization.",

    responsibilities:
      "Develop and maintain UI components, collaborate with backend teams, review code, and mentor junior developers.",

    location: "Cairo, Egypt",

    salaryMin: 25000,
    salaryMax: 35000,

    jobType: "FULL_TIME",
    workPreference: "HYBRID",
    experienceLevel: "SENIOR",
    status: "PUBLISHED",

    deadline: "2026-06-30",
    publishedAt: "2026-03-01T10:00:00.000Z",

    company: {
      id: "company_001",
      name: "Careerk",
      logoUrl: null,
    },

    skills: [
      { skillId: "skill_001", name: "React" },
      { skillId: "skill_002", name: "TypeScript" },
      { skillId: "skill_003", name: "Tailwind CSS" },
      { skillId: "skill_004", name: "Next.js" },
    ],
    applicants:20
  },
  {
    id: "job_002",
    title: "Backend Node.js Developer",
    description: "Build scalable REST APIs and work with cloud infrastructure.",
    requirements:
      "3+ years Node.js experience, PostgreSQL, authentication systems.",
    responsibilities:
      "Design APIs, manage database schemas, optimize performance.",
    location: "Toukh, Egypt",
    salaryMin: 20000,
    salaryMax: 30000,
    jobType: "FULL_TIME",
    workPreference: "REMOTE",
    experienceLevel: "MID",
    status: "PUBLISHED",
    deadline: "2026-07-15",
    publishedAt: "2026-02-20T10:00:00.000Z",
    company: {
      id: "company_001",
      name: "Careerk",
      logoUrl: null,
    },
    skills: [
      { skillId: "skill_005", name: "Node.js" },
      { skillId: "skill_006", name: "PostgreSQL" },
      { skillId: "skill_007", name: "Docker" },
    ],
    applicants:10
  },
  {
    id: "job_003",
    title: "Backend Node.js Developer",
    description: "Build scalable REST APIs and work with cloud infrastructure.",
    requirements:
      "3+ years Node.js experience, PostgreSQL, authentication systems.",
    responsibilities:
      "Design APIs, manage database schemas, optimize performance.",
    location: null,
    salaryMin: null,
    salaryMax: null,
    jobType: "FULL_TIME",
    workPreference: "REMOTE",
    experienceLevel: "MID",
    status: "PUBLISHED",
    deadline: null,
    publishedAt: "2026-02-20T10:00:00.000Z",
    company: {
      id: "company_001",
      name: "Careerk",
      logoUrl: null,
    },
    skills: [
      { skillId: "skill_005", name: "Node.js" },
      { skillId: "skill_006", name: "PostgreSQL" },
      { skillId: "skill_007", name: "Docker" },
    ],
    applicants:60
  },

];
const mockMatches: Record<string, JobMatch[]> = {
  job_001: [
    {
      id: "113f4d3d-120f-4e21-8d7a-1d825d748566",
      jobSeekerId: "20000000-0000-4000-8000-000000000004",
      jobSeekerName: "Youssef Khaled",
      jobSeekerTitle: "DevOps Engineer",
      availabilityStatus: "OPEN_TO_WORK",
      location: "Riyadh, Saudi Arabia",
      matchScore: 70,
      createdAt: "2026-04-17T11:57:59.572Z",
    },
    {
      id: "5f9f22ba-2d03-4e8e-a721-2243424f74d5",
      jobSeekerId: "f35b1c20-b18e-4902-9461-23bb653ee5fa",
      jobSeekerName: "Amr Mubarak",
      jobSeekerTitle: "Software Engineer",
      availabilityStatus: "OPEN_TO_WORK",
      location: "Egypt",
      matchScore: 62.5,
      createdAt: "2026-04-17T11:57:59.572Z",
    },
    {
      id: "9b3fa2e4-2aea-49e4-bdde-e3abf3b0da3e",
      jobSeekerId: "20000000-0000-4000-8000-000000000003",
      jobSeekerName: "Sara Nabil",
      jobSeekerTitle: "Product Designer",
      availabilityStatus: "PASSIVELY_LOOKING",
      location: "Alexandria, Egypt",
      matchScore: 58.33,
      createdAt: "2026-04-17T11:57:59.572Z",
    },
    {
      id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      jobSeekerId: "30000000-0000-4000-8000-000000000005",
      jobSeekerName: "Nada Hassan",
      jobSeekerTitle: "Frontend Developer",
      availabilityStatus: "OPEN_TO_WORK",
      location: "Cairo, Egypt",
      matchScore: 85,
      createdAt: "2026-04-18T09:00:00.000Z",
    },
    {
      id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      jobSeekerId: "40000000-0000-4000-8000-000000000006",
      jobSeekerName: "Omar Farouk",
      jobSeekerTitle: "React Developer",
      availabilityStatus: "NOT_LOOKING",
      location: "Giza, Egypt",
      matchScore: 45,
      createdAt: "2026-04-19T10:30:00.000Z",
    },
  ],
  job_002: [
    {
      id: "c3d4e5f6-a7b8-9012-cdef-123456789012",
      jobSeekerId: "50000000-0000-4000-8000-000000000007",
      jobSeekerName: "Ahmed Samy",
      jobSeekerTitle: "Backend Developer",
      availabilityStatus: "OPEN_TO_WORK",
      location: "Cairo, Egypt",
      matchScore: 90,
      createdAt: "2026-04-20T08:00:00.000Z",
    },
    {
      id: "d4e5f6a7-b8c9-0123-defa-234567890123",
      jobSeekerId: "60000000-0000-4000-8000-000000000008",
      jobSeekerName: "Layla Ibrahim",
      jobSeekerTitle: "Node.js Engineer",
      availabilityStatus: "PASSIVELY_LOOKING",
      location: "Alexandria, Egypt",
      matchScore: 78,
      createdAt: "2026-04-21T11:00:00.000Z",
    },
  ],
};
export function getMockMatches(jobId: string): JobMatch[] {
  return mockMatches[jobId] ?? [];
}
export function getMockJob(jobId: string): CompanyJob | undefined {
  return mockJobs.find((j) => j.id === jobId);
}
