import { z } from "zod"
import {
  ITEM_VALUES,
  PAYMENT_MODE_VALUES,
  PURCHASE_STATUS_VALUES,
} from "../constants/enums"

export const poItemSchema = z.object({
  item: z.enum(ITEM_VALUES),
  quantity: z.number().int().positive(),
  rate: z.number().positive(),
})
export type POItem = z.infer<typeof poItemSchema>

export const poSchema = z.object({
  vendor: z.string().min(3, "Vendor must be at least 3 characters"),
  vendor_address: z.string(),
  payment_mode: z.enum(PAYMENT_MODE_VALUES),
  payment_amount: z.number().positive(),
  payment_reference: z
    .string()
    .min(5, "Payment reference should be at least 5 characters"),
  items: z.array(poItemSchema).min(1, "At least one item is required"),
})
export type POInput = z.infer<typeof poSchema>

export const poApproveOrRejectSchema = z.object({
  id: z.number(),
})
export type POApproveOrRejectInput = z.infer<typeof poApproveOrRejectSchema>

export const purchaseOrderSchema = z.object({
  id: z.number(),
  po_number: z.string(),
  vendor: z.string(),
  vendor_address: z.string().nullable(),
  status: z.enum(PURCHASE_STATUS_VALUES),
  payment_mode: z.enum(PAYMENT_MODE_VALUES),
  payment_amount: z.union([z.string(), z.number()]),
  payment_reference: z.string(),
  requested_at: z.string(),
  requested_by_id: z.number(),
  approved_at: z.string().nullable(),
  approved_by_id: z.number().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
})
export type PurchaseOrder = z.infer<typeof purchaseOrderSchema>
