import {
  ChartSpline,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { FieldMeta } from "../types/fieldMeta";

export const FIELD_META: FieldMeta[] = [
  {
    key: "title",
    label: "Job Title",
    Icon: User,
  },
  {
    key: "cvEmail",
    label: "Email",
    Icon: Mail,
  },
  {
    key: "phone",
    label: "Phone",
    Icon: Phone,
  },
  {
    key: "location",
    label: "Location",
    Icon: MapPin,
  },
  {
    key: "linkedinUrl",
    label: "LinkedIn",
    Icon: Linkedin,
    isLink: true,
  },
  {
    key: "githubUrl",
    label: "GitHub",
    Icon: Github,
    isLink: true,
  },
  {
    key: "portfolioUrl",
    label: "Portfolio",
    Icon: Globe,
    isLink: true,
  },
  {
    key: "yearsOfExperience",
    label: "Years of Experience",
    Icon: ChartSpline,
  },
];
