export type Gap = {
  skill: string;
  importance: "low" | "medium" | "high";
  suggestion: string;
};

export interface ImprovementReport {
  id: number;
  targetRole: string;
  description: string;
  status: "PROCESSING" | "COMPLETED" | "FAILED";
  cvScore: number;
  strengths: string[];
  gaps: Gap[];
  recommendations: string[];
  createdAt: string;
  completedAt: string | null;
}
