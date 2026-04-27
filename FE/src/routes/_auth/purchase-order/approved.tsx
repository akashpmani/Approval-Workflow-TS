import PurchaseOrders from '@/pages/transactions/PurchaseOrdersPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/purchase-order/approved')(
  {
    component: PurchaseOrders,
  },
)
