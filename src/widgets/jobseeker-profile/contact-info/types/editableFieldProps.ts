export interface EditableFieldProps {
  label: string;
  icon: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  set: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}
