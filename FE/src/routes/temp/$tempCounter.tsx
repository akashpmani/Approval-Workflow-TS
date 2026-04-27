import TempCounter from '@/pages/temp/tempCounter'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/temp/$tempCounter')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TempCounter/>
}
