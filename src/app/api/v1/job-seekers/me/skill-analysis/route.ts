import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    data: {
      id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      status: "PROCESSING",
      message: "Analysis started. This may take 10-30 seconds.",
    },
  });
}
