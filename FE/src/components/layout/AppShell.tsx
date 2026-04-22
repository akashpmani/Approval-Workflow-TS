/**
 * AppShell.tsx — authenticated layout wrapper.
 *
 * Provides the Sidebar + Header + main content frame used by every
 * authenticated page (Dashboard, PurchaseOrders, etc.).
 *
 * Usage:
 *   <AppShell>
 *     <YourPageContent />
 *   </AppShell>
 */

import type { ReactNode } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

type AppShellProps = {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppShell
