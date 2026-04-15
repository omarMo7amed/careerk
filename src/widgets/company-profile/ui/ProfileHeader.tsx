import { companyTypeLabels } from "@/entities/company-profile";
import { CompanyType } from "@/entities/company-profile";
import { Banner } from "@/shared";
import { Pencil } from "lucide-react";
import Image from "next/image";

type ProfileHeaderProps = {
  isOwner: boolean;
  headerInfo: {
    name?: string;
    type?: CompanyType;
    logoUrl?: string;
  };
};

export function ProfileHeader({ isOwner, headerInfo }: ProfileHeaderProps) {
  const { name, type, logoUrl } = headerInfo;
  return (
    <div>
      <div className="rounded-b-lg overflow-hidden shadow-sm border border-border">
        {/* Banner */}
        <Banner />

        <div className="bg-bg-surface px-6 pb-4 flex flex-col sm:flex-row items-baseline  gap-4">
          {/* Avatar */}
          <div className="-mt-4 shrink-0">
            <div className="relative w-24 h-24 rounded-full ring-4 ring-bg-surface overflow-hidden group">
              {/* {logoUrl ? (
                  <Image
                    src={logoUrl}
                    alt="img"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-white select-none bg-primary">
                    d
                  </div>
                )} */}
              <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-white select-none bg-primary">
                d
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">{name}</span>
              {isOwner && (
                <button
                  // onClick={startEdit}
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  <Pencil className="w-4 h-4" />
                </button>
              )}
            </div>
            <p className="text-text-secondary text-sm">
              {type && companyTypeLabels[type]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
