import { BenefitCardProps } from "../types/types";

export function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = benefit.icon;

  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-bg-muted transition-all duration-200">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h5 className="font-semibold text-foreground mb-1">{benefit.title}</h5>
        <p className="text-text-secondary text-sm">{benefit.description}</p>
      </div>
    </div>
  );
}
