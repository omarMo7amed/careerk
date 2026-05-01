import { mockBookmarksResponse } from "@/entities/job/mock-data/savedJobs";
import {
  normalizeMultiValues,
  normalizeValue,
  parsePositiveInt,
} from "@/shared";
import { NextRequest, NextResponse } from "next/server";

const BASE_API_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3000/api/v1";

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
          path: "/jobs/bookmark",
          method: request.method,
          details: "Unauthorized",
        },
      },
      { status: 401 },
    );
  }

  return null;
}

export async function GET(request: NextRequest) {
  try {
    const authResponse = await checkAuth(request);
    if (authResponse) {
      return authResponse;
    }

    const { searchParams } = request.nextUrl;
    const search = normalizeValue(
      searchParams.get("search") ?? searchParams.get("q"),
    );
    const location = normalizeValue(searchParams.get("location"));
    const jobTypeValues = normalizeMultiValues(searchParams.getAll("jobType"));
    const jobSource = normalizeMultiValues(searchParams.getAll("jobSource"));
    const page = parsePositiveInt(searchParams.get("page"), 1);
    const limit = parsePositiveInt(searchParams.get("limit"), 12);

    const bookmarkedJobs = mockBookmarksResponse.data;
    const filtered = bookmarkedJobs.filter((bookmark) => {
      const matchesQuery =
        search.length === 0 ||
        (bookmark.job.title ?? "").toLowerCase().includes(search) ||
        (bookmark.job.description ?? "").toLowerCase().includes(search) ||
        (bookmark.job.companyName ?? "").toLowerCase().includes(search);
      const matchesLocation =
        location.length === 0 ||
        (bookmark.job.location ?? "").toLowerCase().includes(location);
      const matchesJobType =
        jobTypeValues.length === 0 ||
        jobTypeValues.includes((bookmark.job.jobType ?? "").toLowerCase());
      const matchesJobSource =
        jobSource.length === 0 ||
        jobSource.includes((bookmark.job.source ?? "").toLowerCase());
      return (
        matchesQuery && matchesLocation && matchesJobType && matchesJobSource
      );
    });

    const start = (page - 1) * limit;
    const end = start + limit;
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / limit));

    return NextResponse.json({
      success: true,
      data: filtered.slice(start, end),
      message: "Bookmarks retrieved successfully",
      meta: {
        timestamp: new Date().toISOString(),
        path: "/jobs/bookmark",
        method: "GET",
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error("Error fetching bookmarked jobs:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Internal Server Error",
          statusCode: 500,
          timestamp: new Date().toISOString(),
          path: "/jobs/bookmark",
          method: "GET",
        },
      },
      { status: 500 },
    );
  }
}
