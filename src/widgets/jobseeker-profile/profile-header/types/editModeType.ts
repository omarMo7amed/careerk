export interface EditingModeProps {
  fullName: string;
  title: string;
  location: string;
  isPending: boolean;
  onChangeTitle: (value: string) => void;
  onChangeLocation: (value: string) => void;
  onChangeFullName: (value: string) => void;
  onSave: () => void;
  onCancel: () => void;
}
