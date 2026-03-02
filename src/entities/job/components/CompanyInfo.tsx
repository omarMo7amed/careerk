import { cn } from "@/shared";

interface CompanyInfoProps {
  companyName: string;
  category?: string;
  size?: "sm" | "md" | "lg";
}

export function CompanyInfo({
  companyName,
  category,
  size = "md",
}: CompanyInfoProps) {
  return (
    <div>
      <h3
        className={cn(
          size === "sm" && "text-xs text-text-secondary",
          size === "md" && "text-sm text-text-secondary",
          size === "lg" && "text-xl text-text-muted font-bold",
        )}
      >
        {companyName}
      </h3>
      {category && (
        <p
          className={cn(
            "text-text-secondary",
            size === "sm" && "text-xs",
            size === "md" && "text-xs",
            size === "lg" && "text-sm",
          )}
        >
          {category}
        </p>
      )}
    </div>
  );
}
