/**
 * features/auth/types/index.ts — auth domain types.
 *
 * Purpose:
 *   TypeScript types specific to authentication, kept next to the
 *   feature that owns them so the domain is self-contained.
 *
 * Typical contents:
 *   - AuthUser             — the signed-in user shape
 *   - LoginPayload         — request body for POST /auth/login
 *   - LoginResponse        — response shape { user, token }
 *   - Role                 — "ADMIN" | "APPROVER" | "REQUESTER"
 */
