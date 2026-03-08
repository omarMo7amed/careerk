export type State = {
  status: "idle" | "editing";
  location?: string;
  phone?: string;
  cvEmail?: string;
  title?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
};

export type Action =
  | { type: "START_EDITING" }
  | { type: "SET_FIELD"; field: keyof State; value: string };
