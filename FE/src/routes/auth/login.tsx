import LoginPage from "@/pages/auth/LoginPage"
import { createFileRoute, redirect } from "@tanstack/react-router"
import { useAuthStore } from "@/store/authStore"
import { ROUTES } from "@/routes/-paths"

export const Route = createFileRoute("/auth/login")({
  beforeLoad: () => {
    if (useAuthStore.getState().isAuthenticated) {
      throw redirect({ to: ROUTES.root })
    }
  },
  component: LoginPage,
})
