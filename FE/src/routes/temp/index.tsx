import TempPage from '@/pages/temp/temp'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/temp/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TempPage/>
}
