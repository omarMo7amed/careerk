import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      error: {
        message: "Unauthorized",
        statusCode: 401,
        timestamp: new Date().toISOString(),
        path: "/cv/me",
        method: "GET",
        details: "Unauthorized",
      },
    },
    { status: 401 },
  );
}
