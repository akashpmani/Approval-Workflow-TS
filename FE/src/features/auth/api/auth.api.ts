/**
 * features/auth/api/auth.api.ts — auth HTTP calls.
 *
 * Purpose:
 *   Thin wrapper around apiClient for auth endpoints. Every network
 *   call related to auth goes through this file.
 *
 * Typical contents:
 *   - login(payload)   POST /auth/login
 *   - logout()         POST /auth/logout
 *   - me()             GET  /auth/me   (hydrate current user)
 *   - refresh()        POST /auth/refresh (if using refresh tokens)
 *
 * Rules:
 *   - No React here. Pure async functions returning typed data.
 *   - Called from hooks (useAuth) — not from components directly.
 */
