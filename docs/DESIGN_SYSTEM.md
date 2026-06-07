# 🎨 CareerK Front-End Design System

> Comprehensive visual architecture reference for the CareerK platform.
> Built with **Next.js 16** · **TypeScript** · **Tailwind CSS v4** · **Feature-Sliced Design**

---

## Table of Contents

- [1. Architecture Overview](#1-architecture-overview)
- [2. FSD Layer Dependency Map](#2-fsd-layer-dependency-map)
- [3. Component Hierarchy](#3-component-hierarchy)
- [4. Page Routing Architecture](#4-page-routing-architecture)
- [5. Data Flow Architecture](#5-data-flow-architecture)
- [6. Authentication Flow](#6-authentication-flow)
- [7. CV State Machine](#7-cv-state-machine)
- [8. Widget Composition Map](#8-widget-composition-map)
- [9. State Management Architecture](#9-state-management-architecture)
- [10. Design Tokens](#10-design-tokens)
- [11. Import Rules & Boundaries](#11-import-rules--boundaries)

---

## 1. Architecture Overview

CareerK follows **Feature-Sliced Design (FSD)** — a modern front-end architectural methodology. The codebase is organized into 5 layers with strict unidirectional dependency rules.

```mermaid
graph TB
    subgraph ARCHITECTURE["🏗️ CareerK Architecture"]
        direction TB

        APP["🔵 APP LAYER<br/><i>Pages & Routing</i><br/>Next.js App Router"]
        WIDGETS["🟣 WIDGETS LAYER<br/><i>Compositional UI Blocks</i><br/>34 widgets"]
        FEATURES["🟠 FEATURES LAYER<br/><i>User Interactions</i><br/>13 features"]
        ENTITIES["🟢 ENTITIES LAYER<br/><i>Domain Models</i><br/>11 entities"]
        SHARED["⚪ SHARED LAYER<br/><i>Foundation</i><br/>27 UI components"]

        APP --> WIDGETS
        APP --> FEATURES
        APP --> ENTITIES
        APP --> SHARED
        WIDGETS --> FEATURES
        WIDGETS --> ENTITIES
        WIDGETS --> SHARED
        FEATURES --> ENTITIES
        FEATURES --> SHARED
        ENTITIES --> SHARED
    end

    style APP fill:#1e40af,stroke:#3b82f6,color:#fff,stroke-width:2px
    style WIDGETS fill:#7e22ce,stroke:#a855f7,color:#fff,stroke-width:2px
    style FEATURES fill:#c2410c,stroke:#f97316,color:#fff,stroke-width:2px
    style ENTITIES fill:#15803d,stroke:#22c55e,color:#fff,stroke-width:2px
    style SHARED fill:#374151,stroke:#9ca3af,color:#fff,stroke-width:2px
    style ARCHITECTURE fill:#0f172a,stroke:#334155,color:#e2e8f0,stroke-width:3px
```

---

## 2. FSD Layer Dependency Map

A detailed view of how each layer connects and what it contains.

```mermaid
graph LR
    subgraph SHARED_LAYER["⚪ shared/"]
        direction TB
        S_UI["ui/<br/>27 components"]
        S_LIB["lib/<br/>15 utilities"]
        S_API["api/<br/>refreshToken"]
        S_TYPES["types/<br/>auth, ranking, avatar"]
        S_CONFIG["config/"]
        S_CONST["constant/"]
        S_PROVIDERS["providers/"]
    end

    subgraph ENTITIES_LAYER["🟢 entities/"]
        direction TB
        E_JOB["job/"]
        E_COMPANY["company/"]
        E_JOBSEEKER["job-seeker/"]
        E_APPLICATION["application/"]
        E_CV["cv/"]
        E_EDUCATION["education/"]
        E_EXPERIENCE["experience/"]
        E_SKILL["skill/"]
        E_IMPROVEMENT["improvement/"]
        E_COMP_APP["company-applications/"]
        E_COMP_JOB["company-job/"]
    end

    subgraph FEATURES_LAYER["🟠 features/"]
        direction TB
        F_AUTH["auth/"]
        F_SEARCH["search/"]
        F_FILTER["filter/"]
        F_APPLY["apply-now/"]
        F_BOOKMARK["bookmark-job/"]
        F_POSTJOB["post-job-form/"]
        F_UPLOAD["upload-cv/"]
        F_CHANGEPW["change-password/"]
        F_DELETE["delete-account/"]
        F_SUGGEST["suggest-improvements/"]
        F_TOGGLE_N["toggle-notification/"]
        F_TOGGLE_T["toggle-theme/"]
        F_WITHDRAW["withdraw-application/"]
    end

    subgraph WIDGETS_LAYER["🟣 widgets/"]
        direction TB
        W_HEADER["header/"]
        W_FOOTER["footer/"]
        W_SIDEBAR["side-bar/"]
        W_DASH["dashboard-header/"]
        W_HOME["home-layout/"]
        W_LOGIN["login-layout/"]
        W_REGISTER["register-layout/"]
        W_JOBS["jobs-layout/ + find-jobs-layout/"]
        W_PROFILE["jobseeker-profile/ + company-profile/"]
        W_OVERVIEW["jobseeker-overview/ + company-overview/"]
        W_CV["cv-management/"]
        W_APPS["jobseeker-applications/ + company-job-applications/"]
        W_SETTINGS["settings-layout/"]
        W_MORE["... 20+ more widgets"]
    end

    ENTITIES_LAYER --> SHARED_LAYER
    FEATURES_LAYER --> ENTITIES_LAYER
    FEATURES_LAYER --> SHARED_LAYER
    WIDGETS_LAYER --> FEATURES_LAYER
    WIDGETS_LAYER --> ENTITIES_LAYER
    WIDGETS_LAYER --> SHARED_LAYER

    style SHARED_LAYER fill:#1f2937,stroke:#6b7280,color:#e5e7eb,stroke-width:2px
    style ENTITIES_LAYER fill:#14532d,stroke:#22c55e,color:#dcfce7,stroke-width:2px
    style FEATURES_LAYER fill:#7c2d12,stroke:#f97316,color:#fed7aa,stroke-width:2px
    style WIDGETS_LAYER fill:#581c87,stroke:#a855f7,color:#f3e8ff,stroke-width:2px
```

---

## 3. Component Hierarchy

### 3.1 Shared UI Component Library

```mermaid
graph TD
    subgraph UI_LIB["🧩 shared/ui — 27 Components"]
        direction TB

        subgraph FORM["📝 Form Controls"]
            Input["Input"]
            Select["Select"]
            Label["Label"]
            FieldError["FieldError"]
            Toggle["Toggle"]
        end

        subgraph ACTION["⚡ Actions"]
            Button["Button"]
            BackButton["BackButton"]
            DeleteButton["DeleteButton"]
        end

        subgraph DISPLAY["📊 Display"]
            Badge["Badge"]
            RankingBadge["RankingBadge"]
            Banner["Banner"]
            Card["Card"]
            CardHeader["CardHeader"]
            Tabs["Tabs"]
            Divider["Divider"]
            Pagination["Pagination"]
        end

        subgraph FEEDBACK["💬 Feedback"]
            Modal["Modal"]
            ConfirmationModal["ConfirmationModal"]
            Loader["Loader"]
            Empty["Empty"]
            Error["Error"]
        end

        subgraph LAYOUT["🖼️ Layout & Navigation"]
            DashboardHeader["DashboardHeader"]
            AnimatedSidebar["AnimatedSidebar"]
            AuthGuard["AuthGuard"]
        end

        subgraph DECORATIVE["✨ Decorative"]
            FloatingShapes["FloatingShapes"]
            GoogleIcon["GoogleIcon"]
            UserAvatar["UserAvatar"]
        end
    end

    style UI_LIB fill:#0f172a,stroke:#475569,color:#e2e8f0,stroke-width:2px
    style FORM fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe,stroke-width:1px
    style ACTION fill:#3b1f0b,stroke:#f97316,color:#fed7aa,stroke-width:1px
    style DISPLAY fill:#1a2e05,stroke:#22c55e,color:#bbf7d0,stroke-width:1px
    style FEEDBACK fill:#3b0764,stroke:#a855f7,color:#e9d5ff,stroke-width:1px
    style LAYOUT fill:#312e81,stroke:#6366f1,color:#c7d2fe,stroke-width:1px
    style DECORATIVE fill:#4a1d42,stroke:#ec4899,color:#fce7f3,stroke-width:1px
```

### 3.2 Entity Components

```mermaid
graph TD
    subgraph ENTITIES["🟢 Entity Components"]
        direction TB

        subgraph JOB_ENTITY["💼 Job"]
            JOB_MODEL["model/ — types, schemas"]
            JOB_API["api/ — CRUD operations"]
            JOB_UI["ui/ — JobCard variants"]
        end

        subgraph COMPANY_ENTITY["🏢 Company"]
            COMP_MODEL["model/ — types"]
            COMP_API["api/ — company endpoints"]
            COMP_UI["ui/ — Company cards"]
        end

        subgraph JOBSEEKER_ENTITY["👤 Job Seeker"]
            JS_MODEL["model/ — profile types"]
            JS_API["api/ — seeker endpoints"]
            JS_UI["ui/ — Seeker components"]
        end

        subgraph APP_ENTITY["📄 Application"]
            APP_MODEL["model/ — application types"]
            APP_API["api/ — apply endpoints"]
            APP_UI["ui/ — ApplicationCard"]
        end

        subgraph CV_ENTITY["📋 CV"]
            CV_MODEL["model/ — CV types"]
            CV_API["api/ — CV parsing"]
        end

        subgraph PROFILE_ENTITIES["📚 Profile Sub-entities"]
            EDUCATION["education/"]
            EXPERIENCE["experience/"]
            SKILL["skill/"]
            IMPROVEMENT["improvement/"]
        end
    end

    style ENTITIES fill:#052e16,stroke:#22c55e,color:#dcfce7,stroke-width:2px
    style JOB_ENTITY fill:#14532d,stroke:#4ade80,color:#f0fdf4,stroke-width:1px
    style COMPANY_ENTITY fill:#14532d,stroke:#4ade80,color:#f0fdf4,stroke-width:1px
    style JOBSEEKER_ENTITY fill:#14532d,stroke:#4ade80,color:#f0fdf4,stroke-width:1px
    style APP_ENTITY fill:#14532d,stroke:#4ade80,color:#f0fdf4,stroke-width:1px
    style CV_ENTITY fill:#14532d,stroke:#4ade80,color:#f0fdf4,stroke-width:1px
    style PROFILE_ENTITIES fill:#14532d,stroke:#4ade80,color:#f0fdf4,stroke-width:1px
```

---

## 4. Page Routing Architecture

```mermaid
graph TD
    subgraph ROUTES["🌐 Next.js App Router"]
        ROOT["/ <br/> Root Layout"]

        subgraph PUBLIC["📖 Public Routes — (public)/"]
            HOME["/ <br/> Landing Page"]
            JOBS_PUB["/jobs <br/> Jobs Listing"]
            COMPANIES["/companies <br/> Companies Listing"]
            CANDIDATES["/candidates <br/> Candidates Listing"]
        end

        subgraph AUTH_ROUTES["🔐 Auth Routes — auth/"]
            LOGIN["/auth/login"]
            REGISTER["/auth/register"]
            VERIFY["/auth/verify-email"]
            FORGOT["/auth/forgot-password"]
            RESET["/auth/reset-password"]
        end

        subgraph DASHBOARD["📊 Dashboard Routes"]
            subgraph JS_DASH["👤 Jobseeker — dashboard/jobseeker/"]
                JS_OVERVIEW["/overview"]
                JS_PROFILE["/profile"]
                JS_CV["/cv-management"]
                JS_FIND["/find-jobs"]
                JS_SAVED["/saved-jobs"]
                JS_RECOMMENDED["/recommended-jobs"]
                JS_APPS["/applications"]
                JS_SETTINGS["/settings"]
            end

            subgraph CO_DASH["🏢 Company — dashboard/company/"]
                CO_OVERVIEW["/overview"]
                CO_PROFILE["/profile"]
                CO_ANALYTICS["/analytics"]
                CO_LISTINGS["/job-listings"]
                CO_CANDIDATES["/candidates"]
                CO_SETTINGS["/settings"]
            end
        end

        ROOT --> PUBLIC
        ROOT --> AUTH_ROUTES
        ROOT --> DASHBOARD
    end

    style ROUTES fill:#0c0a09,stroke:#44403c,color:#fafaf9,stroke-width:3px
    style PUBLIC fill:#1e3a5f,stroke:#3b82f6,color:#dbeafe,stroke-width:2px
    style AUTH_ROUTES fill:#3b0764,stroke:#a855f7,color:#f3e8ff,stroke-width:2px
    style DASHBOARD fill:#1c1917,stroke:#78716c,color:#f5f5f4,stroke-width:2px
    style JS_DASH fill:#0c4a6e,stroke:#0ea5e9,color:#e0f2fe,stroke-width:1px
    style CO_DASH fill:#713f12,stroke:#eab308,color:#fef9c3,stroke-width:1px
```

---

## 5. Data Flow Architecture

```mermaid
graph LR
    subgraph CLIENT["🖥️ Client"]
        direction TB
        UI["React Components"]
        RQ["React Query Cache"]
        ZS["Zustand Store"]
        TM["Token Manager<br/>(In-Memory)"]
    end

    subgraph MIDDLEWARE["⚙️ Middleware"]
        direction TB
        AI["Auth Interceptor"]
        RQU["Refresh Queue"]
    end

    subgraph SERVER["☁️ Backend API"]
        direction TB
        API_AUTH["Auth Endpoints"]
        API_DATA["Data Endpoints"]
        COOKIE["HttpOnly Cookie<br/>(Refresh Token)"]
    end

    UI -->|"useQuery / useMutation"| RQ
    UI -->|"useAuthStore"| ZS
    UI -->|"useAuth()"| TM

    RQ -->|"fetch with Bearer token"| AI
    AI -->|"attach Authorization header"| API_DATA
    AI -->|"401 → queue & refresh"| RQU
    RQU -->|"POST /auth/refresh-token"| API_AUTH

    API_AUTH -->|"Set-Cookie: HttpOnly"| COOKIE
    API_AUTH -->|"accessToken + user"| TM
    TM -->|"token update"| ZS
    API_DATA -->|"response data"| RQ

    style CLIENT fill:#0f172a,stroke:#334155,color:#e2e8f0,stroke-width:2px
    style MIDDLEWARE fill:#1e1b4b,stroke:#6366f1,color:#c7d2fe,stroke-width:2px
    style SERVER fill:#052e16,stroke:#22c55e,color:#dcfce7,stroke-width:2px
```

---

## 6. Authentication Flow

### 6.1 Login Flow

```mermaid
sequenceDiagram
    actor User
    participant UI as Login Form
    participant Hook as useAuth()
    participant Store as Auth Store (Zustand)
    participant TM as Token Manager
    participant API as POST /auth/login
    participant Cookie as Browser Cookie

    User->>UI: Enter email + password
    UI->>Hook: login(credentials)
    Hook->>API: POST request
    API-->>Cookie: Set-Cookie: refreshToken (HttpOnly)
    API-->>Hook: { accessToken, user }
    Hook->>TM: setToken(accessToken)
    Hook->>Store: setUser(user), setAuthenticated(true)
    Store-->>UI: Re-render (authenticated)
    UI->>User: Redirect to Dashboard
```

### 6.2 Token Refresh Flow

```mermaid
sequenceDiagram
    participant Req as API Request
    participant Interceptor as Auth Interceptor
    participant Queue as Refresh Queue
    participant API as POST /auth/refresh-token
    participant TM as Token Manager
    participant Cookie as HttpOnly Cookie

    Req->>Interceptor: Request with expired token
    Interceptor-->>Req: 401 Unauthorized

    alt First 401 (no refresh in progress)
        Interceptor->>Queue: Queue request + start refresh
        Queue->>API: POST /auth/refresh-token (credentials: include)
        Cookie-->>API: Attach refresh cookie
        API-->>TM: New access token
        TM-->>Queue: Token updated
        Queue-->>Interceptor: Retry all queued requests
        Interceptor->>Req: Retry with new token ✅
    else Refresh already in progress
        Interceptor->>Queue: Queue request (wait)
        Queue-->>Interceptor: Resolve when refresh completes
        Interceptor->>Req: Retry with new token ✅
    end
```

### 6.3 Logout Flow

```mermaid
sequenceDiagram
    actor User
    participant UI as App
    participant Hook as useAuth()
    participant TM as Token Manager
    participant Store as Auth Store
    participant API as POST /auth/logout
    participant Cookie as Browser Cookie

    User->>UI: Click Logout
    UI->>Hook: logout()
    Hook->>API: POST /auth/logout
    API-->>Cookie: Clear refresh cookie
    Hook->>TM: clearToken()
    Hook->>Store: setUser(null), setAuthenticated(false)
    Store-->>UI: Re-render (unauthenticated)
    UI->>User: Redirect to Login
```

---

## 7. CV State Machine

```mermaid
stateDiagram-v2
    [*] --> State1

    State1: 🔴 State 1 — No Profile
    State1: ────────────────────
    State1: hasProfile = false
    State1: isConfirmed = false
    State1: isPending = false
    State1: ────────────────────
    State1: Display: Drop zone only

    State2: 🟡 State 2 — Pending Confirmation
    State2: ────────────────────
    State2: hasProfile = true
    State2: isConfirmed = false
    State2: isPending = true
    State2: ────────────────────
    State2: Display: Yellow banner + Choose modal

    State3: 🟢 State 3 — Confirmed / Locked
    State3: ────────────────────
    State3: hasProfile = true
    State3: isConfirmed = true
    State3: isPending = false
    State3: ────────────────────
    State3: Display: Green banner + Profile info

    State1 --> State2: Upload CV
    State2 --> State3: Confirm New Data
    State2 --> State3: Restore Previous
    State3 --> State2: Upload New CV

    note right of State2
        Modal Options:
        1. Restore Previous Profile
        2. Confirm New Data
        3. Cancel (stay)
    end note

    note right of State3
        Cache: jobSeekersKeys.me.all
        Editable from: Any page
        CV fields: LOCKED
    end note
```

### CV Cache Access Rules

```mermaid
graph TD
    subgraph CACHE_RULES["📋 Cache Access by Page & State"]
        direction TB

        subgraph STATE1["🔴 State 1"]
            S1_CV["CV Management: Write cv-info ✅"]
            S1_PROF["Profile Page: No access ❌"]
        end

        subgraph STATE2["🟡 State 2"]
            S2_CV["CV Management: Read/Write cv-info ✅"]
            S2_PROF["Profile Page: Read-only ⚠️"]
            S2_CONFIRM["Confirm: cv-info → profile ✅"]
            S2_RESTORE["Restore: clear cv-info ✅"]
        end

        subgraph STATE3["🟢 State 3"]
            S3_CV["CV Management: Upload new → State 2"]
            S3_PROF["Profile Page: Write profile ✅"]
            S3_ANY["Other Pages: Read profile ✅"]
        end
    end

    style CACHE_RULES fill:#0f172a,stroke:#475569,color:#e2e8f0,stroke-width:2px
    style STATE1 fill:#450a0a,stroke:#ef4444,color:#fecaca,stroke-width:1px
    style STATE2 fill:#422006,stroke:#f59e0b,color:#fef3c7,stroke-width:1px
    style STATE3 fill:#052e16,stroke:#22c55e,color:#dcfce7,stroke-width:1px
```

---

## 8. Widget Composition Map

How pages are assembled from widgets, which compose features, entities, and shared components.

### 8.1 Landing Page Composition

```mermaid
graph TD
    subgraph PAGE["📄 Landing Page — app/(public)/page.tsx"]
        direction TB
        W_HEADER["🟣 header/"]
        W_HOME["🟣 home-layout/"]
        W_FOOTER["🟣 footer/"]
    end

    W_HEADER --> NAV["NavigationItems"]
    W_HEADER --> AVATAR["UserAvatar"]
    W_HEADER --> THEME["🟠 toggle-theme/"]
    NAV --> BUTTON_S["⚪ Button"]

    W_HOME --> HERO["hero-section/"]
    W_HOME --> JOBS_SEC["recent-jobs-section/"]
    W_HOME --> ABOUT["about-section/"]
    W_HOME --> OBJ["objectives-section/"]

    HERO --> FLOAT["⚪ FloatingShapes"]
    HERO --> BTN1["⚪ Button"]
    JOBS_SEC --> JOBCARD["🟢 Job Entity Card"]
    JOBCARD --> BADGE["⚪ Badge"]

    W_FOOTER --> FOOTER_S["footer-section/"]

    style PAGE fill:#1e1b4b,stroke:#6366f1,color:#e0e7ff,stroke-width:2px
```

### 8.2 Jobseeker Dashboard Composition

```mermaid
graph TD
    subgraph JS_DASHBOARD["📊 Jobseeker Dashboard"]
        direction TB
        LAYOUT["dashboard/jobseeker/layout.tsx"]

        LAYOUT --> SIDEBAR["🟣 side-bar/"]
        LAYOUT --> DASHHEADER["🟣 dashboard-header/"]

        subgraph PAGES["Dashboard Pages"]
            OVERVIEW["/overview"]
            PROFILE["/profile"]
            CV_MGMT["/cv-management"]
            FIND["/find-jobs"]
            SAVED["/saved-jobs"]
            RECOMMENDED["/recommended-jobs"]
            APPS["/applications"]
            SETTINGS["/settings"]
        end

        OVERVIEW --> W_JS_OV["🟣 jobseeker-overview/"]
        W_JS_OV --> STAT["⚪ StaticsCard"]
        W_JS_OV --> REC["🟣 recommended-jobs/"]

        PROFILE --> W_JS_PROF["🟣 jobseeker-profile/"]
        W_JS_PROF --> ED["🟣 education-section/"]
        W_JS_PROF --> EX["🟣 experience-section/"]
        W_JS_PROF --> SK["🟣 skills-section/"]
        W_JS_PROF --> SUM["🟣 jobseeker-summary/"]

        CV_MGMT --> W_CV["🟣 cv-management/"]
        W_CV --> UPLOAD["🟠 upload-cv/"]
        W_CV --> CV_ENT["🟢 cv entity"]

        FIND --> W_FIND["🟣 find-jobs-layout/"]
        W_FIND --> SEARCH_F["🟠 search/"]
        W_FIND --> FILTER_F["🟠 filter/"]
        W_FIND --> JOBLIST["🟣 list/"]
        JOBLIST --> JOB_CARD2["🟢 Job Card"]

        SETTINGS --> W_SETTINGS["🟣 settings-layout/"]
        W_SETTINGS --> CHANGEPW["🟠 change-password/"]
        W_SETTINGS --> DEL_ACC["🟠 delete-account/"]
        W_SETTINGS --> NOTIF["🟠 toggle-notification/"]
    end

    style JS_DASHBOARD fill:#0c4a6e,stroke:#0ea5e9,color:#e0f2fe,stroke-width:2px
    style PAGES fill:#164e63,stroke:#06b6d4,color:#cffafe,stroke-width:1px
```

### 8.3 Company Dashboard Composition

```mermaid
graph TD
    subgraph CO_DASHBOARD["📊 Company Dashboard"]
        direction TB
        LAYOUT["dashboard/company/layout.tsx"]

        LAYOUT --> SIDEBAR["🟣 side-bar/"]
        LAYOUT --> DASHHEADER["🟣 dashboard-header/"]

        subgraph PAGES["Dashboard Pages"]
            OVERVIEW["/overview"]
            PROFILE["/profile"]
            ANALYTICS["/analytics"]
            LISTINGS["/job-listings"]
            CANDIDATES_PG["/candidates"]
            SETTINGS["/settings"]
        end

        OVERVIEW --> W_CO_OV["🟣 company-overview/"]

        PROFILE --> W_CO_PROF["🟣 company-profile/"]

        LISTINGS --> W_CO_JOBS["🟣 company-joblistings/"]
        W_CO_JOBS --> POSTJOB["🟠 post-job-form/"]
        W_CO_JOBS --> JOB_E["🟢 company-job entity"]

        CANDIDATES_PG --> W_CO_CAND["🟣 company-candidates/"]
        W_CO_CAND --> CAND_E["🟢 application entity"]

        SETTINGS --> W_CO_SET["🟣 settings-layout/"]
    end

    style CO_DASHBOARD fill:#713f12,stroke:#eab308,color:#fef9c3,stroke-width:2px
    style PAGES fill:#854d0e,stroke:#facc15,color:#fefce8,stroke-width:1px
```

---

## 9. State Management Architecture

```mermaid
graph TD
    subgraph STATE_MGMT["🧠 State Management"]
        direction TB

        subgraph ZUSTAND["Zustand Stores"]
            AUTH_STORE["Auth Store<br/>user | isAuthenticated"]
            THEME_STORE["Theme Store<br/>dark | light"]
        end

        subgraph REACT_QUERY["React Query (TanStack)"]
            RQ_JOBS["Job Queries<br/>jobs, job-details"]
            RQ_PROFILE["Profile Queries<br/>job-seeker-me, company-me"]
            RQ_CV["CV Queries<br/>cv-info cache"]
            RQ_APPS["Application Queries<br/>applications list"]
            RQ_ANALYTICS["Analytics Queries<br/>company analytics"]
        end

        subgraph IN_MEMORY["In-Memory"]
            TOKEN["Access Token<br/>(tokenManager)"]
        end

        subgraph HOOKS["Custom Hooks"]
            USE_AUTH["useAuth()"]
            USE_CV["useCVInfo()"]
            USE_ROLE["useUserRole()"]
        end
    end

    USE_AUTH --> AUTH_STORE
    USE_AUTH --> TOKEN
    USE_CV --> RQ_CV
    USE_CV --> RQ_PROFILE
    USE_ROLE --> AUTH_STORE

    style STATE_MGMT fill:#0f172a,stroke:#334155,color:#e2e8f0,stroke-width:2px
    style ZUSTAND fill:#1e1b4b,stroke:#818cf8,color:#e0e7ff,stroke-width:1px
    style REACT_QUERY fill:#052e16,stroke:#4ade80,color:#dcfce7,stroke-width:1px
    style IN_MEMORY fill:#450a0a,stroke:#f87171,color:#fecaca,stroke-width:1px
    style HOOKS fill:#3b0764,stroke:#c084fc,color:#f3e8ff,stroke-width:1px
```

---

## 10. Design Tokens

### 10.1 Color Palette

```mermaid
graph LR
    subgraph LIGHT["☀️ Light Mode"]
        direction TB
        L_PRI["🔵 Primary<br/>#0353A4"]
        L_PRI_H["🔵 Primary Hover<br/>#1957BC"]
        L_FG["⚫ Foreground<br/>#111827"]
        L_TXT2["🔘 Text Secondary<br/>#6B7280"]
        L_TXT3["⚪ Text Muted<br/>#9CA3AF"]
        L_BG["⬜ Background<br/>#F5F7F8"]
        L_SURF["⬜ Surface<br/>#FFFFFF"]
        L_MUT["⬜ Muted<br/>#F3F4F6"]
        L_BORDER["🔲 Border<br/>#D1D5DB"]
    end

    subgraph DARK["🌙 Dark Mode"]
        direction TB
        D_PRI["🔵 Primary<br/>#4186F6"]
        D_FG["⬜ Foreground<br/>#F9FAFB"]
        D_TXT2["🔘 Text Secondary<br/>#9CA3AF"]
        D_TXT3["⚫ Text Muted<br/>#6B7280"]
        D_BG["⬛ Background<br/>#111827"]
        D_SURF["⬛ Surface<br/>#1F2937"]
        D_MUT["⬛ Muted<br/>#374151"]
        D_BORDER["⬛ Border<br/>#374151"]
    end

    subgraph STATUS["🚦 Status Colors"]
        direction TB
        SUCCESS["🟢 Success<br/>#22C55E"]
        WARNING["🟡 Warning<br/>#F59E0B"]
        ERROR_C["🔴 Error<br/>#EF4444"]
    end

    style LIGHT fill:#f8fafc,stroke:#cbd5e1,color:#0f172a,stroke-width:2px
    style DARK fill:#0f172a,stroke:#475569,color:#e2e8f0,stroke-width:2px
    style STATUS fill:#1c1917,stroke:#57534e,color:#fafaf9,stroke-width:2px
```

### 10.2 Typography

| Token | Value | Usage |
|---|---|---|
| `--font-sans` | Geist Sans, system-ui | Body text, headings |
| `--font-mono` | Geist Mono, monospace | Code, technical text |
| `h1` | `text-4xl / lg:text-5xl` | Page titles |
| `h2` | `text-3xl` | Section headers |
| `h3` | `text-2xl` | Sub-sections |
| `h4` | `text-xl` | Card titles |
| `h5` | `text-lg` | Emphasis text |
| `h6` | `text-base` | Regular emphasis |

### 10.3 Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `0.25rem` (4px) | Small chips, tags |
| `--radius-md` | `0.375rem` (6px) | Inputs, small buttons |
| `--radius-lg` | `0.5rem` (8px) | Cards, containers |
| `--radius-xl` | `0.75rem` (12px) | Modals, large panels |
| `--radius-full` | `9999px` | Avatars, pills |

### 10.4 Component Variants

```mermaid
graph TD
    subgraph VARIANTS["🎨 Component Variants"]
        direction TB

        subgraph BUTTONS["Button Variants"]
            BTN_PRI["btn-primary<br/>bg-primary text-white"]
            BTN_OUT["btn-outline<br/>border bg-transparent"]
            BTN_GHO["btn-ghost<br/>hover:bg-muted"]
        end

        subgraph BADGES["Badge Variants"]
            BDG_DEF["badge<br/>bg-muted text-secondary"]
            BDG_PRI["badge-primary<br/>bg-primary/10 text-primary"]
            BDG_SUC["badge-success<br/>bg-success/10 text-success"]
            BDG_WAR["badge-warning<br/>bg-warning/10 text-warning"]
            BDG_ERR["badge-error<br/>bg-error/10 text-error"]
        end
    end

    style VARIANTS fill:#0f172a,stroke:#475569,color:#e2e8f0,stroke-width:2px
    style BUTTONS fill:#1e3a5f,stroke:#3b82f6,color:#bfdbfe,stroke-width:1px
    style BADGES fill:#1a2e05,stroke:#22c55e,color:#bbf7d0,stroke-width:1px
```

---

## 11. Import Rules & Boundaries

### Allowed Dependencies (✅)

```mermaid
graph BT
    SHARED["⚪ SHARED<br/>(external libs only)"]
    ENTITIES["🟢 ENTITIES"]
    FEATURES["🟠 FEATURES"]
    WIDGETS["🟣 WIDGETS"]
    APP["🔵 APP"]

    ENTITIES -->|"✅"| SHARED
    FEATURES -->|"✅"| SHARED
    FEATURES -->|"✅"| ENTITIES
    WIDGETS -->|"✅"| SHARED
    WIDGETS -->|"✅"| ENTITIES
    WIDGETS -->|"✅"| FEATURES
    APP -->|"✅"| SHARED
    APP -->|"✅"| ENTITIES
    APP -->|"✅"| FEATURES
    APP -->|"✅"| WIDGETS

    style SHARED fill:#374151,stroke:#9ca3af,color:#fff,stroke-width:2px
    style ENTITIES fill:#15803d,stroke:#22c55e,color:#fff,stroke-width:2px
    style FEATURES fill:#c2410c,stroke:#f97316,color:#fff,stroke-width:2px
    style WIDGETS fill:#7e22ce,stroke:#a855f7,color:#fff,stroke-width:2px
    style APP fill:#1e40af,stroke:#3b82f6,color:#fff,stroke-width:2px
```

### Forbidden Dependencies (❌)

```mermaid
graph TB
    SHARED["⚪ SHARED"]
    ENTITIES["🟢 ENTITIES"]
    FEATURES["🟠 FEATURES"]
    WIDGETS["🟣 WIDGETS"]
    APP["🔵 APP"]

    SHARED -.->|"❌"| ENTITIES
    SHARED -.->|"❌"| FEATURES
    SHARED -.->|"❌"| WIDGETS
    SHARED -.->|"❌"| APP

    ENTITIES -.->|"❌"| FEATURES
    ENTITIES -.->|"❌"| WIDGETS
    ENTITIES -.->|"❌"| APP

    FEATURES -.->|"❌"| WIDGETS
    FEATURES -.->|"❌"| APP

    WIDGETS -.->|"❌"| APP

    linkStyle 0 stroke:#ef4444,stroke-width:2px,stroke-dasharray:5 5
    linkStyle 1 stroke:#ef4444,stroke-width:2px,stroke-dasharray:5 5
    linkStyle 2 stroke:#ef4444,stroke-width:2px,stroke-dasharray:5 5
    linkStyle 3 stroke:#ef4444,stroke-width:2px,stroke-dasharray:5 5
    linkStyle 4 stroke:#ef4444,stroke-width:2px,stroke-dasharray:5 5
    linkStyle 5 stroke:#ef4444,stroke-width:2px,stroke-dasharray:5 5
    linkStyle 6 stroke:#ef4444,stroke-width:2px,stroke-dasharray:5 5
    linkStyle 7 stroke:#ef4444,stroke-width:2px,stroke-dasharray:5 5
    linkStyle 8 stroke:#ef4444,stroke-width:2px,stroke-dasharray:5 5

    style SHARED fill:#374151,stroke:#ef4444,color:#fff,stroke-width:2px
    style ENTITIES fill:#15803d,stroke:#ef4444,color:#fff,stroke-width:2px
    style FEATURES fill:#c2410c,stroke:#ef4444,color:#fff,stroke-width:2px
    style WIDGETS fill:#7e22ce,stroke:#ef4444,color:#fff,stroke-width:2px
    style APP fill:#1e40af,stroke:#ef4444,color:#fff,stroke-width:2px
```

### Slice Internal Structure (Public API Pattern)

```mermaid
graph LR
    subgraph SLICE["Any Slice (entity/feature/widget)"]
        INDEX["index.ts<br/>(Public API)"]
        UI["ui/<br/>Components"]
        MODEL["model/<br/>Types & Hooks"]
        API_DIR["api/<br/>API Calls"]
        LIB["lib/<br/>Helpers"]
    end

    OUTSIDE["Other Slices"]

    OUTSIDE -->|"import from"| INDEX
    INDEX -->|"re-exports"| UI
    INDEX -->|"re-exports"| MODEL
    INDEX -->|"re-exports"| API_DIR

    OUTSIDE -.->|"❌ NEVER import directly"| UI
    OUTSIDE -.->|"❌ NEVER import directly"| MODEL
    OUTSIDE -.->|"❌ NEVER import directly"| API_DIR
    OUTSIDE -.->|"❌ NEVER import directly"| LIB

    linkStyle 4 stroke:#ef4444,stroke-width:1px,stroke-dasharray:5 5
    linkStyle 5 stroke:#ef4444,stroke-width:1px,stroke-dasharray:5 5
    linkStyle 6 stroke:#ef4444,stroke-width:1px,stroke-dasharray:5 5
    linkStyle 7 stroke:#ef4444,stroke-width:1px,stroke-dasharray:5 5

    style SLICE fill:#1e293b,stroke:#64748b,color:#e2e8f0,stroke-width:2px
    style OUTSIDE fill:#1e40af,stroke:#3b82f6,color:#fff,stroke-width:1px
```

---

## Tech Stack Summary

| Category | Technology | Version |
|---|---|---|
| **Framework** | Next.js (App Router) | 16.0.6 |
| **Language** | TypeScript | 5.x |
| **UI Library** | React | 19.2.0 |
| **Styling** | Tailwind CSS | 4.x |
| **State (Global)** | Zustand | 5.x |
| **Server State** | TanStack React Query | 5.x |
| **Forms** | React Hook Form + Zod | 7.x / 4.x |
| **Animation** | Framer Motion | 12.x |
| **Charts** | Recharts | 3.x |
| **Icons** | Lucide React | 0.563 |
| **Carousel** | Swiper | 12.x |
| **Notifications** | React Hot Toast | 2.x |
| **Testing** | Vitest + Testing Library | 3.x |
| **Architecture** | Feature-Sliced Design (FSD) | — |

---

> **Last Updated**: June 4, 2026
> **Maintained by**: CareerK Frontend Team
