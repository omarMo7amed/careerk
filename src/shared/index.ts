// Shared UI Components
export { Button } from "./ui/Button";
export { Badge } from "./ui/Badge";
export { IconX } from "./ui/IconX";
export { Input } from "./ui/Input";
export { ConfirmationModal } from "./ui/ConfirmationModal";
export { UserAvatar } from "./ui/UserAvatar";
export { AvailabilityBadge } from "./ui/AvailabilityBadge";
export { RankingBadge } from "./ui/RankingBadge";
export { Pagination } from "./ui/Pagination";
export { Banner } from "./ui/Banner";
// Shared lib functions
export { useUserRole, useHasRole, getUserRole } from "./lib/useUserRole";
export type { UserRole } from "./lib/useUserRole";
export { cn } from "./lib/cn";
export { getProfileColor } from "./lib/getProfileColor";
export { getInitialsFromFullName } from "./lib/getInitialsFromFullName";
export { getDuration, formatDate, formatYear } from "./lib/date";

// Hooks
export { useClickOutside } from "./lib/useClickOutside";

// Fonts
export { InterFont, spaceGrotesk } from "./lib/fonts";
// Providers
export { QueryProvider } from "./providers/QueryProvider";

// Constants (all grouped by domain — add new files to constant/index.ts)
export * from "./constant";

// Types
export type { AvailabilityStatus } from "./types/availabilityBadgeProps";
