import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { toast } from "sonner"
import { authApi } from "@/features/auth/api/auth.api"
import { useAuthStore } from "@/store/authStore"
import { ROUTES } from "@/routes/-paths"

export function useLogin() {
  const login = useAuthStore((s) => s.login)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      login(data.user, data.token)
      toast.success(`Welcome back, ${data.user.username}`)
      navigate({ to: ROUTES.root })
    },
    onError: (error) => {
      toast.error(error.message || "Login failed")
    },
  })
}

export function useLogout() {
  const logout = useAuthStore((s) => s.logout)
  const navigate = useNavigate()
  return () => {
    logout()
    navigate({ to: ROUTES.login })
  }
}

export function useRegister() {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: authApi.register,
    onSuccess: () => {
      toast.success("Account created. Please log in.")
      navigate({ to: ROUTES.login })
    },
    onError: (error) => {
      toast.error(error.message || "Registration failed")
    },
  })
}
