import { PlusIcon, Trash2Icon } from "lucide-react"

import {
  ITEM_VALUES,
  PAYMENT_MODE_VALUES,
} from "@approval/shared/constants/enums"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function POCreateModel() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button>
            <PlusIcon className="size-4" />
            New Purchase Order
          </Button>
        }
      />
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Purchase Order</DialogTitle>
          <DialogDescription>
            Fill in vendor, payment, and line items. Submit for approval when
            ready.
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-5">
          <section className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Vendor</h3>
            <FieldGroup>
              <Field>
                <Label htmlFor="po-vendor">Vendor Name</Label>
                <Input
                  id="po-vendor"
                  name="vendor"
                  placeholder="ABC Supplies Inc"
                />
              </Field>
              <Field>
                <Label htmlFor="po-vendor-address">Vendor Address</Label>
                <Input
                  id="po-vendor-address"
                  name="vendor_address"
                  placeholder="123 Business St, City, State 12345"
                />
              </Field>
            </FieldGroup>
          </section>

          <Separator />

          <section className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Payment</h3>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-3">
                <Field>
                  <Label htmlFor="po-payment-mode">Payment Mode</Label>
                  <Select name="payment_mode">
                    <SelectTrigger id="po-payment-mode" className="w-full">
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent>
                      {PAYMENT_MODE_VALUES.map((mode) => (
                        <SelectItem key={mode} value={mode}>
                          {mode}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <Label htmlFor="po-payment-amount">Payment Amount</Label>
                  <Input
                    id="po-payment-amount"
                    name="payment_amount"
                    type="number"
                    step="0.01"
                    placeholder="5000"
                  />
                </Field>
              </div>
              <Field>
                <Label htmlFor="po-payment-ref">Payment Reference</Label>
                <Input
                  id="po-payment-ref"
                  name="payment_reference"
                  placeholder="REF123456"
                />
              </Field>
            </FieldGroup>
          </section>

          <Separator />

          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Items</h3>
              <Button type="button" variant="outline" size="sm">
                <PlusIcon className="size-4" />
                Add Item
              </Button>
            </div>

            <div className="flex flex-col gap-3">
              <ItemRow />
              <ItemRow />
            </div>
          </section>

          <DialogFooter className="mt-2">
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Submit for Approval</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function ItemRow() {
  return (
    <div className="grid grid-cols-[1fr_100px_120px_40px] gap-2 items-end">
      <Field>
        <Label className="text-xs">Item</Label>
        <Select name="item">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select item" />
          </SelectTrigger>
          <SelectContent>
            {ITEM_VALUES.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field>
        <Label className="text-xs">Quantity</Label>
        <Input name="quantity" type="number" placeholder="100" />
      </Field>
      <Field>
        <Label className="text-xs">Rate</Label>
        <Input name="rate" type="number" step="0.01" placeholder="25" />
      </Field>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-destructive"
      >
        <Trash2Icon className="size-4" />
      </Button>
    </div>
  )
}
