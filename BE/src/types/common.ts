import { TokenPayload } from "src/configs/jwt"


declare global {
    namespace Express {
        interface Request {
        user?: TokenPayload
        }
    }
}

export {}