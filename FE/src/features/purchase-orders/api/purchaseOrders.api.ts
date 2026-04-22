/**
 * features/purchase-orders/api/purchaseOrders.api.ts — PO HTTP calls.
 *
 * Purpose:
 *   All network calls for purchase orders, using the shared apiClient.
 *
 * Typical endpoints:
 *   - list(params)       GET    /purchase-orders
 *   - getById(id)        GET    /purchase-orders/:id
 *   - create(payload)    POST   /purchase-orders
 *   - update(id, body)   PATCH  /purchase-orders/:id
 *   - approve(id)        POST   /purchase-orders/:id/approve
 *   - reject(id, reason) POST   /purchase-orders/:id/reject
 *   - remove(id)         DELETE /purchase-orders/:id
 */
