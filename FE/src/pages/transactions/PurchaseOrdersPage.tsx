/**
 * PurchaseOrdersPage.tsx — /purchase-orders route.
 *
 * Renders the purchase-orders content inside <AppShell />.
 * Keep this file thin — heavy lifting belongs in feature components.
 */

import { AppShell } from "@/components/layout/AppShell"
import PurchaseOrderList from "@/features/purchase-orders/components/PurchaseOrder"

export default function PurchaseOrders() {
  return (
    <AppShell>
      <PurchaseOrderList />
    </AppShell>
  )
}
