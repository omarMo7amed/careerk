export function parsePositiveInt(value: string | null, fallback: number) {
  const num = Number(value);
  return Number.isInteger(num) && num > 0 ? num : fallback;
}

export function normalizeValue(value: string | null) {
  return (value ?? "").trim().toLowerCase();
}

export function normalizeMultiValues(values: string[]) {
  return values.map((value) => value.trim().toLowerCase()).filter(Boolean);
}
