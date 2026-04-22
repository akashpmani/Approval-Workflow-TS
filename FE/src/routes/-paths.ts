/**
 * routes/paths.ts — single source of truth for URL paths.
 *
 * Purpose:
 *   Avoid hardcoding route strings in components, links, and redirects.
 *
 * Typical contents:
 *   - ROUTES constant object (login, dashboard, purchaseOrders, ...)
 *   - Builder functions for parameterized routes, e.g.
 *     purchaseOrderDetail(id) => `/purchase-orders/${id}`
 *
 * Usage:
 *   <Link to={ROUTES.purchaseOrders}>...</Link>
 *   navigate(ROUTES.purchaseOrderDetail(po.id))
 */
