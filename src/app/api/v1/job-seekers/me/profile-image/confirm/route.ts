import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { key } = await req.json();
  return NextResponse.json({
    data: {
      fileUrl: `https://example.com/${key}`,
    },
  });
}
