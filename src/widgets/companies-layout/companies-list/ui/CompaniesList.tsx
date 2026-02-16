import { CompaniesListing } from "@/entities/company/mock-data/companies";
import { CompanyCard } from "@/entities/company/ui/CompanyCard";
import { List } from "@/widgets/List";

export function CompaniesList() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <List
        items={CompaniesListing}
        renderItem={(company) => (
          <CompanyCard company={company} key={company.id} />
        )}
      />
    </div>
  );
}
