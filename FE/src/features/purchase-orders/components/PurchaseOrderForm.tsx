/**
 * PurchaseOrderForm.tsx — create/edit form for a purchase order.
 *
 * Purpose:
 *   Collects fields (title, description, amount, currency) and calls
 *   the create/update API. Reused in "Create" and "Edit" flows.
 *
 * Props (suggested):
 *   - initialValues?: Partial<PurchaseOrder>   — for edit mode
 *   - onSuccess?: (po: PurchaseOrder) => void
 *
 * Recommendation:
 *   - Use react-hook-form + zod for validation.
 *   - Submit via a useCreatePurchaseOrder / useUpdatePurchaseOrder
 *     mutation hook (to be added alongside usePurchaseOrders).
 */
