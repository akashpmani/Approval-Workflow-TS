// models/po.model.ts
import { prisma } from '../configs/db'
import { z } from 'zod'
import { poSchema } from '../schemas/poSchema'
import { PurchaseStatus } from '@prismaClient'

type PoInput = z.infer<typeof poSchema>

export class PoModel {
    getOne = async (id: number) => {
        return prisma.purchaseOrder.findUnique({
        where: { id },
        include: { 
            poitems: true,
            requested_by: {
                select: {
                    id: true,
                    username: true
                }
            },
            approved_by: {
                select: {
                    id: true,
                    username: true
                }                   
            },
        }
        })
    }

    getAll = async (status : PurchaseStatus) => {
        return prisma.purchaseOrder.findMany({
        where: { status },
        select: {
            id: true,
            po_number: true,
            vendor: true,
            payment_amount: true,
            payment_mode: true,
            status: true,
            created_at: true,
            requested_by : {
                select: {
                    id: true,
                    username: true
                }             
            }
        }
        })
    }

    create = async (data: PoInput, userId: number, extra: { po_number: string }) => {
        const { items, ...poData } = data
        console.log(items)
        let daata =  {
            ...poData,
            ...extra,
            requested_by_id: userId,
            poitems: {
            create: items
            }
        }

        console.log(daata)
        return prisma.purchaseOrder.create({
        data: {
            ...poData,
            ...extra,
            requested_by_id: userId,
            poitems: {
            create: items
            }
        }
        })
    }

    update = async (id: number, status: 'APPROVED' | 'REJECTED') => {
        return prisma.purchaseOrder.update({
        where: { id },
        data: { status }
        })
    }
}