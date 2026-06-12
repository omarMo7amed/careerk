// Shared UI Components
export { AuthGuard } from "./ui/AuthGuard";
export { BackButton } from "./ui/BackButton";
export { Badge } from "./ui/Badge";
export { Banner } from "./ui/Banner";
export { Button } from "./ui/Button";
export { Card } from "./ui/Card";
export { CardHeader } from "./ui/CardHeader";
export { ConfirmationModal } from "./ui/ConfirmationModal";
export { DashboardHeader } from "./ui/DashboardHeader";
export { DeleteButton } from "./ui/DeleteButton";
export { Divider } from "./ui/Divider";
export { FieldError } from "./ui/FieldError";
export { FloatingShapes } from "./ui/FloatingShapes";
export { Input } from "./ui/Input";
export { Label } from "./ui/Label";
export { Pagination } from "./ui/Pagination";
export { RankingBadge } from "./ui/RankingBadge";
export { Select } from "./ui/Select";
export { Tabs } from "./ui/Tabs";
export { UserAvatar } from "./ui/UserAvatar";

// Shared lib functions
export { authInterceptor } from "./lib/authInterceptor";
export { capitalizeFirstLetter } from "./lib/capitalizeFirstLetter";
export { cn } from "./lib/cn";
export { formatDate, formatYear, getDuration } from "./lib/date";
export { getFilterKeyFromValue } from "./lib/getFilterKeyFromValue";
export { getInitialsFromFullName } from "./lib/getInitialsFromFullName";
export { getProfileColor } from "./lib/getProfileColor";
export { handleApiError } from "./lib/handleError";
export { parseMultiParam, setMultiParam } from "./lib/multiParams";

// Hooks
export { useClickOutside } from "./lib/useClickOutside";

// Fonts
export { InterFont, spaceGrotesk } from "./lib/fonts";
// Providers
export { QueryProvider } from "./providers/QueryProvider";
export { getPersistedRole, useAuthStore } from "./providers/useAuthStore";

// Constants (all grouped by domain — add new files to constant/index.ts)
export * from "./constant";

// Nav constants
export {
  companyNavItems,
  jobseekerNavItems
} from "./constant/dashboardNavItems";
export type { NavItem } from "./constant/dashboardNavItems";

export { Error } from "./ui/Error";
export { ErrorBoundary } from "./ui/ErrorBoundary";

export { colorMap, iconMap } from "./config/CardConfig";
export { AnimatedSidebar } from "./ui/AnimatedSidebar";
export { Empty } from "./ui/Empty";
export { Loader } from "./ui/Loader";
export { Modal } from "./ui/Modal";
export { Toggle } from "./ui/Toggle";

export { getChangedFields } from "./lib/getChangedFields";
export {
  normalizeMultiValues, normalizeValue, parsePositiveInt
} from "./lib/NormalizeValues";

// API
export { refreshToken } from "./api/refreshToken";

// Types
export type * from "./types/auth";
