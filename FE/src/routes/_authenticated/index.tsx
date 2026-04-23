import { createFileRoute } from "@tanstack/react-router"
import DashBoardPage from "@/pages/dashBoard/dashBoardPage"

export const Route = createFileRoute("/_authenticated/")({
  component: DashBoardPage,
})
