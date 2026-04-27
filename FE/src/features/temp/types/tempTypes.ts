import z from "zod"


export const STATUS_OPTIONS = ["Paid", "Pending", "Unpaid"]
export const METHOD_OPTIONS = ["Credit Card", "PayPal", "Bank Transfer"]

export const TempItemSchema = z.object({
  invoice: z.string().min(3, "Invoice must be at least 3 characters"),
  paymentStatus: z.enum(STATUS_OPTIONS),
  totalAmount: z.string().min(3, "Total amount must be at least 3 characters"),
  paymentMethod:z.enum(METHOD_OPTIONS),

})
export type TempItems = z.infer<typeof TempItemSchema>