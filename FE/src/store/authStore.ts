/**
 * authStore.ts — global auth state.
 *
 * Purpose:
 *   Holds the currently signed-in user and token, exposes login/logout
 *   actions, and notifies subscribed components on change.
 *
 * Typical contents:
 *   - State: { user, token, isAuthenticated }
 *   - Actions: login(user, token), logout()
 *   - Token persistence via localStorage (key from constants/STORAGE_KEYS)
 *   - A React hook (useAuthStore) with selector support
 *
 * Implementation options:
 *   - Zustand (recommended — tiny, no boilerplate)
 *   - Redux Toolkit (if the project grows a lot of state)
 *   - Plain useSyncExternalStore for zero dependencies
 */
