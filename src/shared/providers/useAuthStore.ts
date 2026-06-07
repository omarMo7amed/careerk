"use client";

import { create } from "zustand";

type AuthRole = "jobseeker" | "company";
type BackendRole = AuthRole | "job-seeker";

interface AuthState {
  token: string | null;
  role: AuthRole | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setAuth: (token: string, role: BackendRole) => void;
  clearAuth: () => void;
  setLoading: (loading: boolean) => void;
}

function normalizeRole(role: BackendRole): AuthRole {
  return role === "job-seeker" ? "jobseeker" : role;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  role: null,
  isAuthenticated: false,
  isLoading: true,

  setAuth: (token, role) =>
    set({
      token,
      role: normalizeRole(role),
      isAuthenticated: true,
      isLoading: false,
    }),

  clearAuth: () =>
    set({ token: null, role: null, isAuthenticated: false, isLoading: false }),

  setLoading: (isLoading) => set({ isLoading }),
}));
