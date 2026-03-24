import { Router } from 'express'
import { validate } from '../middlewares/dataValidation'
import { PoController } from 'src/controllers/purchaseOrders'
import { poSchema,poApproveOrRejectSchema } from 'src/schemas/poSchema'
import { authMiddleware } from 'src/middlewares/jwtAuth'

const router = Router()
const controller = new PoController()

router.post('/manage/request/', authMiddleware, validate(poSchema), controller.request)
router.post('/manage/approve/', authMiddleware, validate(poApproveOrRejectSchema), controller.approve)
router.post('/manage/reject/', authMiddleware, validate(poApproveOrRejectSchema), controller.reject)
router.get('', controller.get)

export default router