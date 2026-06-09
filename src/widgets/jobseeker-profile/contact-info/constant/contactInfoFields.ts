import { Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContactInfoFieldConfig {
  key: "phone" | "email" | "location";
  label: string;
  Icon: LucideIcon;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  disabled: boolean;
}

export const CONTACT_INFO_FIELDS: ContactInfoFieldConfig[] = [
  {
    key: "phone",
    label: "Phone",
    Icon: Phone,
    type: "tel",
    placeholder: "+1 (555) 000-0000",
    disabled: true,
  },
  {
    key: "email",
    label: "Email",
    Icon: Mail,
    type: "email",
    placeholder: "",
    disabled: true,
  },
  {
    key: "location",
    label: "Location",
    Icon: MapPin,
    type: "text",
    placeholder: "City, Country",
    disabled: false,
  },
];
