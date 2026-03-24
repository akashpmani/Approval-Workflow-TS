import express, { Request, Response } from 'express';
import authRouter from './routes/auth'
import testRouter from './routes/testJwt'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/auth', authRouter)  
app.use('/test/',testRouter)
export default app;