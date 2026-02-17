import type { OptionShape } from "./filterItem";

export type UseTableOfOperationOptions = {
  options: string[] | OptionShape[];
  selected?: string[];
  onChange?: (selected: string[]) => void;
};
