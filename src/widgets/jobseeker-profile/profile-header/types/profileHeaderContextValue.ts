import { ProfileHeaderInfo } from "./profileHeader";

export interface ProfileHeaderContextValue {
  profileHeader: ProfileHeaderInfo;
  isOwner: boolean;
  fullName: string;
  editing: boolean;
  editFullName: string;
  editTitle: string;
  editLocation: string;
  isPending: boolean;
  startEdit: () => void;
  cancelEdit: () => void;
  setField: (field: "fullName" | "title" | "location", value: string) => void;
  handleSave: () => void;
}
