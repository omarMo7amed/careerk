import type { OptionShape } from "./filterItem";

export type TableOfOperationProps = {
  title: string;
  options: string[] | OptionShape[];
  selected?: string[];
  onChange?: (selected: string[]) => void;
  asDropdown?: boolean;
};
