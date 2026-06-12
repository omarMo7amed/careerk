import { SearchBar } from "@/features/search";
import { floatingCompanies } from "../model/floatingCompanies";
import CompaniesHeading from "./CompaniesHeading";
import CompanyIcon from "./CompanyIcon";

export function CompaniesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container relative mx-auto px-6 pb-20 sm:px-8 lg:px-12 pt-20 sm:pt-30 lg:pt-40">
        {/*company logos*/}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {floatingCompanies.map((company) => (
            <CompanyIcon
              key={company.alt}
              src={company.src}
              alt={company.alt}
              width={company.width}
              height={company.height}
              className={company.position + " " + company.animation}
            />
          ))}
        </div>

        <CompaniesHeading />

        <SearchBar type="companies" searchPlaceholder="Company name" />
      </div>
    </section>
  );
}
