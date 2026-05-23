import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Mock data for overview
    const overviewData = {
      hasProfile: true,
      linkedIn: "https://linkedin.com/in/alexjohnson",
      github: "https://github.com/alexjohnson",
      totalRecommendedJobs: 5,
      lastLoginAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: overviewData,
      message: "Overview fetched successfully",
    });
  } catch (error) {
    console.error("Overview fetch error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
