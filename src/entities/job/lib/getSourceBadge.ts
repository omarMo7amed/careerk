import { SOURCE_COLORS } from "./constant";

export function getSourceBadgeClass(source: string): string {
  return SOURCE_COLORS[source] || "bg-primary";
}
