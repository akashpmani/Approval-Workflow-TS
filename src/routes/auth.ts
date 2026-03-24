import { Router } from 'express'
import { AuthController } from '../controllers/auth'
import { validate } from '../middlewares/dataValidation'
import { signupSchema } from '../schemas/authSchema'

const router = Router()
const controller = new AuthController()

router.post('/register/', validate(signupSchema), controller.register)

export default router
