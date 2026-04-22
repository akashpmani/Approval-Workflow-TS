/**
 * Sidebar.tsx — primary navigation for the authenticated layout.
 *
 * Purpose:
 *   Lists the main sections of the app and highlights the active route.
 *
 * Typical contents:
 *   - NAV array of { label, path, icon, allowedRoles? }
 *   - Map over NAV and render <NavLink> (react-router-dom) for each
 *   - Filter items by role from useAuth() if needed
 *
 * Paths should come from routes/paths.ts — never hardcoded.
 */
