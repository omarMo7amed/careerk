/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useReducer } from "react";
import { INITIAL_STATE, reducer } from "../lib/reducer";
import { State } from "../types/useTableHook";

export function useTableHook(initialData?: Partial<State>) {
  const [state, dispatch] = useReducer(
    reducer,
    initialData ? { ...INITIAL_STATE, ...initialData } : INITIAL_STATE,
  );

  function handleChange(key: string, value: string) {
    dispatch({ type: "SET_FIELD", field: key as keyof State, value });
  }

  function getEditedData() {
    return Object.keys(state).reduce(
      (acc, key) => {
        if (key !== "status" && state[key as keyof State] !== undefined) {
          acc[key as keyof Omit<State, "status">] = state[key as keyof State];
        }
        return acc;
      },
      {} as Record<string, any>,
    );
  }

  return { handleChange, state, getEditedData };
}
