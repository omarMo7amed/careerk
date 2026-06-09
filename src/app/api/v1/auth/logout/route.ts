import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:3000/api/v1";

/**
 * POST /api/v1/auth/logout
 *
 * Proxies logout to the real backend server-side, forwarding the
 * refresh-token cookie so the backend can invalidate it. The backend's
 * cookie-clearing Set-Cookie header is also forwarded back so the
 * browser removes the cookie from localhost.
 */
export async function POST(request: NextRequest) {
  try {
    const cookieHeader = request.headers.get("cookie") ?? "";

    const backendRes = await fetch(`${BACKEND_URL}/auth/logout`, {
      method: "POST",
      headers: {
        cookie: cookieHeader,
      },
    });

    const data = await backendRes.json().catch(() => ({}));

    const res = NextResponse.json(data, { status: backendRes.status });

    // Clear the cookie on localhost as well
    const setCookieHeader = backendRes.headers.get("set-cookie");
    if (setCookieHeader) {
      res.headers.set("set-cookie", setCookieHeader);
    }

    return res;
  } catch (error) {
    console.error("[logout proxy] error:", error);
    return NextResponse.json(
      { success: false, error: { message: "Logout proxy failed" } },
      { status: 500 },
    );
  }
}
