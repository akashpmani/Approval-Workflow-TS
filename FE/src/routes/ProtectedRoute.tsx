/**
 * ProtectedRoute.tsx — route guard for authenticated-only pages.
 *
 * Purpose:
 *   Reads auth state from store/authStore.ts and either renders the
 *   child route or redirects to /login.
 *
 * Usage (inside app/router.tsx):
 *   <Route element={<ProtectedRoute />}>
 *     <Route path="/dashboard" element={<DashboardPage />} />
 *   </Route>
 *
 * Extend for role-based access: accept `allowedRoles?: Role[]` prop
 * and redirect to a "forbidden" page if the user's role doesn't match.
 */
