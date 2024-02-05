import { createSolidTable, getCoreRowModel } from "@tanstack/solid-table"
import DATA from "./data.mock.json"

export function useDataGridApi(props: any) {
	const table = createSolidTable({
		data: DATA,
		columns: [
			{
				accessorKey: "id",
				header: "ID",
				cell: (props: any) => <p>{props.getValue()}</p>,
			},

			{
				accessorKey: "lastName",
				header: "Last Name",
				cell: (props: any) => <p>{props.getValue()}</p>,
			},
			{
				accessorKey: "firstName",
				header: "First Name",
				cell: (props: any) => <p>{props.getValue()}</p>,
			},
			{
				accessorKey: "invoiceNumber",
				header: "Invoice Number",
				cell: (props: any) => <p>{props.getValue()}</p>,
			},
			{
				accessorKey: "status",
				header: "Status",
				cell: (props: any) => <p>{props.getValue()}</p>,
			},
			{
				accessorKey: "invoiceDate",
				header: "Invoice Date",
				cell: (props: any) => <p>{new Date(props.getValue()).toUTCString()}</p>,
			},
			{
				accessorKey: "invoiceAmount",
				header: "Invoice Amount",
				cell: (props: any) => <p>{props.getValue()}</p>,
			},
			{
				accessorKey: "invoicePaid",
				header: "Invoice Paid",
				cell: (props: any) => <p>{props.getValue()}</p>,
			},
			{
				accessorKey: "dateEmitted",
				header: "Date Emitted",
				cell: (props: any) => <p>{new Date(props.getValue()).toUTCString()}</p>,
			},
			{
				accessorKey: "datePaid",
				header: "Date Paid",
				cell: (props: any) => <p>{new Date(props.getValue()).toUTCString()}</p>,
			},
			{
				accessorKey: "paymentMethod",
				header: "Payment Method",
				cell: (props: any) => <p>{props.getValue()}</p>,
			},
			{
				accessorKey: "paymentDate",
				header: "Payment Date",
				cell: (props: any) => <p>{new Date(props.getValue()).toUTCString()}</p>,
			},
			{
				accessorKey: "paymentAmount",
				header: "Payment Amount",
				cell: (props: any) => <p>{props.getValue()}</p>,
			},
			{
				accessorKey: "paymentReference",
				header: "Payment Reference",
				cell: (props: any) => <p>{props.getValue()}</p>,
			},
			{
				accessorKey: "paymentNotes",
				header: "Payment Notes",
				cell: (props: any) => <p>{props.getValue()}</p>,
			},
		],
		getCoreRowModel: getCoreRowModel(),
	})

	return { table } as any
}

export default useDataGridApi
