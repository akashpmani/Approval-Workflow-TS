import {
  PurchaseStatus,
  PaymentModes,
  Items,
  type PurchaseStatus as PurchaseStatusType,
  type PaymentMode,
  type Item,
} from "@approval/shared/constants/enums"

export type MockPOItem = {
  item: Item
  quantity: number
  rate: number
}

export type MockPurchaseOrder = {
  id: number
  po_number: string
  vendor: string
  vendor_address: string | null
  status: PurchaseStatusType
  payment_mode: PaymentMode
  payment_amount: number
  payment_reference: string
  requested_at: string
  requested_by_id: number
  requested_by_name: string
  approved_at: string | null
  approved_by_id: number | null
  approved_by_name: string | null
  created_at: string
  updated_at: string
  items: MockPOItem[]
}

export const mockPurchaseOrders: MockPurchaseOrder[] = [
  {
    id: 1,
    po_number: "PO-2026-0001",
    vendor: "ABC Supplies Inc",
    vendor_address: "123 Business St, City, State 12345",
    status: PurchaseStatus.REQUESTED,
    payment_mode: PaymentModes.CASH,
    payment_amount: 5000,
    payment_reference: "REF123456",
    requested_at: "2026-04-15T10:12:00Z",
    requested_by_id: 11,
    requested_by_name: "Alice Johnson",
    approved_at: null,
    approved_by_id: null,
    approved_by_name: null,
    created_at: "2026-04-15T10:12:00Z",
    updated_at: "2026-04-15T10:12:00Z",
    items: [
      { item: Items.KEYBOARD, quantity: 100, rate: 25 },
      { item: Items.MOUSE, quantity: 50, rate: 40 },
    ],
  },
  {
    id: 2,
    po_number: "PO-2026-0002",
    vendor: "TechGear Ltd.",
    vendor_address: "88 Industrial Ave, Techville",
    status: PurchaseStatus.REQUESTED,
    payment_mode: PaymentModes.CARD,
    payment_amount: 2599.8,
    payment_reference: "CARD-778812",
    requested_at: "2026-04-16T08:40:00Z",
    requested_by_id: 12,
    requested_by_name: "Bob Smith",
    approved_at: null,
    approved_by_id: null,
    approved_by_name: null,
    created_at: "2026-04-16T08:40:00Z",
    updated_at: "2026-04-16T08:40:00Z",
    items: [{ item: Items.LAPTOP, quantity: 2, rate: 1299.9 }],
  },
  {
    id: 3,
    po_number: "PO-2026-0003",
    vendor: "OfficeMart",
    vendor_address: "501 Market Rd, Commerce City",
    status: PurchaseStatus.APPROVED,
    payment_mode: PaymentModes.DIGITAL,
    payment_amount: 4800,
    payment_reference: "DG-0099-112",
    requested_at: "2026-04-10T14:00:00Z",
    requested_by_id: 13,
    requested_by_name: "Carol Davis",
    approved_at: "2026-04-11T09:30:00Z",
    approved_by_id: 2,
    approved_by_name: "Manager Mike",
    created_at: "2026-04-10T14:00:00Z",
    updated_at: "2026-04-11T09:30:00Z",
    items: [{ item: Items.MONITOR, quantity: 12, rate: 400 }],
  },
  {
    id: 4,
    po_number: "PO-2026-0004",
    vendor: "CloudStack Inc.",
    vendor_address: "1 Server Way, Datatown",
    status: PurchaseStatus.APPROVED,
    payment_mode: PaymentModes.DIGITAL,
    payment_amount: 12000,
    payment_reference: "DG-ANNUAL-24",
    requested_at: "2026-03-28T11:15:00Z",
    requested_by_id: 14,
    requested_by_name: "David Lee",
    approved_at: "2026-03-29T12:00:00Z",
    approved_by_id: 2,
    approved_by_name: "Manager Mike",
    created_at: "2026-03-28T11:15:00Z",
    updated_at: "2026-03-29T12:00:00Z",
    items: [{ item: Items.LAPTOP, quantity: 8, rate: 1500 }],
  },
  {
    id: 5,
    po_number: "PO-2026-0005",
    vendor: "PixelPerfect Studio",
    vendor_address: null,
    status: PurchaseStatus.REJECTED,
    payment_mode: PaymentModes.CARD,
    payment_amount: 4500,
    payment_reference: "CARD-REJ-0045",
    requested_at: "2026-04-02T09:00:00Z",
    requested_by_id: 15,
    requested_by_name: "Eva Martinez",
    approved_at: "2026-04-03T16:20:00Z",
    approved_by_id: 3,
    approved_by_name: "HR Helen",
    created_at: "2026-04-02T09:00:00Z",
    updated_at: "2026-04-03T16:20:00Z",
    items: [{ item: Items.MOUSE, quantity: 15, rate: 300 }],
  },
  {
    id: 6,
    po_number: "PO-2026-0006",
    vendor: "BrightPrint Co.",
    vendor_address: "42 Paper Ln, Printsburg",
    status: PurchaseStatus.REJECTED,
    payment_mode: PaymentModes.CASH,
    payment_amount: 850,
    payment_reference: "CASH-REJ-0006",
    requested_at: "2026-04-05T13:50:00Z",
    requested_by_id: 16,
    requested_by_name: "Frank Wilson",
    approved_at: "2026-04-06T10:10:00Z",
    approved_by_id: 2,
    approved_by_name: "Manager Mike",
    created_at: "2026-04-05T13:50:00Z",
    updated_at: "2026-04-06T10:10:00Z",
    items: [{ item: Items.KEYBOARD, quantity: 5, rate: 170 }],
  },
  {
    id: 7,
    po_number: "PO-2026-0007",
    vendor: "ABC Supplies Inc",
    vendor_address: "123 Business St, City, State 12345",
    status: PurchaseStatus.REQUESTED,
    payment_mode: PaymentModes.DIGITAL,
    payment_amount: 1499.7,
    payment_reference: "DG-20260418-1",
    requested_at: "2026-04-18T07:25:00Z",
    requested_by_id: 17,
    requested_by_name: "Grace Kim",
    approved_at: null,
    approved_by_id: null,
    approved_by_name: null,
    created_at: "2026-04-18T07:25:00Z",
    updated_at: "2026-04-18T07:25:00Z",
    items: [
      { item: Items.MOUSE, quantity: 30, rate: 40 },
      { item: Items.KEYBOARD, quantity: 10, rate: 30 },
    ],
  },
]
