
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { PlusIcon } from "lucide-react"
import { useState } from "react"
import { useGetTempInvoices } from "../hooks/useTempHooks"
import { Controller, useForm } from "react-hook-form"
import {type TempItems, TempItemSchema,STATUS_OPTIONS,METHOD_OPTIONS } from "../types/tempTypes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTempStore } from "@/store/tempStore"


export default function TempComponent() {
    const [open, setOpen] = useState(false)

    console.log(useGetTempInvoices())

    const itemData = useTempStore((s) => s.items)
    const items = itemData ?? []

    const { register, handleSubmit, control, reset } = useForm<TempItems>({
        resolver: zodResolver(TempItemSchema),
    })
    const addItem = useTempStore((s) => s.addItem)
    const onSubmit = handleSubmit((values) => {
        addItem(values)
        reset()
        setOpen(false)
    })

    return (
        <>
        <div className="mb-4 flex items-center justify-end">
            <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
                render={
                <Button type="button" variant="outline" size="sm">
                    <PlusIcon className="size-4" />
                    Add Item
                </Button>
                }
            />
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                <DialogTitle>Add Invoice</DialogTitle>
                </DialogHeader>

                <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="invoice-id">Invoice ID</Label>
                    <Input
                    id="invoice-id"
                    placeholder="INV008"
                    {...register("invoice")}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="invoice-amount">Amount</Label>
                    <Input
                    id="invoice-amount"
                    placeholder="$100.00"
                    {...register("totalAmount")}
                    />
                </div>

                <div className="grid gap-2">
                    <Label>Status</Label>
                    <Controller
                    control={control}
                    name="paymentStatus"
                    render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {STATUS_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                                {opt}
                            </SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    )}
                    />
                </div>

                <div className="grid gap-2">
                    <Label>Payment Method</Label>
                    <Controller
                    control={control}
                    name="paymentMethod"
                    render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {METHOD_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                                {opt}
                            </SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    )}
                    />
                </div>

                <DialogFooter>
                    <DialogClose
                    render={
                        <Button type="button" variant="outline">
                        Cancel
                        </Button>
                    }
                    />
                    <Button type="submit">Add</Button>
                </DialogFooter>
                </form>
            </DialogContent>
            </Dialog>
        </div>
        {/* {isLoading ? (
            <div className="text-muted-foreground p-8 text-center text-sm">
            Loading purchase orders…
            </div>
        ) : isError ? (
            <div className="text-destructive p-8 text-center text-sm">
            Failed to load purchase orders.
            </div>
        ) : ( */}

        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            {items.map((item) => (
                <TableRow key={item.invoice}>
                <TableCell className="font-medium">{item.invoice}</TableCell>
                <TableCell>{item.paymentStatus}</TableCell>
                <TableCell>{item.paymentMethod}</TableCell>
                <TableCell className="text-right">{item.totalAmount}</TableCell>
                </TableRow>
            ))}
            </TableBody>
            <TableFooter>
            <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
            </TableFooter>
        </Table>
        {/* )} */}
        </>
    )
}
