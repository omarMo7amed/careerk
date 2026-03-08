import { LucideIcon } from "lucide-react";

type DashboardHeaderProps = {
  Icon: LucideIcon;
  header: string;
  description?: string;
};

export function DashboardHeader({
  Icon,
  header,
  description,
}: DashboardHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-bold ">{header}</h3>
      </div>
      <p className="text-sm text-text-secondary">{description}</p>
    </div>
  );
}
