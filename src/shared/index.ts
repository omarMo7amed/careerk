// Shared UI Components
export { Button } from "./ui/Button";
export { BackButton } from "./ui/BackButton";
export { DeleteButton } from "./ui/DeleteButton";
export { Badge } from "./ui/Badge";
export { Card } from "./ui/Card";
export { CardHeader } from "./ui/CardHeader";
export { DashboardHeader } from "./ui/DashboardHeader";
export { Divider } from "./ui/Divider";
export { FieldError } from "./ui/FieldError";
export { Label } from "./ui/Label";
export { Input } from "./ui/Input";
export { Select } from "./ui/Select";
export { Tabs } from "./ui/Tabs";
export { IconX } from "./ui/IconX";
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
export { capitalizeFirstLetter } from "./lib/capitalizeFirstLetter";

// Hooks
export { useClickOutside } from "./lib/useClickOutside";

// Fonts
export { InterFont, spaceGrotesk } from "./lib/fonts";
// Providers
export { QueryProvider } from "./providers/QueryProvider";
export {
  ThemeProvider,
  ThemeScript,
  useTheme,
} from "./providers/ThemeProvider";

// Constants (all grouped by domain — add new files to constant/index.ts)
export * from "./constant";

// Types
export type { AvailabilityStatus } from "./types/availabilityBadgeProps";
// Nav constants
export type { NavItem } from "./constant/dashboardNavItems";
export {
  companyNavItems,
  jobseekerNavItems,
} from "./constant/dashboardNavItems";

export { Error } from "./ui/Error";

export { iconMap, colorMap } from "./config/CardConfig";
export { Loader } from "./ui/Loader";
export { Empty } from "./ui/Empty";
export { AnimatedSidebar } from "./ui/AnimatedSidebar";
export { Toggle } from "./ui/Toggle";
export { Modal } from "./ui/Modal";
