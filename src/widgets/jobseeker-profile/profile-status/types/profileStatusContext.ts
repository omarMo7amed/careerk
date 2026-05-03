import { ProfileStatusData } from "./profileStatus";
import { EditingState } from "./profileStatusReducer";

export interface ProfileStatusContextValue {
  isOwner: boolean;
  isPending: boolean;

  editing: boolean;
  startEdit: () => void;
  cancelEdit: () => void;
  handleSave: () => void;

  viewProfileStatus: ProfileStatusData;

  state:
    | { status: "idle" }
    | (EditingState & {
        status: "editing";
      });
  setField: <K extends keyof ProfileStatusData>(
    field: K,
    value: ProfileStatusData[K],
  ) => void;
  onToggleJobType: (
    type: ProfileStatusData["preferredJobTypes"][number],
  ) => void;
}

export interface ProfileStatusProviderProps {
  isOwner?: boolean;
  children: React.ReactNode;
}
