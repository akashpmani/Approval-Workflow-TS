import { useState } from "react"

import {
  PurchaseStatus,
  type PurchaseStatus as PurchaseStatusType,
} from "@approval/shared/constants/enums"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  mockPurchaseOrders,
  type MockPurchaseOrder,
} from "../mock/mockPurchaseOrders"
import POCreateModel from "./POCreateModel"
import PODetailModel from "./PODetailModel"

const TABS: { value: PurchaseStatusType; label: string }[] = [
  { value: PurchaseStatus.REQUESTED, label: "To Be Approved" },
  { value: PurchaseStatus.APPROVED, label: "Approved" },
  { value: PurchaseStatus.REJECTED, label: "Rejected" },
]

function formatCurrency(value: number) {
  return `$${value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString()
}

export default function PurchaseOrder() {
  const [selected, setSelected] = useState<MockPurchaseOrder | null>(null)
  const [detailOpen, setDetailOpen] = useState(false)

  const openDetail = (order: MockPurchaseOrder) => {
    setSelected(order)
    setDetailOpen(true)
  }

  const counts: Record<PurchaseStatusType, number> = {
    [PurchaseStatus.REQUESTED]: 0,
    [PurchaseStatus.APPROVED]: 0,
    [PurchaseStatus.REJECTED]: 0,
  }
  for (const po of mockPurchaseOrders) counts[po.status]++

  return (
    <div className="flex flex-col gap-4 p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Purchase Orders</h1>
          <p className="text-muted-foreground text-sm">
            Review and manage purchase orders.
          </p>
        </div>
        <POCreateModel />
      </div>

      <Tabs defaultValue={PurchaseStatus.REQUESTED} className="w-full">
        <TabsList>
          {TABS.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
              <Badge variant="secondary" className="ml-2">
                {counts[tab.value]}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        {TABS.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-4">
            <Card className="p-0 overflow-hidden">
              <POTable
                orders={mockPurchaseOrders.filter(
                  (po) => po.status === tab.value
                )}
                onRowClick={openDetail}
              />
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <PODetailModel
        order={selected}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />
    </div>
  )
}

function POTable({
  orders,
  onRowClick,
}: {
  orders: MockPurchaseOrder[]
  onRowClick: (order: MockPurchaseOrder) => void
}) {
  if (orders.length === 0) {
    return (
      <div className="text-muted-foreground p-8 text-center text-sm">
        No purchase orders in this section.
      </div>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>PO Number</TableHead>
          <TableHead>Vendor</TableHead>
          <TableHead>Payment Mode</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Reference</TableHead>
          <TableHead>Requested By</TableHead>
          <TableHead>Requested On</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow
            key={order.id}
            onClick={() => onRowClick(order)}
            className="hover:bg-muted/50 cursor-pointer"
          >
            <TableCell className="font-medium">{order.po_number}</TableCell>
            <TableCell>{order.vendor}</TableCell>
            <TableCell>
              <Badge variant="outline">{order.payment_mode}</Badge>
            </TableCell>
            <TableCell className="text-right">
              {formatCurrency(order.payment_amount)}
            </TableCell>
            <TableCell>{order.payment_reference}</TableCell>
            <TableCell>{order.requested_by_name}</TableCell>
            <TableCell>{formatDate(order.requested_at)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
