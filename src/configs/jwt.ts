import jwt, { JwtPayload } from "jsonwebtoken"

const ACCESS_SECRET = process.env.JWT_SECRET
if (!ACCESS_SECRET) throw new Error('JWT_SECRET is not defined in .env')

const EXPIRES_IN = process.env.JWT_EXPIRES_IN || '15m'

export type TokenPayload = {
    id: number
    username: string
    email: string
}

export const generateToken = (payload: TokenPayload): string => {
    return jwt.sign(payload, ACCESS_SECRET, { expiresIn: '15m' })
}

export const verifyToken = (token: string): TokenPayload => {
    const decoded = jwt.verify(token, ACCESS_SECRET)

    // if (typeof decoded === 'string') {
    //     throw new Error('Invalid token')
    // }

    return decoded as TokenPayload
}