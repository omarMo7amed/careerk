import { refreshToken } from "../api/refreshToken";
import { useAuthStore } from "../model/useAuthStore";
import { refreshQueue } from "./refreshQueue";

export async function authInterceptor(
  endpoint: string,
  options: RequestInit = {},
): Promise<Response> {
  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:3000/api/v1";

  const buildHeaders = (token: string | null): Headers => {
    const headers = new Headers(options.headers);
    headers.set("Content-Type", "application/json");
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  };

  // ── First attempt ────────────────────────────────────────────────────────
  const token = useAuthStore.getState().token;
  let res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: buildHeaders(token),
  });

  if (res.status !== 401) return res;

  // ── 401 → try silent refresh ──────────────────────────────────────────────
  try {
    const newToken = await refreshQueue.getOrRefresh(async () => {
      const data = await refreshToken();
      useAuthStore.getState().setAuth(data.accessToken, data.user);
      return data.accessToken;
    });

    // ── Retry with new token ─────────────────────────────────────────────
    res = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: buildHeaders(newToken),
    });
  } catch {
    // Refresh also failed — clear auth state so the user is redirected to login
    useAuthStore.getState().clearAuth();
  }

  return res;
}
