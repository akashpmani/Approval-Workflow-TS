import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { toast } from "sonner"
import { ROUTES } from "@/routes/-paths"
import { purchaseOrdersApi } from "../api/purchaseOrders.api"

export function useGetPurchaseOrders(status?: string) {
  return useQuery({
    queryKey: ["purchaseOrders", status],
    queryFn: () => purchaseOrdersApi.getAll(status),
  })
}

export function useGetPurchaseOrderByID(id: string) {
  return useQuery({
    queryKey: ["purchaseOrders", id],
    queryFn: () => purchaseOrdersApi.getByID(id),
    enabled: !!id,
  })
}

export function useCreatePurchaseOrder() {
  const navigate = useNavigate()
  const qc = useQueryClient()
  return useMutation({
    mutationFn: purchaseOrdersApi.create,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["purchaseOrders"] })
      toast.success("Purchase order created successfully.")
      navigate({ to: ROUTES.purchaseOrders })
    },
    onError: (error) => toast.error(error.message || "Failed to create purchase order."),
  })
}

export function useApprovePurchaseOrder() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: purchaseOrdersApi.approve,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["purchaseOrders"] })
      toast.success("Purchase order approved successfully.")
    },
    onError: (error) => toast.error(error.message || "Failed to approve purchase order."),
  })
}

export function useRejectPurchaseOrder() {
    const qc = useQueryClient()
    return useMutation({
      mutationFn: purchaseOrdersApi.reject,
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: ["purchaseOrders"] })
        toast.success("Purchase order rejected successfully.")
      },
      onError: (error) => toast.error(error.message || "Failed to reject purchase order."),
    })
  }