import { apiGet, apiPost } from "@/lib/api-client"
import type { POInput,PurchaseOrder,POApproveOrRejectInput } from "@approval/shared/schemas/purchase-order"
import { type PurchaseOrderDetail, type poPaginatedResponse } from '../../../../../shared/schemas/purchase-order';

export const purchaseOrdersApi = {
  create: (payload: POInput) =>
    apiPost<PurchaseOrder>("purchaseorder/manage/request/", payload),

  approve : (payload: POApproveOrRejectInput) =>
    apiPost("purchaseorder/manage/approve/", payload),

  reject : (payload: POApproveOrRejectInput) =>
    apiPost("purchaseorder/manage/reject/", payload),

  getAll : (params: { status?: string; page: number; limit: number } ) =>{
    const qs = new URLSearchParams({
      page: String(params.page),
      limit: String(params.limit),
      ...(params.status ? { status: params.status } : {}),
  });
    return apiGet<poPaginatedResponse<PurchaseOrder>>(`purchaseorder/?${qs}`);
},

  getByID : (id: string) =>
    apiGet<PurchaseOrderDetail>("purchaseorder/?id=" + id),
}