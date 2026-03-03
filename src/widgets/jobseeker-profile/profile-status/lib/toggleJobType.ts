import { JobType } from "@/entities/job-seeker";
import { Action, State } from "../types/profileStatusReducer";
import { Dispatch } from "react";

export function toggleJobType(
  type: JobType,
  state: State,
  dispatch: Dispatch<Action>,
) {
  if (state.status !== "editing") return;
  const current = state.preferredJobTypes;
  const next = current.includes(type)
    ? current.filter((t) => t !== type)
    : [...current, type];
  dispatch({ type: "SET_FIELD", field: "preferredJobTypes", value: next });
}
