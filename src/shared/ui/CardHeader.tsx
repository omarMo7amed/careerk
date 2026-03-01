import { cn } from "../lib/cn";

type CardHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function CardHeader({
  title,
  description,
  className = "",
}: CardHeaderProps) {
  return (
    <div className={cn("mb-6", className)}>
      <h1 className="text-lg font-bold mb-2">{title}</h1>

      {description && (
        <p className="text-sm text-text-secondary">{description}</p>
      )}
    </div>
  );
}
