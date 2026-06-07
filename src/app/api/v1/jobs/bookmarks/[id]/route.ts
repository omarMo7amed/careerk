import { mockBookmarksResponse } from "@/entities/job/mock-data/savedJobs";
import type { BookmarkedJob } from "@/entities/job/types/BoomarkedJob";
import { NextRequest, NextResponse } from "next/server";

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
          path: "/jobs/bookmarks/:id",
          method: request.method,
          details: "Unauthorized",
        },
      },
      { status: 401 },
    );
  }

  return null;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const authResponse = await checkAuth(request);
    if (authResponse) return authResponse;

    const { id } = await params;

    const exists = mockBookmarksResponse.data.some(
      (bookmark) => bookmark.job.id === id,
    );

    if (exists) {
      return NextResponse.json({
        success: true,
        message: "Already bookmarked",
        data: { id },
        meta: {
          timestamp: new Date().toISOString(),
          path: "/jobs/bookmarks/:id",
          method: "POST",
        },
      });
    }

    const bookmarkId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const newBookmark: BookmarkedJob = {
      bookmarkId,
      bookmarkedAt: new Date().toISOString(),
      job: {
        id,
        title: "Bookmarked Job",
        description: null,
        location: null,
        salary: null,
        jobType: null,
        companyName: "",
        sourceUrl: "",
        postedAt: null,
        source: "direct",
        skills: [],
      },
    };

    mockBookmarksResponse.data.unshift(newBookmark);

    return NextResponse.json({
      success: true,
      message: "Job bookmarked successfully",
      data: { id: bookmarkId },
      meta: {
        timestamp: new Date().toISOString(),
        path: "/jobs/bookmarks/:id",
        method: "POST",
      },
    });
  } catch (error) {
    console.error("Error bookmarking job:", error);
    return NextResponse.json(
      { success: false, error: { message: "Internal Server Error" } },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const authResponse = await checkAuth(request);
    if (authResponse) return authResponse;

    const { id } = await params;
    const index = mockBookmarksResponse.data.findIndex(
      (bookmark) => bookmark.bookmarkId === id || bookmark.job.id === id,
    );

    if (index !== -1) {
      mockBookmarksResponse.data.splice(index, 1);
    }

    return NextResponse.json({
      success: true,
      data: {},
      message: "Bookmark removed successfully",
      meta: {
        timestamp: new Date().toISOString(),
        path: "/jobs/bookmarks/:id",
        method: "DELETE",
      },
    });
  } catch (error) {
    console.error("Error removing bookmark:", error);
    return NextResponse.json(
      { success: false, error: { message: "Internal Server Error" } },
      { status: 500 },
    );
  }
}
