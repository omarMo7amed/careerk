import {
  ChartSpline,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Briefcase,
  User,
  User2,
} from "lucide-react";
import { FieldMeta } from "../types/fieldMeta";

export const FIELD_META: FieldMeta[] = [
  {
    key: "firstName",
    label: "First Name",
    Icon: User,
  },
  {
    key: "lastName",
    label: "Last Name",
    Icon: User2,
  },
  {
    key: "title",
    label: "Job Title",
    Icon: Briefcase,
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
