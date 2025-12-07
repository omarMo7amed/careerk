# CareerK Architecture Documentation

## Overview

CareerK is built using **Feature-Sliced Design (FSD)**, a modern architectural methodology that promotes scalability, maintainability, and clear separation of concerns.

## Project Structure

```
src/
├── app/                              # Next.js App Router
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Landing page
│   ├── api/                         # API routes
│   │   └── .gitkeep
│   ├── auth/                        # Authentication pages
│   │   └── .gitkeep
│   ├── candidates/                  # Candidates listing
│   │   └── .gitkeep
│   ├── companies/                   # Companies listing
│   │   └── .gitkeep
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   ├── company/                 # Company dashboard
│   │   │   ├── layout.tsx
│   │   │   ├── analytics/
│   │   │   │   └── page.tsx
│   │   │   ├── overview/
│   │   │   │   └── page.tsx
│   │   │   ├── profile/
│   │   │   │   └── page.tsx
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │   └── jobseeker/              # Jobseeker dashboard
│   │       ├── layout.tsx
│   │       ├── overview/
│   │       │   └── page.tsx
│   │       ├── profile/
│   │       │   └── page.tsx
│   │       └── settings/
│   │           └── page.tsx
│   └── jobs/                        # Jobs listing
│       └── .gitkeep
│
├── entities/                        # Domain entities
│   ├── job-seeker/
│   ├── company/
│   ├── job/
│   │   └── ui/
│   │       ├── JobCardCompany.tsx
│   │       └── JobCardJobseeker.tsx
│   ├── application/
│   │   └── ui/
│   │       └── ApplicationCard.tsx
│   └── candidate/
│       └── ui/
│           └── CandidateCard.tsx
│
├── features/                        # Business features
│   └── post-job/
│
├── shared/                          # Shared utilities & UI
│   ├── index.ts
│   ├── lib/
│   │   └── useUserRole.ts
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── ConfirmationModal.tsx
│       ├── IconX.tsx
│       ├── Input.tsx
│       ├── RoleSwitcher.tsx
│       ├── SearchBar.tsx
│       └── StaticsCard.tsx
│
└── widgets/                         # Compositional UI blocks
    ├── about-section/
    ├── display-list/
    ├── footer/
    ├── footer-section/
    ├── objectives-section/
    ├── side-bar/
    ├── top-section/
    ├── header/
    │   └── ui/
    │       ├── Header.tsx
    │       └── NavigationItems.tsx
    ├── hero-section/
    │   └── ui/
    │       └── HeroSection.tsx
    ├── recent-jobs-section/
    │   └── ui/
    │       └── Card.tsx
    ├── job-listings-widget/
    ├── job-details/
    ├── job-pannel/
    ├── profile-heading/
    ├── profile-key-info/
    ├── profile-about/
    ├── candidates-list/
    ├── job-application/
    ├── filter-sidebar/
    ├── operations-table/
    ├── jobseeker-overview/
    ├── company-overview/
    │   └── ui/
    ├── recommendation-insights/
    ├── application-details/
    ├── security-settings/
    ├── notifications-settings/
    └── danger-zone-settings/
```

## FSD Layers (Bottom to Top)

### 1. **Shared Layer** (`src/shared/`)

**Purpose**: Foundation layer with reusable code

**Contains**:

- UI components (Button, Input, Badge, etc.)
- Utilities and helpers
- Constants and types
- API client configuration

**Rules**:

- Cannot import from any other layer
- Should be completely reusable
- No business logic

### 2. **Entities Layer** (`src/entities/`)

**Purpose**: Business entities and domain models

**Contains**:

- Domain models (Job, Company, Candidate, User)
- Entity-specific UI components
- CRUD operations
- Type definitions

**Rules**:

- Can only import from `shared`
- Represents core business concepts
- Should be framework-agnostic

**Example Structure**:

```
entities/
├── job/
│   ├── model/
│   │   ├── types.ts
│   │   └── schemas.ts
│   ├── ui/
│   │   └── JobCard.tsx
│   └── api/
│       └── jobApi.ts
└── company/
    └── ...
```

### 3. **Features Layer** (`src/features/`)

