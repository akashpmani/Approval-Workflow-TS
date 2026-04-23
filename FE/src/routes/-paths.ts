export const ROUTES = {
  root: "/",
  login: "/auth/login",
  signup: "/auth/signup",
  purchaseOrders: "/purchase-order",
  purchaseOrderDetail: (id: number | string) => `/purchase-order/${id}`,
} as const
