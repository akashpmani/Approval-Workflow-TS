/**
 * types/api.ts — shared API envelope types.
 *
 * Purpose:
 *   Describe the shape of responses/errors that every endpoint uses,
 *   so feature APIs can stay concise and consistent.
 *
 * Typical contents:
 *   - ApiResponse<T>            — generic success envelope
 *   - PaginatedResponse<T>      — list endpoints
 *   - ApiError                  — normalized error returned by api-client
 *
 * Rules:
 *   - Only truly shared types live here. Domain types (PurchaseOrder,
 *     AuthUser, ...) live inside their feature's types/ folder.
 */