**Purpose**: User-facing functionality and business logic

**Contains**:

- Feature-specific components
- Business logic and state management
- Feature-specific API calls
- User interactions

**Rules**:

- Can import from `shared` and `entities`
- Should be isolated and independent
- Implements specific user scenarios

**Example Structure**:

```
features/
├── auth/
│   ├── ui/
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   ├── model/
│   │   └── useAuth.ts
│   └── api/
│       └── authApi.ts
└── job-application/
    └── ...
```

### 4. **Widgets Layer** (`src/widgets/`)

**Purpose**: Compositional UI blocks

**Contains**:

- Complex UI compositions
- Page sections
- Reusable layouts
- Navigation components

**Rules**:

- Can import from `shared`, `entities`, and `features`
- Should be page-agnostic
- Focuses on UI composition

**Example Structure**:

```
widgets/
├── header/
│   ├── ui/
│   │   ├── Header.tsx
│   │   └── NavigationItems.tsx
│   └── lib/
│       └── helpers.ts
└── job-listing-card/
    └── ...
```

### 5. **Pages Layer** (`src/app/`)

**Purpose**: Application routes and pages (Next.js App Router)

**Contains**:

- Route definitions
- Page layouts
- Route-specific logic
- SEO metadata

**Rules**:

- Can import from all layers
- Should be thin - mostly composition
- Handles routing and data fetching

## Import Rules

### ✅ Allowed Imports

```
app       → widgets, features, entities, shared
widgets   → features, entities, shared
features  → entities, shared
entities  → shared
shared    → nothing (external libs only)
```

### ❌ Forbidden Imports

```
shared    → any layer
entities  → features, widgets, app
features  → widgets, app
widgets   → app
```

## Key Principles

### 1. **Unidirectional Dependencies**

- Higher layers can import from lower layers
- Lower layers cannot import from higher layers
- Prevents circular dependencies

### 2. **Public API**

Each module should expose a clear public API through `index.ts`:

```typescript
// features/auth/index.ts
export { LoginForm, RegisterForm } from "./ui";
export { useAuth } from "./model";
```

### 3. **Isolation**

- Features should be independent
- Changes in one feature shouldn't affect others
- Easy to add, remove, or modify features

### 4. **Reusability**

- Shared components are truly reusable
- Entities represent business domain
- Widgets can be used across multiple pages

## Naming Conventions

### Files

- Components: `PascalCase.tsx` (e.g., `Button.tsx`)
- Hooks: `camelCase.ts` with `use` prefix (e.g., `useAuth.ts`)
- Types: `PascalCase.ts` or `types.ts`
- Utils: `camelCase.ts` (e.g., `formatDate.ts`)

### Directories

- `kebab-case` for all directories (e.g., `job-listing`)
- Standard segments: `ui/`, `model/`, `api/`, `lib/`

## Benefits of This Architecture

### ✅ Scalability

- Easy to add new features without affecting existing code
- Clear boundaries prevent complexity growth

### ✅ Maintainability

- Easy to find and modify code
- Clear responsibility for each layer

### ✅ Team Collaboration

- Multiple developers can work on different features independently
- Reduced merge conflicts

### ✅ Testing

- Isolated layers are easier to test
- Mock dependencies are straightforward

### ✅ Code Reuse

- Shared components and utilities
- Consistent patterns across the app

## Development Workflow

### Adding a New Feature

1. Create feature directory in `features/`
2. Add UI components in `ui/`
3. Add business logic in `model/`
4. Add API calls in `api/`
5. Export public API in `index.ts`
6. Use in pages or widgets

### Adding a New Entity

1. Create entity directory in `entities/`
2. Define types in `model/types.ts`
3. Create entity card/display in `ui/`
4. Add CRUD operations in `api/`
5. Export public API

### Creating a Shared Component

1. Create component in `shared/ui/`
2. Make it configuration-based (props)
3. Add to `shared/index.ts`
4. Document usage

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules / Tailwind CSS
- **State Management**: React Hooks / Context
- **Architecture**: Feature-Sliced Design (FSD)

## Resources

- [Feature-Sliced Design Documentation](https://feature-sliced.design/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Last Updated**: December 2, 2025
