export type {
  JobSeeker,
  JobSeekerBase,
  JobSeekerProfile,
  WorkPreference,
  JobType,
  ExperienceLevel,
} from "./types/jobSeeker";

export { jobSeekerKeys } from "./lib/queryKeys";

// API functions
export { getMe } from "./api/getMe";
export { getJobSeekerById } from "./api/getJobSeekerById";
export { uploadProfilePhoto } from "./api/uploadProfilePhoto";

//  Query hooks
export { useJobSeekerQuery } from "./model/useJobSeekerQuery";
export { useJobSeekerBaseQuery } from "./model/useJobSeekerBaseQuery";

//  Mutation hooks
export { useUpdateProfilePhoto } from "./model/useUpdateProfilePhoto";
export { useUpdateProfile } from "./model/useUpdateProfile";

//  Misc
export { WORK_PREFERENCE_LABELS, JOB_TYPE_LABELS } from "./lib/labels";

//  Candidate (company-facing view of a job seeker)
export type { Candidate } from "./types/candidate";
export { CandidateCard } from "./ui/CandidateCard";
export { useCandidatesQuery } from "./model/useCandidatesQuery";
export { useCandidateByIdQuery } from "./model/useCandidateByIdQuery";

export { CandidateHeader } from "./components/CandidateHeader";
export { CandidateMetaItem } from "./components/CandidateMetaItem";
export { CandidateSocialLinks } from "./components/CandidateSocialLinks";
export { ViewProfile } from "./components/ViewProfile";
export { ContactButton } from "./components/ContactButton";
export { DownloadButton } from "./components/DownloadButton";
export { default as CandidateSkills } from "./components/Skills";
