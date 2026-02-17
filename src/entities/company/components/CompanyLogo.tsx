import Image from "next/image";

interface CompanyLogoProps {
  logo?: string;
  name: string;
}

export function CompanyLogo({ logo, name }: CompanyLogoProps) {
  return (
    <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center p-2 border border-gray-200 flex-shrink-0">
      <Image
        src={logo || "/companies/default-company-logo.svg"}
        alt={`${name} logo`}
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  );
}
