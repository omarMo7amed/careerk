import { mockCVParseResponse } from "@/entities/cv";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { key, fileName, mimeType } = await req.json();
  console.log("endpoint cv\\confirm", { key, fileName, mimeType });
  return NextResponse.json({
    data: mockCVParseResponse,
  });
}
