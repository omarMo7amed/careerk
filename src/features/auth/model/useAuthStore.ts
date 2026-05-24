"use client";

import { create } from "zustand";
import { LoginResponse } from "../types";

interface AuthState {
  token: string | null;
  user: Partial<LoginResponse["data"]> | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setAuth: (token: string, user: Partial<LoginResponse["data"]>) => void;
  clearAuth: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,
  isLoading: true,

  setAuth: (token, user) =>
    set({ token, user, isAuthenticated: true, isLoading: false }),

  clearAuth: () =>
    set({ token: null, user: null, isAuthenticated: false, isLoading: false }),

  setLoading: (isLoading) => set({ isLoading }),
}));
