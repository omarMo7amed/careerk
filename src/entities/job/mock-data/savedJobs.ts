import { BookmarksResponse } from "../types/BoomarkedJob";

export const mockBookmarksResponse: BookmarksResponse = {
  success: true,
  message: "Bookmarks retrieved successfully",
  data: [
    // existing ones...
    {
      bookmarkId: "510209e1-e4b9-4036-ae4d-aff0c0039360",
      bookmarkedAt: "2026-02-22T22:34:05.491Z",
      job: {
        id: "1b6a74d1-d9aa-4e71-81b6-51d3187e5d93",
        title: "Senior Frontend Developer",
        description:
          "Build amazing UIs with React, TypeScript, and modern web technologies.",
        location: "San Francisco, CA",
        salary: "$120k-150k",
        jobType: "full-time",
        companyName: "TechCorp",
        sourceUrl: "https://techcorp.com/careers/senior-frontend",
        postedAt: "2024-01-15T00:00:00Z",
        source: "direct",
        skills: [
          { skillId: "skill-1", name: "React" },
          { skillId: "skill-2", name: "TypeScript" },
          { skillId: "skill-3", name: "Next.js" },
        ],
      },
    },

    // 🔹 Long title + many skills
    {
      bookmarkId: "830519a4-x1y2-7789-aa1b-longtitle",
      bookmarkedAt: "2026-02-18T09:12:44.000Z",
      job: {
        id: "job-long-title",
        title:
          "Lead Frontend Engineer — Design Systems, Performance Optimization and Accessibility",
        description: "Lead frontend architecture.",
        location: "Berlin, Germany",
        salary: "$130k-160k",
        jobType: "full-time",
        companyName: "Super Long Company Name That Might Overflow GmbH",
        sourceUrl: "https://example.com/job/lead-frontend",
        postedAt: "2024-02-01T00:00:00Z",
        source: "direct",
        skills: [
          { skillId: "s1", name: "React" },
          { skillId: "s2", name: "TypeScript" },
          { skillId: "s3", name: "Storybook" },
          { skillId: "s4", name: "Accessibility" },
          { skillId: "s5", name: "Performance" },
        ],
      },
    },

    // 🔹 Missing location
    {
      bookmarkId: "050721c6-nolocation",
      bookmarkedAt: "2026-02-16T12:00:00.000Z",
      job: {
        id: "job-no-location",
        title: "Backend Engineer",
        description: "Build APIs with Node.js.",
        location: null,
        salary: "$90k-120k",
        jobType: "contract",
        companyName: "API Masters",
        sourceUrl: "https://example.com/job/backend",
        postedAt: "2024-01-12T00:00:00Z",
        source: "direct",
        skills: [
          { skillId: "s10", name: "Node.js" },
          { skillId: "s11", name: "PostgreSQL" },
        ],
      },
    },

    // 🔹 Missing jobType
    {
      bookmarkId: "160822d7-nojobtype",
      bookmarkedAt: "2026-02-15T11:20:00.000Z",
      job: {
        id: "job-no-type",
        title: "UI Designer",
        description: "Design modern interfaces.",
        location: "Remote",
        salary: "$70k-90k",
        jobType: null,
        companyName: "Creative Studio",
        sourceUrl: "https://example.com/job/ui",
        postedAt: "2024-01-18T00:00:00Z",
        source: "direct",
        skills: [
          { skillId: "s12", name: "Figma" },
          { skillId: "s13", name: "Design Systems" },
        ],
      },
    },

    // 🔹 Missing salary
    {
      bookmarkId: "270923e8-nosalary",
      bookmarkedAt: "2026-02-14T10:00:00.000Z",
      job: {
        id: "job-no-salary",
        title: "DevOps Engineer",
        description: "Manage CI/CD pipelines.",
        location: "Amsterdam, Netherlands",
        salary: null,
        jobType: "full-time",
        companyName: "CloudOps",
        sourceUrl: "https://example.com/job/devops",
        postedAt: "2024-01-22T00:00:00Z",
        source: "direct",
        skills: [
          { skillId: "s14", name: "Docker" },
          { skillId: "s15", name: "Kubernetes" },
          { skillId: "s16", name: "AWS" },
        ],
      },
    },

    // 🔹 Scraped minimal data
    {
      bookmarkId: "381024f9-scraped",
      bookmarkedAt: "2026-02-13T08:30:00.000Z",
      job: {
        id: "job-scraped-min",
        title: "Scraped Job 501",
        description: null,
        location: null,
        salary: null,
        jobType: null,
        companyName: "Unknown Company",
        sourceUrl: "https://job.com/501",
        postedAt: null,
        source: "scraped",
        skills: [],
      },
    },
  ],
};
