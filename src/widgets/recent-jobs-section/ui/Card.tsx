import React from "react";
import { Badge } from "@/shared/ui/Badge";

interface CardProps {
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: "full-time" | "part-time" | "contract";
  tags?: string[];
}

export function Card({
  title,
  company,
  location,
  salary,
  type,
  tags = [],
}: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-1">{company}</p>
      <p className="text-gray-500 text-sm mb-3">{location}</p>
      {salary && <p className="text-blue-600 font-semibold mb-3">{salary}</p>}
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="info">{type}</Badge>
        {tags.map((tag) => (
          <Badge key={tag} variant="default">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
