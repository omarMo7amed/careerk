import { SOURCE_COLORS } from "../config/config";

export function getSourceBadgeClass(source: string): string {
  return SOURCE_COLORS[source] || "bg-primary";
}
