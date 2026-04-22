/**
 * constants/index.ts — shared constants used across features.
 *
 * Purpose:
 *   Stable, app-wide values that multiple features reference.
 *
 * Typical contents:
 *   - STORAGE_KEYS (localStorage / sessionStorage key strings)
 *   - Enums for domain status values (e.g. PO_STATUS)
 *   - Pagination defaults, query keys, etc.
 *
 * Rules:
 *   - Feature-specific constants belong inside features/<name>/, not here.
 *   - Prefer `as const` objects over string enums for tree-shakable literals.
 */
