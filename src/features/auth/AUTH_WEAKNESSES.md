# Authentication & Authorization Weaknesses

Scope: features/auth, shared/providers, shared/lib, and entities API files.

## High Risk / Likely To Break

- Fake login implementation (no real auth, no server validation, no refresh cookie set): [src/features/auth/api/login.ts](src/features/auth/api/login.ts#L1-L45)
- Auth interceptor returns JSON instead of Response, which breaks call sites expecting Response and drops headers/status: [src/shared/lib/authInterceptor.ts](src/shared/lib/authInterceptor.ts#L26-L46)
- Auth interceptor forces `Content-Type: application/json` on all requests, which can break FormData or file uploads: [src/shared/lib/authInterceptor.ts](src/shared/lib/authInterceptor.ts#L12-L16)
- Refresh flow sets `setAuth(accessToken, user)` but the auth store expects `role` as the second argument (type mismatch and wrong state):
  - [src/features/auth/model/useAuthInit.ts](src/features/auth/model/useAuthInit.ts#L10-L17)
  - [src/features/auth/model/useRefresh.ts](src/features/auth/model/useRefresh.ts#L9-L13)

## Authorization Gaps

- AuthGuard is commented out for jobseeker dashboard routes, so role-based protection is currently bypassed: [src/app/dashboard/jobseeker/layout.tsx](src/app/dashboard/jobseeker/layout.tsx#L1-L18)
- Company dashboard layout has no AuthGuard or role check: [src/app/dashboard/company/layout.tsx](src/app/dashboard/company/layout.tsx#L1-L20)

## Token Handling Gaps in Entities API

Several entity APIs accept `token` but do not send the `Authorization` header, so calls are effectively unauthenticated.

- Skills:
  - add skills: [src/entities/skill/api/addSkill.ts](src/entities/skill/api/addSkill.ts#L1-L12)
  - delete skills: [src/entities/skill/api/deleteSkill.ts](src/entities/skill/api/deleteSkill.ts#L1-L11)
- Education:
  - create education: [src/entities/education/api/createEducation.ts](src/entities/education/api/createEducation.ts#L5-L16)
  - delete education: [src/entities/education/api/deleteEducation.ts](src/entities/education/api/deleteEducation.ts#L1-L9)
- Job seeker:
  - get profile: [src/entities/job-seeker/api/getMe.ts](src/entities/job-seeker/api/getMe.ts#L1-L12)
  - upload profile photo (presign + confirm): [src/entities/job-seeker/api/uploadProfilePhoto.ts](src/entities/job-seeker/api/uploadProfilePhoto.ts#L5-L43)
- CV:
  - upload CV (presign + confirm): [src/entities/cv/api/uploadCV.ts](src/entities/cv/api/uploadCV.ts#L1-L36)
  - get CV info: [src/entities/cv/api/getMyCVInfo.ts](src/entities/cv/api/getMyCVInfo.ts#L3-L9)
  - delete CV parse: [src/entities/cv/api/deleteCVParse.ts](src/entities/cv/api/deleteCVParse.ts#L1-L7)
- Jobs:
  - get matched jobs: [src/entities/job/api/getMatchedJobs.ts](src/entities/job/api/getMatchedJobs.ts#L29-L35)
- Improvements:
  - get improvements: [src/entities/improvement/api/getImprovements.ts](src/entities/improvement/api/getImprovements.ts#L1-L10)

## Inconsistent Base URL Usage

- `registerJobSeeker` uses `process.env.BASE_API_URL` (not `NEXT_PUBLIC_*`), which will be undefined in the browser unless explicitly exposed: [src/features/auth/api/registerJobSeeker.ts](src/features/auth/api/registerJobSeeker.ts#L6-L12)
- `registerCompany` uses `NEXT_PUBLIC_BASE_API_URL` without a fallback, so it can resolve to `undefined` in local dev: [src/features/auth/api/registerCompany.ts](src/features/auth/api/registerCompany.ts#L6-L12)
- `login` uses `NEXT_PUBLIC_BASE_API_URL` but all real fetch logic is commented out: [src/features/auth/api/login.ts](src/features/auth/api/login.ts#L6-L20)

## Shared Providers / Tooling Risks

- React Query Devtools are always mounted (potentially in production builds): [src/shared/providers/QueryProvider.tsx](src/shared/providers/QueryProvider.tsx#L21-L24)

## Notes

- `useAuthInit()` is exported but no call site is found in the app tree, so refresh-on-load may not run at all. Export only: [src/features/auth/index.ts](src/features/auth/index.ts#L1-L12)
