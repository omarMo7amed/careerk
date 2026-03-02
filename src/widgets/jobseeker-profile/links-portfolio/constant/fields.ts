import { Github, Linkedin, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FieldKey = "linkedin" | "github" | "portfolio";

export const LINK_FIELDS: {
  key: FieldKey;
  label: string;
  Icon: LucideIcon;
  iconClassName?: string;
}[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    Icon: Linkedin,
    iconClassName: "text-[#0077B5]",
  },
  { key: "github", label: "GitHub", Icon: Github },
  {
    key: "portfolio",
    label: "Portfolio",
    Icon: Globe,
    iconClassName: "text-primary",
  },
];
