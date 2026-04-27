import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { useTempStore } from "@/store/tempStore"



export function useGetTempInvoices() {
  return useQuery({
    queryKey: ["tempInvoices"],
    queryFn: () => useTempStore.getState().items,
  })
}

export function useCreateTempInvoice() {
const qc = useQueryClient()
  return useMutation({
    onSuccess: () => {
        qc.invalidateQueries({ queryKey: ["tempInvoices"] })
      toast.success("item added created successfully.")
      return true
    },
  })
}