export const STORAGE_KEYS = {
  AUTH: "auth",
} as const

export const QUERY_KEYS = {
  currentUser: ["currentUser"] as const,
  purchaseOrders: {
    all: ["purchaseOrders"] as const,
    list: (filters?: Record<string, unknown>) =>
      ["purchaseOrders", "list", filters ?? {}] as const,
    detail: (id: number) => ["purchaseOrders", "detail", id] as const,
  },
  dashboard: {
    summary: ["dashboard", "summary"] as const,
  },
} as const

export const DEFAULT_PAGE_SIZE = 20
