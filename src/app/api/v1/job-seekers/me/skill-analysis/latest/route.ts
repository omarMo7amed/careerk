import { mockImprovementReport } from "@/entities/improvement";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: mockImprovementReport,
  });
}
