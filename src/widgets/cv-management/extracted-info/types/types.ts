import { CVInfo } from "@/entities/cv";

export interface ExtractedCVInfoProps {
  cvInfo: CVInfo;
}

export type EditableFields = {
  title: string;
  cvEmail: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  portfolioUrl: string;
};
