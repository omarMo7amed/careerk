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
// Shared Utilities
export { useUserRole, useHasRole, getUserRole } from "./lib/useUserRole";
export type { UserRole } from "./lib/useUserRole";
export { cn } from "./lib/cn";
export { getProfileColor } from "./lib/getProfileColor";
export { getInitialsFromFullName } from "./lib/getInitialsFromFullName";

// Hooks
export { useClickOutside } from "./lib/useClickOutside";

// Fonts
export { InterFont, spaceGrotesk } from "./lib/fonts";
// Providers
export { QueryProvider } from "./providers/QueryProvider";

// Nav constants
export type { NavItem } from "./constant/dashboardNavItems";
export {
  companyNavItems,
  jobseekerNavItems,
} from "./constant/dashboardNavItems";
