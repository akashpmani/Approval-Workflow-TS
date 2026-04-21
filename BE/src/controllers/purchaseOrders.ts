import { Request, Response, NextFunction } from 'express'
import { PoService } from 'src/services/purchaseOrders';

export class PoController {
    private poService = new PoService()

    request = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.poService.request(req)
            res.status(201).json({ success: true, data: result })
        } catch (error) {
            next(error)
        }
    };

    approve = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.poService.approve(req,)
            res.status(200).json({ success: true, data: result })
        } catch (error) {
            next(error)
        }
    };

    reject = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.poService.reject(req)
            res.status(200).json({ success: true, data: result })
        } catch (error) {
            next(error)
        }
    };

    get = async (req: Request, res: Response, next: NextFunction) =>{
        try {
            const result = await this.poService.get(req)
            res.status(200).json({ success: true, data: result })
        } catch (error) {
            next(error)
        }
    }
}