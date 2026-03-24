import { Request, Response } from 'express'
import { AuthService } from '../services/auth'

export class AuthController {
    private authService = new AuthService()

    register = async (req: Request, res: Response) => {
        try {
            const result = await this.authService.register(req.body)
            res.status(201).json({ success: true, data: result })
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ success: false, message: error.message })
            } else {
                res.status(500).json({ success: false, message: 'Something went wrong' })
            }
        }
    };
    login = async (req: Request, res: Response) =>{
        try {
            const result = await this.authService.login(req.body)
            res.status(200).json({ success: true, data: result })
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ success: false, message: error.message })
            } else {
                res.status(500).json({ success: false, message: 'Something went wrong' })
            }
        }
    }
}