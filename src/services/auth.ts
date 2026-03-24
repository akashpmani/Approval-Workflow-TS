import { z } from 'zod'
import { signupSchema, loginSchema } from '../schemas/authSchema'
import { UserModel } from '../models/user'
import bcrypt from 'bcrypt'
import { error } from 'node:console'
import { generateToken } from 'src/configs/jwt'

type SignupInput = z.infer<typeof signupSchema>
type LoginInput = z.infer<typeof loginSchema>

export class AuthService {
    private userModel = new UserModel()

    register = async (data: SignupInput) => {
        const existing = await this.userModel.findByEmail(data.email)
        if (existing) throw new Error('Email already registered')

        const hashedPassword = await bcrypt.hash(data.password, 10)
        const user = await this.userModel.create({ ...data, password: hashedPassword })

        const { password, ...userWithoutPassword } = user
        return userWithoutPassword
    };
    login = async (data: LoginInput) => {
        const user = await this.userModel.findByEmailOrPhone(data.identifier)
        if (!user) throw new Error('Invalid Email or Phone')

        const isMatch = await bcrypt.compare(data.password, user.password)
        if (!isMatch) throw new Error('Invalid credentials')
                
        const { password, ...userWithoutPassword } = user
        const token = generateToken({ id: user.id, username: user.username, email: user.email})
        return { token,user: userWithoutPassword }
    }
}