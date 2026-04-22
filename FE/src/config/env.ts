/**
 * env.ts — typed access to environment variables.
 *
 * Purpose:
 *   Centralize reads of import.meta.env so the rest of the app never
 *   touches import.meta.env directly. Makes defaults and typing explicit.
 *
 * Typical contents:
 *   - apiUrl (VITE_API_URL)
 *   - mode / isDev / isProd
 *   - Feature flags driven by env vars
 *
 * Rules:
 *   - Prefix every Vite-exposed var with VITE_.
 *   - Never put secrets here — this bundle ships to the browser.
 */
