import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { GET } from "./route";
import { jobListings } from "@/entities/job";

// forget this file ya souad , shahd

const ORIGINAL_ENV = process.env;

type RouteRequestLike = {
  nextUrl: URL;
};

function makeRequest(url: string): RouteRequestLike {
  return { nextUrl: new URL(url) };
}

describe("GET /api/v1/jobs", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    process.env = { ...ORIGINAL_ENV };
    delete process.env.USE_MOCK_API;
    delete process.env.BASE_API_URL;
    delete process.env.NEXT_PUBLIC_BASE_API_URL;
  });

  afterEach(() => {
    process.env = ORIGINAL_ENV;
  });

  it("returns paginated mock jobs by default", async () => {
    const response = await GET(
      makeRequest(
        "http://localhost:3000/api/v1/jobs?page=2&pageSize=5",
      ) as never,
    );

    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual(jobListings.slice(5, 10));
  });

  it("filters mock jobs by query and location", async () => {
    const response = await GET(
      makeRequest(
        "http://localhost:3000/api/v1/jobs?q=google&location=mountain%20view",
      ) as never,
    );

    const data = await response.json();

    expect(response.status).toBe(200);
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    expect(
      data.every(
        (job: (typeof jobListings)[number]) =>
          job.company.name.toLowerCase().includes("google") &&
          job.location.toLowerCase().includes("mountain view"),
      ),
    ).toBe(true);
  });

  it("proxies to external backend when USE_MOCK_API is false", async () => {
    process.env.USE_MOCK_API = "false";
    process.env.BASE_API_URL = "http://backend.local/api/v1";

    const externalPayload = [{ id: "external-job-1", title: "External Job" }];

    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify(externalPayload), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    const response = await GET(
      makeRequest(
        "http://localhost:3000/api/v1/jobs?page=1&pageSize=2",
      ) as never,
    );
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual(externalPayload);
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const calledUrl = String(fetchMock.mock.calls[0][0]);
    expect(calledUrl).toBe(
      "http://backend.local/api/v1/jobs?page=1&pageSize=2",
    );
  });

  it("returns external backend status when proxy call fails", async () => {
    process.env.USE_MOCK_API = "false";
    process.env.BASE_API_URL = "http://backend.local/api/v1";

    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("service unavailable", { status: 503 }),
    );

    const response = await GET(
      makeRequest("http://localhost:3000/api/v1/jobs") as never,
    );

    const data = await response.json();

    expect(response.status).toBe(503);
    expect(data.message).toContain("External jobs API error");
  });

  it("prevents self-proxy loops", async () => {
    process.env.USE_MOCK_API = "false";
    process.env.BASE_API_URL = "http://localhost:3000/api/v1";

    const fetchMock = vi.spyOn(globalThis, "fetch");

    const response = await GET(
      makeRequest("http://localhost:3000/api/v1/jobs") as never,
    );

    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.message).toContain(
      "BASE_API_URL points to this same app route",
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
