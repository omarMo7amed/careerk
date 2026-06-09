import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL ?? "http://localhost:3000/api/v1";

/**
 * POST /api/v1/auth/login
 *
 * Proxies login to the real backend server-side so the refresh-token
 * cookie is set on localhost (same origin as the browser) rather than
 * the backend's cross-origin domain.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.text();

    const backendRes = await fetch(`${BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const data = await backendRes.json();

    const res = NextResponse.json(data, { status: backendRes.status });

    // Forward the refresh-token Set-Cookie header from the backend
    const setCookieHeader = backendRes.headers.get("set-cookie");
    if (setCookieHeader) {
      res.headers.set("set-cookie", setCookieHeader);
    }

    return res;
  } catch (error) {
    console.error("[login proxy] error:", error);
    return NextResponse.json(
      { success: false, error: { message: "Login proxy failed" } },
      { status: 500 },
    );
  }
}
