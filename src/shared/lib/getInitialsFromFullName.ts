const MAX_INITIALS = 2;
export function getInitialsFromFullName(name: string | null): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);

  const initials = parts
    .filter(Boolean)
    .slice(0, MAX_INITIALS)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

  return initials;
}
