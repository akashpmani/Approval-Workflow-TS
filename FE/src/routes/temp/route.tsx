import { createFileRoute,Outlet } from '@tanstack/react-router'
import { ROUTES } from '../-paths';

export const Route = createFileRoute('/temp')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>
        layout for temp routes, in route.tsx we can add all the common
        layouts and features for all of the /temp ROUTES.
        route is a reserved word
      </div>
      <Outlet />
    </>
  )
}
