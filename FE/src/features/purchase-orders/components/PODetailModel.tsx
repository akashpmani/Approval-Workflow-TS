import { PurchaseStatus } from "@approval/shared/constants/enums"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import type { MockPurchaseOrder } from "../mock/mockPurchaseOrders"

type Props = {
  order: MockPurchaseOrder | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

const statusVariant: Record<
  MockPurchaseOrder["status"],
  "secondary" | "default" | "destructive"
> = {
  [PurchaseStatus.REQUESTED]: "secondary",
  [PurchaseStatus.APPROVED]: "default",
  [PurchaseStatus.REJECTED]: "destructive",
}

const statusLabel: Record<MockPurchaseOrder["status"], string> = {
  [PurchaseStatus.REQUESTED]: "To Be Approved",
  [PurchaseStatus.APPROVED]: "Approved",
  [PurchaseStatus.REJECTED]: "Rejected",
}

function formatCurrency(value: number) {
  return `$${value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

function formatDateTime(iso: string | null) {
  if (!iso) return "—"
  return new Date(iso).toLocaleString()
}

export default function PODetailModel({ order, open, onOpenChange }: Props) {
  if (!order) return null

  const itemsTotal = order.items.reduce(
    (sum, i) => sum + i.quantity * i.rate,
    0
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between gap-3">
            <DialogTitle>{order.po_number}</DialogTitle>
            <Badge variant={statusVariant[order.status]}>
              {statusLabel[order.status]}
            </Badge>
          </div>
          <DialogDescription>
            Purchase order details, line items, and approval trail.
          </DialogDescription>
        </DialogHeader>

        <section className="grid grid-cols-2 gap-4 py-2 text-sm">
          <DetailRow label="Vendor" value={order.vendor} />
          <DetailRow
            label="Vendor Address"
            value={order.vendor_address ?? "—"}
          />
          <DetailRow label="Payment Mode" value={order.payment_mode} />
          <DetailRow
            label="Payment Amount"
            value={formatCurrency(order.payment_amount)}
          />
          <DetailRow
            label="Payment Reference"
            value={order.payment_reference}
          />
          <DetailRow label="Requested By" value={order.requested_by_name} />
          <DetailRow
            label="Requested At"
            value={formatDateTime(order.requested_at)}
          />
          <DetailRow
            label="Approved By"
            value={order.approved_by_name ?? "—"}
          />
          <DetailRow
            label="Approved At"
            value={formatDateTime(order.approved_at)}
          />
        </section>

        <Separator />

        <section className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold">Line Items</h3>
          <div className="overflow-hidden rounded-none border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right">Rate</TableHead>
                  <TableHead className="text-right">Line Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.items.map((line, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{line.item}</TableCell>
                    <TableCell className="text-right">
                      {line.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(line.rate)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(line.quantity * line.rate)}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-right font-semibold"
                  >
                    Items Total
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {formatCurrency(itemsTotal)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <DialogFooter className="mt-2">
          {order.status === PurchaseStatus.REQUESTED ? (
            <>
              <Button variant="outline">Reject</Button>
              <Button>Approve</Button>
            </>
          ) : (
            <DialogClose render={<Button variant="outline">Close</Button>} />
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-muted-foreground text-xs">{label}</div>
      <div className="font-medium break-words">{value}</div>
    </div>
  )
}
