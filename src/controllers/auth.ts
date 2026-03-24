import { Request, Response, NextFunction } from 'express'
import { AuthService } from '../services/auth'

export class AuthController {
    private authService = new AuthService()

    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.authService.register(req.body)
            res.status(201).json({ success: true, data: result })
        } catch (error) {
            next(error)
        }
    };
    login = async (req: Request, res: Response, next: NextFunction) =>{
        try {
            const result = await this.authService.login(req.body)
            res.status(200).json({ success: true, data: result })
        } catch (error) {
            next(error)
        }
    }
}