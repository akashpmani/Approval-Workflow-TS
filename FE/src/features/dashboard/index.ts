/**
 * features/auth/index.ts — public barrel for the auth feature.
 *
 * Purpose:
 *   Re-export what the rest of the app is allowed to consume from
 *   this feature. Lets you refactor the internal layout without
 *   breaking imports elsewhere.
 *
 * Import rule:
 *   Outside code should import from "@/features/auth", not from deep
 *   paths like "@/features/auth/hooks/useAuth".
 */
