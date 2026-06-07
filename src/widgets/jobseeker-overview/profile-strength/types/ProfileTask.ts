export type ProfileTask = {
  id: string;
  label: string;
  completed: boolean;
};
export interface ProfileStrengthData {
  hasProfile: boolean;
  profileImageUrl: string | null;
  hasLinkedIn: boolean;
  hasGithub: boolean;
  completionPercentage: number;
}
