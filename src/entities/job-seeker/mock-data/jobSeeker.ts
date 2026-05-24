import { JobSeeker } from "../types/jobSeeker";

export const mockJobSeeker: JobSeeker = {
  firstName: "Alex",
  lastName: "Johnson",
  profileImageUrl: null,
  profile: {
    jobSeekerId: "js-001",
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    availabilityStatus: "OPEN_TO_WORK",
    workPreference: "HYBRID",
    preferredJobTypes: ["FULL_TIME", "CONTRACT"],
    yearsOfExperience: 5,
    linkedinUrl: "https://linkedin.com/in/alexjohnson",
    portfolioUrl: "https://alexjohnson.dev",
    githubUrl: "https://github.com/alexjohnson",
    cvEmail: "alex.johnson@email.com",
    email: "alex.johnson@email.com",
    noticePeriod: "2 weeks",
    phone: "+1 (555) 123-4567",
    expectedSalary: 120000,
    summary:
      "Passionate frontend developer with 5+ years of experience building scalable web applications. Specialized in React, TypeScript, and modern CSS frameworks. I enjoy crafting clean, accessible, and performant user interfaces.",
    cvScore: null,
    cvMatchPercentage: null,
    cvUrl: null,
  },
  educations: [
    {
      id: "edu-001",
      degreeType: "bachelor",
      description:
        "Focused on algorithms, data structures, and software engineering principles.",
      institutionName: "University of California, Berkeley",
      isCurrent: false,
      fieldOfStudy: "Computer Science",
      endDate: "2019-05-15",
      gpa: 3.8,
      startDate: "2015-09-01",
    },
  ],
  workExperiences: [
    {
      companyName: "TechCorp Inc.",
      description:
        "Led the development of the main customer-facing dashboard using React and TypeScript. Improved performance by 40% through code splitting and lazy loading.",
      isCurrent: true,
      startDate: "2021-03-01",
      jobTitle: "Senior Frontend Developer",
      location: "San Francisco, CA",
      endDate: null,
    },
    {
      companyName: "StartupXYZ",
      description:
        "Built responsive web applications and collaborated closely with design teams to deliver pixel-perfect UI components.",
      isCurrent: false,
      startDate: "2019-06-01",
      jobTitle: "Frontend Developer",
      location: "Remote",
      endDate: "2021-02-28",
    },
  ],
  skills: [
    { skillId: "skill-001", name: "React", verified: true },
    { skillId: "skill-002", name: "TypeScript", verified: true },
    { skillId: "skill-003", name: "Next.js", verified: true },
    { skillId: "skill-004", name: "Tailwind CSS", verified: false },
    { skillId: "skill-005", name: "GraphQL", verified: false },
    { skillId: "skill-006", name: "Node.js", verified: false },
  ],
};
