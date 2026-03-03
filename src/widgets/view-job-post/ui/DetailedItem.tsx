import { Badge } from "@/shared";

export function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | null;
}) {
  return (
    <div className="flex items-start gap-3">
      <Badge
        variant="info"
        className="min-w-10 min-h-10 rounded-lg items-center justify-center border-none"
      >
        {icon}
      </Badge>
      <div>
        <p className="text-sm text-text-secondary mb-1">{label}</p>
        <p className="font-medium">
          {value ?? <span className="italic">Not specified</span>}
        </p>
      </div>
    </div>
  );
}
