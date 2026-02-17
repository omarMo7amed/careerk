import { CatalogListProps } from "../types/listProps";

export function List<T = unknown>({
  items,
  renderItem,
  columnsInLarge = 3,
  columnsInMedium = 2,
  columnsInSmall = 1,
}: CatalogListProps<T>) {
  return (
    <div>
      <ul
        className={`grid grid-cols-${columnsInSmall} md:grid-cols-${columnsInMedium} lg:grid-cols-${columnsInLarge} gap-4`}
      >
        {items?.map((it, i) => renderItem(it, i))}
      </ul>
    </div>
  );
}
