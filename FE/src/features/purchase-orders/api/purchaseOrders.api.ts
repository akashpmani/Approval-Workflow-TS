import { apiGet, apiPost } from "@/lib/api-client"
import type { POInput,PurchaseOrder,POApproveOrRejectInput } from "@approval/shared/schemas/purchase-order"

export const purchaseOrdersApi = {
  create: (payload: POInput) =>
    apiPost<PurchaseOrder>("purchaseorder/manage/request/", payload),

  approve : (payload: POApproveOrRejectInput) =>
    apiPost("purchaseorder/manage/approve/", payload),

  reject : (payload: POApproveOrRejectInput) =>
    apiPost("purchaseorder/manage/reject/", payload),

  getAll : () =>
    apiGet<PurchaseOrder[]>("purchaseorder/"),

  getByID : (id: string) =>
    apiGet<PurchaseOrder[]>("purchaseorder/?id=" + id),
}