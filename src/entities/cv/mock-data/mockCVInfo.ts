import type { CVInfo } from "../types/cvInfo";

export const mockCVInfo: CVInfo = {
  personalInfo: {
    cvEmail: "john.doe@example.com",
    phone: "+1 555-123-4567",
    location: "San Francisco, CA",
    linkedinUrl: "https://linkedin.com/in/johndoe",
    githubUrl: "https://github.com/johndoe",
    portfolioUrl: "https://johndoe.dev",
    yearsOfExperience: 5,
  },
  title: "Senior Frontend Developer",
  summary:
    "Experienced frontend developer with 5+ years building high-performance web applications using React, TypeScript, and Next.js. Passionate about clean code, great UX, and continuous improvement.",
  experience: [
    {
      jobTitle: "Senior Frontend Developer",
      companyName: "TechCorp Inc.",
      location: "San Francisco, CA",
      startDate: "2022-01-01",
      endDate: null,
      isCurrent: true,
      description:
        "Led development of a customer-facing dashboard serving 50k+ users. Reduced page load time by 40% through code splitting and lazy loading.",
    },
    {
      jobTitle: "Frontend Developer",
      companyName: "StartupXYZ",
      location: "Remote",
      startDate: "2019-06-01",
      endDate: "2021-12-31",
      isCurrent: false,
      description:
        "Built and maintained React applications. Collaborated with designers to deliver pixel-perfect UI components.",
    },
  ],
  education: [
    {
      institutionName: "University of California, Berkeley",
      degreeType: "bachelor",
      fieldOfStudy: "Computer Science",
      startDate: "2015-09-01",
      endDate: "2019-05-31",
      isCurrent: false,
      gpa: 3.7,
      description: "",
    },
  ],
  skills: [
    { name: "React", verified: true },
    { name: "TypeScript", verified: true },
    { name: "Next.js", verified: true },
    { name: "TailwindCSS", verified: false },
    { name: "Node.js", verified: false },
    { name: "PostgreSQL", verified: false },
  ],
};
