import type { TempItems } from "@/features/temp/types/tempTypes"
import { create } from "zustand"
import { persist } from 'zustand/middleware';

type TempState = {
  items: TempItems[]
  addItem: (item: TempItems) => void
}

const initialItems: TempItems[] = [
  { invoice: "INV001", paymentStatus: "Paid",    totalAmount: "$250.00", paymentMethod: "Credit Card" },
  { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  { invoice: "INV003", paymentStatus: "Unpaid",  totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV004", paymentStatus: "Paid",    totalAmount: "$450.00", paymentMethod: "Credit Card" },
  { invoice: "INV005", paymentStatus: "Paid",    totalAmount: "$550.00", paymentMethod: "PayPal" },
  { invoice: "INV006", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV007", paymentStatus: "Unpaid",  totalAmount: "$300.00", paymentMethod: "Credit Card" },
]

export const useTempStore = create<TempState>()(
  persist( (set) => ({
    items: initialItems,
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    }), 
    { name: 'temp' })   
)