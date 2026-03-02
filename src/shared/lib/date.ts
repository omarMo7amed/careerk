export function formatDate(dateStr: string | null): string {
  if (!dateStr) return "Present";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function getDuration(start: string, end: string | null): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years}y`);
  if (rem > 0) parts.push(`${rem}mo`);
  return parts.join(" ") || "< 1mo";
}

export function formatYear(dateStr: string | null): string {
  if (!dateStr) return "Present";
  return new Date(dateStr).getFullYear().toString();
}
