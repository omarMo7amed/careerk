import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { fileName, mimeType } = await req.json();

  return NextResponse.json({
    data: {
      uploadUrl: "https://example.com/upload",
      key: `profile-images/${fileName}`,
    },
  });
}
