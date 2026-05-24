import { allJobSeekers } from "@/entities/job-seeker";
import type { JobSeeker } from "@/entities/job-seeker";
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

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const search = normalizeValue(
    searchParams.get("search") ?? searchParams.get("q"),
  );
  const location = normalizeValue(searchParams.get("location"));
  const availabilityStatusValues = normalizeMultiValues(
    searchParams.getAll("availabilityStatus"),
  );
  const workPreferenceValues = normalizeMultiValues(
    searchParams.getAll("workPreference"),
  );
  const preferredJobTypesValues = normalizeMultiValues(
    searchParams.getAll("preferredJobTypes"),
  );
  const page = parsePositiveInt(searchParams.get("page"), 1);
  const limit = parsePositiveInt(searchParams.get("limit"), 12);

  const filtered = allJobSeekers.filter((candidate: JobSeeker) => {
    const fullName =
      `${candidate.firstName} ${candidate.lastName}`.toLowerCase();
    const title = (candidate.profile.title ?? "").toLowerCase();
    const summary = (candidate.profile.summary ?? "").toLowerCase();
    const candidateLocation = (candidate.profile.location ?? "").toLowerCase();
    const availabilityStatus = (
      candidate.profile.availabilityStatus ?? ""
    ).toLowerCase();
    const workPreference = (
      candidate.profile.workPreference ?? ""
    ).toLowerCase();
    const preferredJobTypes = (candidate.profile.preferredJobTypes ?? []).map(
      (jobType: string) => jobType.toLowerCase(),
    );
    const skills = (candidate.skills ?? []).map((skill: { name: string }) =>
      skill.name.toLowerCase(),
    );

    const matchesQuery =
      search.length === 0 ||
      fullName.includes(search) ||
      title.includes(search) ||
      summary.includes(search) ||
      skills.some((skill: string) => skill.includes(search));

    const matchesLocation =
      location.length === 0 || candidateLocation.includes(location);

    const matchesAvailabilityStatus =
      availabilityStatusValues.length === 0 ||
      availabilityStatusValues.includes(availabilityStatus);

    const matchesWorkPreference =
      workPreferenceValues.length === 0 ||
      workPreferenceValues.includes(workPreference);

    const matchesPreferredJobTypes =
      preferredJobTypesValues.length === 0 ||
      preferredJobTypesValues.some((value) =>
        preferredJobTypes.includes(value),
      );

    return (
      matchesQuery &&
      matchesLocation &&
      matchesAvailabilityStatus &&
      matchesWorkPreference &&
      matchesPreferredJobTypes
    );
  });

  const start = (page - 1) * limit;
  const end = start + limit;

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  return NextResponse.json({
    data: {
      jobSeekers: filtered.slice(start, end),
      total,
      page,
      limit,
      totalPages,
    },
  });
}
