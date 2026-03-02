import { cn } from "@/shared";
import { CatalogListProps } from "../types/listProps";
import { gridColsMap, lgGridColsMap, mdGridColsMap } from "../lib/constant";
// solve

export function List<T = unknown>({
  items,
  renderItem,
  columnsInLarge = 3,
  columnsInMedium = 2,
  columnsInSmall = 1,
}: CatalogListProps<T>) {
  const smCols = gridColsMap[columnsInSmall] ?? "grid-cols-1";
  const mdCols = mdGridColsMap[columnsInMedium] ?? "md:grid-cols-2";
  const lgCols = lgGridColsMap[columnsInLarge] ?? "lg:grid-cols-3";

  return (
    <div>
      <ul className={cn("grid", smCols, mdCols, lgCols, "gap-4")}>
        {items?.map((it, i) => renderItem(it, i))}
      </ul>
    </div>
  );
}
