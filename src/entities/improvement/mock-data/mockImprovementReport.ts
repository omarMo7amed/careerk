import type { ImprovementReport } from "../types/types";

export const mockImprovementReport: ImprovementReport = {
  id: 1,
  targetRole: "Senior Frontend Developer",
  description:
    "Your CV demonstrates solid React and TypeScript experience. With a few targeted improvements you can significantly increase your match rate for senior roles.",
  status: "COMPLETED",
  cvScore: 78,
  strengths: [
    "Strong TypeScript and React expertise",
    "Experience with modern state management (Redux, Zustand)",
    "Solid understanding of Next.js and server-side rendering",
    "Good portfolio of shipped production products",
  ],
  gaps: [
    {
      skill: "GraphQL",
      importance: "high",
      suggestion:
        "Complete a GraphQL course and integrate it in a side project alongside REST APIs",
    },
    {
      skill: "Testing (Jest / RTL)",
      importance: "high",
      suggestion:
        "Add unit and integration tests to your existing projects and highlight test coverage",
    },
    {
      skill: "Docker / CI-CD",
      importance: "medium",
      suggestion:
        "Set up a basic Docker workflow and GitHub Actions pipeline for one of your public repos",
    },
    {
      skill: "Accessibility (a11y)",
      importance: "low",
      suggestion:
        "Run Lighthouse audits on your portfolio and remediate WCAG 2.1 AA violations",
    },
  ],
  recommendations: [
    "Add measurable achievements to each role (e.g. 'reduced bundle size by 40%')",
    "Include a dedicated skills section with proficiency levels or years of experience",
    "Tailor your professional summary to the specific role you are applying for",
    "Quantify project impact with concrete metrics wherever possible",
    "Contribute to open-source projects to demonstrate collaboration at scale",
  ],
  createdAt: new Date().toISOString(),
  completedAt: new Date().toISOString(),
};
