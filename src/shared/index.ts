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
// Shared Utilities
export { useUserRole, useHasRole, getUserRole } from "./lib/useUserRole";
export type { UserRole } from "./lib/useUserRole";
export { cn } from "./lib/cn";
export { getProfileColor } from "./lib/getProfileColor";
export { getInitialsFromFullName } from "./lib/getInitialsFromFullName";
export { capitalizeFirstLetter } from "./lib/capitalizeFirstLetter";

// Hooks
export { useClickOutside } from "./lib/useClickOutside";

// Fonts
export { InterFont, spaceGrotesk } from "./lib/fonts";
// Providers
export { QueryProvider } from "./providers/QueryProvider";
