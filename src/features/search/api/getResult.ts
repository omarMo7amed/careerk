export async function getResult(
  searchValue: string,
  locationValue: string,
  type: "candidate" | "job" | "company",
  options?: {
    signal?: AbortSignal;
    // page?: number;
    //  pageSize?: number
  },
) {
  // const params = new URLSearchParams();
  // if (searchValue) params.set("q", searchValue);
  // if (locationValue) params.set("location", locationValue);
  // if (options?.page) params.set("page", String(options.page));
  // if (options?.pageSize) params.set("pageSize", String(options.pageSize));

  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/${type}/search?q=${searchValue}&location=${locationValue}`;
  const res = await fetch(url, { signal: options?.signal });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Failed to fetch ${type} results (${res.status}) ${body}`);
  }

  return res.json();
}
