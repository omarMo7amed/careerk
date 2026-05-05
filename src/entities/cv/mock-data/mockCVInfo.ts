import type { CVParseResponse } from "../types/cvParseResponse";

export const mockCVParseResponse: CVParseResponse = {
  status: "COMPLETED",
  parseResultId: "9968ae8c-e8f4-4d36-a17a-79215cca669c",
  firstName: "Amr",
  lastName: "Ashraf Mubarak",
  profileImageUrl: null,
  profile: {
    jobSeekerId: "a9ff20fb-8010-4a22-8873-344c103726af",
    title: "Software Engineer",
    location: "Egypt",
    availabilityStatus: "OPEN_TO_WORK",
    workPreference: "REMOTE",
    preferredJobTypes: [],
    yearsOfExperience: 0.3,
    linkedinUrl: "linkedin.com/in/amramubarak",
    portfolioUrl: null,
    githubUrl: "github.com/amrrdev",
    cvEmail: "amrrdev@gmail.com",
    noticePeriod: null,
    phone: "+20 120 456 2326",
    expectedSalary: null,
    summary:
      "Software Engineer with 1+ year of experience building scalable microservices and full-stack applications. Proficient in TypeScript, Node.js, and NestJS.",
    cvScore: null,
    cvMatchPercentage: null,
    cvUrl: null,
  },
  educations: [
    {
      degreeType: "BACHELOR",
      description: "",
      institutionName: "Benha University",
      isCurrent: false,
      fieldOfStudy: "Science in Computer Science",
      endDate: "2026-01-01",
      gpa: 3.6,
      startDate: "2022-01-01",
    },
  ],
  workExperiences: [
    {
      companyName: "Linux Foundation Decentralized Trust",
      description:
        "Developed a testing strategy for a decentralized trust solution. Implemented automated tests and CI/CD pipelines.",
      isCurrent: false,
      startDate: "2025-05-01",
      jobTitle: "Software Engineer",
      location: "Remote",
      endDate: "2025-07-01",
    },
  ],
  skills: [
    { name: "typescript", verified: true },
    { name: "node.js", verified: true },
    { name: "nestjs", verified: true },
  ],
  processingTime: 952,
};
