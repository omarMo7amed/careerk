export function getFilterKeyFromValue(values: string[]): string[] {
  const filterKeys: string[] = [];
  for (const value of values) {
    filterKeys.push(value.split(" ").join("_").toUpperCase());
  }

  return filterKeys;
}
