export function parseMultiParam(searchParams: URLSearchParams, key: string) {
  return searchParams
    .getAll(key)
    .map((value) => value.trim())
    .filter(Boolean);
}

export function setMultiParam(
  params: URLSearchParams,
  key: string,
  values: string[],
) {
  params.delete(key);
  for (const value of values) {
    params.append(key, value);
  }
}
