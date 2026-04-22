/**
 * providers.tsx — global context providers.
 *
 * Purpose:
 *   Single place to compose every global provider the app depends on.
 *
 * Typical contents:
 *   - React Query / TanStack Query client provider
 *   - Theme provider (dark/light)
 *   - Toast/Notification provider
 *   - Error boundary
 *   - Auth provider (if using context instead of the store)
 *
 * Usage:
 *   <AppProviders>{children}</AppProviders>
 *   Called once from App.tsx.
 */
