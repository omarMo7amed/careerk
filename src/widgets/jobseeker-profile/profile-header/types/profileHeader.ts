export interface ProfileHeaderInfo {
  jobSeekerId: string;
  firstName: string;
  lastName: string;
  title: string;
  location: string;
  profileImageUrl: string | null;
  yearsOfExperience: number;
  cvEmail: string | null;
}

export interface ProfileHeaderProps {
  profileHeader: ProfileHeaderInfo;
  isOwner?: boolean;
}
