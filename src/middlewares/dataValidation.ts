// middlewares/validate.middleware.ts
import { ZodSchema } from 'zod'
import { Request, Response, NextFunction } from 'express'

export const validate = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const parsed = schema.safeParse(req.body)
        if (!parsed.success) {
            res.status(400).json({ 
                success: false, 
                errors: parsed.error.flatten().fieldErrors 
            })
            return
        }
        req.body = parsed.data
        next()
    }
}