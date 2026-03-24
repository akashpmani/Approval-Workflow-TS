import { z } from 'zod'
import { signupSchema, loginSchema } from '../schemas/authSchema'
import { UserModel } from '../models/user'
import bcrypt from 'bcrypt'

type SignupInput = z.infer<typeof signupSchema>

export class AuthService {
    private userModel = new UserModel()

    register = async (data: SignupInput) => {
        console.log(data)
        const existing = await this.userModel.findByEmail(data.email)
        if (existing) throw new Error('Email already registered')

        const hashedPassword = await bcrypt.hash(data.password, 10)
        const user = await this.userModel.create({ ...data, password: hashedPassword })

        const { password, ...userWithoutPassword } = user
        return userWithoutPassword
    }
}