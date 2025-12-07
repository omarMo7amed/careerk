# CareerK - Complete Folder Structure

```
careerk/
├── .next/                          # Next.js build output (auto-generated)
├── node_modules/                   # Dependencies
├── public/                         # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── src/
│   ├── app/                        # 📄 App Layer - Next.js App Router (Pages & Routes)
│   │   ├── page.tsx               # Landing page
│   │   ├── layout.tsx             # Root layout
│   │   ├── globals.css            # Global styles
│   │   ├── favicon.ico            # Site icon
│   │   │
│   │   ├── companies/             # Companies listing page
│   │   │   └── page.tsx
│   │   │
│   │   ├── jobs/                  # Jobs listing page
│   │   │   └── page.tsx
│   │   │
│   │   ├── candidates/            # Candidates listing page
│   │   │   └── page.tsx
│   │   │
│   │   ├── auth/                  # Authentication pages
│   │   │   ├── page.tsx
│   │   │   ├── login/
│   │   │   └── register/
│   │   │
│   │   ├── dashboard/             # Dashboard routing
│   │   │   ├── layout.tsx        # Shared dashboard layout
│   │   │   │
│   │   │   ├── company/           # 🏢 Company Dashboard Routes
│   │   │   │   ├── layout.tsx    # Company dashboard layout
│   │   │   │   ├── overview/
│   │   │   │   │   └── page.tsx  # Company overview
│   │   │   │   ├── profile/
│   │   │   │   │   └── page.tsx  # Company profile
│   │   │   │   ├── joblisting/
│   │   │   │   │   └── page.tsx  # Job listings management
│   │   │   │   ├── candidates/
│   │   │   │   │   └── page.tsx  # View candidates
│   │   │   │   ├── analytics/
│   │   │   │   │   └── page.tsx  # Analytics dashboard
│   │   │   │   └── settings/
│   │   │   │       └── page.tsx  # Company settings
│   │   │   │
│   │   │   └── jobseeker/         # 👤 Jobseeker Dashboard Routes
│   │   │       ├── layout.tsx    # Jobseeker dashboard layout
│   │   │       ├── overview/
│   │   │       │   └── page.tsx  # Jobseeker overview
│   │   │       ├── profile/
│   │   │       │   └── page.tsx  # User profile
│   │   │       ├── recommended-jobs/
│   │   │       │   └── page.tsx  # Job recommendations
│   │   │       ├── find-jobs/
│   │   │       │   └── page.tsx  # Job search
│   │   │       ├── applications/
│   │   │       │   └── page.tsx  # My applications
│   │   │       ├── cv-management/
│   │   │       │   └── page.tsx  # CV upload/edit
│   │   │       └── settings/
│   │   │           └── page.tsx  # User settings
│   │   │
│   │   └── api/                   # API routes
│   │       ├── auth/
│   │       ├── jobs/
│   │       └── applications/
│   │
│   ├── widgets/                   # 🧩 Widgets Layer - Compositional UI Blocks
│   │   ├── README.md             # Layer documentation
│   │   │
│   │   ├── header/               # Site header widget
│   │   │   └── ui/
│   │   │       ├── Header.tsx
│   │   │       └── NavigationItems.tsx
│   │   │
│   │   ├── footer/               # Site footer widget
│   │   │   └── ui/
│   │   │       └── Footer.tsx
│   │   │
│   │   ├── hero-section/         # Landing page hero
│   │   │   └── ui/
│   │   │       └── HeroSection.tsx
│   │   │
│   │   ├── objectives-section/   # Objectives display
│   │   │   └── ui/
│   │   │
│   │   ├── about-section/        # About section
│   │   │   └── ui/
│   │   │
│   │   ├── recent-jobs-section/  # Recent jobs widget
│   │   │   └── ui/
│   │   │       └── Card.tsx
│   │   │
│   │   ├── top-section/          # Top section widget
│   │   │   └── ui/
│   │   │
│   │   ├── footer-section/       # Footer content widget
│   │   │   └── ui/
│   │   │
│   │   ├── filter-bar/           # Job/candidate filtering
│   │   │   └── ui/
│   │   │
│   │   ├── filter-sidebar/       # Filter sidebar widget
│   │   │   └── ui/
│   │   │
│   │   ├── display-list/         # Generic list display
│   │   │   └── ui/
│   │   │
│   │   ├── side-bar/             # Dashboard sidebar navigation
│   │   │   └── ui/
│   │   │
│   │   ├── company-overview/     # Company dashboard overview widget
│   │   │   └── ui/
│   │   │
│   │   ├── jobseeker-overview/   # Jobseeker dashboard overview widget
│   │   │   └── ui/
│   │   │
│   │   ├── job-listings-widget/  # Job listings display
│   │   │   └── ui/
│   │   │
│   │   ├── job-details/          # Job details display
│   │   │   └── ui/
│   │   │
│   │   ├── job-pannel/           # Job panel widget
│   │   │   └── ui/
│   │   │
│   │   ├── job-application/      # Job application widget
│   │   │   └── ui/
│   │   │
│   │   ├── candidates-list/      # Candidates list widget
│   │   │   └── ui/
│   │   │
│   │   ├── application-details/  # Application details widget
│   │   │   └── ui/
│   │   │
│   │   ├── profile-heading/      # Profile header widget
│   │   │   └── ui/
│   │   │
│   │   ├── profile-key-info/     # Profile key information
│   │   │   └── ui/
│   │   │
│   │   ├── profile-about/        # Profile about section
│   │   │   └── ui/
│   │   │
│   │   ├── user-cv/             # User CV display widget
│   │   │   └── ui/
│   │   │
│   │   ├── first-cv-upload/      # First-time CV upload widget
│   │   │   └── ui/
│   │   │
│   │   ├── extracted-cv-info/    # Extracted CV information display
│   │   │   └── ui/
│   │   │
│   │   ├── skill-overview/       # Skills overview widget
│   │   │   ├── model/
│   │   │   └── ui/
│   │   │
│   │   ├── recommendation-insights/ # Recommendation insights widget
│   │   │   └── ui/
│   │   │
│   │   ├── operations-table/     # Operations/actions table
│   │   │   └── ui/
│   │   │
│   │   ├── charts/              # Charts and analytics widgets
│   │   │   └── ui/
│   │   │
│   │   ├── security-settings/    # Security settings widget
│   │   │   └── ui/
│   │   │
│   │   ├── notifications-settings/ # Notifications settings widget
│   │   │   └── ui/
│   │   │
│   │   └── danger-zone-settings/ # Danger zone settings widget
│   │       └── ui/
│   │
│   ├── features/                  # 🎯 Features Layer - Business Features & User Actions
│   │   ├── README.md             # Layer documentation
│   │   │
│   │   └── post-job/             # Job posting feature
│   │       ├── ui/
│   │       ├── model/
│   │       ├── api/
│   │       └── index.ts
│   │
│   ├── entities/                  # 🎲 Entities Layer - Domain Models & Business Logic
│   │   ├── README.md             # Layer documentation
│   │   │
│   │   ├── job/                  # Job entity
│   │   │   ├── model/
│   │   │   │   └── types.ts
│   │   │   ├── ui/
│   │   │   │   ├── JobCardCompany.tsx
│   │   │   │   └── JobCardJobseeker.tsx
│   │   │   ├── api/
│   │   │   └── index.ts
│   │   │
│   │   ├── job-seeker/           # Jobseeker entity
│   │   │   ├── model/
│   │   │   ├── ui/
│   │   │   ├── api/
│   │   │   └── index.ts
│   │   │
│   │   ├── company/              # Company entity
│   │   │   ├── model/
│   │   │   ├── ui/
│   │   │   ├── api/
│   │   │   └── index.ts
│   │   │
│   │   ├── candidate/            # Candidate entity
│   │   │   ├── model/
│   │   │   ├── ui/
│   │   │   │   └── CandidateCard.tsx
│   │   │   ├── api/
│   │   │   └── index.ts
│   │   │
│   │   ├── application/          # Application entity
│   │   │   ├── model/
│   │   │   ├── ui/
│   │   │   │   └── ApplicationCard.tsx
│   │   │   ├── api/
│   │   │   └── index.ts
│   │   │
│   │   ├── cv/                   # CV entity
│   │   │   ├── model/
│   │   │   ├── ui/
│   │   │   ├── api/
│   │   │   └── index.ts
│   │   │
│   │   ├── skill/                # Skill entity
│   │   │   ├── model/
│   │   │   ├── ui/
│   │   │   ├── api/
│   │   │   └── index.ts
│   │   │
│   │   ├── education/            # Education entity
│   │   │   ├── model/
│   │   │   ├── ui/
│   │   │   ├── api/
│   │   │   └── index.ts
│   │   │
│   │   ├── experience/           # Experience entity
│   │   │   ├── model/
│   │   │   ├── ui/
│   │   │   ├── api/
│   │   │   └── index.ts
│   │   │
│   │   └── improvment/           # Improvement entity
│   │       ├── model/
│   │       ├── ui/
│   │       ├── api/
│   │       └── index.ts
│   │
│   └── shared/                    # 🔧 Shared Layer - Foundation & Reusable Components
│       ├── index.ts              # Barrel exports
│       │
│       ├── ui/                   # Reusable UI components
│       │   ├── Button.tsx
│       │   ├── Badge.tsx
│       │   ├── IconX.tsx
│       │   ├── SearchBar.tsx
│       │   ├── Input.tsx
│       │   ├── ConfirmationModal.tsx
│       │   ├── RoleSwitcher.tsx
│       │   └── StaticsCard.tsx
│       │
│       ├── lib/                  # Utility functions & hooks
│       │   ├── useUserRole.ts
│       │   ├── formatters.ts
│       │   └── validators.ts
│       │
│       ├── types/                # Global TypeScript types
│       │   └── common.ts
│       │
│       └── config/               # Configuration files
│           └── constants.ts

├── .gitignore                     # Git ignore rules
├── package.json                   # Dependencies & scripts
├── pnpm-lock.yaml                 # PNPM lock file
├── tsconfig.json                  # TypeScript configuration
├── next.config.ts                 # Next.js configuration
├── postcss.config.mjs             # PostCSS configuration
├── eslint.config.mjs              # ESLint configuration
├── README.md                      # Project overview & setup guide
├── ARCHITECTURE.md                # FSD architecture documentation
├── STRUCTURE.md                   # This file - complete folder structure
├── FSD_IMPLEMENTATION.md          # FSD implementation guide
└── DASHBOARD_SOLUTION.md          # Dashboard architecture solution

```

