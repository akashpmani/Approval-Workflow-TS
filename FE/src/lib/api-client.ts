/**
 * api-client.ts — HTTP client used by every feature's api layer.
 *
 * Purpose:
 *   One place that owns base URL, auth header injection, JSON
 *   (de)serialization, and error normalization.
 *
 * Typical contents:
 *   - Thin wrapper around fetch or axios.
 *   - Methods: get, post, put, patch, delete.
 *   - Attaches Authorization header from authStore / localStorage.
 *   - Throws a normalized error shape (see types/api.ts → ApiError).
 *
 * Do NOT:
 *   - Call this from components directly — always go through
 *     features/<name>/api/*.ts wrappers.
 */
