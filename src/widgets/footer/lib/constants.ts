import type { FooterColumn, JobSource, FooterBottomLink } from "../model/types";

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Students",
    links: [
      { label: "Find your next job", href: "/jobs" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Career tips", href: "/career-tips" },
      { label: "Job roles", href: "/job-roles" },
      { label: "Help center", href: "/help" },
    ],
  },
  {
    title: "Employers",
    links: [
      { label: "Hire top talent", href: "/employers" },
      { label: "Products", href: "/products" },
      { label: "Resources", href: "/resources" },
      { label: "Request demo", href: "/demo" },
      { label: "Help center", href: "/help" },
    ],
  },
  {
    title: "Career Centers",
    links: [
      { label: "Support students", href: "/career-centers" },
      { label: "Marketing toolkit", href: "/toolkit" },
      { label: "Resources", href: "/resources" },
      { label: "Request demo", href: "/demo" },
      { label: "Help center", href: "/help" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
      { label: "Join us", href: "/careers" },
      { label: "Brand guidelines", href: "/brand" },
    ],
  },
];

export const JOB_SOURCES: JobSource[] = [
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Indeed", url: "https://indeed.com" },
  { name: "Glassdoor", url: "https://glassdoor.com" },
  { name: "Wuzzuf", url: "https://wuzzuf.net" },
];

export const FOOTER_BOTTOM_LINKS: FooterBottomLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export const FOOTER_LOGO = "Careerk";
export const COPYRIGHT_TEXT = "©2025 Careerk. All rights reserved";
