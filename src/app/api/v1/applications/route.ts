import { mockApplicationsResponse } from "@/entities/application/mock-data/applications";
import { NextRequest, NextResponse } from "next/server";

function parsePositiveInt(value: string | null, fallback: number) {
  const num = Number(value);
  return Number.isInteger(num) && num > 0 ? num : fallback;
}

function normalizeValue(value: string | null) {
  return (value ?? "").trim().toLowerCase();
}

function normalizeMultiValues(values: string[]) {
  return values.map((value) => value.trim().toLowerCase()).filter(Boolean);
}

function normalizeApplicationStatus(value: string) {
  const normalized = normalizeValue(value);

  const statusMap: Record<string, string> = {
    pending: "PENDING",
    reviewed: "REVIEWED",
    shortlisted: "SHORTLISTED",
    "interview scheduled": "INTERVIEW_SCHEDULED",
    rejected: "REJECTED",
    hired: "HIRED",
    withdrawn: "WITHDRAWN",
  };

  return (
    statusMap[normalized] ??
    value
      .trim()
      .toUpperCase()
      .replace(/[-\s]+/g, "_")
  );
}

function normalizeWorkPreference(value: string) {
  const normalized = normalizeValue(value);

  const workPreferenceMap: Record<string, string> = {
    remote: "REMOTE",
    hybrid: "HYBRID",
    onsite: "ONSITE",
    "on-site": "ONSITE",
    "on site": "ONSITE",
  };

  return (
    workPreferenceMap[normalized] ??
    value
      .trim()
      .toUpperCase()
      .replace(/[-\s]+/g, "_")
  );
}

function getCompanyName(
  application: (typeof mockApplicationsResponse.data.applications)[number],
) {
  return (application.directJob.company?.name ?? "").toLowerCase();
}

function getJobTitle(
  application: (typeof mockApplicationsResponse.data.applications)[number],
) {
  return (application.directJob.title ?? "").toLowerCase();
}

function getLocation(
  application: (typeof mockApplicationsResponse.data.applications)[number],
) {
  return (application.directJob.location ?? "").toLowerCase();
}

function matchesAppliedDate(appliedAt: string, filters: string[]) {
  if (filters.length === 0 || filters.includes("all time")) {
    return true;
  }

  const appliedAtMs = Date.parse(appliedAt);
  if (Number.isNaN(appliedAtMs)) {
    return false;
  }

  const now = Date.now();

  return filters.some((filter) => {
    if (filter === "last 24 hours") {
      return now - appliedAtMs <= 24 * 60 * 60 * 1000;
    }

    if (filter === "last 7 days") {
      return now - appliedAtMs <= 7 * 24 * 60 * 60 * 1000;
    }

    if (filter === "last 30 days") {
      return now - appliedAtMs <= 30 * 24 * 60 * 60 * 1000;
    }

    return false;
  });
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const search = normalizeValue(
      searchParams.get("search") ?? searchParams.get("q"),
    );
    const location = normalizeValue(searchParams.get("location"));
    const statusValues = normalizeMultiValues(searchParams.getAll("status"));
    const dateAppliedValues = normalizeMultiValues(
      searchParams.getAll("dateApplied"),
    );
    const workPreferenceValues = normalizeMultiValues(
      searchParams.getAll("workPreference"),
    );
    const page = parsePositiveInt(searchParams.get("page"), 1);
    const limit = parsePositiveInt(searchParams.get("limit"), 12);

    const normalizedStatuses = statusValues.map(normalizeApplicationStatus);
    const normalizedWorkPreferences = workPreferenceValues.map(
      normalizeWorkPreference,
    );

    const allApplications = mockApplicationsResponse.data.applications;
    const filteredApplications = allApplications.filter((application) => {
      const matchesQuery =
        search.length === 0 ||
        getJobTitle(application).includes(search) ||
        getCompanyName(application).includes(search);

      const matchesLocation =
        location.length === 0 || getLocation(application).includes(location);

      const currentStatus = application.status.toUpperCase();
      const currentWorkPreference =
        application.directJob.workPreference.toUpperCase();

      const matchesStatus =
        normalizedStatuses.length === 0 ||
        normalizedStatuses.includes(currentStatus);

      const matchesDateApplied = matchesAppliedDate(
        application.appliedAt,
        dateAppliedValues,
      );

      const matchesWorkPreference =
        normalizedWorkPreferences.length === 0 ||
        normalizedWorkPreferences.includes(currentWorkPreference);

      return (
        matchesQuery &&
        matchesLocation &&
        matchesStatus &&
        matchesDateApplied &&
        matchesWorkPreference
      );
    });

    const start = (page - 1) * limit;
    const total = filteredApplications.length;
    const totalPages = Math.max(1, Math.ceil(total / limit));

    return NextResponse.json({
      success: true,
      data: {
        applications: filteredApplications.slice(start, start + limit),
        total,
        page,
        limit,
        totalPages,
      },
      message: "Applications retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Internal Server Error",
          statusCode: 500,
          timestamp: new Date().toISOString(),
          path: "/api/v1/applications",
          method: "GET",
        },
      },
      { status: 500 },
    );
  }
}
