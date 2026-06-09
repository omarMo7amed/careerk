import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:3000/api/v1";

/**
 * POST /api/v1/auth/refresh-token
 *
 * Proxies the refresh-token request to the real backend server-side.
 * This solves the cross-origin cookie problem: the browser sends the
 * refresh-token cookie to localhost (same origin), and this route
 * forwards it to the backend. The backend's Set-Cookie response is
 * then re-applied on the localhost origin.
 */
export async function POST(request: NextRequest) {
  try {
    // Forward cookies from the incoming browser request to the backend
    const cookieHeader = request.headers.get("cookie") ?? "";

    const backendRes = await fetch(`${BACKEND_URL}/auth/refresh-token`, {
      method: "POST",
      headers: {
        cookie: cookieHeader,
        "Content-Type": "application/json",
      },
    });

    const data = await backendRes.json();

    // Build the Next.js response with the same status code
    const res = NextResponse.json(data, { status: backendRes.status });

    // Re-forward any Set-Cookie headers the backend sends
    // so the browser stores the new refresh-token cookie on localhost
    const setCookieHeader = backendRes.headers.get("set-cookie");
    if (setCookieHeader) {
      res.headers.set("set-cookie", setCookieHeader);
    }

    return res;
  } catch (error) {
    console.error("[refresh-token proxy] error:", error);
    return NextResponse.json(
      { success: false, error: { message: "Refresh token proxy failed" } },
      { status: 500 },
    );
  }
}
