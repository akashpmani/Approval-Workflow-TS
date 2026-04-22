/**
 * features/purchase-orders/hooks/usePurchaseOrders.ts
 *
 * Purpose:
 *   Fetches and caches the list of purchase orders for components
 *   to consume. Owns loading/error state.
 *
 * Suggested returns:
 *   - data, isLoading, error, refetch
 *
 * Implementation notes:
 *   - Prefer TanStack Query's useQuery so you get caching, refetch,
 *     and stale-while-revalidate out of the box.
 *   - Add paired hooks later: useCreatePurchaseOrder,
 *     useApprovePurchaseOrder, etc. (useMutation).
 */


