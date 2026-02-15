import type { OptionShape } from "./filterItem";

export type FilterListProps = {
  options: OptionShape[];
  selected: string[];
  onToggle: (value: string) => void;
  className?: string;
  maxHeightClass?: string;
};
