import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { parseResultId, data } = await req.json();

  return NextResponse.json({
    data: {
      message: "Profile updated successfully from CV",
    },
  });
}
