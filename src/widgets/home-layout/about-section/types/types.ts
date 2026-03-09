import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SectionImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface BenefitCardProps {
  benefit: Benefit;
}

export interface AboutSectionLayoutProps {
  id: string;
  badgeLabel: string;
  heading: ReactNode;
  description: string;
  benefits: Benefit[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  zIndex?: string;
  children?: ReactNode;
}
