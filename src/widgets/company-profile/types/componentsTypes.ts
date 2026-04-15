import { CompanySize } from "@/entities/company-profile";

export interface AboutUsDisplayModeProps {
  description: string;
  isOwner?: boolean;
  onEdit?: () => void;
}
export interface AboutUsEditingModeProps {
  value: string;
  isPending: boolean;
  onChange: (val: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

// _______________________________________

export interface BenefitsDisplayModeProps {
  benefits: string;
  isOwner?: boolean;
  onEdit?: () => void;
}

export interface BenefitsEditingModeProps {
  value: string;
  isPending: boolean;
  onChange: (val: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

// __________________________________________
export interface KeyInformationDisplayModeProps {
  industry?: string;
  size?: CompanySize;
  headquarters?: string;
  foundedYear?: number;
  isOwner?: boolean;
  onEdit?: () => void;
}
export interface KeyInformationFormValues {
  industry: string;
  size: CompanySize | "";
  headquarters: string;
  foundedYear: string;
}

export interface KeyInformationEditingModeProps {
  value: KeyInformationFormValues;
  isPending: boolean;
  onChange: (val: KeyInformationFormValues) => void;
  onSave: () => void;
  onCancel: () => void;
}

// ____________________________________
export interface LinksDisplayModeProps {
  links: { linkedIn?: string; facebook?: string; twitter?: string };
  isOwner: boolean;
  onEdit: () => void;
}
export interface LinksFormValues {
  linkedIn: string;
  facebook: string;
  twitter: string;
}
export interface LinksEditingModeProps {
  value: LinksFormValues;
  isPending: boolean;
  onChange: (val: LinksFormValues) => void;
  onSave: () => void;
  onCancel: () => void;
}
