import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from 'src/utils/errorhandler';


const handleError = (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    console.log(err.statusCode)
    console.log(err.message)
    const statusCode = typeof err?.statusCode === 'number' ? err.statusCode : 500;
    const message = err?.message || 'Internal Server Error';
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
    });
};

export { handleError };