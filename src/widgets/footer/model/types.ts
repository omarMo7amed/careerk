import { ReactNode } from "react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: ReactNode;
  ariaLabel: string;
}

export interface JobSource {
  name: string;
  url: string;
}

export interface FooterBottomLink {
  label: string;
  href: string;
}
