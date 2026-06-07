export type {
  JobSeeker,
  JobSeekerBase,
  JobSeekerProfile,
} from "./types/jobSeeker";

export type { AvailabilityStatus } from "./types/availabilityStatus";

export { jobSeekerKeys } from "./lib/queryKeys";

// API functions
export { getMe } from "./api/getMe";
export { getCandidateById } from "./api/getCandidateById";
export { uploadProfilePhoto } from "./api/uploadProfilePhoto";
export { getOverview } from "./api/getOverview";
export type {
  OverviewData,
  OverviewSuccessResponse,
  OverviewErrorResponse,
  OverviewResponse,
} from "./types/overview";
//  Query hooks
export { useMyProfileQuery } from "./model/useProfile";
export {
  useBaseProfile,
  useProfileDetails,
  useEducations,
  useWorkExperiences,
  useSkills,
} from "./model/useProfile";
export { useOverview } from "./model/useOverview";
//  Mutation hooks
export { useUpdateProfilePhoto } from "./model/useUpdateProfilePhoto";
export { useUpdateProfile } from "./model/useUpdateProfile";

//  Misc
export {
  WORK_PREFERENCE_LABELS,
  AVAILABILITY_STATUS_LABELS,
} from "./lib/labels";

//  Candidate (company-facing view of a job seeker)
export { CandidateCard } from "./ui/CandidateCard";
export { useCandidatesQuery } from "./model/useCandidatesQuery";
export { useCandidateByIdQuery } from "./model/useCandidateByIdQuery";

export { CandidateHeader } from "./components/CandidateHeader";
export { CandidateMetaItem } from "./components/CandidateMetaItem";
export { CandidateSocialLinks } from "./components/CandidateSocialLinks";
export { ViewProfile } from "./components/ViewProfile";
export { ContactButton } from "./components/ContactButton";
export { default as CandidateSkills } from "./components/Skills";

//  Mock data (for development/testing)
export { allJobSeekers } from "./mock-data/allJobSeekers";
export { mockJobSeeker } from "./mock-data/jobSeeker";
