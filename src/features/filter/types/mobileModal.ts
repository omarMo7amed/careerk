import type { OptionShape } from "./filterItem";

export type MobileModalProps = {
  title: string;
  options: OptionShape[];
  selected: string[];
  onToggle: (value: string) => void;
  onClear: () => void;
  onClose: () => void;
  onSelectAll: () => void;
};
