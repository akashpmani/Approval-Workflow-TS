import { apiGet, apiPost } from "@/lib/api-client"
import type { POInput,PurchaseOrder,POApproveOrRejectInput ,PurchaseOrderDetail} from "@approval/shared/schemas/purchase-order"

export const purchaseOrdersApi = {
  create: (payload: POInput) =>
    apiPost<PurchaseOrder>("purchaseorder/manage/request/", payload),

  approve : (payload: POApproveOrRejectInput) =>
    apiPost("purchaseorder/manage/approve/", payload),

  reject : (payload: POApproveOrRejectInput) =>
    apiPost("purchaseorder/manage/reject/", payload),

  getAll : (status? : string ) =>
    apiGet<PurchaseOrder[]>("purchaseorder/?status=" + (status ?? "")),

  getByID : (id: string) =>
    apiGet<PurchaseOrderDetail>("purchaseorder/?id=" + id),
}