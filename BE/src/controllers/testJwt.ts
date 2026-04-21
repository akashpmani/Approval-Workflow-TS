import { Request, Response } from 'express'

export class testJwtController {

    testAuthenticated = async (req: Request, res: Response) => {
        console.log(req.user)
        res.status(201).json({ success: true, data: {"sucess" : " True ",user:req.user} })
    };
    testAllowany = async (req: Request, res: Response) => {
        res.status(201).json({ success: true, data: {"sucess" : " True "} })
    };
}