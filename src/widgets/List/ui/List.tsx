import { CatalogListProps } from "../types/listProps";

export function List<T = unknown>({ items, renderItem }: CatalogListProps<T>) {
  return (
    <div className={`flex-1 p-4`}>
      <ul className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4`}>
        {items?.map((it, i) => renderItem(it, i))}
      </ul>
    </div>
  );
}
