interface CompanyInfoProps {
  companyName: string;
  category?: string;
}

export function CompanyInfo({ companyName, category }: CompanyInfoProps) {
  return (
    <div className="mb-3">
      <h3 className="font-bold text-lg mb-1 text-foreground">{companyName}</h3>
      {category && <p className="text-sm text-text-secondary">{category}</p>}
    </div>
  );
}
