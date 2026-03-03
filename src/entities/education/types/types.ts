export type DegreeType =
  | "bachelor"
  | "master"
  | "phd"
  | "associate"
  | "diploma"
  | "certificate"
  | "other";

export interface Education {
  degreeType: DegreeType | null;
  description: string;
  institutionName: string;
  isCurrent: boolean;
  fieldOfStudy: string;
  endDate: string | null;
  gpa: number | null;
  startDate: string;
}
