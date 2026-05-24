# Auth Integration Architecture (FSD)

## Goal

Prepare authentication infrastructure inside `features/auth` only.

No UI implementation yet.

Requirements:

- `useAuth()` should return:

  ```ts
  {
    token: string | null
    user: User | null
    isAuthenticated: boolean
    login: (...)
    logout: ()
    refresh: ()
  }
  ```

- Access token:
  - Stored in memory only
  - Never localStorage
  - Never sessionStorage

- Refresh token:
  - Stored in secure HttpOnly cookie
  - Managed by backend

- Follow FSD architecture

- Create only auth-related files now
- UI pages/components will integrate later

---

# Recommended Security Approach

## Access Token

Store:

```ts
memory;
```

Example:

```ts
let accessToken: string | null = null;
```

Why:

- Cannot be stolen by XSS through browser storage
- Automatically disappears after tab close
- Reduces attack surface

Do NOT use:

```ts
localStorage
sessionStorage
cookies for access token
```

---

## Refresh Token

Store:

```ts
HttpOnly Secure SameSite cookie
```

Backend should set:

```http
Set-Cookie:
refreshToken=xxxx;
HttpOnly;
Secure;
SameSite=Strict;
Path=/;
```

Why:

- JS cannot access it
- Protected against XSS
- Used only during refresh request

Frontend should never read refreshToken.

Frontend only sends:

```ts
credentials: "include";
```

for refresh requests.

---

# Folder Structure

```txt
features/
└── auth/
    ├── api/
    │   ├── login.ts
    │   ├── registerCompany.ts
    │   ├── registerJobSeeker.ts
    │   ├── verifyEmail.ts
    │   ├── resendVerification.ts
    │   ├── refreshToken.ts
    │   ├── logout.ts
    │   ├── forgotPassword.ts
    │   ├── resetPassword.ts
    │   ├── changePassword.ts
    │   └── types.ts
    │
    ├── model/
    │   ├── useAuth.ts
    │   ├── useAuthStore.ts
    │   ├── useLogin.ts
    │   ├── useLogout.ts
    │   ├── useRefresh.ts
    │   └── useAuthInit.ts
    │
    ├── lib/
    │   ├── authClient.ts
    │   ├── authInterceptor.ts
    │   └── refreshQueue.ts
    │
    └── index.ts
```

---

# File Responsibilities

---

## api/auth.endpoints.ts

Contains only endpoint constants.

Example:

```ts
export const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER_JOB_SEEKER: "/auth/register/job-seeker",
  REGISTER_COMPANY: "/auth/register/company",
  VERIFY_EMAIL: "/auth/verify-email",
  RESEND_VERIFICATION: "/auth/resend-verification",
  REFRESH: "/auth/refresh-token",
  LOGOUT: "/auth/logout",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  CHANGE_PASSWORD: "/auth/change-password",
};
```

---

## api/auth.types.ts

Contains:

Request DTOs

Response DTOs

Examples:

```ts
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}
```

---

## api/auth.api.ts

Responsible for:

- Login
- Register
- Verify email
- Logout
- Refresh token
- Password actions

Contains only API calls.

Example:

```ts
login(data);

registerJobSeeker(data);

registerCompany(data);

refresh();

logout();
```

No state here.

---

## model/token-manager.ts

Responsible for:

Access token memory storage only.

Example:

```ts
let token: string | null = null;

export const tokenManager = {
  getToken() {},
  setToken() {},
  clearToken() {},
};
```

Purpose:

Single source of truth for access token.

---

## model/auth.store.ts

Responsible for:

Global auth state.

Example:

```ts
{
    user:null,
    isAuthenticated:false
}
```

Can use:

- Zustand
- Context
- Redux

Recommended:

```ts
Zustand;
```

because auth state is small.

---

## model/auth.context.tsx

Provides:

```tsx
<AuthProvider>
```

Responsible for:

- App initialization
- First refresh attempt
- Hydration

Flow:

App loads:

```txt
App Start
    ↓
Try refresh endpoint
    ↓
Cookie exists ?
    ↓
Get new access token
    ↓
Store token in memory
```

---

## model/use-auth.ts

Main hook:

```ts
const { token, user, login, logout, refresh, isAuthenticated } = useAuth();
```

Return shape:

```ts
interface UseAuthReturn {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  login: (data) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}
```

Important:

Token returned here comes from:

```ts
tokenManager.getToken();
```

not localStorage.

---

## lib/auth-client.ts

Authenticated API client.

Responsible for:

Adding token automatically.

Example:

```ts
Authorization:
Bearer accessToken
```

---

## lib/auth-interceptor.ts

Responsible for:

Handling:

```txt
401 Unauthorized
```

Flow:

```txt
Request
   ↓
401
   ↓
Call refresh endpoint
   ↓
Receive new access token
   ↓
Retry original request
```

---

## lib/refresh-manager.ts

Responsible for preventing multiple refresh requests.

Problem:

Without protection:

```txt
10 requests
↓
all return 401
↓
10 refresh requests
```

Bad.

Solution:

Queue refresh operation.

Flow:

```txt
Request 1
Request 2
Request 3

↓

single refresh request

↓

all requests continue
```

---

## index.ts

Public exports only.

Example:

```ts
export * from "./model/use-auth";

export * from "./model/auth.context";
```

Do not expose internal files.

---

# Authentication Flow

## Login

```txt
User login

↓

POST /auth/login

↓

Receive:

accessToken
user

↓

tokenManager.setToken()

↓

auth.store.update()

↓

redirect
```

---

## Refresh

```txt
App opens

↓

POST /auth/refresh-token

credentials:include

↓

cookie sent automatically

↓

receive new access token

↓

tokenManager.setToken()
```

---

## Logout

```txt
User logout

↓

POST /auth/logout

↓

clear memory token

↓

clear store

↓

redirect
```

---

# Security Notes

Never:

```ts
localStorage.setItem("token");
```

Never:

```ts
document.cookie = "accessToken";
```

Always:

```ts
Authorization: Bearer token
```

Access token:

```txt
Memory only
```

Refresh token:

```txt
HttpOnly Cookie only
```

---

# Next Step

After creating these files only:

1. Implement token manager
2. Implement API client
3. Implement refresh flow
4. Integrate with UI pages
5. Connect forms
