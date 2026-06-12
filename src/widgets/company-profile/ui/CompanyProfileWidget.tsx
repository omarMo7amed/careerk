"use client";

import { AboutUsCard } from "./AboutUsCard";
import { LinksCard } from "./LinksCard";
import { useCompanyProfileQuery } from "@/entities/company";
import { ProfileHeader } from "./ProfileHeader";
import { BenefitsCard } from "./BenefitsCard";
import { KeyInformationCard } from "./KeyInformationCard";
import { Loader } from "@/shared";
import { NotFound } from "@/features/search";

interface CompanyProfileWidgetProps {
  isOwner?: boolean;
}

export function CompanyProfileWidget({
  isOwner = false,
}: CompanyProfileWidgetProps) {
  const { company, isLoading, error } = useCompanyProfileQuery();

  if (isLoading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Something went wrong</h2>
          <p className="text-text-secondary mt-2">
            Failed to load profile. Please try again.
          </p>
        </div>
      </div>
    );
  }
  if (!company) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <NotFound message="No Profile found yet." />
      </div>
    );
  }

  const headerInfo = {
    name: company.name,
    type: company.type,
    logoUrl: company.logoUrl,
  };
  const profileInfo = {
    description: company.description,
    websiteUrl: company.websiteUrl,
    phone: company.phone,
    size: company.size,
    headquartersLocation: company.headquartersLocation,
    foundedYear: company.foundedYear,
    industry: company.industry,
    benefits: company.benefits,
  };
  const links = {
    linkedIn: company.linkedIn,
    facebook: company.facebook,
    twitter: company.twitter,
  };
  return (
    <div className="-my-7 mx-auto flex flex-col gap-5">
      {/* Header */}
      <ProfileHeader
        id={company.id}
        headerInfo={headerInfo}
        isOwner={isOwner}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
        {/* Left column */}
        <div className="col-span-2 flex flex-col gap-5">
          <AboutUsCard
            description={profileInfo.description}
            isOwner={isOwner}
          />
          <BenefitsCard benefits={profileInfo.benefits} isOwner={isOwner} />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          <KeyInformationCard
            industry={profileInfo.industry}
            size={profileInfo.size}
            headquarters={profileInfo.headquartersLocation}
            foundedYear={profileInfo.foundedYear}
            isOwner={isOwner}
          />
          <LinksCard links={links} isOwner={isOwner} />
        </div>
      </div>
    </div>
  );
}
