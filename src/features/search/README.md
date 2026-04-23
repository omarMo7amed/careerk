# Search Overview (Job Entity + Search Feature + Jobs Layout)

This README explains how search works in this project, specifically for:

- job entity
- search feature
- jobs-layout

## 1) Steps to apply this pattern on other pages

Use this checklist when adding search to candidates, companies, applications, or any new list page.

### Step 1: define page query contract

Pick URL keys first, for example:

- search
- location
- page
- limit
- any page filters (status, source, type, etc.)

Keep these keys stable so page refresh and shared links reproduce the same results.

### Step 2: create/get entity fetcher and query hook

In entity layer, ensure you have:

- API client function (same style as src/entities/job/api/getJobs.ts)
- React Query hook (same style as src/entities/job/model/useJobsQuery.ts)

Rules:

- Include all page params in queryKey.
- Append multi-select filters as repeated params using &.
- Keep empty filter arrays as "no filter".

### Step 3: connect SearchBar in page hero/header

In page widget (hero/header):

- Render SearchBar.
- Pass initialQuery and initialLocation from useSearchParams.
- Implement onSearchSubmit to push URL with router.
- Reset page to 1 on new search.

This is the same pattern used in src/widgets/jobs-layout/hero-section/ui/HeroSection.tsx.

### Step 4: make list widget read URL only

In list widget:

- Read search/location/page/limit/filters from useSearchParams.
- Parse multi-select with helper parseMultiParam.
- Call entity query hook with parsed values.
- Render list + pagination based on returned data.

This keeps URL as the single source of truth.

### Step 5: wire filter components to URL

For each filter control:

- Use setMultiParam for multi-select fields. (from shared)
- Keep repeated params format: key=A&key=B.
- Reset page to 1 when filters change.

### Step 6: support filtering in backend route

In route handler:

- Read scalar params with get.
- Read multi-select params with getAll.
- Normalize to lowercase/trim.
- Apply logic:
  - OR inside one filter list (values.includes(current)).
  - AND across different filters.
- Return paginated response shape consistently.

### Step 7: verify end-to-end behavior

Manual checks:

- Refresh keeps same results.
- Sharing URL gives same results.
- Multi-select uses & and works.
- Empty filter means all.
- Search + filter + pagination works together.

### Step 8: when to use useSearchQuery directly

Use useSearchQuery when the component itself should fetch immediately via searchNow (without route-driven list).

If page is URL-driven like jobs-layout:

- SearchBar can still use useSearchQuery for shared input behavior.
- Final data should come from entity query hook driven by URL params.

## 2) Route template with mock data (copy-paste starter)

Use this pattern to build API routes for any page (jobs, candidates, companies) with mock data.

### A) Folder pattern

- Route file: src/app/api/v1/<resource>/route.ts
- Mock data: src/entities/<resource>/mock-data/<file>.ts

Example for jobs:

- Route: src/app/api/v1/jobs/route.ts
- Mock data: src/entities/job/mock-data/jobs.ts

### B) Minimal route template

```ts
import { NextRequest, NextResponse } from "next/server";
import { mockItems } from "@/entities/<resource>/mock-data/<file>";

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
  const page = parsePositiveInt(searchParams.get("page"), 1);
  const limit = parsePositiveInt(searchParams.get("limit"), 12);

  // Multi-select filters come as repeated params: key=A&key=B
  const typeValues = normalizeMultiValues(searchParams.getAll("type"));
  const sourceValues = normalizeMultiValues(searchParams.getAll("source"));

  const filtered = mockItems.filter((item) => {
    const title = (item.title ?? "").toLowerCase();
    const description = (item.description ?? "").toLowerCase();
    const itemLocation = (item.location ?? "").toLowerCase();
    const itemType = (item.type ?? "").toLowerCase();
    const itemSource = (item.source ?? "").toLowerCase();

    const matchesQuery =
      search.length === 0 ||
      title.includes(search) ||
      description.includes(search);

    const matchesLocation =
      location.length === 0 || itemLocation.includes(location);

    // OR within same filter group, AND across groups
    const matchesType =
      typeValues.length === 0 || typeValues.includes(itemType);

    const matchesSource =
      sourceValues.length === 0 || sourceValues.includes(itemSource);

    return matchesQuery && matchesLocation && matchesType && matchesSource;
  });

  const start = (page - 1) * limit;
  const end = start + limit;
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  return NextResponse.json({
    items: filtered.slice(start, end),
    total,
    page,
    limit,
    totalPages,
  });
}
```

### C) Frontend request format for multi-select

Build params with repeated keys:

```ts
const params = new URLSearchParams();
params.append("type", "FULL_TIME");
params.append("type", "CONTRACT");

params.append("source", "LinkedIn");
params.append("source", "Indeed");
```

This produces:

- ?type=FULL_TIME&type=CONTRACT&source=LinkedIn&source=Indeed

### E) Quick checklist for route correctness

- Route reads scalar params with get().
- Route reads multi params with getAll().
- Matching uses OR within one filter field.
- Combining different fields uses AND.
- Empty filter array means "all values".
- Response always returns: items/total/page/limit/totalPages.
