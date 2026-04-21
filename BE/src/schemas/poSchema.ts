import { number, z } from "zod";
import {PaymentModes,Items} from "../../prisma/generated"


export const poItemsSchema = z.object({
    item: z.enum(Items),
    quantity : number(),
    rate: number(),
})

export const poSchema = z.object({
    vendor: z.string().min(3, 'Name must be at least 3 characters'),
    vendor_address: z.string(),
    payment_mode: z.enum(PaymentModes),
    payment_amount: z.number(),
    payment_reference: z.string().min(5,"Payment reference should be atleast 5 charecters"),
    items : z.array(poItemsSchema)
});

export const poApproveOrRejectSchema = z.object({
    id: z.number()
})