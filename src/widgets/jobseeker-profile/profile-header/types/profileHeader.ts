export interface ProfileHeaderInfo {
  jobSeekerId: string;
  firstName: string;
  lastName: string;
  title: string;
  location: string;
  avatarUrl: string | null;
  yearsOfExperience: number;
  cvUrl: string | null;
}

export interface ProfileHeaderProps {
  profileHeader: ProfileHeaderInfo;
  isOwner?: boolean;
}
