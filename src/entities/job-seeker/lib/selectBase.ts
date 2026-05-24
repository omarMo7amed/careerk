import { JobSeeker } from "../types/jobSeeker";

export const selectBase = (data: {
  data?: Pick<JobSeeker, "firstName" | "lastName" | "profileImageUrl">;
}) => ({
  firstName: data.data?.firstName,
  lastName: data.data?.lastName,
  profileImageUrl: data.data?.profileImageUrl,
});
