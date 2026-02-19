import { ReactNode } from "react";

type RenderFn<T> = (item: T, index: number) => ReactNode;

export type CatalogListProps<T = unknown> = {
  items?: T[];
  renderItem: RenderFn<T>;
  columnsInLarge?: number;
  columnsInMedium?: number;
  columnsInSmall?: number;
};
