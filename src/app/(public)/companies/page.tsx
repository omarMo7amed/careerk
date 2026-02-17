import { CompaniesHero } from "@/widgets/companies-layout/companies-hero/ui/CompaniesHero";
import { CompaniesList } from "@/widgets/companies-layout/companies-list";

export default function Page() {
  return (
    <div className="min-h-screen">
      <CompaniesHero />
      <CompaniesList />
    </div>
  );
}
