import { CompanyJob } from "../types/companyJob";

export const mockJobs: CompanyJob[] = [
  {
    id: "1",
    companyId: "1",
    title: "Senior Frontend Engineer",
    description:
      "We are looking for a Senior Frontend Engineer to lead the development of scalable web applications.",
    requirements:
      "5+ years of experience with React, strong TypeScript skills, and experience with modern frontend tooling.",
    responsibilities:
      "Build reusable components, mentor junior developers, and collaborate with product teams.",
    employmentType: "full_time",
    workArrangement: "hybrid",
    skills: [
      {
        id: "1",
        name: "React",
        category: "Frontend",
      },
      {
        id: "2",
        name: "TypeScript",
        category: "Programming Language",
      },
      {
        id: "3",
        name: "Tailwind CSS",
        category: "Styling",
      },
    ],
    location: "Cairo, Egypt",
    minSalary: 25000,
    maxSalary: 35000,
    experienceLevel: "senior",
    applicationDeadline: "2026-03-30",
    status: "published",
    applicationsCount: 14,
    viewsCount: 230,
    is_featured: true,
    created_at: "2026-02-01T09:00:00.000Z",
    updated_at: "2026-02-10T12:00:00.000Z",
    published_at: "2026-02-02T08:00:00.000Z",
  },
  {
    id: "2",
    companyId: "2",
    title: "Backend Developer (Node.js)",
    description:
      "Join our backend team to build scalable APIs and optimize system performance.",
    requirements:
      "3+ years experience with Node.js, PostgreSQL, and REST API design.",
    responsibilities:
      "Design APIs, improve database performance, and maintain system reliability.",
    employmentType: "contract",
    workArrangement: "remote",
    skills: [
      {
        id: "1",
        name: "React",
        category: "Frontend",
      },
      {
        id: "2",
        name: "TypeScript",
        category: "Programming Language",
      },
      {
        id: "3",
        name: "Tailwind CSS",
        category: "Styling",
      },
    ],
    location: "Cairo, Egypt",
    minSalary: 25000,
    maxSalary: 35000,
    experienceLevel: "senior",
    applicationDeadline: "2026-03-30",
    status: "draft",
    applicationsCount: 0,
    viewsCount: 45,
    is_featured: false,
    created_at: "2026-02-15T10:30:00.000Z",
    updated_at: "2026-02-15T10:30:00.000Z",
    published_at: null,
  },
  {
    id: "3",
    companyId: "3",
    title: "Junior UI/UX Designer",
    description:
      "We are hiring a Junior UI/UX Designer to support product design and user research.",
    requirements:
      "1+ year experience with Figma and strong understanding of user-centered design.",
    responsibilities:
      "Create wireframes, prototypes, and assist in usability testing.",
    employmentType: "full_time",
    workArrangement: "onsite",
    skills: [
      {
        id: "1",
        name: "React",
        category: "Frontend",
      },
      {
        id: "2",
        name: "TypeScript",
        category: "Programming Language",
      },
      {
        id: "3",
        name: "Tailwind CSS",
        category: "Styling",
      },
    ],
    location: "Alexandria, Egypt",
    minSalary: 12000,
    maxSalary: 16000,
    experienceLevel: "junior",
    applicationDeadline: "2026-04-15",
    status: "paused",
    applicationsCount: 7,
    viewsCount: 98,
    is_featured: false,
    created_at: "2026-01-20T11:00:00.000Z",
    updated_at: "2026-02-05T09:30:00.000Z",
    published_at: "2026-01-21T08:00:00.000Z",
  },
];
