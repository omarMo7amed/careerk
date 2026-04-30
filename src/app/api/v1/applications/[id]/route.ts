import {
  ApplicationDetailsResponse,
  ApplicationListItem,
  mockApplicationsDetails,
} from "@/entities/application";
import { mockApplicationsResponse } from "@/entities/application/mock-data/applications";
import { NextRequest, NextResponse } from "next/server";
const BASE_API_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3000/api/v1";
//check UUID format
const checkUUIDFormat = (id: string) => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(id)) {
    return NextResponse.json({
      success: false,
      error: {
        message: "Invalid application ID format",
        statusCode: 400,
        timestamp: new Date().toISOString(),
        path: `${BASE_API_URL}/applications/${id}`,
        method: "PATCH",
      },
    });
  }

  return null;
};
//check if authenticated
export async function checkAuth(request: NextRequest) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");
  const applicationId = request.nextUrl.pathname.split("/").pop() || "";
  if (!token || token === "null" || token === "undefined") {
    return NextResponse.json({
      success: false,
      error: {
        message: "Unauthorized",
        statusCode: 401,
        timestamp: new Date().toISOString(),
        path: `${BASE_API_URL}/applications/${applicationId}`,
        method: "PATCH",
      },
    });
  }

  return null;
}
//check if application exists
const checkApplicationExists = (
  applications: ApplicationListItem[],
  applicationId: string,
) => {
  const application = applications.find((app) => app.id === applicationId);
  if (!application) {
    return NextResponse.json({
      success: false,
      error: {
        message: "Application not found",
        statusCode: 404,
        timestamp: new Date().toISOString(),
        path: `${BASE_API_URL}/applications/${applicationId}`,
        method: "PATCH",
      },
    });
  }

  return null;
};

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: applicationId } = await params;

    //check UUID format
    const invalidIdResponse = checkUUIDFormat(applicationId);
    if (invalidIdResponse) {
      return invalidIdResponse;
    }

    //check if authenticated
    const authResponse = await checkAuth(request);
    if (authResponse) {
      return authResponse;
    }

    //check if application exists
    const applications = mockApplicationsResponse.data.applications;
    const applicationExistsResponse = checkApplicationExists(
      applications,
      applicationId,
    );
    if (applicationExistsResponse) {
      return applicationExistsResponse;
    }

    const application = applications.find((app) => app.id === applicationId);
    if (!application) {
      return NextResponse.json({
        success: false,
        error: {
          message: "Application not found",
          statusCode: 404,
          timestamp: new Date().toISOString(),
          path: `${BASE_API_URL}/applications/${applicationId}`,
          method: "PATCH",
        },
      });
    }

    application.status = "WITHDRAWN";
    application.updatedAt = new Date().toISOString();

    const applicationDetail = mockApplicationsDetails.find(
      (res: ApplicationDetailsResponse) => res.data.id === applicationId,
    );

    if (applicationDetail) {
      applicationDetail.data.status = "WITHDRAWN";
      applicationDetail.data.updatedAt = application.updatedAt;
    }

    return NextResponse.json({
      success: true,
      data: application,
      message: "Application withdrawn successfully",
    });
  } catch (error) {
    console.error("Error withdrawing application:", error);

    return NextResponse.json({
      success: false,
      error: {
        message: "Internal Server Error",
        statusCode: 500,
        timestamp: new Date().toISOString(),
        path: `${BASE_API_URL}/applications/[id]`,
        method: "PATCH",
      },
    });
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: applicationId } = await params;
  try {
    const res = mockApplicationsDetails.find(
      (res: ApplicationDetailsResponse) => res.data.id === applicationId,
    );
    const application = res ? res.data : null;
    if (!application) {
      return NextResponse.json({
        success: false,
        error: {
          message: "Application not found",
          statusCode: 404,
          timestamp: new Date().toISOString(),
          path: `${BASE_API_URL}/applications/${applicationId}`,
          method: "GET",
        },
      });
    }

    return NextResponse.json({
      success: true,
      data: application,
    });
  } catch (error) {
    console.error("Error fetching application details:", error);
    return NextResponse.json({
      success: false,
      error: {
        message: "Internal Server Error",
        statusCode: 500,
        timestamp: new Date().toISOString(),
        path: `${BASE_API_URL}/applications/${applicationId}`,
        method: "GET",
      },
    });
  }
}
