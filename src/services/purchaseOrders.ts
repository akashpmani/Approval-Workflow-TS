import { z } from 'zod'
import { poSchema,poApproveOrRejectSchema } from 'src/schemas/poSchema';
import { PoModel } from 'src/models/purchaseOrders';
import { TokenPayload } from "src/configs/jwt"

type PoSchema = z.infer<typeof poSchema>
type PoApproveOrRejectSchema = z.infer<typeof poApproveOrRejectSchema>

export class PoService {
    private poModel = new PoModel()
    
    request = async (data: PoSchema,user: TokenPayload | undefined) => {
        return {}
        
    };

    approve = async (data: PoApproveOrRejectSchema) => {
        return {}
    };

    reject = async (data: PoApproveOrRejectSchema) => {
        return {}
    };

    get = async (data: Object) => {
        return {}
    }
}