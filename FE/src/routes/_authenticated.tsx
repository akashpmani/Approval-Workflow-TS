import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"
import { useAuthStore } from "@/store/authStore"
import { ROUTES } from "@/routes/-paths"

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: () => {
    if (!useAuthStore.getState().isAuthenticated) {
      throw redirect({ to: ROUTES.login })
    }
  },
  component: () => <Outlet />,
})
