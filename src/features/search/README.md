# Search — Model (src/features/search/model)

This document explains every function in the `model/` layer for the `search` feature. It focuses on purpose, API (parameters / return values), internal behavior, examples, testing tips, and extension points. Use this as the authoritative reference when updating the search logic or writing tests.

---

## Files covered

- `useDebouncedValue.ts` — small debounce hook used by the search logic
- `useSearchQuery.ts` — TanStack-based data-fetching hook (typeahead + imperative fetch)
- `useSearchController.ts` — UI controller that orchestrates keyboard, focus, outside-click, selection, and routing

> Model responsibilities: contain side-effects, network orchestration, caching and UX-related state (open/highlighted). UI rendering belongs in `ui/`.

---

## `useDebouncedValue<T>(value: T, delay = 300): T`

Signature

```ts
export function useDebouncedValue<T>(value: T, delay = 300): T;
```

Purpose

- Return a debounced copy of `value` that only updates after `delay` ms.
- Used to avoid spamming the external API on every keypress.

Behavior / Implementation details

- Internally uses `setTimeout` / `clearTimeout` in a `useEffect` hook.
- Resets timeout whenever `value` or `delay` changes.
- Cleans up the timer on unmount.
- SSR-safe (returns the provided `value` immediately on first render).

Usage example

```ts
const debounced = useDebouncedValue(query, 300);
// use `debounced` for triggering network calls
```

Edge cases & tests

- Test that value updates only after delay using fake timers (Jest `useFakeTimers`).
- Verify cleanup cancels pending timer.

---

## `useSearchQuery(options?)`

Signature (simplified)

```ts
useSearchQuery(options?: {
  initialQuery?: string;
  initialLocation?: string;
  debounceMs?: number; // client-side debounce for inputs
  type?: 'job' | 'candidate' | 'company';
}) => {
  query: string;
  setQuery: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  results: Job[] | null;
  isLoading: boolean;
  error: Error | null;
  searchNow: (opts?: { page?: number; pageSize?: number }) => Promise<Job[] | null>;
  clear: () => void;
}
```

Purpose

- Centralized data-fetching hook for typeahead and search results.
- Uses TanStack Query (v5) for caching, deduping, and request lifecycle.
- Debounces user input and keeps the UI responsive.

Behavior / Implementation details

- Uses `useDebouncedValue` for `query` and `location`.
- `useQuery` key: `['search', type, debouncedQuery, debouncedLocation]`.
- `getResult(...)` is the fetcher — it accepts an `AbortSignal` and pagination params.
- Query `enabled` when either debounced query or location is present.
- `searchNow()` performs an immediate `queryClient.fetchQuery(...)` for Enter/button clicks.
- `clear()` resets local state and removes matching cached queries from the client.
- Errors bubble via the `error` return value; aborts are ignored silently.

Important behaviors to remember

- Caching & stale policy are governed by the QueryClient defaults (see `QueryProvider`).
- Debounce prevents calling the remote backend on every single keystroke.
- `searchNow()` is useful for immediate results (bypasses debounce window).
- `getResult` will throw on non-2xx — `useSearchQuery` surfaces that in `error`.

Typical usage

```tsx
const { query, setQuery, results, isLoading, searchNow } = useSearchQuery({
  type: "job",
});

// bind `query` & `setQuery` to inputs; call `searchNow()` for immediate fetch
```

Testing recommendations

- Unit test network behavior with `msw` + `renderHook` to assert fetch, abort, and caching flows.
- Test `searchNow()` triggers `queryClient.fetchQuery` and returns results.
- Test `clear()` removes queries from the cache and resets local state.

Performance / production tips

- Tune `debounceMs` and `staleTime` depending on traffic and UX expectations.
- Consider server-side prefetching for first-page results if SEO/SSR is required.
- Validate and sanitize `query`/`location` on the backend to avoid injection.

---

## `useSearchController(options?)`

Signature (simplified)

```ts
useSearchController(options?: {
  type?: 'job'|'candidate'|'company';
  debounceMs?: number;
  initialQuery?: string;
  initialLocation?: string;
  maxSuggestions?: number;
  onSelect?: (item: Job) => void;
}) => {
  containerRef: RefObject<HTMLDivElement | null>;
  query: string; setQuery: (v: string) => void;
  location: string; setLocation: (v: string) => void;
  suggestions: Job[]; // limited
  allSuggestions: Job[]; // full results
  isLoading: boolean; error: Error | null;
  open: boolean; setOpen: (b: boolean) => void;
  highlighted: number; setHighlighted: (n: number) => void;
  shouldShow: boolean; // derived
  onKeyDown: (e) => void; // wired to input
  onSelect: (item: Job) => void; // selection handler (navigates or calls provided onSelect)
  searchNow: (...) => Promise<Job[] | null>;
  clear: () => void;
}
```

Purpose

- Keeps UI orchestration out of `ui/` components.
- Handles keyboard navigation (ArrowUp/ArrowDown/Enter/Escape), outside clicks, selection logic, and integration with `useSearchQuery`.
- Returns `containerRef` so the UI can attach the click-outside boundary.

Behavior / Implementation details

- Internally calls `useSearchQuery` for network/caching logic.
- Uses the shared `useClickOutside` hook to close the dropdown when the user clicks outside.
- Maintains `open` and `highlighted` state for dropdown control and keyboard navigation.
- `onSelect` will either call the `onSelect` callback provided in options or navigate to a details/list page using `router.push`.

Why it exists / FSD rationale

- Keeps `ui/` components pure and easy to test.
- Enables reuse of the same controller logic with different UIs (desktop/widget/mobile variants).

Accessibility notes

- Keyboard handlers follow common combobox behaviors.
- Ensure focus remains on the input while navigating suggestions.

Testing recommendations

- Test keyboard flows (arrow navigation, enter to select, escape to close).
- Test outside-click behavior using `pointerdown` events.
- Mock `useSearchQuery` when testing controller logic in isolation.

---

## API contract & dependencies

- Fetcher: `src/features/search/api/getResult.ts`
  - Signature: `getResult(searchValue, locationValue, type, options?)`
  - Uses `NEXT_PUBLIC_BASE_API_URL` (set in `.env` / deployment environment).
  - Supports `AbortSignal`, pagination params, and returns parsed JSON.

- TanStack React Query is used in `useSearchQuery` for caching/deduping.

---

## Testing checklist (recommended)

- Unit tests for `useDebouncedValue` (timers).
- `useSearchQuery`:
  - success / error paths (use `msw` to mock API)
  - behavior of `searchNow()` and `clear()`
  - caching behavior (same key returns cached data)
- `useSearchController`:
  - keyboard navigation
  - outside-click closes dropdown
  - `onSelect` navigation / callback
- Integration/E2E: type-to-search + select suggestion flows (Cypress / Playwright)

---

## Extension ideas / next steps

- Add `useInfiniteSearch` (server cursor / pageable results) using `useInfiniteQuery`.
- Server-side proxy route to hide `NEXT_PUBLIC_BASE_API_URL` and centralize retries/rate-limiting.
- Suggestion ranking and local cache for frequently used queries.
- Add telemetry for searches (search term, result count, selected suggestion) — respect privacy.

---

## Where to look in the code

- Model hooks: `src/features/search/model/`
- UI components: `src/features/search/ui/`
- Fetcher / API: `src/features/search/api/getResult.ts`
