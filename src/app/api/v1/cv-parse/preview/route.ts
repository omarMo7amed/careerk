import { mockCVParseResponse } from "@/entities/cv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    data: mockCVParseResponse,
  });
}