## 📊 FSD Layer Dependency Flow

```
┌─────────────────────────────────────────────────┐
│                   APP (Pages)                    │  ← Top layer
│            Next.js App Router Routes             │    Can import from ALL layers
│         Orchestrates the entire application      │
└─────────────────────────────────────────────────┘
                       ↑
                       │ imports from
                       │
┌─────────────────────────────────────────────────┐
│                   WIDGETS                        │  ← Compositional layer
│          Complex UI Blocks & Sections            │    Can import from:
│        Combines features, entities, shared       │    • features, entities, shared
└─────────────────────────────────────────────────┘
                       ↑
                       │ imports from
                       │
┌─────────────────────────────────────────────────┐
│                  FEATURES                        │  ← User actions layer
│       User Actions & Business Features           │    Can import from:
│         (auth, post-job, apply, etc.)            │    • entities, shared
└─────────────────────────────────────────────────┘
                       ↑
                       │ imports from
                       │
┌─────────────────────────────────────────────────┐
│                  ENTITIES                        │  ← Business domain layer
│             Domain Models & Logic                │    Can import from:
│   (job, company, candidate, application, etc.)   │    • shared only
└─────────────────────────────────────────────────┘
                       ↑
                       │ imports from
                       │
┌─────────────────────────────────────────────────┐
│                   SHARED                         │  ← Foundation layer
│      Reusable UI Components & Utilities          │    Cannot import from any
│         (Button, Input, hooks, utils)            │    internal layer
└─────────────────────────────────────────────────┘    (external libs only)
```

