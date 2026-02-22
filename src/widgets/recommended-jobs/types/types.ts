export type DynamicTab = {
  key: string;
  label: string;
  count: number;
};

export type Props = {
  tabs: DynamicTab[];
  active: string;
  onChange: (key: string) => void;
};
