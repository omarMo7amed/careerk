"use client";
import { useReducer } from "react";
import { INITIAL_STATE, reducer } from "../lib/reducer";
import { State } from "../types/useTableHook";

export function useTableHook() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  function handleChange(key: string, value: string) {
    dispatch({ type: "SET_FIELD", field: key as keyof State, value });
  }

  return { handleChange };
}
