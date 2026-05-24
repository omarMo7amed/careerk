import { NextRequest, NextResponse } from "next/server";
import { matchedJobs } from "@/entities/job";

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

function getCompanyName(job: (typeof matchedJobs)[number]) {
  return (job.company?.name ?? job.companyName ?? "").toLowerCase();
}

function getLocation(job: (typeof matchedJobs)[number]) {
  return (job.location ?? "").toLowerCase();
}

function getJobType(job: (typeof matchedJobs)[number]) {
  return (job.jobType ?? "").toLowerCase();
}

function getExperienceLevel(job: (typeof matchedJobs)[number]) {
  return (job.experienceLevel ?? "").toLowerCase();
}

function getWorkPreference(job: (typeof matchedJobs)[number]) {
  return (job.workPreference ?? "").toLowerCase();
}

function getJobSource(job: (typeof matchedJobs)[number]) {
  return (job.source ?? "").toLowerCase();
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const search = normalizeValue(searchParams.get("search"));
  const location = normalizeValue(searchParams.get("location"));
  const jobTypeValues = normalizeMultiValues(searchParams.getAll("jobType"));
  const experienceLevelValues = normalizeMultiValues(
    searchParams.getAll("experienceLevel"),
  );
  const workPreference = normalizeMultiValues(
    searchParams.getAll("workPreference"),
  );
  const jobSource = normalizeMultiValues(searchParams.getAll("jobSource"));
  const page = parsePositiveInt(searchParams.get("page"), 1);
  const limit = parsePositiveInt(searchParams.get("limit"), 12);

  const filtered = matchedJobs.filter((job) => {
    const matchesQuery =
      search.length === 0 ||
      (job.title ?? "").toLowerCase().includes(search) ||
      (job.description ?? "").toLowerCase().includes(search) ||
      getCompanyName(job).includes(search);

    const matchesLocation =
      location.length === 0 || getLocation(job).includes(location);

    const currentJobType = getJobType(job);
    const currentExperienceLevel = getExperienceLevel(job);
    const currentWorkPreference = getWorkPreference(job);
    const currentJobSource = getJobSource(job);

    const matchesJobType =
      jobTypeValues.length === 0 || jobTypeValues.includes(currentJobType);

    const matchesExperienceLevel =
      experienceLevelValues.length === 0 ||
      experienceLevelValues.includes(currentExperienceLevel);

    const matchesWorkPreference =
      workPreference.length === 0 ||
      workPreference.includes(currentWorkPreference);

    const matchesJobSource =
      jobSource.length === 0 || jobSource.includes(currentJobSource);

    return (
      matchesQuery &&
      matchesLocation &&
      matchesJobType &&
      matchesExperienceLevel &&
      matchesWorkPreference &&
      matchesJobSource
    );
  });

  const start = (page - 1) * limit;
  const end = start + limit;

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  return NextResponse.json({
    data: {
      jobs: filtered.slice(start, end),
      total,
      page,
      limit,
      totalPages,
    },
  });
}
