import { z } from 'zod'
import { signupSchema, loginSchema } from '../schemas/authSchema'
import { UserModel } from '../models/user'
import bcrypt from 'bcrypt'
import { error } from 'node:console'
import { generateToken } from 'src/configs/jwt'
import { ErrorHandler } from 'src/utils/errorhandler'


type SignupInput = z.infer<typeof signupSchema>
type LoginInput = z.infer<typeof loginSchema>

export class AuthService {
    private userModel = new UserModel()

    register = async (data: SignupInput) => {
        const existingEmail = await this.userModel.findByEmail(data.email)
        if (existingEmail){
            throw new ErrorHandler(400,'Email Already exists')
        }

        const existingPhone = await this.userModel.findByPhone(data.phone)
        if (existingPhone){
            throw new ErrorHandler(400,'Phone number already exists')
        }
        const hashedPassword = await bcrypt.hash(data.password, 10)
        const user = await this.userModel.create({ ...data, password: hashedPassword })

        const { password, ...userWithoutPassword } = user
        console.log(userWithoutPassword)
        return userWithoutPassword
    }

    login = async (data: LoginInput) => {
        const user = await this.userModel.findByEmailOrPhone(data.identifier)
        if (!user){
            throw new ErrorHandler(400,'Invalid Email or Phone')
        }

        const isMatch = await bcrypt.compare(data.password, user.password)
        if (!isMatch) {
            throw new ErrorHandler(400,'Invalid password')
        }
                
        const { password, ...userWithoutPassword } = user
        const token = generateToken({ id: user.id, username: user.username, email: user.email, role:user.role})
        return { token,user: userWithoutPassword }
    }
}