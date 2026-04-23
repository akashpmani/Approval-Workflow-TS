import express, { Request, Response } from 'express';
import cors from 'cors'
import authRouter from './routes/auth'
import testRouter from './routes/testJwt'
import poRouter from './routes/purchaseOrders'
import { handleError } from './middlewares/errorHandling';

const app = express();
app.use(
    cors({
        origin: process.env.CORS_ORIGIN?.split(',') ?? 'http://localhost:5173',
        credentials: true,
    }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/auth', authRouter)  
app.use('/test',testRouter)
app.use('/purchaseorder',poRouter)

app.use(handleError)
export default app;