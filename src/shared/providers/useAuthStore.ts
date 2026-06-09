"use client";

import { create } from "zustand";

type AuthRole = "jobseeker" | "company";
type BackendRole = AuthRole | "job-seeker";

const ROLE_STORAGE_KEY = "auth_role";

interface AuthState {
  token: string | null;
  role: AuthRole | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  /** true once the initial refresh-token attempt has completed (success or failure) */
  isInitialized: boolean;

  setAuth: (token: string, role: BackendRole) => void;
  clearAuth: () => void;
  setLoading: (loading: boolean) => void;
}

function normalizeRole(role: BackendRole): AuthRole {
  return role === "job-seeker" ? "jobseeker" : role;
}

/** Read the role that was saved on last login (survives page reload). */
export function getPersistedRole(): AuthRole | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(ROLE_STORAGE_KEY);
  return stored === "jobseeker" || stored === "company" ? stored : null;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  role: null,
  isAuthenticated: false,
  isLoading: true,
  isInitialized: false,

  setAuth: (token, role) => {
    const normalizedRole = normalizeRole(role);
    // Persist role so it survives page reloads
    if (typeof window !== "undefined") {
      localStorage.setItem(ROLE_STORAGE_KEY, normalizedRole);
    }
    set({
      token,
      role: normalizedRole,
      isAuthenticated: true,
      isLoading: false,
      isInitialized: true,
    });
  },

  clearAuth: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(ROLE_STORAGE_KEY);
    }
    set({ token: null, role: null, isAuthenticated: false, isLoading: false, isInitialized: true });
  },

  setLoading: (isLoading) => set({ isLoading }),
}));
