import type { EditingState } from "./profileStatusReducer";

export type ProfileStatusData = Omit<EditingState, "status">;

export interface ProfileStatusProps {
  profileStatus: ProfileStatusData | null;
  isOwner?: boolean;
}
