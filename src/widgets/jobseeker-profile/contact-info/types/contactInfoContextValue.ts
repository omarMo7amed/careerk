import { ContactInfoData } from "./contactInfoProps";

export type ContactInfoFieldKey = "phone" | "email" | "location";

export interface ContactInfoContextValue {
  contactInfo: ContactInfoData;
  isOwner: boolean;

  editing: boolean;
  startEdit: () => void;
  cancelEdit: () => void;

  state: Record<ContactInfoFieldKey, string>;
  setField: (key: ContactInfoFieldKey, value: string) => void;

  isPending: boolean;
  handleSave: () => void;
}
