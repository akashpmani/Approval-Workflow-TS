import { Request, Response, NextFunction } from 'express'
import { verifyToken } from 'src/configs/jwt'
import { UserModel } from '../models/user'


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ success: false, message: 'No token provided' })
        return
        }

        const token = authHeader.split(' ')[1]
        req.user = verifyToken(token)
        next()
    } catch (error) {
        res.status(401).json({ success: false, message: 'Invalid or expired token' })
    }
}