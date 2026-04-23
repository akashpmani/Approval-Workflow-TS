import PurchaseOrders from '@/pages/transactions/PurchaseOrdersPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/purchase-order/approved')(
  {
    component: PurchaseOrders,
  },
)
