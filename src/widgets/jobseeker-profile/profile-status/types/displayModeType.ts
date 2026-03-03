import { EditingState } from "./profileStatusReducer";

export interface DisplayModeProps {
  profileStatus: Omit<EditingState, "status">;
  isOwner?: boolean;
  onEdit?: () => void;
}
