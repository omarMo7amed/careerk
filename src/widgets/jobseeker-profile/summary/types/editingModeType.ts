export interface EditingModeProps {
  value: string;
  isPending: boolean;
  onChange: (val: string) => void;
  onSave: () => void;
  onCancel: () => void;
}