import { refreshToken } from "../api/refreshToken";
import { useAuthStore } from "../providers/useAuthStore";
import { refreshQueue } from "./refreshQueue";

export async function authInterceptor(
  endpoint: string,
  options: RequestInit = {},
): Promise<Response> {
  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:3000/api/v1";

  const buildHeaders = (token: string | null): Headers => {
    const headers = new Headers(options.headers);

    // Only set application/json if body is not FormData
    if (!(options.body instanceof FormData)) {
      headers.set("Content-Type", "application/json");
    }

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  };

  // ── First attempt ────────────────────────────────────────────────────────
  const token = useAuthStore.getState().token;
  let res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: buildHeaders(token),
  });

  if (res.status !== 401) {
    return res;
  }

  // ── 401 → try silent refresh ──────────────────────────────────────────────
  try {
    const newToken = await refreshQueue.getOrRefresh(async () => {
      const resData = await refreshToken();
      const newAccessToken = resData?.data?.accessToken || resData?.accessToken;
      const role = resData?.data?.role || resData?.role || resData?.user?.role;

      if (!newAccessToken)
        throw new Error("No access token in refresh response");

      useAuthStore.getState().setAuth(newAccessToken, role);
      return newAccessToken;
    });

    // ── Retry with new token ─────────────────────────────────────────────
    res = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: buildHeaders(newToken),
    });
  } catch {
    useAuthStore.getState().clearAuth();
  }

  return res;
}
