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

const ROOT = "job-seeker-me";

const me = {
  all: [ROOT],
  base: [ROOT, "base"],
  profile: [ROOT, "profile"],
  educations: [ROOT, "educations"],
  workExperiences: [ROOT, "workExperiences"],
  skills: [ROOT, "skills"],
};

const byId = (id: string) => ({
  all: [ROOT, id],
  base: [ROOT, id, "base"],
  profile: [ROOT, id, "profile"],
  educations: [ROOT, id, "educations"],
  workExperiences: [ROOT, id, "workExperiences"],
  skills: [ROOT, id, "skills"],
});

export const jobSeekerKeys = { me, byId };
