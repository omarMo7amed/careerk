export type OptionShape = { label: string; value: string; count?: number };

export type FilterItemProps = {
  opt: OptionShape;
  checked: boolean;
  onToggle: (value: string) => void;
};
