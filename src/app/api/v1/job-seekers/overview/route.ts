import { NextRequest, NextResponse } from "next/server";

//check if user is authenticated
async function checkAuth(request: NextRequest) {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");
  if (!token || token === "null" || token === "undefined") {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Unauthorized",
          statusCode: 401,
          timestamp: new Date().toISOString(),
          path: "/api/v1/job-seekers/me/overview",
          method: request.method,
        },
      },
      { status: 401 },
    );
  }

  return null;
}

export async function GET(request: NextRequest) {
  const authResponse = await checkAuth(request);
  if (authResponse) {
    return authResponse;
  }

  try {
    const overviewData = {
      firstName: "Shahd",
      lastName: "Raafat",
      hasProfile: true,
      profileImageUrl: "",
      linkedIn: "https://linkedin.com/in/shahdraafat",
      github: "https://github.com/shahdraafat",
      recommendedJobsCount: 5,
      savedJobsCount: 7,
    };

    return NextResponse.json({
      success: true,
      data: overviewData,
      message: "Overview fetched successfully",
    });
  } catch (error) {
    console.error("Overview fetch error:", error);
    return NextResponse.json({
      success: false,
      error: {
        message: "Internal server error",
        statusCode: 500,
        timestamp: new Date().toISOString(),
        path: "/api/v1/job-seekers/me/overview",
        method: "GET",
      },
    });
  }
}
