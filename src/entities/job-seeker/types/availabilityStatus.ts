export type AvailabilityStatus =
  | "OPEN_TO_WORK"
  | "NOT_LOOKING"
  | "PASSIVELY_LOOKING";

export type AvailabilityBadgeProps = {
  status: AvailabilityStatus;
  className?: string;
};
