import { Router } from 'express'
import { AuthController } from '../controllers/auth'
import { validate } from '../middlewares/dataValidation'
import { signupSchema,loginSchema } from '../schemas/authSchema'

const router = Router()
const controller = new AuthController()

router.post('/register/', validate(signupSchema), controller.register)
router.post('/login/', validate(loginSchema), controller.login)

export default router
