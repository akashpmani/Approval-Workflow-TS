# Approval Workflow — Frontend

React + Vite + TypeScript + Tailwind (v4) + shadcn/ui.

This README documents the folder structure and how each piece fits together. The files inside `src/` are currently **comment-only scaffolds** — they describe intent. Fill them in as you build each feature.

---

## Scripts

| Command           | What it does                        |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the Vite dev server           |
| `npm run build`   | Type-check (`tsc -b`) + build       |
| `npm run preview` | Preview the production build        |
| `npm run lint`    | Run ESLint                          |

Environment variables live in `.env` (not committed). Prefix Vite-exposed vars with `VITE_`, e.g. `VITE_API_URL=http://localhost:3000/api`.

---

## Folder structure

```text
src/
├── app/                     # App composition root
│   ├── App.tsx              #   Top-level component (providers + router)
│   ├── providers.tsx        #   Global context providers
│   └── router.tsx           #   Route tree
│
├── assets/                  # Static images, svgs, fonts
│
├── components/              # Shared UI (NOT feature-specific)
│   ├── ui/                  #   shadcn/ui primitives (button, input, ...)
│   ├── layout/              #   AppShell, Header, Sidebar
│   └── common/              #   Generic reusables (EmptyState, Spinner, ...)
│
├── config/
│   └── env.ts               # Typed access to import.meta.env
│
├── constants/
│   └── index.ts             # Storage keys, status enums, query keys
│
├── features/                # Feature-based modules (the important one)
│   ├── auth/
│   │   ├── api/             #   HTTP wrappers for /auth/*
│   │   ├── components/      #   LoginForm, SignupForm, ...
│   │   ├── hooks/           #   useAuth, useSession, ...
│   │   ├── types/           #   AuthUser, LoginPayload, Role
│   │   └── index.ts         #   Public barrel (import from here outside)
│   └── purchase-orders/
│       ├── api/
│       ├── components/      #   PurchaseOrderList, PurchaseOrderForm, ...
│       ├── hooks/           #   usePurchaseOrders, useApprovePO, ...
│       ├── types/
│       └── index.ts
│
├── hooks/                   # Generic cross-feature React hooks
│   └── useDebounce.ts
│
├── lib/                     # Framework-agnostic utilities
│   ├── api-client.ts        #   fetch wrapper (base URL, auth header, errors)
│   └── utils.ts             #   cn() etc.
│
├── pages/                   # Route-level components (one per URL)
│   ├── LoginPage.tsx
│   ├── DashboardPage.tsx
│   ├── PurchaseOrdersPage.tsx
│   └── NotFoundPage.tsx
│
├── routes/
│   ├── paths.ts             # Single source of truth for URLs
│   └── ProtectedRoute.tsx   # Auth guard
│
├── store/
│   └── authStore.ts         # Global auth state + actions
│
├── types/
│   ├── api.ts               # ApiResponse, PaginatedResponse, ApiError
│   └── common.ts            # Id, Timestamps, ...
│
├── index.css                # Tailwind entry (v4 @import "tailwindcss")
└── main.tsx                 # React entry — mounts <App /> into #root
```

---

## The golden rule: feature-based, not type-based

Code is grouped by **domain** (auth, purchase-orders) rather than by **kind** (all components in one folder, all hooks in another). A feature owns everything it needs — components, hooks, API calls, types — so it can be understood, changed, or deleted as one unit.

### Import rules

- Features expose a public surface via `features/<name>/index.ts`. Outside code imports from `"@/features/auth"`, never from deep paths like `"@/features/auth/hooks/useAuth"`.
- Features may depend on `components/`, `lib/`, `hooks/`, `config/`, `constants/`, `store/`, `types/`.
- **Features MUST NOT import from other features.** If two features share code, promote it to `components/`, `hooks/`, or `lib/`.
- `pages/` orchestrate features. Pages may import from features freely but stay thin.

---

## Layer responsibilities

| Layer                            | Owns                                        | Imports from                                 |
| -------------------------------- | ------------------------------------------- | -------------------------------------------- |
| `app/`                           | App bootstrap, providers, router            | `pages/`, `routes/`, `features/`             |
| `pages/`                         | One component per URL; orchestration only   | `features/`, `components/layout`             |
| `features/<name>/components`     | Feature UI                                  | own `hooks/`, `types/`, shared `components/` |
| `features/<name>/hooks`          | Stateful feature logic                      | own `api/`, `store/`, `types/`               |
| `features/<name>/api`            | HTTP calls for this feature                 | `lib/api-client`, own `types/`               |
| `features/<name>/types`          | Domain types                                | nothing (leaf layer)                         |
| `components/ui`                  | shadcn primitives                           | `lib/utils`                                  |
| `components/layout`              | AppShell / Header / Sidebar                 | `routes/paths`, `features/auth` (user info)  |
| `components/common`              | Reusable UI (EmptyState, Spinner)           | `components/ui`, `lib/utils`                 |
| `lib/`                           | Pure utilities, api client                  | `config/env`, `constants/`                   |
| `store/`                         | Global state                                | `constants/`, feature `types/`               |
| `routes/`                        | Path constants + route guards               | `store/`                                     |
| `config/`, `constants/`, `types/`| Leaf layers                                 | nothing                                      |

If you find yourself wanting to import "upward" (e.g. `lib/` importing from `features/`), the code probably belongs in the feature instead.

---

## Recommended libraries to add

The scaffold assumes these libraries will be added as features grow:

- **react-router-dom** — for the actual route tree in `app/router.tsx`
- **@tanstack/react-query** — caching + mutations for the `hooks/` in each feature
- **zustand** — a tiny global store for `store/authStore.ts`
- **react-hook-form** + **zod** — form state + validation for `LoginForm` and `PurchaseOrderForm`
- **sonner** (or shadcn's toast) — notifications, mounted in `app/providers.tsx`

None of these are installed yet — add when needed.

---

## Path alias

`@` → `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).
Always use `@/...` imports instead of relative `../../` climbs.

---

## Adding a new feature — checklist

1. Create `src/features/<name>/` with subfolders `api/`, `components/`, `hooks/`, `types/`.
2. Add `types/index.ts` first — types drive everything else.
3. Add `api/<name>.api.ts` using `apiClient` from `lib/`.
4. Add hooks in `hooks/` that use the api layer.
5. Add components in `components/` that use the hooks.
6. Create `src/features/<name>/index.ts` barrel exporting only the public surface.
7. Add a page in `src/pages/` that composes the feature.
8. Register the route in `src/app/router.tsx`, with its path in `src/routes/paths.ts`.
