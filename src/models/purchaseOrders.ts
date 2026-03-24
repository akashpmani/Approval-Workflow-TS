// models/po.model.ts
import { prisma } from '../configs/db'
import { z } from 'zod'
import { poSchema } from '../schemas/poSchema'

type PoInput = z.infer<typeof poSchema>

export class PoModel {
    getOne = async (id: number) => {
        return prisma.purchaseOrder.findUnique({
        where: { id },
        include: { poitems: true }
        })
    }

    getAll = async () => {
        return prisma.purchaseOrder.findMany({
        select: {
            id: true,
            vendor: true,
            payment_amount: true,
            payment_mode: true,
            status: true,
            created_at: true,
        }
        })
    }

    create = async (data: PoInput, userId: number) => {
        return prisma.purchaseOrder.create({
        data: {
            ...data,
            requested_by: userId,
            items: {
            create: data.items 
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