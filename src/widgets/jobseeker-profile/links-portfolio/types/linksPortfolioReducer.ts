import type { LinksPortfolioData } from "./types";

export interface EditingState {
  status: "editing";
  linkedin: string;
  github: string;
  portfolio: string;
}

export type State = { status: "idle" } | EditingState;

export type Action =
  | { type: "START_EDIT"; data: LinksPortfolioData }
  | {
      type: "SET_FIELD";
      field: keyof Omit<EditingState, "status">;
      value: string;
    }
  | { type: "CANCEL" }
  | { type: "SAVE_SUCCESS" };
