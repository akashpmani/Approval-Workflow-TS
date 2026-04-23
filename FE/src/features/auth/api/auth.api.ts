import { apiPost } from "@/lib/api-client"
import type {
  AuthUser,
  LoginInput,
  LoginResponse,
  SignupInput,
} from "@/features/auth/types"

export const authApi = {
  login: (payload: LoginInput) =>
    apiPost<LoginResponse>("api/auth/login/", payload),
  register: (payload: SignupInput) =>
    apiPost<AuthUser>("api/auth/register/", payload),
}
