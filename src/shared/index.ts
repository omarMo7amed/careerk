// Shared UI Components
export { Button } from "./ui/Button";
export { Badge } from "./ui/Badge";
export { IconX } from "./ui/IconX";
export { Input } from "./ui/Input";
export { ConfirmationModal } from "./ui/ConfirmationModal";

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
