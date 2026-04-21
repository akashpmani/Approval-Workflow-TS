import { Router } from "express";
import { testJwtController } from "src/controllers/testJwt";
import { authMiddleware } from "src/middlewares/jwtAuth";


const router = Router()
const controller = new testJwtController

router.post('/allowany/', controller.testAllowany)
router.post('/authenticated/', authMiddleware, controller.testAuthenticated)
export default router
