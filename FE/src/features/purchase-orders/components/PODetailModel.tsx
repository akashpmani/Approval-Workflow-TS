import { Button } from "@/components/ui/button"
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

import type { POItem, PurchaseOrder } from "@approval/shared/schemas/purchase-order"
import { PurchaseStatus } from "@approval/shared/constants/enums"
import { useGetPurchaseOrderByID } from "../hooks/usePurchaseOrders"

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

type Props = {
  order: PurchaseOrder
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function PODetailModel({ order, open, onOpenChange }: Props) {
  const { data, isLoading, isError } = useGetPurchaseOrderByID(
    order ? String(order.id) : ""
  )
  const poDetail = data

  const itemsTotal = 
    poDetail?.poitems.reduce(
      (sum: number, line: POItem) => sum + line.quantity * line.rate,
      0
    ) ?? 0

  if (!order) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{poDetail?.po_number ?? order.po_number}</DialogTitle>
          <DialogDescription>
            Purchase order details, line items, and approval trail.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="text-muted-foreground p-8 text-center text-sm">
            Loading purchase order…
          </div>
        ) : isError || !poDetail ? (
          <div className="text-destructive p-8 text-center text-sm">
            Failed to load purchase order.
          </div>
        ) : (
          <>
            <section className="grid grid-cols-2 gap-4 py-2 text-sm">
              <DetailRow label="Vendor" value={poDetail.vendor} />
              <DetailRow
                label="Vendor Address"
                value={poDetail.vendor_address ?? "—"}
              />
              <DetailRow label="Payment Mode" value={poDetail.payment_mode} />
              <DetailRow
                label="Payment Amount"
                value={formatCurrency(Number(poDetail.payment_amount))}
              />
              <DetailRow
                label="Payment Reference"
                value={poDetail.payment_reference}
              />
              <DetailRow
                label="Requested By"
                value={poDetail.requested_by?.username ?? "—"}
              />
              <DetailRow
                label="Requested At"
                value={formatDateTime(poDetail.requested_at)}
              />
              <DetailRow
                label="Approved By"
                value={poDetail.approved_by?.username ?? "—"}
              />
              <DetailRow
                label="Approved At"
                value={formatDateTime(poDetail.approved_at)}
              />
              <DetailRow
                label="Rejected By"
                value={poDetail.rejected_by?.username ?? "—"}
              />
              <DetailRow
                label="Rejected At"
                value={formatDateTime(poDetail.rejected_at)}
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
                    {poDetail.poitems.map((line: POItem, idx: number) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{line.item}</TableCell>
                        <TableCell className="text-right">{line.quantity}</TableCell>
                        <TableCell className="text-right">
                          {formatCurrency(line.rate)}
                        </TableCell>
                        <TableCell className="text-right">
                          {formatCurrency(line.quantity * line.rate)}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={3} className="text-right font-semibold">
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
              {poDetail.status === PurchaseStatus.REQUESTED ? (
                <>
                  <Button variant="outline">Reject</Button>
                  <Button>Approve</Button>
                </>
              ) : (
                <DialogClose render={<Button variant="outline">Close</Button>} />
              )}
            </DialogFooter>
          </>
        )}
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
