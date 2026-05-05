export type DegreeType =
  | "HIGH_SCHOOL"
  | "ASSOCIATE"
  | "BACHELOR"
  | "MASTER"
  | "PHD"
  | "BOOTCAMP"
  | "CERTIFICATION"
  | "OTHER";

export interface Education {
  id?: string;
  degreeType: DegreeType | null;
  description: string;
  institutionName: string;
  isCurrent: boolean;
  fieldOfStudy: string;
  endDate: string | null;
  gpa: number | null;
  startDate: string;
}
