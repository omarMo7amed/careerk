import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ActionButton {
  label: string;
  variant?: "primary" | "outline" | "secondary";
  size?: "sm" | "md" | "lg";
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
  primaryButton: {
    label: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    label: string;
    variant?: "outline" | "secondary";
    onClick?: () => void;
  };
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  zIndex?: string;
}
