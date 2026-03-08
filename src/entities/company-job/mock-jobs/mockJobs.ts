import { CompanyJob } from "../types/companyJob";

export const mockJobs: CompanyJob[] = [
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
  },
];
