import { companySizeLabels, companyTypeLabels } from "@/entities/company";
import {
  companyProfileResponse,
  companyProfile,
} from "@/entities/company/mock-data/companyMockProfile";
import { NextRequest, NextResponse } from "next/server";

const BASE_API_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3000/api/v1";

//check if the company is authenticated, if not return 401
export async function checkAuth(request: NextRequest) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token || token === "null" || token === "undefined") {
    return NextResponse.json({
      success: false,
      error: {
        message: "Unauthorized",
        statusCode: 401,
        timestamp: new Date().toISOString(),
        path: `${BASE_API_URL}/companies/me`,
        method: "PATCH",
      },
    });
  }
}
export async function GET(request: NextRequest) {
  const AuthResponse = await checkAuth(request);
  if (AuthResponse) {
    return AuthResponse;
  }
  return NextResponse.json(companyProfileResponse);
}

// Validation helpers
function isValidCompanySize(size: string): boolean {
  return companySizeLabels.hasOwnProperty(size);
}

function isValidCompanyType(type: string): boolean {
  return companyTypeLabels.hasOwnProperty(type);
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const AuthResponse = await checkAuth(request);
    if (AuthResponse) {
      return AuthResponse;
    }

    const body = await request.json();

    const errors: string[] = [];

    if (body.size && !isValidCompanySize(body.size)) {
      errors.push(
        "size must be one of the following values: SIZE_1_50, SIZE_51_200, SIZE_201_1000, SIZE_1000_PLUS",
      );
    }
    if (body.type && !isValidCompanyType(body.type)) {
      errors.push(
        "type must be one of the following values: STARTUP, SCALE_UP, ENTERPRISE, NON_PROFIT, GOVERNMENT",
      );
    }
    if (body.websiteUrl && !isValidUrl(body.websiteUrl)) {
      errors.push("websiteUrl must be a valid URL");
    }
    if (body.linkedIn && !isValidUrl(body.linkedIn)) {
      errors.push("linkedIn must be a valid URL");
    }
    if (body.facebook && !isValidUrl(body.facebook)) {
      errors.push("facebook must be a valid URL");
    }
    if (body.twitter && !isValidUrl(body.twitter)) {
      errors.push("twitter must be a valid URL");
    }
    if (body.foundedYear) {
      const year = Number(body.foundedYear);
      const currentYear = new Date().getFullYear();
      if (isNaN(year) || year < 1800 || year > currentYear) {
        errors.push(`foundedYear must be between 1800 and ${currentYear}`);
      }
    }
    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: errors,
            statusCode: 400,
            timestamp: new Date().toISOString(),
            path: "/api/v1/companies/me",
            method: "PATCH",
            details: "Bad Request",
          },
        },
        { status: 400 },
      );
    }

    Object.assign(companyProfile, body);

    return NextResponse.json(
      {
        success: true,
        data: companyProfile,
        message: "Company profile updated successfully",
        meta: {
          timestamp: new Date().toISOString(),
          path: "/api/v1/companies/me",
          method: "PATCH",
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Update company profile error:", error);

    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Failed to update company profile",
          statusCode: 500,
          timestamp: new Date().toISOString(),
          path: "/api/v1/companies/me",
          method: "PATCH",
          details: "Internal Server Error",
        },
      },
      { status: 500 },
    );
  }
}
