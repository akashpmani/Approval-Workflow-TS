/**
 * features/auth/hooks/useAuth.ts — React hook bridging store + api.
 *
 * Purpose:
 *   The single hook components use to read auth state and trigger
 *   login/logout. Hides the store + api wiring from components.
 *
 * Returns (suggested):
 *   - user, isAuthenticated
 *   - login(payload), logout()
 *   - isPending, error   (for the login flow)
 *
 * Consumers: LoginForm, Header, ProtectedRoute.
 */
