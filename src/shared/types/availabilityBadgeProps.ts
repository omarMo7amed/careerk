export type AvailabilityStatus =
  | "Available"
  | "Not Available"
  | "Open to Offers";

export type AvailabilityBadgeProps = {
  status: AvailabilityStatus;
  className?: string;
};
