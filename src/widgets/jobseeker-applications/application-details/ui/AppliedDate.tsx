import { format } from "date-fns";

interface AppliedDateProps {
  date: string;
}

export function AppliedDate({ date }: AppliedDateProps) {
  return (
    <div className="flex justify-between items-center flex-wrap">
      <p className="text-sm text-text-secondary mb-2">APPLIED ON</p>
      <p className="font-medium">{format(new Date(date), "MMMM dd, yyyy")}</p>
    </div>
  );
}
