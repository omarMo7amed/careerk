import { Badge } from "@/shared/ui/Badge";
import { cn } from "@/shared";

import { CompanyHeader } from "../components/CompanyHeader";
import { CompanyInfo } from "../components/CompanyInfo";
import { CompanyCard as CompanyCardType } from "../types/company";

interface CompanyCardProps {
  company: CompanyCardType;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-white rounded-2xl border border-gray-200",
        "p-6 hover:shadow-2xl hover:border-primary/20 transition-all duration-300",
        "hover:-translate-y-2 h-full flex flex-col",
      )}
    >
      <CompanyHeader
        logo={company.logo}
        name={company.name}
        website={company.website}
      />

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {company.description}
      </p>

      <div className="mb-3">
        <Badge
          className="bg-primary/10 text-primary border-primary/20 font-semibold"
          size="sm"
        >
          {company.industry}
        </Badge>
      </div>

      <CompanyInfo
        location={company.location}
        size={company.size}
        foundedYear={company.founded_year}
      />
    </div>
  );
}
