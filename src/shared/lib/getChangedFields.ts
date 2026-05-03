export function getChangedFields<T extends object>(
  original: T,
  updated: Partial<T>,
): Partial<T> {
  return (Object.keys(updated) as (keyof T)[]).reduce((changes, key) => {
    if (updated[key] !== original[key]) {
      changes[key] = updated[key];
    }
    return changes;
  }, {} as Partial<T>);
}
