import { MapPin, Users, Calendar } from "lucide-react";

interface CompanyInfoProps {
  location: string;
  size?: string;
  foundedYear: number;
}

export function CompanyInfo({ location, size, foundedYear }: CompanyInfoProps) {
  const infoItems = [
    {
      icon: MapPin,
      label: location,
      show: true,
    },
    {
      icon: Users,
      label: size,
      show: !!size,
    },
    {
      icon: Calendar,
      label: `Founded ${foundedYear}`,
      show: true,
    },
  ];

  return (
    <div className="space-y-2.5 py-4 border-t border-gray-100">
      {infoItems.map(
        (item, index) =>
          item.show && (
            <div
              key={index}
              className="flex items-center gap-3 text-sm text-gray-600 group/item hover:text-primary transition-colors"
            >
              <item.icon className="w-4 h-4 opacity-60 group-hover/item:opacity-100 transition-opacity" />
              <span className="font-medium">{item.label}</span>
            </div>
          ),
      )}
    </div>
  );
}
