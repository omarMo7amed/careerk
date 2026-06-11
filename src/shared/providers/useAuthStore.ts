// "use client";

import type { QueryClient } from "@tanstack/react-query";
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
  queryClient: QueryClient | null;
  setQueryClient: (qc: QueryClient | null) => void;

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
  queryClient: null,

  setQueryClient: (qc: QueryClient | null) => set({ queryClient: qc }),

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
    // Clear react-query cache if a QueryClient has been set
    const qc = useAuthStore.getState().queryClient;
    if (qc) qc.clear();

    set({
      token: null,
      role: null,
      isAuthenticated: false,
      isLoading: false,
      isInitialized: true,
    });
  },

  setLoading: (isLoading) => set({ isLoading }),
}));