## 🎯 Standard Segment Structure

Each feature/entity/widget follows this internal structure:

```
my-module/
├── ui/          # React components (UI layer)
├── model/       # Business logic, hooks, state management
├── api/         # API calls and data fetching
├── lib/         # Helper functions and utilities
└── index.ts     # Public API - barrel exports
```

**Note:** Not all segments are required. Use only what you need for the specific module.

## 📝 Naming Conventions

### Files

- **Components**: `PascalCase.tsx` (e.g., `Button.tsx`, `JobCard.tsx`)
- **Hooks**: `camelCase.ts` with `use` prefix (e.g., `useAuth.ts`, `useUserRole.ts`)
- **Types**: `types.ts` or `PascalCase.ts` (e.g., `JobTypes.ts`)
- **Utils**: `camelCase.ts` (e.g., `formatDate.ts`, `validators.ts`)
- **API**: `camelCase.ts` with descriptive name (e.g., `jobApi.ts`, `authApi.ts`)

### Directories

- **All directories**: `kebab-case` (e.g., `job-application`, `user-profile`, `cv-management`)
- **Standard segments**: `ui/`, `model/`, `api/`, `lib/`

## 🔄 Import Patterns

### ✅ Good - Using Barrel Exports

```typescript
// Import from shared
import { Button, Input, Badge } from "@/shared";

// Import from entities
import { JobCard } from "@/entities/job";
import { ApplicationCard } from "@/entities/application";

// Import from features
import { PostJobForm } from "@/features/post-job";

// Import from widgets
import { Header } from "@/widgets/header";
import { CompanyOverview } from "@/widgets/company-overview";
```

