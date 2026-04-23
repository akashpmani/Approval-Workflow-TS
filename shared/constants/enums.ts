export const UserRoles = {
  HR: "HR",
  MANAGER: "MANAGER",
  USER: "USER",
} as const
export type UserRole = (typeof UserRoles)[keyof typeof UserRoles]
export const USER_ROLE_VALUES = Object.values(UserRoles) as [UserRole, ...UserRole[]]

export const PurchaseStatus = {
  REQUESTED: "REQUESTED",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
} as const
export type PurchaseStatus = (typeof PurchaseStatus)[keyof typeof PurchaseStatus]
export const PURCHASE_STATUS_VALUES = Object.values(PurchaseStatus) as [
  PurchaseStatus,
  ...PurchaseStatus[],
]

export const PaymentModes = {
  CASH: "CASH",
  CARD: "CARD",
  DIGITAL: "DIGITAL",
} as const
export type PaymentMode = (typeof PaymentModes)[keyof typeof PaymentModes]
export const PAYMENT_MODE_VALUES = Object.values(PaymentModes) as [
  PaymentMode,
  ...PaymentMode[],
]

export const Items = {
  LAPTOP: "LAPTOP",
  KEYBOARD: "KEYBOARD",
  MOUSE: "MOUSE",
  MONITOR: "MONITOR",
} as const
export type Item = (typeof Items)[keyof typeof Items]
export const ITEM_VALUES = Object.values(Items) as [Item, ...Item[]]
