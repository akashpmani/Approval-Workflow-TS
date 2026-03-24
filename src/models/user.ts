// models/user.model.ts
import { prisma } from '../configs/db'
import { z } from 'zod'
import { signupSchema } from '../schemas/authSchema'

type SignupInput = z.infer<typeof signupSchema>

export class UserModel {
    findByEmail = async (email: string) => {
        return prisma.user.findUnique({ where: { email } })
    }

    findByPhone = async (phone: string) => {
        return prisma.user.findUnique({ where: { phone } })
    }

    findByEmailOrPhone = async (identifier: string) => {
        const isEmail = identifier.includes('@')
        return prisma.user.findFirst({
        where: isEmail ? { email: identifier } : { phone: identifier }
        })
    }

    create = async (data: SignupInput & { password: string }) => {
        return prisma.user.create({ data })
    }

    findById = async (id: number) => {
        return prisma.user.findUnique({ where: { id } })
    }
}