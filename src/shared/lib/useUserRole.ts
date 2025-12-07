"use client";

import { useState } from "react";

export type UserRole = "company" | "jobseeker" | null;

/**
 * Hook to get the current user's role
 * TODO: Replace with actual authentication logic
 */
export function useUserRole(): UserRole {
  // TODO: Replace this with actual role detection from:
  // - Session/Cookie
  // - JWT token
  // - Auth context
  // - API call

  // For now, defaulting to 'company' for development
  const [role] = useState<UserRole>("company");

  return role;
}

/**
 * Check if user has a specific role
 */
export function useHasRole(requiredRole: UserRole): boolean {
  const userRole = useUserRole();
  return userRole === requiredRole;
}

/**
 * Get user role synchronously (for server components)
 * TODO: Implement with actual session/auth provider
 */
export function getUserRole(): UserRole {
  // This is a placeholder - replace with actual implementation
  return "company";
}
