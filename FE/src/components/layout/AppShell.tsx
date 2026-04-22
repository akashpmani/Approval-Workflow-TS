/**
 * AppShell.tsx — authenticated layout wrapper.
 *
 * Purpose:
 *   Provides the Sidebar + Header + main content frame used by every
 *   authenticated page (Dashboard, PurchaseOrders, etc.).
 *
 * Usage (inside a page):
 *   <AppShell>
 *     <YourPageContent />
 *   </AppShell>
 *
 * For unauthenticated screens (login, signup), render the page content
 * directly without AppShell.
 */
