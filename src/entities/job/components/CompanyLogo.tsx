import Image from "next/image";
import { cn } from "@/shared";

interface CompanyLogoProps {
  logo?: string;
  companyName: string;
}

export function CompanyLogo({ logo, companyName }: CompanyLogoProps) {
  return (
    <div className="mb-4">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden bg-bg-muted">
        {logo ? (
          <Image
            src={logo}
            alt={companyName}
            width={40}
            height={40}
            className="object-contain"
          />
        ) : (
          <div
            className={cn(
              "w-10 h-10 flex items-center justify-center text-2xl font-bold text-text-muted",
            )}
          >
            {companyName.charAt(0)}
          </div>
        )}
      </div>
    </div>
  );
}