### ❌ Bad - Deep Imports (Avoid)

```typescript
// Don't bypass barrel exports
import { Button } from "@/shared/ui/Button";
import { JobCard } from "@/entities/job/ui/JobCard";
import { useAuth } from "@/features/auth/model/useAuth";
```

## 🚦 Import Rules Matrix

| Layer        | Can Import From                     | Cannot Import From     | Purpose                          |
| ------------ | ----------------------------------- | ---------------------- | -------------------------------- |
| **app**      | widgets, features, entities, shared | -                      | Routes & pages composition       |
| **widgets**  | features, entities, shared          | app                    | Complex UI blocks                |
| **features** | entities, shared                    | widgets, app           | User actions & business features |
| **entities** | shared                              | features, widgets, app | Domain models & business logic   |
| **shared**   | external libs only                  | ALL internal layers    | Reusable foundation              |

## 🏗️ Key Architecture Principles

### 1. **Unidirectional Dependencies**

- Dependencies flow from top to bottom (app → widgets → features → entities → shared)
- Higher layers can import from lower layers
- Lower layers CANNOT import from higher layers
- Prevents circular dependencies and maintains clean architecture

### 2. **Public API Through Barrel Exports**

Each module exposes only what's needed through `index.ts`:

```typescript
// entities/job/index.ts
export { JobCardCompany, JobCardJobseeker } from "./ui";
export type { Job, JobStatus } from "./model/types";
export { useJobs, useJob } from "./api";
```

### 3. **Isolation & Independence**

- Features are independent and self-contained
- Changes in one feature don't affect others
- Easy to add, remove, or modify features
- Promotes parallel development

### 4. **Separation of Concerns**

- **Shared**: No business logic, only reusable foundation
- **Entities**: Business domain, framework-agnostic
- **Features**: User-facing functionality
- **Widgets**: UI composition
- **App**: Routing and orchestration

## 📦 Current Implementation Status

### ✅ Implemented Layers

- **App Layer**: Complete routing structure for both company and jobseeker dashboards
- **Widgets Layer**: 30+ widgets for various UI sections
- **Entities Layer**: 10 domain entities (job, company, candidate, etc.)
- **Features Layer**: Post-job feature
- **Shared Layer**: Reusable UI components and utilities

### 🏢 Company Dashboard Routes

```
/dashboard/company/overview       # Company dashboard home
/dashboard/company/profile        # Company profile management
/dashboard/company/joblisting     # Job listings management
/dashboard/company/candidates     # View candidate applications
/dashboard/company/analytics      # Analytics & insights
/dashboard/company/settings       # Company settings
```

### 👤 Jobseeker Dashboard Routes

```
/dashboard/jobseeker/overview        # Jobseeker dashboard home
/dashboard/jobseeker/profile         # User profile management
/dashboard/jobseeker/recommended-jobs # AI-recommended jobs
/dashboard/jobseeker/find-jobs       # Job search & discovery
/dashboard/jobseeker/applications    # Application tracking
/dashboard/jobseeker/cv-management   # CV upload & management
/dashboard/jobseeker/settings        # User settings
```

## 📚 Related Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)**: Detailed FSD architecture documentation
- **[FSD_IMPLEMENTATION.md](./FSD_IMPLEMENTATION.md)**: FSD implementation guidelines
- **[DASHBOARD_SOLUTION.md](./DASHBOARD_SOLUTION.md)**: Dashboard architecture details
- **[README.md](./README.md)**: Project overview and getting started guide

## 🔗 Additional Resources

- [Feature-Sliced Design Official Documentation](https://feature-sliced.design/)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Legend:**

- 📄 **App Layer** - Next.js App Router (Pages & Routes)
- 🧩 **Widgets Layer** - Compositional UI Blocks
- 🎯 **Features Layer** - Business Features & User Actions
- 🎲 **Entities Layer** - Domain Models & Business Logic
- 🔧 **Shared Layer** - Foundation & Reusable Components

---

**Last Updated**: December 7, 2025
