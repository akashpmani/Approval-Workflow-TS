/**
 * router.tsx — route tree definition.
 *
 * Purpose:
 *   Declare every route in the application and the page component that
 *   renders it. Keeps routing concerns out of pages and features.
 *
 * Typical contents:
 *   - createBrowserRouter / <Routes> tree (react-router-dom).
 *   - Public routes (login) vs. protected routes (wrapped in
 *     <ProtectedRoute> from routes/ProtectedRoute.tsx).
 *   - Lazy-loaded page imports for code splitting.
 *
 * Paths come from routes/paths.ts — never hardcode URLs here.
 */
