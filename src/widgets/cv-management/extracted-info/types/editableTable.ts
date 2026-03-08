import { LucideIcon } from "lucide-react";

export type EditableRowProps = {
  fieldKey: string;
  label: string;
  Icon: LucideIcon;
  isLink?: boolean;
  handleChange: (key: string, value: string) => void;
  confirmed: boolean;
  value: string | number;
  isEven: boolean;
};
