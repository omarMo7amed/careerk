/**
 * this my fucking idea that took the fucking soul out of me
 *
 *
 *  - "me"  → own profile (authenticated user)
 *  - byId  → public / recruiter view of any job-seeker
 *
 * Cache shape:
 *  ["job-seeker", "me", "base"]              → { firstName, lastName, avatarUrl, … }
 *  ["job-seeker", "me", "profile"]           → JobSeekerProfile
 *  ["job-seeker", "me", "educations"]        → Education[]
 *  ["job-seeker", "me", "workExperiences"]  → WorkExperience[]
 *  ["job-seeker", "me", "skills"]            → JobSeekerSkill[]
 *
 *  ["job-seeker", <id>, "base"]              → (same slices, public read)
 *  ["job-seeker", <id>, "profile"]
 *  …
 */

const ROOT = "job-seeker" as const;

const me = {
  all: [ROOT, "me"] as const,
  base: [ROOT, "me", "base"] as const,
  profile: [ROOT, "me", "profile"] as const,
  educations: [ROOT, "me", "educations"] as const,
  workExperiences: [ROOT, "me", "workExperiences"] as const,
  skills: [ROOT, "me", "skills"] as const,
} as const;

const byId = (id: string) =>
  ({
    all: [ROOT, id] as const,
    base: [ROOT, id, "base"] as const,
    profile: [ROOT, id, "profile"] as const,
    educations: [ROOT, id, "educations"] as const,
    workExperiences: [ROOT, id, "workExperiences"] as const,
    skills: [ROOT, id, "skills"] as const,
  }) as const;

export const jobSeekerKeys = { me, byId } as const;
