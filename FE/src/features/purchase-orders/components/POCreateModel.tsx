import { PlusIcon, Trash2Icon } from "lucide-react"
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
import { Field, FieldError, FieldGroup } from "@/components/ui/field"
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

import { PaymentModes,Items } from "@approval/shared/constants/enums"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreatePurchaseOrder } from "@/features/purchase-orders/hooks/usePurchaseOrders"
import { poSchema } from "@approval/shared/schemas/purchase-order"
import type {POInput} from "@approval/shared/schemas/purchase-order"
import { useState } from "react"


const emptyItem = { item: undefined, quantity: undefined, rate: undefined } as unknown as POInput["items"][number]

export default function POCreateModel() {

  const [open, setOpen] = useState(false)
  const createPO = useCreatePurchaseOrder()
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<POInput>({
    resolver: zodResolver(poSchema),
    defaultValues: { items: [emptyItem] },
  })
  const { fields, append, remove } = useFieldArray({ control, name: "items" })
  const onSubmit = handleSubmit((values) =>
    createPO.mutate(values, {
      onSuccess: () => {
        reset({ items: [emptyItem] })
        setOpen(false)
      },
    })
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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

        <form className="flex flex-col gap-5" onSubmit={onSubmit} noValidate>
          <section className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold">Vendor</h3>
            <FieldGroup>
              <Field>
                <Label htmlFor="po-vendor">Vendor Name</Label>
                <Input
                  id="po-vendor"
                  placeholder="ABC Supplies Inc"
                  {...register("vendor")}
                />
                <FieldError errors={errors.vendor ? [errors.vendor] : []} />
              </Field>
              <Field>
                <Label htmlFor="po-vendor-address">Vendor Address</Label>
                <Input
                  id="po-vendor-address"
                  placeholder="123 Business St, City, State 12345"
                  {...register("vendor_address")}
                />
                <FieldError errors={errors.vendor_address ? [errors.vendor_address] : []} />
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
                  <Controller
                    control={control}
                    name="payment_mode"
                    render={({ field: ctl }) => (
                      <Select value={ctl.value ?? ""} onValueChange={ctl.onChange}>
                        <SelectTrigger id="po-payment-mode" className="w-full">
                          <SelectValue placeholder="Select mode" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.values(PaymentModes).map((mode) => (
                            <SelectItem key={mode} value={mode}>
                              {mode}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FieldError errors={errors.payment_mode ? [errors.payment_mode] : []} />
                </Field>
                <Field>
                  <Label htmlFor="po-payment-amount">Payment Amount</Label>
                  <Input
                    id="po-payment-amount"
                    type="number"
                    step="0.01"
                    placeholder="5000"
                    {...register("payment_amount", { valueAsNumber: true })}
                  />
                  <FieldError errors={errors.payment_amount ? [errors.payment_amount] : []} />
                </Field>
              </div>
              <Field>
                <Label htmlFor="po-payment-ref">Payment Reference</Label>
                <Input
                  id="po-payment-ref"
                  placeholder="REF123456"
                  {...register("payment_reference")}
                />
                <FieldError errors={errors.payment_reference ? [errors.payment_reference] : []} />
              </Field>
            </FieldGroup>
          </section>

          <Separator />

          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Items</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => append(emptyItem)}
              >
                <PlusIcon className="size-4" />
                Add Item
              </Button>
            </div>

            <div className="flex flex-col gap-3">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-[1fr_100px_120px_40px] gap-2 items-end"
                >
                  <Field>
                    <Label className="text-xs">Item</Label>
                    <Controller
                      control={control}
                      name={`items.${index}.item`}
                      render={({ field: ctl }) => (
                        <Select
                          value={ctl.value ?? ""}
                          onValueChange={ctl.onChange}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select item" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.values(Items).map((item) => (
                              <SelectItem key={item} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </Field>
                  <Field>
                    <Label className="text-xs">Quantity</Label>
                    <Input
                      type="number"
                      placeholder="100"
                      {...register(`items.${index}.quantity`, {
                        valueAsNumber: true,
                      })}
                    />
                    <FieldError errors={errors.items?.[index]?.quantity ? [errors.items[index].quantity] : []} />
                  </Field>
                  <Field>
                    <Label className="text-xs">Rate</Label>
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="25"
                      {...register(`items.${index}.rate`, {
                        valueAsNumber: true,
                      })}
                    />
                    <FieldError errors={errors.items?.[index]?.rate ? [errors.items[index].rate] : []} />
                  </Field>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={() => remove(index)}
                    disabled={fields.length === 1}
                  >
                    <Trash2Icon className="size-4" />
                  </Button>
                </div>
              ))}
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

