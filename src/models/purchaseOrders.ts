// models/user.model.ts
import { prisma } from '../configs/db'
import { z } from 'zod'


export class PoModel {
    getOne = async () => {
        return prisma.purchaseOrder.findFirst()
    };

    getAll = async () => {
        return prisma.purchaseOrder.findFirst()
    };

    create = async () => {
        return prisma.purchaseOrder.findFirst()
    };

    update = async () => {
        return prisma.purchaseOrder.findFirst()
    };
}