import { Badge } from "@/shared/ui/Badge";
import { cn } from "@/shared";
import { Linkedin, Facebook, Twitter, Gift } from "lucide-react";
import Link from "next/link";

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
        "group relative bg-bg-surface rounded-xl border border-border",
        "p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300",
        "hover:-translate-y-2 h-full flex flex-col",
      )}
    >
      <CompanyHeader
        logo={company.logoUrl}
        name={company.name}
        website={company.websiteUrl}
      />

      {company.description && (
        <p className="text-text-secondary inline text-sm line-clamp-4 mb-4 ">
          {company.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-3">
        <Badge
          className="bg-primary/10 text-primary border-primary/20 font-semibold"
          size="sm"
        >
          {company.industry}
        </Badge>
        {company.type && (
          <Badge
            className="bg-secondary/10 text-secondary border-secondary/20 font-semibold"
            size="sm"
          >
            {company.type}
          </Badge>
        )}
      </div>

      <CompanyInfo
        location={company.headquartersLocation}
        size={company.size}
        foundedYear={company.foundedYear}
      />

      {company.benefits && (
        <div className="flex items-start gap-2 text-sm text-text-secondary pt-3 border-t  border-border/50 mt-auto">
          <Gift className="w-4 h-4 mt-0.5 shrink-0 opacity-60" />
          <span className="font-medium break-all line-clamp-4">
            {company.benefits}
          </span>
        </div>
      )}

      {(company.linkedIn || company.facebook || company.twitter) && (
        <div className="flex items-center gap-3 pt-3 mt-3 border-t border-border/50">
          {company.linkedIn && (
            <Link
              href={company.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-[#0A66C2] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
          )}
          {company.facebook && (
            <Link
              href={company.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-[#1877F2] transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </Link>
          )}
          {company.twitter && (
            <Link
              href={company.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-[#1DA1F2] transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
