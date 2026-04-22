import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { BellIcon, ReceiptIcon, UserCircleIcon } from "@phosphor-icons/react"

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-6 px-4 sm:px-6">
        <a
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
            <ReceiptIcon className="size-4" weight="bold" />
          </span>
          Approval Workflow
        </a>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/dashboard"
                className="px-3 py-1.5 text-sm"
              >
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm">
                Purchase Orders
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[260px] gap-1">
                  <li>
                    <NavigationMenuLink
                      href="/purchase-orders"
                      className="flex-col items-start gap-1 p-3"
                    >
                      <span className="text-sm font-medium text-foreground">
                        All Orders
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Browse every purchase order
                      </span>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/purchase-orders/new"
                      className="flex-col items-start gap-1 p-3"
                    >
                      <span className="text-sm font-medium text-foreground">
                        New Order
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Create a new purchase order
                      </span>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/purchase-orders?status=pending"
                      className="flex-col items-start gap-1 p-3"
                    >
                      <span className="text-sm font-medium text-foreground">
                        Pending Approval
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Orders awaiting your action
                      </span>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/settings"
                className="px-3 py-1.5 text-sm"
              >
                Settings
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            aria-label="Notifications"
            className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <BellIcon className="size-4" />
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <UserCircleIcon className="size-5" />
            <span className="hidden sm:inline">Account</span>
          </button>
        </div>
      </div>
    </header>
  )
}
